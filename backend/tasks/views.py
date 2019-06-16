from rest_framework import generics
from rest_framework.permissions import AllowAny

from . import serializers
from . import models


class TaskCategoryList(generics.ListAPIView):
    queryset = models.TaskCategory.objects.all()
    serializer_class = serializers.TaskCategorySerializer
    permission_classes = (AllowAny,)


class BaseTaskList(generics.ListAPIView):
    queryset = models.BaseTask.objects.all()
    serializer_class = serializers.BaseTaskSerializer
    permission_classes = (AllowAny,)


class SubTaskList(generics.ListAPIView):
    queryset = models.SubTask.objects.all()
    serializer_class = serializers.SubTaskSerializer
    permission_classes = (AllowAny,)