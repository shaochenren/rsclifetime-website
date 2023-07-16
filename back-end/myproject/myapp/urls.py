from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views  # import views from current directory

router = DefaultRouter()
router.register(r'comments', views.CommentViewSet, basename='comments')
router.register(r'images', views.ImageViewSet, basename='images')  # registering ImageViewSet

urlpatterns = [
    path('image_upload/', views.image_upload, name='image_upload'),  # adding this line
    path('images/', include(router.urls)),
    path('comments/', include(router.urls)),
]
