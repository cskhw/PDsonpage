from board.models import Board
from rest_framework import serializers


class BoardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'title', 'description',
                 'date', 'update', 'author', 'admin')
