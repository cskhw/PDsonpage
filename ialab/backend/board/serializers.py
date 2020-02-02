from board.models import Board
from board.models import Topic
from rest_framework import serializers


class BoardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'title', 'description',
                 'date', 'update', 'author', 'admin')

class TopicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Topic
        fields = ('id', 'title', 'description',
                 'date', 'update', 'author', 'admin')

