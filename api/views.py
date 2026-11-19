from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Member, Project, Task, DailyWorkLog, ChatMessage
from .serializers import (
    MemberSerializer, ProjectSerializer, TaskSerializer,
    DailyWorkLogSerializer, ChatMessageSerializer
)

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_mapper = MemberSerializer
    serializer_class = MemberSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        project_id = self.request.query_params.get('project')
        if project_id:
            qs = qs.filter(project_id=project_id)
        return qs


class DailyWorkLogViewSet(viewsets.ModelViewSet):
    queryset = DailyWorkLog.objects.all()
    serializer_class = DailyWorkLogSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        date = self.request.query_params.get('date')
        member = self.request.query_params.get('member')
        if date:
            qs = qs.filter(date=date)
        if member:
            qs = qs.filter(member=member)
        return qs


class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        chat_id = self.request.query_params.get('chat_id')
        if chat_id:
            qs = qs.filter(chat_id=chat_id)
        return qs


class ChatThreadsView(APIView):
    """Returns all chat threads grouped with their messages."""
    def get(self, request):
        threads = [
            {'id': 'hotel', 'kind': 'group', 'name': 'Project – Hotel SaaS', 'project': 'hotel', 'members': 6, 'starred': True, 'unread': 0},
            {'id': 'unity', 'kind': 'group', 'name': 'Project – Unity Game', 'project': 'unity', 'members': 4, 'starred': False, 'unread': 1},
            {'id': 'general', 'kind': 'group', 'name': 'Team – General', 'members': 7, 'starred': False, 'unread': 0},
            {'id': 'arun', 'kind': 'dm', 'person': 'arun', 'name': 'Arun', 'starred': False, 'unread': 0, 'timeLabel': 'Yesterday'},
            {'id': 'meena', 'kind': 'dm', 'person': 'meena', 'name': 'Meena', 'starred': False, 'unread': 0, 'timeLabel': 'Yesterday'},
        ]
        for t in threads:
            msgs = ChatMessage.objects.filter(chat_id=t['id']).order_by('created_at')
            t['msgs'] = [
                {
                    'id': m.id,
                    'from': m.from_member,
                    'time': m.time_label or m.created_at.strftime('%I:%M %p').lstrip('0'),
                    'text': m.text,
                    'file': m.file_info
                }
                for m in msgs
            ]
        return Response(threads)


class StatsView(APIView):
    """Returns overview statistics across all projects and daily logs."""
    def get(self, request):
        total_projects = Project.objects.count()
        in_progress = Project.objects.filter(status='progress').count()
        completed = Project.objects.filter(status='done').count()
        total_tasks = Task.objects.count()
        completed_tasks = Task.objects.filter(status='done').count()
        members_count = Member.objects.count()

        return Response({
            'total_projects': total_projects,
            'projects_in_progress': in_progress,
            'projects_completed': completed,
            'total_tasks': total_tasks,
            'completed_tasks': completed_tasks,
            'total_members': members_count,
        })
