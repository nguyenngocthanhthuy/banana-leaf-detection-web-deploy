from django.urls import path, include
from . import views
app_name = 'detectapp'
urlpatterns = [
    path('', views.detect, name='detect'),
]
