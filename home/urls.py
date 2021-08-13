from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('experiencia/', views.experiencia),
    path('certificados/', views.certificados), 
    path('projetos/', views.projetos),             
]
