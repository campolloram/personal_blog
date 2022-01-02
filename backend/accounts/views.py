from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

from django.contrib.auth import get_user_model
from django.db import IntegrityError


User = get_user_model()


class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, format=None):
        print(f'THIS IS THE DATA {self.request.data}')
        data = self.request.data
        email = data['email']
        password = data['password']
        re_password = data['re_password']

        if password == re_password:
            try:
                user = User.objects.create_user(email=email, password=password)
                return Response({'success': 'User created successfully!'}, status=200)
            except IntegrityError:
                return Response({'error': 'This email is already in use'}, status=500)
        else:
            return Response({'error': "Passwords don't match."}, status=500)
