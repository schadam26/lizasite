from django.shortcuts import render
from .models import Post
from django.utils import timezone

# Create your views here.
def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('order_num')
    return render(request, 'lizasite/post_list.html', {'posts':posts})

def home_page(request):
    return render(request, 'lizasite/home_page.html', {})

def about_page(request):
    return render(request, 'lizasite/about_page.html', {})

def design_page(request):
    return render(request, 'lizasite/design_page.html', {})
