from rest_framework import routers
from userapp.viewsets import UserViewSet

router = routers.SimpleRouter()

router.register(r'', UserViewSet, basename='user')

urlpatterns = [
    *router.urls,
]