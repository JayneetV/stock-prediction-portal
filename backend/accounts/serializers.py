from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ("username", "email", "password")
    
    def create(self, validated_data):

        # Hash data is not human-readable in the sense that you can't understand the original plain text from looking at the hash. It's a scrambled, seemingly random set of characters.

        # User.objects.create will return plain text not hash
        # User.objects.create_user will automatically hash the password
        
        # user = User.objects.create_user(
        #     validated_data("username"),
        #     validated_data("email"),
        #     validated_data("password"),
        # )

        user = User.objects.create_user(
            validated_data["username"],
            validated_data["email"],
            validated_data["password"],
        )

        # user = User.objects.create_user(**validated_data) can use this also when we have only required data

        return user