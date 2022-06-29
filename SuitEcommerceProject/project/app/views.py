from itertools import product
from django.shortcuts import render
from django.urls import reverse_lazy
from .models import *
from django.contrib.auth.views import LoginView
from django.views.generic.edit import FormView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.http import JsonResponse
import json

# Create your views here.

class CustomLoginView(LoginView):
    template_name = "app/Login.html"  #Login sayfasının bulunduğu konum
    fields = "__all__"
    redirect_authenticated_user = True #If user is authenticated, they shouldnt be allowed on this page
    #Bu şeklilde müşteri login sayfasına gitmek istese bile gidemez, ana sayfaya yönlendirir

    def get_success_url(self):
        return reverse_lazy("store")


class RegisterPage(FormView):
    template_name = "app/register.html"
    form_class = UserCreationForm
    redirect_authenticated_user = True
    success_url = reverse_lazy("store")

    def form_valid(self, form):
        user = form.save()
        if user is not None:
            login(self.request, user)
        return super(RegisterPage,self).form_valid(form)


def store(request):
    products = Product.objects.all()

    if request.user.is_authenticated:
        customer=request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        #complete=False makes it an open cart where it can be editable, add or remove order item
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_card_total':0}
    context = {'items' : items, "order": order, 'products' : products }

    return render(request, 'app/Store.html', context)


def checkout(request):
    
    if request.user.is_authenticated:
        customer=request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_card_total':0}
        
        
    context = {'items' : items, "order": order }
    return render(request, 'app/checkout.html', context)


def updateItem(request):
    data = json.loads(request.body)
    productId = data["productId"]
    action = data["action"]

    print("productId", productId)
    print("action", action)

    customer = request.user.customer
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(customer=customer, complete=False)

    orderItem,created = OrderItem.objects.get_or_create(order=order, product=product)

    if action == "add":
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == "remove":
        orderItem.quantity = (orderItem.quantity - 1)

    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()

    return JsonResponse("Item was added", safe=False)