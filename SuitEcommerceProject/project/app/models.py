from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=20)
    price = models.FloatField()
    image = models.ImageField(null=True, blank=True)
    discounted = models.FloatField(default='1')

    def __str__(self) :
        return self.name