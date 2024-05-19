"""
URL configuration for Backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Backend.views import games, game, login, register, child_comments, error_url, confirm_exist_user, confirm_code, change_password, search

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', login, name='login'),
    path('api/v1/games/', search, name='search'),
    path('api/v1/games/<page>/', games, name='games'), #posiblemente ya no sirva
    path('api/v1/game/', error_url, name='error'),
    path('api/v1/game/<id>/', game, name='game'),
    path('search/', search, name='search'), #posiblemente ya no sirva
    path('register/', register, name='register'),
    path('confirm_user/', confirm_exist_user, name='confirm_exist_user'),
    path('confirm_code/', confirm_code, name='confirm_code'),
    path('change_password/', change_password, name='change_password'),
    path('comment/<id_game>/<id_comment>/', child_comments, name='child_comments'),
    path('comment/<id_game>/<id_comment>/<offset>/', child_comments, name='child_comments_offset',), #cargar mas comentarios
]
