from rest_framework import routers
from authapp.viewsets.register import RegisterViewSet
from authapp.viewsets.login import LoginViewSet
from authapp.viewsets.refresh import RefreshViewSet

router = routers.SimpleRouter()

router.register(r'register', RegisterViewSet, basename='auth-register')
router.register(r'login', LoginViewSet, basename='auth-login')
router.register(r'refresh', RefreshViewSet, basename='auth-refresh')

urlpatterns = [
    *router.urls,
]
