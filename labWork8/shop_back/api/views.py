from django.shortcuts import render
from django.http.response import JsonResponse 

from api.models import Category
from api.models import Product

# Create your views here.

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories] 

    return JsonResponse(categories_json, safe=False, status=200)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
        
    category_json = category.to_json()

    return JsonResponse(category_json, safe=False, status=200)

def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    
    products = Product.objects.filter(category=category)
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False, status=200)

def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False,status=200)

def product_item(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    
    product_json = product.to_json()

    return JsonResponse(product_json, safe=False, status=200)