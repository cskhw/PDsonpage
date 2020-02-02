from django.db import models


class Board(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=40)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=16)
    admin = models.CharField(max_length=16)

    def __str(self):
        return self.title

class Topic(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=40)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=16)
    admin = models.CharField(max_length=16)

    def __str(self):
        return self.title
