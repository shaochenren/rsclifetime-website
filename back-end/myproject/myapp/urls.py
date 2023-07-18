from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'comments', views.CommentViewSet, basename='comments')
#router.register(r'images', views.ImageViewSet, basename='images')  # Comment or remove this line

urlpatterns = [
    path('image_upload/', views.image_upload, name='image_upload'),
    path('images/', views.images, name='images'),  # Add this line
    path('', include(router.urls)),  
]
