from rest_framework import viewsets
from .serializers import BoardSerializer
from .serializers import TopicSerializer
from .models import Board
from .models import Topic

class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

