from rest_framework import serializers
from .models import Member, Project, Task, DailyWorkLog, ChatMessage, ChatThread

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    due = serializers.CharField(required=False, allow_blank=True, default='')
    desc = serializers.CharField(required=False, allow_blank=True, default='')
    category = serializers.CharField(required=False, allow_blank=True, default='')
    task_type = serializers.CharField(required=False, default='task')
    key = serializers.CharField(required=False, allow_blank=True, default='')
    reporter = serializers.CharField(required=False, allow_blank=True, default='')
    checklist = serializers.ListField(required=False, default=list)
    labels = serializers.ListField(required=False, default=list)
    attachments = serializers.ListField(required=False, default=list)
    comments = serializers.ListField(required=False, default=list)
    worklogs = serializers.ListField(required=False, default=list)

    class Meta:
        model = Task
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)
    start = serializers.CharField(required=False, allow_blank=True, default='')
    end = serializers.CharField(required=False, allow_blank=True, default='')

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

