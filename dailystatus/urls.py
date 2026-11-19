from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('styles.css', serve, {'document_root': settings.BASE_DIR, 'path': 'styles.css'}),
    path('app.js', serve, {'document_root': settings.BASE_DIR, 'path': 'app.js'}),
]
