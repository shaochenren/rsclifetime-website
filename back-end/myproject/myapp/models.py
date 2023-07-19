from django.db import models

# Create your models here.
class Image(models.Model):
    url = models.CharField(max_length=500)
    description = models.CharField(max_length=255, blank=True)
    posted_at = models.DateField(auto_now_add=True)  # Added this line

class Comment(models.Model):
    image = models.ForeignKey(Image, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    text = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
