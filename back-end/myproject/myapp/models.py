from django.db import models

# Create your models here.
class Image(models.Model):
    url = models.CharField(max_length=200)
    description = models.CharField(max_length=200)