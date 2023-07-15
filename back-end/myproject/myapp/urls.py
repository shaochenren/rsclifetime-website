from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views  # import views from current directory


router = DefaultRouter()
router.register(r'comments', views.CommentViewSet, basename='comments')


urlpatterns = [
    path('images/', views.images, name='images'),
    path('comments/', include(router.urls)),
]
