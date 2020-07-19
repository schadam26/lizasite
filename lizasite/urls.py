from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('articles/', views.post_list, name='post_list'),
    path('about/', views.about_page, name='about_page'),
    path('design/', views.design_page, name='design_page'),
]
