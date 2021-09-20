from rest_framework import serializers
from .models import Post
from django.contrib.auth import get_user_model

User = get_user_model()


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
