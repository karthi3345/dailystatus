from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token

from .models import Member, Project, Task, DailyWorkLog, ChatMessage, ChatThread
from .serializers import (
    MemberSerializer, ProjectSerializer, TaskSerializer,
    DailyWorkLogSerializer, ChatMessageSerializer
)

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        username = (data.get('username') or '').strip()
        email = (data.get('email') or '').strip()
        password = data.get('password') or ''
        name = (data.get('name') or username).strip()
        role = (data.get('role') or 'Developer').strip()

        if not username or not password:
            return Response({'error': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if len(password) < 6:
            return Response({'error': 'Password must be at least 6 characters.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username__iexact=username).exists():
            return Response({'error': 'A user with this username already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=name
        )

        member, _ = Member.objects.update_or_create(
            id=username.lower(),
            defaults={
                'name': name or username.capitalize(),
                'role': role,
                'title': role,
                'availability': 'available',
                'mode': 'office'
            }
        )

        token, _ = Token.objects.get_or_create(user=user)

        return Response({
            'token': token.key,
            'user': {
                'id': user.id,
                'username': user.username,
                'name': member.name,
                'role': member.role,
                'email': user.email,
                'availability': member.availability,
                'mode': member.mode,
            }
        }, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        identifier = (data.get('username') or '').strip()
        password = data.get('password') or ''

        if not identifier or not password:
            return Response({'error': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        username = identifier
        if '@' in identifier:
            matched_user = User.objects.filter(email__iexact=identifier).first()
            if matched_user:
                username = matched_user.username

        user = authenticate(username=username, password=password)
        if not user:
            return Response({'error': 'Invalid username/email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

        token, _ = Token.objects.get_or_create(user=user)
        member = Member.objects.filter(id=user.username.lower()).first()

        return Response({
            'token': token.key,
            'user': {
                'id': user.id,
                'username': user.username,
                'name': member.name if member else user.username,
                'role': member.role if member else 'Team Member',
                'email': user.email,
                'availability': member.availability if member else 'available',
                'mode': member.mode if member else 'office',
            }
        }, status=status.HTTP_200_OK)


class MeView(APIView):
    def get(self, request):
        if not request.user or not request.user.is_authenticated:
            return Response({'authenticated': False}, status=status.HTTP_200_OK)

        member = Member.objects.filter(id=request.user.username.lower()).first()
        return Response({
            'authenticated': True,
            'user': {
                'id': request.user.id,
                'username': request.user.username,
                'name': member.name if member else request.user.username,
                'role': member.role if member else 'Team Member',
                'email': request.user.email,
                'availability': member.availability if member else 'available',
                'mode': member.mode if member else 'office',
            }
        })


class LogoutView(APIView):
    def post(self, request):
        if request.user and request.user.is_authenticated:
            Token.objects.filter(user=request.user).delete()
        return Response({'success': True, 'message': 'Logged out successfully.'})


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
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
    """Returns all chat threads grouped with their messages, and allows creating new groups."""
    def get(self, request):
        if not ChatThread.objects.exists():
            defaults = [
                {'id': 'hotel', 'kind': 'group', 'name': 'Project – Hotel SaaS', 'project': 'hotel', 'members': ['kathir', 'arun', 'divya', 'karthik', 'meena', 'sathish'], 'starred': True},
                {'id': 'unity', 'kind': 'group', 'name': 'Project – Unity Game', 'project': 'unity', 'members': ['karthik', 'arun', 'kathir', 'meena'], 'starred': False},
                {'id': 'general', 'kind': 'group', 'name': 'Team – General', 'members': ['kathir', 'arun', 'divya', 'karthik', 'meena', 'sathish'], 'starred': False},
                {'id': 'arun', 'kind': 'dm', 'person': 'arun', 'name': 'Arun', 'members': ['kathir', 'arun'], 'starred': False},
                {'id': 'meena', 'kind': 'dm', 'person': 'meena', 'name': 'Meena', 'members': ['kathir', 'meena'], 'starred': False},
            ]
            for d in defaults:
                ChatThread.objects.get_or_create(id=d['id'], defaults=d)

        threads = ChatThread.objects.all().order_by('created_at')
        result = []
        for t in threads:
            msgs = ChatMessage.objects.filter(chat_id=t.id).order_by('created_at')
            result.append({
                'id': t.id,
                'kind': t.kind,
                'name': t.name,
                'project': t.project,
                'person': t.person,
                'members': len(t.members) if t.members else 0,
                'memberList': t.members or [],
                'starred': t.starred,
                'unread': 0,
                'msgs': [
                    {
                        'id': m.id,
                        'from': m.from_member,
                        'time': m.time_label or m.created_at.strftime('%I:%M %p').lstrip('0'),
                        'text': m.text,
                        'file': m.file_info
                    }
                    for m in msgs
                ]
            })
        return Response(result)

    def post(self, request):
        import re, time
        data = request.data
        name = (data.get('name') or '').strip()
        if not name:
            return Response({'error': 'Group name is required.'}, status=status.HTTP_400_BAD_REQUEST)

        slug_base = re.sub(r'[^a-zA-Z0-9]+', '-', name).strip('-').lower() or 'group'
        thread_id = f"grp-{slug_base}-{int(time.time())}"

        members = data.get('members') or []
        creator = request.user.username.lower() if (request.user and request.user.is_authenticated) else (data.get('created_by') or 'kathir')
        if creator not in members:
            members.append(creator)

        thread = ChatThread.objects.create(
            id=thread_id,
            name=name,
            kind='group',
            members=members,
            created_by=creator
        )

        initial_msg = (data.get('initial_message') or '').strip()
        if initial_msg:
            ChatMessage.objects.create(
                chat_id=thread_id,
                chat_name=name,
                kind='group',
                from_member=creator,
                text=initial_msg
            )
        else:
            ChatMessage.objects.create(
                chat_id=thread_id,
                chat_name=name,
                kind='group',
                from_member=creator,
                text=f"Group '{name}' created."
            )

        msgs = ChatMessage.objects.filter(chat_id=thread.id).order_by('created_at')
        return Response({
            'id': thread.id,
            'kind': thread.kind,
            'name': thread.name,
            'members': len(thread.members),
            'memberList': thread.members,
            'starred': thread.starred,
            'unread': 0,
            'msgs': [
                {
                    'id': m.id,
                    'from': m.from_member,
                    'time': m.time_label or m.created_at.strftime('%I:%M %p').lstrip('0'),
                    'text': m.text,
                    'file': m.file_info
                }
                for m in msgs
            ]
        }, status=status.HTTP_201_CREATED)


class AddChatMemberView(APIView):
    """Add one or more employees to an existing group chat."""
    def post(self, request, chat_id):
        thread = ChatThread.objects.filter(id=chat_id).first()
        if not thread:
            return Response({'error': 'Group chat not found.'}, status=status.HTTP_404_NOT_FOUND)

        data = request.data
        member_id = data.get('member_id')
        member_ids = data.get('member_ids') or ([member_id] if member_id else [])

        if not member_ids:
            return Response({'error': 'At least one employee must be selected.'}, status=status.HTTP_400_BAD_REQUEST)

        current_members = list(thread.members or [])
        added = []
        for mid in member_ids:
            mid_clean = str(mid).strip().lower()
            if mid_clean and mid_clean not in current_members:
                current_members.append(mid_clean)
                added.append(mid_clean)

        thread.members = current_members
        thread.save()

        creator = request.user.username.lower() if (request.user and request.user.is_authenticated) else 'kathir'
        creator_name = Member.objects.filter(id=creator).first()
        creator_display = creator_name.name if creator_name else creator.capitalize()

        for mid in added:
            m_obj = Member.objects.filter(id=mid).first()
            m_name = m_obj.name if m_obj else mid.capitalize()
            ChatMessage.objects.create(
                chat_id=thread.id,
                chat_name=thread.name,
                kind=thread.kind,
                from_member=creator,
                text=f"📢 {creator_display} added {m_name} to the group."
            )

        msgs = ChatMessage.objects.filter(chat_id=thread.id).order_by('created_at')
        return Response({
            'id': thread.id,
            'kind': thread.kind,
            'name': thread.name,
            'members': len(thread.members),
            'memberList': thread.members,
            'starred': thread.starred,
            'msgs': [
                {
                    'id': m.id,
                    'from': m.from_member,
                    'time': m.time_label or m.created_at.strftime('%I:%M %p').lstrip('0'),
                    'text': m.text,
                    'file': m.file_info
                }
                for m in msgs
            ]
        }, status=status.HTTP_200_OK)


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
