from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.static import serve
from django.views.decorators.cache import never_cache
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', never_cache(TemplateView.as_view(template_name='index.html')), name='home'),
    path('styles.css', never_cache(serve), {'document_root': settings.BASE_DIR, 'path': 'styles.css'}),
    path('app.js', never_cache(serve), {'document_root': settings.BASE_DIR, 'path': 'app.js'}),
]
