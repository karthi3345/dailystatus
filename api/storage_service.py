import os
import json
import uuid
import mimetypes
from pathlib import Path
from django.conf import settings

BASE_DIR = Path(__file__).resolve().parent.parent

def format_file_size(num_bytes):
    if not num_bytes:
        return '0 KB'
    if num_bytes >= 1048576:
        return f"{num_bytes / 1048576:.1f} MB"
    return f"{max(1, round(num_bytes / 1024))} KB"

def upload_to_google_drive(uploaded_file, creds_json_or_path, folder_id=None):
    """
    Uploads a file stream directly to a Google Drive folder using a Service Account.
    Sets 'anyone with the link can view' permission and returns the direct CDN/view URL.
    """
    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
        from googleapiclient.http import MediaIoBaseUpload

        SCOPES = ['https://www.googleapis.com/auth/drive']

        # Determine credentials from raw JSON string, base64, or file path
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

        content_type = getattr(uploaded_file, 'content_type', None) or mimetypes.guess_type(uploaded_file.name)[0] or 'application/octet-stream'
        media = MediaIoBaseUpload(uploaded_file, mimetype=content_type, resumable=True)

        gfile = drive_service.files().create(
            body=file_metadata,
            media_body=media,
            fields='id, name, webViewLink, webContentLink'
        ).execute()

        file_id = gfile.get('id')

        # Make file publicly readable
        try:
            drive_service.permissions().create(
                fileId=file_id,
                body={'type': 'anyone', 'role': 'reader'},
                fields='id'
            ).execute()
        except Exception:
            pass

        # Google direct preview URL (works seamlessly for <img>, <audio>, and documents)
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

def upload_to_local_media(uploaded_file):
    """
    Fallback: saves the uploaded file locally in MEDIA_ROOT/chat_uploads.
    Prevents large base64 data from ever being stored directly in the database.
    """
    media_dir = BASE_DIR / 'media' / 'chat_uploads'
    media_dir.mkdir(parents=True, exist_ok=True)

    safe_prefix = uuid.uuid4().hex[:12]
    clean_name = uploaded_file.name.replace(' ', '_').replace('/', '_')
    filename = f"{safe_prefix}_{clean_name}"
    file_path = media_dir / filename

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

def handle_chat_media_upload(uploaded_file):
    """
    Unified media upload handler.
    1. If GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON or GOOGLE_DRIVE_CREDENTIALS_FILE is present:
       uploads to Google Drive and returns shareable URL.
    2. Otherwise, saves to media storage (zero database bloat, no base64).
    """
    gdrive_creds = (
        os.getenv('GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON') or
        os.getenv('GOOGLE_DRIVE_CREDENTIALS_FILE')
    )
    folder_id = os.getenv('GOOGLE_DRIVE_FOLDER_ID')

    if gdrive_creds:
        result = upload_to_google_drive(uploaded_file, gdrive_creds, folder_id)
        if result and result.get('success'):
            return result

    return upload_to_local_media(uploaded_file)
