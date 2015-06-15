from django.shortcuts import render
from django.http import HttpResponse
import json
from django.core import serializers
from message_board.models import *
import logging

logger = logging.getLogger('tutor')


def index(request):
    return render(request, 'index.html')


def register(request):
    first_name = request.POST['firstName']
    last_name = request.POST['lastName']
    email_address = request.POST['emailAddress']
    username = request.POST['username']
    password = request.POST['password']
    user = User(firstName=first_name,
                lastName=last_name,
                emailAddress=email_address,
                username=username,
                password=password)

    user.save()

    request.session['user'] = user

    response = serializers.serialize('json', [user])
    return HttpResponse(response, content_type='application/json')

def login(request):
    username = request.GET['username']
    password = request.GET['password']
    return HttpResponse("")


def logout(request):
    del request.session.user
    return HttpResponse("")