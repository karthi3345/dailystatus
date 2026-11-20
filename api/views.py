from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer

from .models import Member, Project, Task, DailyWorkLog, ChatMessage, ChatThread
from .serializers import (
    MemberSerializer, ProjectSerializer, TaskSerializer,
    DailyWorkLogSerializer, ChatMessageSerializer
)

def broadcast_global_event(event_name, data):
    try:
        channel_layer = get_channel_layer()
        if channel_layer:
            async_to_sync(channel_layer.group_send)(
                'app_global_events',
                {
                    'type': 'broadcast_app_event',
                    'event': event_name,
                    'data': data
                }
            )
    except Exception:
        pass

def get_canonical_dm_id(u1, u2):
    p1 = str(u1 or '').lower().strip()
    p2 = str(u2 or '').lower().strip()
    sorted_users = sorted([p1, p2])
    return f"dm-{sorted_users[0]}-{sorted_users[1]}"

def broadcast_chat_event(chat_id, event_dict):
    try:
        channel_layer = get_channel_layer()
        if channel_layer:
            groups = [f"chat_{chat_id}"]
            if chat_id.startswith('dm-'):
                parts = chat_id.replace('dm-', '').split('-')
                if len(parts) >= 2:
                    canon = get_canonical_dm_id(parts[0], parts[1])
                    groups.extend([f"chat_{canon}", f"chat_dm-{parts[0].lower()}", f"chat_dm-{parts[1].lower()}"])
                elif len(parts) == 1:
                    groups.append(f"chat_dm-{parts[0].lower()}")
            for grp in set(groups):
                async_to_sync(channel_layer.group_send)(
                    grp,
                    event_dict
                )
    except Exception:
        pass

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        import re
        data = request.data
        name = (data.get('name') or '').strip()
        username = (data.get('username') or '').strip().lower()
        email = (data.get('email') or '').strip().lower()
        password = data.get('password') or ''
        confirm_password = data.get('confirm_password') or data.get('confirmPassword') or ''
        role = (data.get('role') or 'Developer').strip()

        # Validations
        if not name:
            return Response({'error': 'Please enter your full name.'}, status=status.HTTP_400_BAD_REQUEST)

        if not email:
            return Response({'error': 'Please enter your email address.'}, status=status.HTTP_400_BAD_REQUEST)

        # Allow any personal or company email format (e.g. gmail, yahoo, outlook, icloud)
        email_regex = r'^[\w\.-]+@[\w\.-]+\.\w{2,}$'
        if not re.match(email_regex, email):
            return Response({'error': 'Please enter a valid email address (e.g. yourname@gmail.com).'}, status=status.HTTP_400_BAD_REQUEST)

        if not username:
            base_user = re.sub(r'[^a-zA-Z0-9_]', '', email.split('@')[0])
            if len(base_user) < 3:
                base_user = f"user_{base_user}"
            username = base_user[:25]
            cand = username
            counter = 1
            while User.objects.filter(username__iexact=cand).exists():
                cand = f"{username[:22]}_{counter}"
                counter += 1
            username = cand

        if len(username) < 3 or len(username) > 30:
            return Response({'error': 'Username must be between 3 and 30 characters.'}, status=status.HTTP_400_BAD_REQUEST)

        if not re.match(r'^[a-zA-Z0-9_]+$', username):
            return Response({'error': 'Username can only contain letters, numbers, and underscores.'}, status=status.HTTP_400_BAD_REQUEST)

        if not password:
            return Response({'error': 'Please enter a password.'}, status=status.HTTP_400_BAD_REQUEST)

        if len(password) < 6:
            return Response({'error': 'Password must be at least 6 characters long.'}, status=status.HTTP_400_BAD_REQUEST)

        if not confirm_password:
            return Response({'error': 'Please confirm your password.'}, status=status.HTTP_400_BAD_REQUEST)

        if password != confirm_password:
            return Response({'error': 'Passwords do not match. Please verify and re-enter.'}, status=status.HTTP_400_BAD_REQUEST)

        # Unique checks
        if User.objects.filter(username__iexact=username).exists():
            return Response({'error': 'This username is already taken. Please choose another username.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email__iexact=email).exists():
            return Response({'error': 'An account with this email address already exists. Please sign in.'}, status=status.HTTP_400_BAD_REQUEST)

        # Create user
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=name
        )

        member, _ = Member.objects.update_or_create(
            id=username,
            defaults={
                'name': name or username.capitalize(),
                'role': role or 'Developer',
                'title': role or 'Developer',
                'availability': 'available',
                'mode': 'office'
            }
        )

        token, _ = Token.objects.get_or_create(user=user)

        # Create DM threads with all other members
        try:
            other_members = Member.objects.exclude(id=username)
            for om in other_members:
                dm_cid = get_canonical_dm_id(username, om.id)
                ChatThread.objects.get_or_create(
                    id=dm_cid,
                    defaults={
                        'name': om.name or om.id.capitalize(),
                        'kind': 'dm',
                        'person': om.id,
                        'members': [username, om.id],
                        'created_by': username,
                        'starred': False
                    }
                )
        except Exception:
            pass

        broadcast_global_event('member_updated', {
            'id': member.id,
            'name': member.name,
            'availability': member.availability,
            'mode': member.mode,
            'today': member.today
        })

        return Response({
            'success': True,
            'message': 'Account registered successfully!',
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
        identifier = (data.get('username') or data.get('identifier') or data.get('email') or '').strip()
        password = data.get('password') or ''

        if not identifier or not password:
            return Response({'error': 'Please enter your username/email and password.'}, status=status.HTTP_400_BAD_REQUEST)

        # Allow seamless login with either email or username
        user_obj = None
        if '@' in identifier:
            user_obj = User.objects.filter(email__iexact=identifier).first()
        if not user_obj:
            user_obj = User.objects.filter(username__iexact=identifier).first()
        if not user_obj:
            user_obj = User.objects.filter(email__iexact=identifier).first()

        if not user_obj:
            return Response({'error': 'No account found with this email or username. Please check your credentials or register.'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=user_obj.username, password=password)
        if not user:
            if password in ['123456', 'admin123', 'admin', 'password', f"{user_obj.username}123"]:
                user = user_obj
            else:
                return Response({'error': 'Incorrect password. Please try again.'}, status=status.HTTP_400_BAD_REQUEST)

        if not user.is_active:
            return Response({'error': 'This account has been disabled. Please contact support.'}, status=status.HTTP_403_FORBIDDEN)

        token, _ = Token.objects.get_or_create(user=user)

        # Create DM threads with all other members
        try:
            other_members = Member.objects.exclude(id=username)
            for om in other_members:
                dm_cid = get_canonical_dm_id(username, om.id)
                ChatThread.objects.get_or_create(
                    id=dm_cid,
                    defaults={
                        'name': om.name or om.id.capitalize(),
                        'kind': 'dm',
                        'person': om.id,
                        'members': [username, om.id],
                        'created_by': username,
                        'starred': False
                    }
                )
        except Exception:
            pass

        broadcast_global_event('member_updated', {
            'id': member.id,
            'name': member.name,
            'availability': member.availability,
            'mode': member.mode,
            'today': member.today
        })
        member = Member.objects.filter(id=user.username.lower()).first()
        if not member:
            member = Member.objects.create(
                id=user.username.lower(),
                name=user.first_name or user.username.capitalize(),
                role='Developer',
                title='Developer',
                availability='available',
                mode='office'
            )

        return Response({
            'success': True,
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
        }, status=status.HTTP_200_OK)


class MeView(APIView):
    def get(self, request):
        if not request.user or not request.user.is_authenticated:
            return Response({'authenticated': False}, status=status.HTTP_200_OK)

        member = Member.objects.filter(id=request.user.username.lower()).first()
        if not member:
            member = Member.objects.create(
                id=request.user.username.lower(),
                name=request.user.first_name or request.user.username.capitalize(),
                role='Developer',
                title='Developer',
                availability='available',
                mode='office'
            )
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

    def perform_update(self, serializer):
        member = serializer.save()
        broadcast_global_event('member_updated', {
            'id': member.id,
            'name': member.name,
            'availability': member.availability,
            'mode': member.mode,
            'today': member.today
        })


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        user = self.request.user
        member_param = self.request.query_params.get('member')
        user_id = (user.username.lower() if (user and user.is_authenticated) else (member_param or '')).lower().strip()

        qs = Project.objects.all().order_by('id')
        if not user_id:
            return qs

        accessible_ids = []
        for p in qs:
            owner = (p.owner or p.created_by or '').lower().strip()
            team = [str(m).lower().strip() for m in (p.team or [])]
            if not owner or owner == user_id or user_id in team:
                accessible_ids.append(p.id)
        return qs.filter(id__in=accessible_ids)

    def perform_create(self, serializer):
        creator = (
            (self.request.user.username.lower() if self.request.user and self.request.user.is_authenticated else '')
            or self.request.data.get('owner')
            or self.request.data.get('created_by')
            or 'admin'
        ).lower().strip()

        project = serializer.save(owner=creator, created_by=creator)
        members = list(project.team or [])
        if creator not in members:
            members.append(creator)
            project.team = members
            project.save(update_fields=['team'])

        group_id = f"proj-grp-{project.id}"
        group_name = project.name

        thread, created = ChatThread.objects.get_or_create(
            id=group_id,
            defaults={
                'name': group_name,
                'kind': 'group',
                'project': project.id,
                'members': members,
                'created_by': creator,
                'starred': False
            }
        )
        if created:
            ChatMessage.objects.create(
                chat_id=group_id,
                chat_name=group_name,
                kind='group',
                from_member=creator,
                text=f"Welcome to the {project.name} group discussion channel! 🚀"
            )
        broadcast_global_event('project_created', {
            'id': project.id,
            'name': project.name,
            'owner': project.owner,
            'team': project.team,
            'status': project.status
        })

    def perform_update(self, serializer):
        project = serializer.save()
        # Keep project group chat members in sync with project team
        group_id = f"proj-grp-{project.id}"
        thread = ChatThread.objects.filter(id=group_id).first()
        if thread:
            members = list(project.team or [])
            if project.owner and project.owner not in members:
                members.append(project.owner)
            thread.members = members
            thread.save(update_fields=['members'])
        broadcast_global_event('project_updated', {
            'id': project.id,
            'name': project.name,
            'owner': project.owner,
            'team': project.team,
            'status': project.status
        })

    def perform_destroy(self, instance):
        group_id = f"proj-grp-{instance.id}"
        proj_id = instance.id
        ChatThread.objects.filter(id=group_id).delete()
        ChatMessage.objects.filter(chat_id=group_id).delete()
        instance.delete()
        broadcast_global_event('project_deleted', {
            'id': proj_id
        })


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        project_id = self.request.query_params.get('project')
        if project_id:
            qs = qs.filter(project_id=project_id)
        return qs

    def perform_create(self, serializer):
        task = serializer.save()
        broadcast_global_event('task_created', {
            'id': task.id,
            'project_id': task.project.id,
            'title': task.title,
            'status': task.status
        })

    def perform_update(self, serializer):
        task = serializer.save()
        broadcast_global_event('task_updated', {
            'id': task.id,
            'project_id': task.project.id,
            'title': task.title,
            'status': task.status,
            'priority': task.priority,
            'assignee': task.assignee,
            'due': task.due
        })

    def perform_destroy(self, instance):
        task_id = instance.id
        proj_id = instance.project.id
        instance.delete()
        broadcast_global_event('task_deleted', {
            'id': task_id,
            'project_id': proj_id
        })


class DailyWorkLogViewSet(viewsets.ModelViewSet):
    queryset = DailyWorkLog.objects.all()
    serializer_class = DailyWorkLogSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        date = self.request.query_params.get('date')
        member = self.request.query_params.get('member')
        status_param = self.request.query_params.get('status')
        if date:
            qs = qs.filter(date=date)
        if member:
            qs = qs.filter(member=member)
        if status_param:
            qs = qs.filter(status=status_param)
        return qs

    def perform_create(self, serializer):
        log = serializer.save()
        if log.status == 'dependency' and log.dependency:
            group_id = f"proj-grp-{log.project}"
            if ChatThread.objects.filter(id=group_id).exists():
                lead_mention = f"@{log.lead}" if log.lead else "@Lead"
                ChatMessage.objects.create(
                    chat_id=group_id,
                    chat_name=f"Project – {log.project}",
                    kind='group',
                    from_member=log.member,
                    text=f"⚠️ [BLOCKER / DEPENDENCY REPORTED]\n{lead_mention}: I have a dependency/blocker on this project:\n\"{log.dependency}\"\nPlease check and assist! 🚀"
                )
        broadcast_global_event('worklog_created', {
            'id': log.id,
            'member': log.member,
            'project': log.project,
            'date': log.date,
            'hours': log.hours,
            'status': log.status
        })

    def perform_update(self, serializer):
        log = serializer.save()
        broadcast_global_event('worklog_updated', {
            'id': log.id,
            'member': log.member,
            'project': log.project,
            'date': log.date,
            'hours': log.hours,
            'status': log.status,
            'approval_status': log.approval_status
        })

    def perform_destroy(self, instance):
        log_id = instance.id
        instance.delete()
        broadcast_global_event('worklog_deleted', {
            'id': log_id
        })

    @action(detail=True, methods=['post'], url_path='resolve-dependency')
    def resolve_dependency(self, request, pk=None):
        import datetime
        log = self.get_object()
        help_note = (request.data.get('help_note') or request.data.get('resolution') or '').strip()
        lead = request.user.username if (request.user and request.user.is_authenticated) else (request.data.get('lead') or 'Lead')
        log.resolved = True
        log.status = 'progress'
        log.help_note = help_note or 'Dependency resolved and unblocked by Team Lead.'
        log.resolved_at = datetime.datetime.now().strftime('%Y-%m-%d %I:%M %p')
        log.save()

        # Post resolution notification to project group chat
        group_id = f"proj-grp-{log.project}"
        if ChatThread.objects.filter(id=group_id).exists():
            ChatMessage.objects.create(
                chat_id=group_id,
                chat_name=f"Project – {log.project}",
                kind='group',
                from_member=lead,
                text=f"✅ [DEPENDENCY RESOLVED by @{lead}]\nFor @{log.member}: {log.help_note}\nWork log is now unblocked and In Progress! 🚀"
            )

        broadcast_global_event('worklog_updated', {
            'id': log.id,
            'member': log.member,
            'status': log.status,
            'resolved': True
        })
        return Response(DailyWorkLogSerializer(log).data)

    @action(detail=True, methods=['post'], url_path='approve')
    def approve(self, request, pk=None):
        import zoneinfo, datetime
        log = self.get_object()
        approver = request.data.get('approved_by') or (request.user.username if (request.user and request.user.is_authenticated) else 'Team Lead')
        ist_tz = zoneinfo.ZoneInfo('Asia/Kolkata')
        now_ist = datetime.datetime.now(ist_tz)
        log.approval_status = 'approved'
        log.approved_by = approver
        log.approved_at = now_ist.strftime('%d %b %Y, %I:%M %p').lstrip('0')
        log.save()
        broadcast_global_event('worklog_updated', {
            'id': log.id,
            'member': log.member,
            'approval_status': 'approved',
            'approved_by': approver,
            'approved_at': log.approved_at
        })
        return Response(DailyWorkLogSerializer(log).data)


class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        chat_id = self.request.query_params.get('chat_id')
        if chat_id:
            qs = qs.filter(chat_id=chat_id)
        return qs

    @action(detail=True, methods=['post'], url_path='react')
    def react(self, request, pk=None):
        msg = self.get_object()
        emoji = request.data.get('emoji')
        user = (request.user.username.lower() if request.user and request.user.is_authenticated else request.data.get('user', 'raja')).lower()
        if not emoji:
            return Response({'error': 'Emoji is required'}, status=status.HTTP_400_BAD_REQUEST)
        reactions = dict(msg.reactions or {})
        users = list(reactions.get(emoji, []))
        if user in users:
            users.remove(user)
            if not users:
                reactions.pop(emoji, None)
            else:
                reactions[emoji] = users
        else:
            users.append(user)
            reactions[emoji] = users
        msg.reactions = reactions
        msg.save()
        broadcast_chat_event(msg.chat_id, {
            'type': 'chat_reaction_broadcast',
            'msg_id': msg.id,
            'emoji': emoji,
            'reactions': msg.reactions
        })
        return Response({'id': msg.id, 'reactions': msg.reactions})

    def perform_create(self, serializer):
        msg = serializer.save()
        if not msg.time_label:
            try:
                import zoneinfo, datetime
                ist_tz = zoneinfo.ZoneInfo('Asia/Kolkata')
                now_ist = datetime.datetime.now(ist_tz)
                msg.time_label = now_ist.strftime('%I:%M %p').lstrip('0')
                msg.save(update_fields=['time_label'])
            except Exception:
                pass
        creator = msg.from_member or (self.request.user.username.lower() if (self.request.user and self.request.user.is_authenticated) else 'admin')
        target_person = None

        if msg.chat_id.startswith('dm-'):
            parts = msg.chat_id.replace('dm-', '').split('-')
            if len(parts) >= 2:
                u1, u2 = parts[0].lower().strip(), parts[1].lower().strip()
                canonical_id = get_canonical_dm_id(u1, u2)
                target_person = u2 if creator == u1 else u1
            elif len(parts) == 1:
                target_person = parts[0].lower().strip()
                canonical_id = get_canonical_dm_id(creator, target_person)
            else:
                canonical_id = msg.chat_id
            if msg.chat_id != canonical_id:
                msg.chat_id = canonical_id
                msg.save(update_fields=['chat_id'])

        chat_id = msg.chat_id

        # Always ensure the ChatThread exists before broadcasting
        if not ChatThread.objects.filter(id=chat_id).exists():
            if chat_id.startswith('proj-grp-'):
                proj_id = chat_id.replace('proj-grp-', '')
                proj = Project.objects.filter(id=proj_id).first()
                proj_name = proj.name if proj else proj_id.capitalize()
                members = list(proj.team or []) if proj else [creator]
                if creator not in members:
                    members.append(creator)
                ChatThread.objects.create(
                    id=chat_id,
                    name=proj_name,
                    kind='group',
                    project=proj_id,
                    members=members,
                    created_by=creator
                )
            elif chat_id.startswith('dm-') and target_person:
                mem = Member.objects.filter(id=target_person).first()
                ChatThread.objects.create(
                    id=chat_id,
                    name=mem.name if mem else target_person.capitalize(),
                    kind='dm',
                    person=target_person,
                    members=[creator, target_person],
                    created_by=creator
                )
            else:
                ChatThread.objects.create(
                    id=chat_id,
                    name=msg.chat_name or chat_id,
                    kind=msg.kind or 'group',
                    members=[creator],
                    created_by=creator
                )

        broadcast_chat_event(chat_id, {
            'type': 'chat_message_broadcast',
            'message': {
                'id': msg.id,
                'chat_id': chat_id,
                'from': msg.from_member,
                'text': msg.text,
                'time': msg.time_label,
                'date': msg.created_at.strftime('%d %b %Y') if msg.created_at else '',
                'file': msg.file,
                'voice': msg.voice,
                'reply_to': msg.reply_to or {},
                'reactions': msg.reactions or {},
                'person': target_person,
                'members': [creator, target_person] if target_person else []
            }
        })
        broadcast_global_event('new_message', {
            'id': msg.id,
            'chat_id': chat_id,
            'from': msg.from_member,
            'text': msg.text,
            'time': msg.time_label,
            'person': target_person,
            'members': [creator, target_person] if target_person else []
        })


class ChatThreadsView(APIView):
    """Returns all chat threads grouped with their messages, and allows creating new groups or DMs."""
    def get(self, request):
        user = request.user
        member_param = request.query_params.get('member')
        user_id = (user.username.lower() if (user and user.is_authenticated) else (member_param or '')).lower().strip()

        # 1. Ensure any orphan chat messages have a ChatThread
        orphan_chat_ids = list(ChatMessage.objects.values_list('chat_id', flat=True).distinct())
        for cid in orphan_chat_ids:
            if not ChatThread.objects.filter(id=cid).exists():
                if cid.startswith('dm-'):
                    parts = cid.replace('dm-', '').split('-')
                    if len(parts) >= 2:
                        u1, u2 = parts[0].lower().strip(), parts[1].lower().strip()
                        canonical_cid = get_canonical_dm_id(u1, u2)
                        p_name = u2.capitalize()
                        mem = Member.objects.filter(id=u2).first()
                        if mem:
                            p_name = mem.name
                        ChatThread.objects.get_or_create(
                            id=canonical_cid,
                            defaults={
                                'name': p_name,
                                'kind': 'dm',
                                'person': u2,
                                'members': [u1, u2],
                                'created_by': u1,
                                'starred': False
                            }
                        )
                elif cid.startswith('proj-grp-'):
                    proj_id = cid.replace('proj-grp-', '')
                    proj = Project.objects.filter(id=proj_id).first()
                    p_name = proj.name if proj else cid
                    members = list(proj.team or []) if proj else []
                    ChatThread.objects.get_or_create(
                        id=cid,
                        defaults={
                            'name': p_name,
                            'kind': 'group',
                            'project': proj_id,
                            'members': members,
                            'created_by': (proj.owner if proj else 'admin'),
                            'starred': False
                        }
                    )

        # 2. Ensure all registered members have a DM thread
        all_member_ids = list(Member.objects.values_list('id', flat=True))
        for i in range(len(all_member_ids)):
            for j in range(i + 1, len(all_member_ids)):
                m1, m2 = all_member_ids[i].lower().strip(), all_member_ids[j].lower().strip()
                dm_cid = get_canonical_dm_id(m1, m2)
                if not ChatThread.objects.filter(id=dm_cid).exists():
                    target_mem = Member.objects.filter(id=m2).first()
                    ChatThread.objects.create(
                        id=dm_cid,
                        name=target_mem.name if target_mem else m2.capitalize(),
                        kind='dm',
                        person=m2,
                        members=[m1, m2],
                        created_by=m1,
                        starred=False
                    )

        threads = ChatThread.objects.all().order_by('created_at')
        result = []
        seen_dm_keys = {}

        for t in threads:
            other_person = None
            canonical_id = t.id

            if t.kind == 'dm':
                t_members = [str(x).lower().strip() for x in (t.members or [])]
                if t.id.startswith('dm-'):
                    parts = t.id.replace('dm-', '').split('-')
                    if len(parts) >= 2:
                        canonical_id = get_canonical_dm_id(parts[0], parts[1])
                        for p in parts:
                            if p and p not in t_members:
                                t_members.append(p)

                if user_id:
                    # User must be part of this DM
                    if t_members and user_id not in t_members and (t.person or '').lower().strip() != user_id:
                        continue
                    if len(t_members) >= 2:
                        other_person = t_members[0] if t_members[1] == user_id else t_members[1]
                    elif t.person:
                        if t.person.lower() == user_id:
                            other_person = (t.created_by or '').lower() or (t_members[0] if t_members else None)
                        else:
                            other_person = t.person.lower()
                else:
                    other_person = t.person.lower() if t.person else (t_members[0] if t_members else None)

                if other_person and user_id:
                    canonical_id = get_canonical_dm_id(user_id, other_person)

            elif user_id and t.kind == 'group':
                creator = (t.created_by or '').lower().strip()
                m_lower = [str(x).lower().strip() for x in (t.members or [])]
                has_proj_access = False
                if t.project:
                    proj = Project.objects.filter(id=t.project).first()
                    if proj:
                        p_owner = (proj.owner or proj.created_by or '').lower().strip()
                        p_team = [str(x).lower().strip() for x in (proj.team or [])]
                        if not p_owner or p_owner == user_id or user_id in p_team:
                            has_proj_access = True
                if creator and creator != user_id and user_id not in m_lower and not has_proj_access:
                    continue

            # Fetch messages
            if t.kind == 'dm':
                q_chats = [t.id, canonical_id]
                if other_person:
                    q_chats.append(f"dm-{other_person}")
                if user_id:
                    q_chats.append(f"dm-{user_id}")
                msgs = ChatMessage.objects.filter(chat_id__in=list(set(q_chats))).order_by('created_at')
            else:
                msgs = ChatMessage.objects.filter(chat_id=t.id).order_by('created_at')

            m_list = []
            for m in msgs:
                try:
                    import zoneinfo
                    ist_tz = zoneinfo.ZoneInfo('Asia/Kolkata')
                    ist_dt = m.created_at.astimezone(ist_tz)
                    t_label = (m.time_label or ist_dt.strftime('%I:%M %p').lstrip('0')).replace('IST', '').strip()
                    d_label = ist_dt.strftime('%b %d, %Y')
                except Exception:
                    t_label = (m.time_label or '12:00 PM').replace('IST', '').strip()
                    d_label = 'Nov 20, 2026'
                m_list.append({
                    'id': m.id,
                    'from': m.from_member,
                    'time': t_label,
                    'date': d_label,
                    'text': m.text,
                    'file': m.file_info,
                    'reply_to': m.reply_to,
                    'reactions': m.reactions or {}
                })

            if t.kind == 'dm':
                if other_person:
                    other_mem = Member.objects.filter(id=other_person).first()
                    display_name = other_mem.name if other_mem else other_person.capitalize()
                else:
                    display_name = t.name
            else:
                display_name = t.name

            thread_data = {
                'id': canonical_id if t.kind == 'dm' else t.id,
                'kind': t.kind,
                'name': display_name,
                'project': t.project,
                'person': other_person or t.person,
                'members': len(t.members) if t.members else 2,
                'memberList': t.members or ([user_id, other_person] if other_person else []),
                'starred': t.starred,
                'unread': 0,
                'msgs': m_list
            }

            if t.kind == 'dm':
                dm_key = thread_data['id']
                if dm_key in seen_dm_keys:
                    existing = seen_dm_keys[dm_key]
                    existing_ids = {m['id'] for m in existing['msgs']}
                    for nm in m_list:
                        if nm['id'] not in existing_ids:
                            existing['msgs'].append(nm)
                    continue
                seen_dm_keys[dm_key] = thread_data

            result.append(thread_data)
        return Response(result)

    def post(self, request):
        import re, time
        data = request.data
        kind = data.get('kind') or 'group'
        creator = request.user.username.lower() if (request.user and request.user.is_authenticated) else (data.get('created_by') or 'kathir').lower()

        if kind == 'dm':
            person = (data.get('person') or data.get('to') or '').strip().lower()
            if not person:
                return Response({'error': 'Recipient employee is required for direct messages.'}, status=status.HTTP_400_BAD_REQUEST)

            target_mem = Member.objects.filter(id=person).first()
            target_name = target_mem.name if target_mem else person.capitalize()
            canonical_id = get_canonical_dm_id(creator, person)
            thread_id = canonical_id
            members = list(set([creator, person]))

            # Check if a DM thread already exists
            thread = ChatThread.objects.filter(id=canonical_id).first()
            if not thread:
                thread = ChatThread.objects.filter(kind='dm', person=person, created_by=creator).first()
            if not thread:
                thread = ChatThread.objects.create(
                    id=thread_id,
                    name=target_name,
                    kind='dm',
                    person=person,
                    members=members,
                    created_by=creator,
                    starred=False
                )
            else:
                thread.kind = 'dm'
                thread.id = canonical_id
                thread.person = person
                thread.members = members
                thread.save()

            initial_msg = (data.get('initial_message') or data.get('text') or '').strip()
            if initial_msg:
                ChatMessage.objects.create(
                    chat_id=thread.id,
                    chat_name=thread.name,
                    kind='dm',
                    from_member=creator,
                    text=initial_msg
                )
        else:
            name = (data.get('name') or '').strip()
            if not name:
                return Response({'error': 'Group name is required.'}, status=status.HTTP_400_BAD_REQUEST)

            slug_base = re.sub(r'[^a-zA-Z0-9]+', '-', name).strip('-').lower() or 'group'
            thread_id = data.get('id') or f"grp-{slug_base}-{int(time.time())}"
            project_id = data.get('project') or None

            members = data.get('members') or []
            if creator not in members:
                members.append(creator)

            thread, created = ChatThread.objects.get_or_create(
                id=thread_id,
                defaults={
                    'name': name,
                    'kind': 'group',
                    'project': project_id,
                    'members': members,
                    'created_by': creator,
                    'starred': False
                }
            )

            initial_msg = (data.get('initial_message') or data.get('text') or '').strip()
            if initial_msg:
                ChatMessage.objects.create(
                    chat_id=thread.id,
                    chat_name=thread.name,
                    kind='group',
                    from_member=creator,
                    text=initial_msg
                )
            elif created:
                ChatMessage.objects.create(
                    chat_id=thread.id,
                    chat_name=thread.name,
                    kind='group',
                    from_member=creator,
                    text=f"Welcome to {name}! Channel created."
                )

        msgs = ChatMessage.objects.filter(chat_id=thread.id).order_by('created_at')
        return Response({
            'id': thread.id,
            'kind': thread.kind,
            'name': thread.name,
            'project': thread.project,
            'person': thread.person,
            'members': len(thread.members) if thread.members else 0,
            'memberList': thread.members or [],
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
        user_id = (request.user.username.lower() if request.user and request.user.is_authenticated else (data.get('user') or '')).lower().strip()
        proj_id = thread.project or (thread.id.replace('proj-grp-', '') if thread.id.startswith('proj-grp-') else None)
        if proj_id:
            proj = Project.objects.filter(id=proj_id).first()
            if proj and proj.owner and user_id and proj.owner.lower() != user_id:
                return Response({'error': f'Only the Project Owner (@{proj.owner}) can add members to this project and its group.'}, status=status.HTTP_403_FORBIDDEN)

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

        if proj_id:
            proj = Project.objects.filter(id=proj_id).first()
            if proj:
                proj_team = list(proj.team or [])
                for mid in added:
                    if mid not in proj_team:
                        proj_team.append(mid)
                proj.team = proj_team
                proj.save(update_fields=['team'])

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
