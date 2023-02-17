---
title: "TRYING DJANGO REST FRAMEWORK FOR APIs"
metaTitle: "Django rest framework for api creation"
metaDesc: "creating easy and fast secure api with django rest"
socialImage: images/restApiDjango.png
date: "2023-02-18"
tags:
  - Django rest api Framework
  - Api
---

# Trying django rest framework

Recently i was working on a CRM and wanted to experiment with any API framework to create the backend for this new project.

I really liked the overall experience from start to finish.

I had no prior python knowledge but the documentation & the support from the community is so good that i was able to build required apis within hours.

Will share some of my learning in this post.

## What is Django Rest Framework?

Django is a popular web framework for building web applications in Python. While it's great for creating web pages, sometimes you need to create an API for your application. This is where Django Rest Framework (DRF) comes in. In this blog post, we'll explore what DRF is, why it's useful, and how to use it to create APIs.

Django Rest Framework is a third-party package that allows you to easily create RESTful APIs in Django. It provides a set of tools and libraries that make it easy to serialize and deserialize data, handle requests and responses, and authenticate users.

Why use Django Rest Framework?

There are several reasons why you might want to use DRF to create APIs for your Django application:

1. It's easy to use: DRF provides a simple and intuitive interface for creating APIs. You don't need to write a lot of code to get started, and it's easy to add new functionality as your needs grow.

2. It's customizable: DRF provides a lot of customization options, so you can tailor your API to your specific needs. You can customize the serialization and deserialization process, add authentication and permissions, and much more.

3. It's well-documented: DRF has excellent documentation, with a lot of examples and tutorials. This makes it easy to get started and learn how to use the framework.

4. It's widely used: DRF is a popular package with a large community of users. This means that there are a lot of resources available, including plugins, extensions, and third-party libraries.

## How to use Django Rest Framework to create APIs

Here are the basic steps to create an API using DRF:

1. Install DRF: The first step is to install DRF. You can do this using pip, by running the following command in your terminal:

```py
pip install djangorestframework
```

2. Create a serializer: A serializer is a class that converts complex data types (such as models) into JSON, which is the format used by most APIs. You can create a serializer by defining a class that extends the [serializers.Serializer] class, and specifying the fields that you want to include.

3. Create a view: A view is a function or class that handles requests and returns responses. You can create a view by defining a function or class that extends the [views.APIView] class, and defining the methods that you want to support (such as [get()] or [post()]).

4. Define the URL: Finally, you need to define the URL for your API. You can do this by adding a new entry to your urls.py file, and specifying the URL pattern and the view that should handle it.

Here's an example of what the code might look like for a simple API that returns a list of books:

```js
# serializers.py
from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.Serializer):
    title = serializers.CharField()
    author = serializers.CharField()
    published_date = serializers.DateField()

# views.py
from rest_framework import views, response
from .models import Book
from .serializers import BookSerializer

class BookListView(views.APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return response.Response(serializer.data)

# urls.py
from django.urls import path
from .views import BookListView

urlpatterns = [
    path('books/', BookListView.as_view(), name='book-list'),
]
```

For complete guide & documentation please visit- [Django-Rest-Documentation](https://www.django-rest-framework.org/tutorial/quickstart/)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to connect on [LinkedIn](https://www.linkedin.com/in/gunvantsharma/)
or [GitHub](https://github.com/gunvant8008).
