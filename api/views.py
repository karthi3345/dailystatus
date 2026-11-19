from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import viewsets, status
from rest_framework.decorators import action
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
            return Response({'error': 'Incorrect password. Please try again.'}, status=status.HTTP_400_BAD_REQUEST)

        if not user.is_active:
            return Response({'error': 'This account has been disabled. Please contact support.'}, status=status.HTTP_403_FORBIDDEN)

        token, _ = Token.objects.get_or_create(user=user)
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


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.all().order_by('id')

    def _seed_default_projects(self):
        try:
            p1 = Project.objects.create(
                id='runway-rum-mwn689x2',
                name='Volgo Updates',
                type='Web',
                thumb='portfolio',
                status='progress',
                start='2026-11-19',
                end='',
                team=['raja', 'karthik', 'samrat'],
                extra=0,
                totals={'total': 3, 'completed': 2, 'inProgress': 1},
                workload={'raja': 60, 'samrat': 40}
            )
            Task.objects.create(
                project=p1,
                title='Fastsports | tag ID Needed | All Brands',
                key='IPP-3',
                description='Tag ID is needed to add the Fastsports addition\nConnect Slack to update',
                status='done',
                priority='Highest',
                assignee='Sakthivel U',
                reporter='Samrat D',
                subtasks=['Tag ID setup', 'Slack Webhook linking', 'Quality testing'],
                checklist=['Verified tag endpoints', 'Checked staging logs'],
                category='Web',
                task_type='task',
                labels=['All_Projects'],
                due='2026-11-20'
            )
            Task.objects.create(
                project=p1,
                title='Restaurant POS Migration',
                key='IPP-4',
                description='Migrate offline billing logs to realtime websocket sync',
                status='progress',
                priority='High',
                assignee='raja',
                reporter='Karthik',
                due='2026-11-20'
            )
        except Exception:
            pass

    def perform_create(self, serializer):
        project = serializer.save()
        group_id = f"proj-grp-{project.id}"
        group_name = project.name
        creator = self.request.user.username.lower() if (self.request.user and self.request.user.is_authenticated) else 'admin'
        members = list(project.team or [])
        if creator not in members:
            members.append(creator)

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

    def perform_destroy(self, instance):
        group_id = f"proj-grp-{instance.id}"
        ChatThread.objects.filter(id=group_id).delete()
        ChatMessage.objects.filter(chat_id=group_id).delete()
        instance.delete()


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
        log.approved_at = now_ist.strftime('%d %b %Y, %I:%M %p').lstrip('0') + ' IST'
        log.save()
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
        return Response({'id': msg.id, 'reactions': msg.reactions})

    def perform_create(self, serializer):
        msg = serializer.save()
        if not msg.time_label:
            try:
                import zoneinfo, datetime
                ist_tz = zoneinfo.ZoneInfo('Asia/Kolkata')
                now_ist = datetime.datetime.now(ist_tz)
                msg.time_label = now_ist.strftime('%I:%M %p').lstrip('0') + ' IST'
                msg.save(update_fields=['time_label'])
            except Exception:
                pass
        chat_id = msg.chat_id
        if not ChatThread.objects.filter(id=chat_id).exists():
            creator = msg.from_member or (self.request.user.username.lower() if (self.request.user and self.request.user.is_authenticated) else 'admin')
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
            elif Member.objects.filter(id=chat_id).exists() or chat_id.startswith('dm-'):
                clean_person = chat_id.replace('dm-', '').split('-')[-1].lower()
                existing_thread = ChatThread.objects.filter(kind='dm', person=clean_person).first()
                if existing_thread:
                    if msg.chat_id != existing_thread.id:
                        msg.chat_id = existing_thread.id
                        msg.save(update_fields=['chat_id'])
                else:
                    mem = Member.objects.filter(id=clean_person).first()
                    ChatThread.objects.create(
                        id=chat_id,
                        name=mem.name if mem else clean_person.capitalize(),
                        kind='dm',
                        person=clean_person,
                        members=[creator, clean_person],
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


class ChatThreadsView(APIView):
    """Returns all chat threads grouped with their messages, and allows creating new groups or DMs."""
    def get(self, request):
        threads = ChatThread.objects.all().order_by('created_at')
        result = []
        seen_dm_persons = {}

        for t in threads:
            msgs = ChatMessage.objects.filter(chat_id=t.id).order_by('created_at')
            m_list = []
            for m in msgs:
                try:
                    import zoneinfo
                    ist_tz = zoneinfo.ZoneInfo('Asia/Kolkata')
                    ist_dt = m.created_at.astimezone(ist_tz)
                    t_label = m.time_label or ist_dt.strftime('%I:%M %p').lstrip('0')
                    d_label = ist_dt.strftime('%d %b %Y')
                except Exception:
                    t_label = m.time_label or '12:00 PM'
                    d_label = '19 Nov 2026'
                if 'IST' not in t_label:
                    t_label = f"{t_label} IST"
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

            thread_data = {
                'id': t.id,
                'kind': t.kind,
                'name': t.name,
                'project': t.project,
                'person': t.person,
                'members': len(t.members) if t.members else 0,
                'memberList': t.members or [],
                'starred': t.starred,
                'unread': 0,
                'msgs': m_list
            }

            if t.kind == 'dm' and t.person:
                p_key = t.person.lower().strip()
                if p_key in seen_dm_persons:
                    # Merge messages into the existing canonical thread
                    existing = seen_dm_persons[p_key]
                    existing['msgs'].extend(m_list)
                    continue
                seen_dm_persons[p_key] = thread_data

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
            thread_id = data.get('id') or f"dm-{person}"
            members = list(set([creator, person]))

            # Check if a DM thread already exists for this person
            thread = ChatThread.objects.filter(kind='dm', person=person).first()
            if not thread:
                thread = ChatThread.objects.filter(id=thread_id).first()
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
                thread.person = person
                if not thread.members:
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
