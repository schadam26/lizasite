from django.conf import settings
from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=300)
    link = models.CharField(max_length=500)
    outlet = models.CharField(max_length=200)
    published_date = models.DateTimeField(blank=True, null=True)
    order_num = models.IntegerField(unique=True,blank=False,null=True,verbose_name='Priority') 

    def publish(self):
        self.save()

    def __str__(self):
        return self.title
