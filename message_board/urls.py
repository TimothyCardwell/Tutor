__author__ = 'TimCardwell'
from django.conf.urls import patterns, include, url
from message_board import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register')
]