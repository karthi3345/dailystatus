from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.static import serve
from django.views.decorators.cache import never_cache, cache_control
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', never_cache(TemplateView.as_view(template_name='index.html')), name='home'),
    path('styles.css', cache_control(public=True, max_age=86400)(serve), {'document_root': settings.BASE_DIR, 'path': 'styles.css'}),
    path('app.js', cache_control(public=True, max_age=86400)(serve), {'document_root': settings.BASE_DIR, 'path': 'app.js'}),
    path('volgo-logo.png', cache_control(public=True, max_age=86400)(serve), {'document_root': settings.BASE_DIR, 'path': 'volgo-logo.png'}),
    path('volgo-icon.png', cache_control(public=True, max_age=86400)(serve), {'document_root': settings.BASE_DIR, 'path': 'volgo-icon.png'}),
    path('favicon.ico', cache_control(public=True, max_age=86400)(serve), {'document_root': settings.BASE_DIR, 'path': 'favicon.ico'}),
    path('media/<path:path>', serve, {'document_root': settings.BASE_DIR / 'media'}),
]
