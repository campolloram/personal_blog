from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

from django.contrib.auth import get_user_model


User = get_user_model()


class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        email = data['email']
        password = data['password']
        re_password = data['re_password']

        if password == re_password:
            _, created = User.objects.get_or_create(email=email)
            if not created:
                return Response({'error': 'This email is already in use'}, status=200)
            else:
                return Response({'success': 'User created successfully'}, status=500)
