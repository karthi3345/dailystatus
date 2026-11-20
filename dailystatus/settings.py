import os
from pathlib import Path
from dotenv import load_dotenv
import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent

# Load environment variables from .env file
load_dotenv(BASE_DIR / '.env')

SECRET_KEY = os.getenv('SECRET_KEY', 'django-insecure-kathir-studios-dailystatus-secret-key-3345')

DEBUG = os.getenv('DEBUG', 'True') == 'True'

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'daphne',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'channels',
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'api',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'dailystatus.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dailystatus.wsgi.application'
ASGI_APPLICATION = 'dailystatus.asgi.application'

# Django Channels & Redis Channel Layer
REDIS_URL = os.getenv('REDIS_URL') or os.getenv('REDISCLOUD_URL') or os.getenv('REDIS_TLS_URL')
if REDIS_URL:
    CHANNEL_LAYERS = {
        'default': {
            'BACKEND': 'channels_redis.core.RedisChannelLayer',
            'CONFIG': {
                'hosts': [REDIS_URL],
            },
        },
    }
else:
    CHANNEL_LAYERS = {
        'default': {
            'BACKEND': 'channels.layers.InMemoryChannelLayer',
        },
    }

# Database Configuration: Neon PostgreSQL databases with automatic failover
IS_VERCEL = bool(os.getenv('VERCEL') or os.getenv('VERCEL_ENV'))

# Neon Database URLs: Primary and Backup / Overflow
NEON_PRIMARY_DB_URL = "postgresql://neondb_owner:npg_irp5gCjXRP2S@ep-small-sky-betsxfzh-pooler.c-9.us-east-2.aws.neon.tech/neondb?sslmode=require"
NEON_BACKUP_DB_URL = "postgresql://neondb_owner:npg_o2jdx3LXGtyC@ep-lucky-paper-bdf9lwbr-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

def resolve_working_db_url():
    """
    Selects a functional PostgreSQL database among configured candidate URLs.
    If the primary database is filled/quota-exceeded, it seamlessly fails over
    to the secondary Neon database.
    """
    env_url = (
        os.getenv('VERCEL_DATABASE_URL') or
        os.getenv('POSTGRES_URL') or
        os.getenv('POSTGRES_PRISMA_URL') or
        os.getenv('LOCAL_DATABASE_URL') or
        os.getenv('DATABASE_URL')
    )

    candidates = [env_url, NEON_BACKUP_DB_URL, NEON_PRIMARY_DB_URL]
    seen = set()

    for url in candidates:
        if not url or url in seen:
            continue
        seen.add(url)
        if url.startswith('sqlite'):
            return url
        try:
            import psycopg2
            c = psycopg2.connect(url, connect_timeout=2)
            c.close()
            return url
        except Exception as e:
            err = str(e)
            if 'quota' in err.lower() or 'exceeded' in err.lower():
                print(f"[DB FAILOVER] Database quota exceeded for {url[:45]}... Failing over to next database.")
            else:
                print(f"[DB FAILOVER] Connection failed for {url[:45]}... ({err[:60]}). Failing over.")
            continue
    return None

ACTIVE_DATABASE_URL = resolve_working_db_url()

if ACTIVE_DATABASE_URL and not ACTIVE_DATABASE_URL.startswith('sqlite'):
    DATABASES = {
        'default': dj_database_url.config(
            default=ACTIVE_DATABASE_URL,
            conn_max_age=0,
            conn_health_checks=False,
            ssl_require=True if any(h in ACTIVE_DATABASE_URL for h in ['neon', 'aws', 'pooler', 'supabase']) else False
        )
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [BASE_DIR]

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CORS configuration
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True

# CSRF Trusted Origins for Vercel deployment and local dev
CSRF_TRUSTED_ORIGINS = [
    'https://*.vercel.app',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
]

# Django REST Framework configuration
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
}
