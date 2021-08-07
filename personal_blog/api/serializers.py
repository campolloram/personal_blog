from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'created_on',
            'updated_on',
            'status',
            'title',
            'body',
            'slug',
            'author',
        ]
