from rest_framework import serializers
from .models import Member, Project, Task, DailyWorkLog, ChatMessage, ChatThread

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class DailyWorkLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyWorkLog
        fields = '__all__'


class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'


class ChatThreadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatThread
        fields = '__all__'

