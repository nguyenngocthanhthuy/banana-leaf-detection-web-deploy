from rest_framework import serializers
from userapp.models import User
from django.conf import settings

class UserSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(source='public_id', read_only=True, format='hex')
    created = serializers.DateTimeField(read_only=True)
    updated = serializers.DateTimeField(read_only=True)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        
        if not representation['avatar']:
            representation['avatar'] = settings.DEFAULT_AUTO_FIELD
            return representation
        
        if settings.DEBUG: # debug enabled for dev
            request = self.context.get('request')
            representation['avatar'] = request.build_absolute_uri(representation['avatar'])
        return representation

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'avatar', 'is_active', 'created', 'updated']
        read_only_field = ['is_active']
