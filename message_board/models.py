from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class User(models.Model):
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=50)
    emailAddress = models.EmailField()
    username = models.CharField(max_length=25)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.firstName + " " + self.lastName