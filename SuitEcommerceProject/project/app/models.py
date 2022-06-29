from pyexpat import model
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=20)
    price = models.FloatField()
    image = models.ImageField(null=True, blank=True)
    discounted = models.FloatField(default='1')

    def __str__(self) :
        return self.name

    @property # bu yapıyı kullnarak foto yüklenmeyen ürün olsa bile sayfayı render ediyor,hata vermiyor
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ""
        return url

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True) 
    #OneToOneField ile bir user sadece bir Customer olabilir diyoruz
    #on_delete=models.CASCADE will delete anything created by the admin if the user is deleted.
    name = models.CharField(max_length=20, null=True)
    email = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.name
            

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    #ForeignKey ile "many to one" Customer-Order bağlantısı kurduk. One customer can have many orders
    #Instead of Cascade we us SET_NULL so if a customer deleted, we dont want to delete to order
    # instead we set the customer value to null
    date_ordered = models.DateTimeField(auto_now_add=True)
    #DateTimeField is a date and time field which stores date
    #auto_now_add will set time when an instance is created
    complete = models.BooleanField(default=False, null=True, blank=False)
    transaction_id = models.CharField(max_length=20, null=True)

    def __str__(self):
        return str(self.id)

    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        return total
    
    @property
    def get_vat(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        vat = total*0.19
        return vat

    @property
    def get_delivery(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        delivery = total*0.02
        return delivery

    @property
    def get_cart_total_plus_addings(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        delivery = total*0.02
        vat = total*0.19
        totalPrice = total + delivery + vat
        return totalPrice
    

class OrderItem(models.Model): #chart
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    #
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True) 
    #ForeignKey ile "many to one" Order-OrderItem bağlantısı kurduk. One order can have many OrderItems
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    @property
    def get_total(self):
        total = self.product.price * self.quantity
        return total


class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
    #One customer can have many ShippingAdress
    order = models.OneToOneField(Order, on_delete=models.SET_NULL, null=True)
    #One order can have only one  ShippingAdress
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200, null=True)
    zipcode = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    
    def __str__(self) :
        return self.address