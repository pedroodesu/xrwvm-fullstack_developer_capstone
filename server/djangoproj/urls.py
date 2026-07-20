from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from djangoapp.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('djangoapp/', include('djangoapp.urls')),
    path('', index, name='index'),
    path('about', index, name='about'),
    path('contact', index, name='contact'),
    path('login', index, name='login'),
    path('register', index, name='register'),
    path('dealer/<int:dealer_id>', index, name='dealer_details_page'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)