from django.shortcuts import render
from .models import *


# Create your views here.

def store(request):
    products = Product.objects.all()
    context = {'products' : products}
    return render(request, 'app/Store.html', context)