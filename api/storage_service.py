import os
import time
import json
import uuid
import hashlib
import mimetypes
import requests
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

def format_file_size(num_bytes):
    if not num_bytes:
        return '0 KB'
    if num_bytes >= 1048576:
        return f"{num_bytes / 1048576:.1f} MB"
    return f"{max(1, round(num_bytes / 1024))} KB"

# ----------------- 1. SUPABASE STORAGE -----------------
def upload_to_supabase(uploaded_file, bucket='attachments'):
    """
    Uploads a file to Supabase Storage and returns its public URL.
    Ideal for private documents, project attachments, and reliable CDN storage.
    """
    supabase_url = (os.getenv('SUPABASE_URL') or '').rstrip('/')
    secret_key = os.getenv('SUPABASE_SECRET_KEY') or os.getenv('SUPABASE_SERVICE_ROLE_KEY')

    if not supabase_url or not secret_key:
        return None

    safe_prefix = uuid.uuid4().hex[:10]
    safe_name = uploaded_file.name.replace(' ', '_').replace('/', '_')
    storage_path = f"{safe_prefix}_{safe_name}"

    content_type = getattr(uploaded_file, 'content_type', None) or mimetypes.guess_type(uploaded_file.name)[0] or 'application/octet-stream'

    headers = {
        'apikey': secret_key,
        'Authorization': f'Bearer {secret_key}',
        'Content-Type': content_type
    }

    try:
        # Seek to beginning if needed
        if hasattr(uploaded_file, 'seek'):
            uploaded_file.seek(0)
        file_bytes = uploaded_file.read() if hasattr(uploaded_file, 'read') else bytes(uploaded_file)

        upload_url = f"{supabase_url}/storage/v1/object/{bucket}/{storage_path}"
        r = requests.post(upload_url, headers=headers, data=file_bytes, timeout=15)

        if r.status_code in [200, 201]:
            public_url = f"{supabase_url}/storage/v1/object/public/{bucket}/{storage_path}"
            return {
                'success': True,
                'storage': 'supabase',
                'bucket': bucket,
                'file_id': storage_path,
                'url': public_url,
                'web_link': public_url,
                'name': uploaded_file.name,
                'size': format_file_size(len(file_bytes)),
                'type': content_type
            }
        else:
            print(f"[SUPABASE UPLOAD FAILED] {r.status_code}: {r.text}")
    except Exception as e:
        print(f"[SUPABASE UPLOAD ERROR] {e}")

    return None

# ----------------- 2. CLOUDINARY STORAGE -----------------
def upload_to_cloudinary(uploaded_file):
    """
    Uploads images, profile pictures, voice/audio notes, and videos to Cloudinary.
    """
    cloud_name = os.getenv('CLOUDINARY_CLOUD_NAME')
    api_key = os.getenv('CLOUDINARY_API_KEY')
    api_secret = os.getenv('CLOUDINARY_API_SECRET')

    if not cloud_name:
        return None

    # If numeric API Key is available, do a signed upload
    if api_key and api_secret:
        try:
            timestamp = int(time.time())
            params_to_sign = f"timestamp={timestamp}{api_secret}"
            signature = hashlib.sha1(params_to_sign.encode('utf-8')).hexdigest()

            if hasattr(uploaded_file, 'seek'):
                uploaded_file.seek(0)

            data = {
                'timestamp': timestamp,
                'api_key': api_key,
                'signature': signature
            }
            files = {'file': (uploaded_file.name, uploaded_file, uploaded_file.content_type)}
            r = requests.post(f"https://api.cloudinary.com/v1_1/{cloud_name}/auto/upload", data=data, files=files, timeout=20)

            if r.status_code in [200, 201]:
                res = r.json()
                return {
                    'success': True,
                    'storage': 'cloudinary',
                    'file_id': res.get('public_id'),
                    'url': res.get('secure_url') or res.get('url'),
                    'web_link': res.get('secure_url') or res.get('url'),
                    'name': uploaded_file.name,
                    'size': format_file_size(res.get('bytes') or uploaded_file.size),
                    'type': uploaded_file.content_type
                }
            else:
                print(f"[CLOUDINARY SIGNED FAILED] {r.status_code}: {r.text}")
        except Exception as e:
            print(f"[CLOUDINARY SIGNED ERROR] {e}")

    return None

# ----------------- 3. GOOGLE DRIVE STORAGE -----------------
def upload_to_google_drive(uploaded_file, folder_id=None):
    """
    Uploads PDFs, Excel, Word, and ZIP archives directly to Google Drive.
    """
    creds_json_or_path = (
        os.getenv('GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON') or
        os.getenv('GOOGLE_DRIVE_CREDENTIALS_FILE')
    )
    folder_id = folder_id or os.getenv('GOOGLE_DRIVE_FOLDER_ID')

    if not creds_json_or_path:
        return None

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
        from googleapiclient.http import MediaIoBaseUpload

        SCOPES = ['https://www.googleapis.com/auth/drive']
        creds_data = creds_json_or_path.strip()

        if os.path.exists(creds_data):
            creds = service_account.Credentials.from_service_account_file(creds_data, scopes=SCOPES)
        else:
            info = json.loads(creds_data)
            creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)

        drive_service = build('drive', 'v3', credentials=creds, cache_discovery=False)

        file_metadata = {'name': uploaded_file.name}
        if folder_id:
            file_metadata['parents'] = [folder_id.strip()]

        if hasattr(uploaded_file, 'seek'):
            uploaded_file.seek(0)

        content_type = getattr(uploaded_file, 'content_type', None) or mimetypes.guess_type(uploaded_file.name)[0] or 'application/octet-stream'
        media = MediaIoBaseUpload(uploaded_file, mimetype=content_type, resumable=True)

        gfile = drive_service.files().create(
            body=file_metadata,
            media_body=media,
            fields='id, name, webViewLink, webContentLink'
        ).execute()

        file_id = gfile.get('id')

        try:
            drive_service.permissions().create(
                fileId=file_id,
                body={'type': 'anyone', 'role': 'reader'},
                fields='id'
            ).execute()
        except Exception:
            pass

        direct_url = f"https://drive.google.com/uc?export=download&id={file_id}"
        web_link = gfile.get('webViewLink') or direct_url

        return {
            'success': True,
            'storage': 'google_drive',
            'file_id': file_id,
            'url': direct_url,
            'web_link': web_link,
            'name': uploaded_file.name,
            'size': format_file_size(uploaded_file.size),
            'type': content_type
        }
    except Exception as e:
        print(f"[GOOGLE DRIVE UPLOAD ERROR] {e}")
        return None

# ----------------- 4. LOCAL FALLBACK -----------------
def upload_to_local_media(uploaded_file):
    media_dir = BASE_DIR / 'media' / 'chat_uploads'
    media_dir.mkdir(parents=True, exist_ok=True)

    safe_prefix = uuid.uuid4().hex[:12]
    clean_name = uploaded_file.name.replace(' ', '_').replace('/', '_')
    filename = f"{safe_prefix}_{clean_name}"
    file_path = media_dir / filename

    if hasattr(uploaded_file, 'seek'):
        uploaded_file.seek(0)

    with open(file_path, 'wb+') as dest:
        for chunk in uploaded_file.chunks():
            dest.write(chunk)

    content_type = getattr(uploaded_file, 'content_type', None) or mimetypes.guess_type(uploaded_file.name)[0] or 'application/octet-stream'
    file_url = f"/media/chat_uploads/{filename}"

    return {
        'success': True,
        'storage': 'local_media',
        'file_id': safe_prefix,
        'url': file_url,
        'web_link': file_url,
        'name': uploaded_file.name,
        'size': format_file_size(uploaded_file.size),
        'type': content_type
    }

# ----------------- MULTI-STORAGE INTELLIGENT ROUTER -----------------
def handle_chat_media_upload(uploaded_file, category=None):
    """
    Intelligently routes files based on type:
    - Cloudinary: Images, profile pictures, videos, audio/voice notes.
    - Google Drive: PDF, Excel, Word, ZIP.
    - Supabase: Private documents, project attachments, and cloud storage fallback.
    - Local media: Offline development fallback.
    """
    name = (uploaded_file.name or '').lower()
    c_type = (getattr(uploaded_file, 'content_type', None) or mimetypes.guess_type(name)[0] or '').lower()

    is_image = c_type.startswith('image/') or any(name.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'])
    is_video_audio = c_type.startswith('video/') or c_type.startswith('audio/') or any(name.endswith(ext) for ext in ['.mp4', '.mov', '.webm', '.ogg', '.mp3', '.wav'])
    is_doc = any(name.endswith(ext) for ext in ['.pdf', '.xlsx', '.xls', '.docx', '.doc', '.zip', '.rar', '.csv', '.pptx', '.ppt', '.tar', '.gz'])

    # 1. Images, profile pictures, videos -> Try Cloudinary first
    if is_image or is_video_audio or category == 'media':
        res = upload_to_cloudinary(uploaded_file)
        if res and res.get('success'):
            return res

    # 2. PDF, Excel, Word, ZIP -> Try Google Drive first
    if is_doc or category == 'drive':
        res = upload_to_google_drive(uploaded_file)
        if res and res.get('success'):
            return res

    # 3. Supabase Storage: Handles documents, attachments, and fallback for media/docs
    bucket = 'private-documents' if category == 'private' else 'attachments'
    res = upload_to_supabase(uploaded_file, bucket=bucket)
    if res and res.get('success'):
        return res

    # 4. Fallback to local storage
    return upload_to_local_media(uploaded_file)
