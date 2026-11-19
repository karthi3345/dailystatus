from django.core.management.base import BaseCommand
from api.models import Member, Project, Task, DailyWorkLog, ChatMessage

class Command(BaseCommand):
    help = 'Seeds initial studio data for projects, members, tasks, work logs, and chats'

    def handle(self, *args, **options):
        self.stdout.write('Seeding Kathir Studios data...')

        # 1. Members
        members_data = [
            {'id': 'kathir', 'name': 'Kathir', 'role': 'Administrator', 'title': 'Administrator', 'availability': 'available', 'mode': 'office', 'today': 'Studio operations & roadmap'},
            {'id': 'arun', 'name': 'Arun', 'role': 'Project Lead', 'title': 'Project Lead', 'availability': 'available', 'mode': 'office', 'today': 'Review sprint & merge'},
            {'id': 'divya', 'name': 'Divya', 'role': 'Frontend', 'title': 'Frontend Developer', 'availability': 'meeting', 'mode': 'wfh', 'today': 'UI changes & test'},
            {'id': 'karthik', 'name': 'Karthik', 'role': 'Backend', 'title': 'Backend Developer', 'availability': 'available', 'mode': 'office', 'today': 'API integration'},
            {'id': 'meena', 'name': 'Meena', 'role': 'UI/UX', 'title': 'UI/UX Designer', 'availability': 'away', 'mode': 'wfh', 'today': 'Design feedback'},
            {'id': 'sathish', 'name': 'Sathish', 'role': 'QA', 'title': 'QA Engineer', 'availability': 'available', 'mode': 'office', 'today': 'Run test cases'},
        ]
        for m in members_data:
            Member.objects.update_or_create(id=m['id'], defaults=m)

        # 2. Projects
        projects_data = [
            {
                'id': 'hotel', 'name': 'Hotel SaaS Platform', 'type': 'SaaS', 'thumb': 'hotel', 'status': 'progress',
                'start': '2026-08-01', 'end': '2026-12-31', 'team': ['arun', 'divya', 'karthik', 'meena', 'sathish'], 'extra': 3,
                'totals': {'total': 128, 'completed': 54, 'inProgress': 38}, 'avg_workload': 72,
                'workload': {'arun': 70, 'divya': 60, 'karthik': 55, 'meena': 80, 'sathish': 40},
                'current_tasks': {'arun': 5, 'divya': 4, 'karthik': 6, 'meena': 5, 'sathish': 3},
                'files': [
                    {'name': 'Design & UI', 'kind': 'folder', 'by': 'meena', 'date': '2026-11-14', 'size': '—'},
                    {'name': 'Development', 'kind': 'folder', 'by': 'karthik', 'date': '2026-11-12', 'size': '—'},
                    {'name': 'Requirements', 'kind': 'folder', 'by': 'arun', 'date': '2026-11-10', 'size': '—'},
                    {'name': 'Test Cases', 'kind': 'folder', 'by': 'sathish', 'date': '2026-11-08', 'size': '—'},
                    {'name': 'Project_BRD.pdf', 'kind': 'pdf', 'by': 'divya', 'date': '2026-11-08', 'size': '2.4 MB'},
                    {'name': 'UI_Design.fig', 'kind': 'fig', 'by': 'meena', 'date': '2026-11-11', 'size': '18.6 MB'},
                    {'name': 'API_Collection.zip', 'kind': 'zip', 'by': 'karthik', 'date': '2026-11-15', 'size': '4.8 MB'},
                ],
                'notes': [
                    {'icon': 'pin', 'title': 'Client Review – Nov 14, 2026', 'body': 'Client approved the new booking flow UI. Minor changes in the room filter will be shared tomorrow.', 'by': 'arun', 'at': 'Nov 14, 10:30 AM'},
                    {'icon': 'clipboard', 'title': 'Sprint Plan – Nov 11, 2026', 'bullets': ['Complete payment integration', 'Start admin dashboard', 'QA for booking flow'], 'by': 'meena', 'at': 'Nov 11, 6:20 PM'},
                    {'icon': 'alert', 'title': 'Pricing Module Update – Nov 8, 2026', 'body': 'Dynamic pricing logic finalized. Will start implementation in this sprint.', 'by': 'karthik', 'at': 'Nov 8, 11:15 AM'},
                ],
                'analytics': {
                    'productivity': {'meena': 92, 'arun': 78, 'divya': 72, 'karthik': 68, 'sathish': 48},
                    'teamProductivity': 74,
                    'time': [['Development', 320, '#8b6cf6'], ['Design', 128, '#4c8dff'], ['Testing', 96, '#2bc46a'], ['Others', 96, '#6e6e78']],
                    'trend': [[0, 2], [0.25, 12], [0.5, 20], [0.72, 28], [0.92, 42]],
                }
            },
            {
                'id': 'volgo', 'name': 'Volgo Student Website', 'type': 'Web', 'thumb': 'mountains', 'status': 'progress',
                'start': '2026-07-01', 'end': '2026-12-15', 'team': ['karthik', 'meena', 'arun', 'divya'], 'extra': 2,
                'totals': {'total': 60, 'completed': 41, 'inProgress': 12}, 'avg_workload': 62,
                'workload': {'arun': 50, 'divya': 45, 'karthik': 60, 'meena': 70, 'sathish': 30},
                'current_tasks': {'karthik': 3, 'meena': 4}, 'files': [], 'notes': [], 'analytics': {}
            },
            {
                'id': 'unity', 'name': 'Unity Game – Project X', 'type': 'Game', 'thumb': 'game', 'status': 'review',
                'start': '2026-05-10', 'end': '2026-12-05', 'team': ['karthik', 'arun'], 'extra': 0,
                'totals': {'total': 100, 'completed': 85, 'inProgress': 10}, 'avg_workload': 65,
                'workload': {'arun': 40, 'divya': 20, 'karthik': 85, 'meena': 30, 'sathish': 50},
                'current_tasks': {'karthik': 2, 'arun': 2}, 'files': [], 'notes': [], 'analytics': {}
            },
            {
                'id': 'edits', 'name': 'Kathir Edits Website', 'type': 'Web', 'thumb': 'film', 'status': 'done',
                'start': '2026-04-01', 'end': '2026-09-30', 'team': ['arun', 'meena'], 'extra': 0,
                'totals': {'total': 42, 'completed': 42, 'inProgress': 0}, 'avg_workload': 0,
                'workload': {'arun': 0, 'divya': 0, 'karthik': 0, 'meena': 0, 'sathish': 0},
                'current_tasks': {}, 'files': [], 'notes': [], 'analytics': {}
            },
            {
                'id': 'cafe', 'name': 'Brew Café Mobile App', 'type': 'Mobile', 'thumb': 'cafe', 'status': 'progress',
                'start': '2026-09-15', 'end': '2027-02-28', 'team': ['divya', 'meena', 'sathish'], 'extra': 0,
                'totals': {'total': 74, 'completed': 18, 'inProgress': 21}, 'avg_workload': 50,
                'workload': {'arun': 20, 'divya': 55, 'karthik': 30, 'meena': 60, 'sathish': 35},
                'current_tasks': {'divya': 3, 'meena': 3}, 'files': [], 'notes': [], 'analytics': {}
            },
            {
                'id': 'crm', 'name': 'CRM Dashboard', 'type': 'SaaS', 'thumb': 'crm', 'status': 'progress',
                'start': '2026-10-01', 'end': '2027-03-31', 'team': ['karthik', 'arun', 'sathish'], 'extra': 1,
                'totals': {'total': 96, 'completed': 22, 'inProgress': 30}, 'avg_workload': 58,
                'workload': {'arun': 45, 'divya': 25, 'karthik': 65, 'meena': 15, 'sathish': 40},
                'current_tasks': {'karthik': 4, 'sathish': 2}, 'files': [], 'notes': [], 'analytics': {}
            },
            {
                'id': 'portfolio', 'name': 'Studio Portfolio Revamp', 'type': 'Web', 'thumb': 'portfolio', 'status': 'done',
                'start': '2026-02-01', 'end': '2026-05-20', 'team': ['meena', 'divya'], 'extra': 0,
                'totals': {'total': 30, 'completed': 30, 'inProgress': 0}, 'avg_workload': 0,
                'workload': {'arun': 0, 'divya': 0, 'karthik': 0, 'meena': 0, 'sathish': 0},
                'current_tasks': {}, 'files': [], 'notes': [], 'analytics': {}
            },
            {
                'id': 'fitness', 'name': 'FitTrack Fitness App', 'type': 'Mobile', 'thumb': 'fitness', 'status': 'hold',
                'start': '2026-06-01', 'end': '2027-01-31', 'team': ['divya', 'karthik'], 'extra': 0,
                'totals': {'total': 64, 'completed': 13, 'inProgress': 0}, 'avg_workload': 10,
                'workload': {'arun': 0, 'divya': 10, 'karthik': 10, 'meena': 0, 'sathish': 0},
                'current_tasks': {}, 'files': [], 'notes': [], 'analytics': {}
            },
        ]
        for p in projects_data:
            Project.objects.update_or_create(id=p['id'], defaults=p)

        # 3. Tasks for Hotel
        hotel_proj = Project.objects.get(id='hotel')
        hotel_tasks = [
            {'title': 'Design system & UI components', 'assignee': 'meena', 'priority': 'High', 'due': '2026-11-20', 'status': 'progress', 'desc': 'Tokens, buttons, inputs, cards and table components for the booking and admin apps.'},
            {'title': 'API integration – Payment', 'assignee': 'karthik', 'priority': 'High', 'due': '2026-11-22', 'status': 'progress', 'desc': 'Razorpay + Stripe gateway, webhooks for refunds and failed payments.'},
            {'title': 'Room booking flow', 'assignee': 'divya', 'priority': 'Medium', 'due': '2026-11-25', 'status': 'pending', 'desc': 'Search → room filter → guest details → payment → confirmation.'},
            {'title': 'Admin dashboard', 'assignee': 'arun', 'priority': 'Medium', 'due': '2026-11-28', 'status': 'progress', 'desc': 'Occupancy, revenue, and branch-level reports for hotel owners.'},
            {'title': 'Testing & bug fixes', 'assignee': 'sathish', 'priority': 'High', 'due': '2026-12-05', 'status': 'pending', 'desc': 'Regression suite for booking flow, pricing module and payments.'},
        ]
        Task.objects.filter(project=hotel_proj).delete()
        for idx, t in enumerate(hotel_tasks):
            Task.objects.create(project=hotel_proj, order=idx + 1, **t)

        # Generic tasks for others
        generic_titles = ['Requirements & scope', 'UI screens', 'Core feature build', 'Integrations', 'QA & release prep']
        for p in Project.objects.exclude(id='hotel'):
            if not Task.objects.filter(project=p).exists():
                for idx, title in enumerate(generic_titles):
                    assignee = p.team[idx % len(p.team)] if p.team else 'arun'
                    status = 'done' if idx == 0 else ('progress' if idx == 1 else 'pending')
                    Task.objects.create(
                        project=p,
                        title=title,
                        assignee=assignee,
                        priority=['High', 'Medium', 'High', 'Medium', 'Low'][idx],
                        due=p.end,
                        status=status,
                        desc=f"{title} for {p.name}.",
                        order=idx + 1
                    )

        # 4. Daily Work Logs
        logs = [
            {'date': '2026-11-17', 'member': 'kathir', 'project': 'hotel', 'items': ['Integrated pricing module and tested.', 'Fixed API response issue.'], 'hours': '5h 30m', 'status': 'done'},
            {'date': '2026-11-16', 'member': 'kathir', 'project': 'unity', 'items': ['Updated character animation.', 'Optimized scene performance.'], 'hours': '6h 00m', 'status': 'progress'},
            {'date': '2026-11-13', 'member': 'kathir', 'project': 'volgo', 'items': ['Implemented country detail page.', 'SEO meta updates.'], 'hours': '4h 30m', 'status': 'done'},
        ]
        DailyWorkLog.objects.all().delete()
        for l in logs:
            DailyWorkLog.objects.create(**l)

        # 5. Chat Messages
        ChatMessage.objects.all().delete()
        chat_msgs = [
            {'chat_id': 'hotel', 'chat_name': 'Project – Hotel SaaS', 'kind': 'group', 'from_member': 'divya', 'time_label': '10:02 AM', 'text': "I've updated the dynamic pricing module.\nPlease review the latest build.", 'file_info': {'name': 'pricing-module-v2.zip', 'size': '12.4 MB'}},
            {'chat_id': 'hotel', 'chat_name': 'Project – Hotel SaaS', 'kind': 'group', 'from_member': 'kathir', 'time_label': '10:18 AM', 'text': "Great! I'll test it today and share feedback."},
            {'chat_id': 'hotel', 'chat_name': 'Project – Hotel SaaS', 'kind': 'group', 'from_member': 'arun', 'time_label': '10:24 AM', 'text': 'Also, we need the final room images for the Aishwarya Grand branch.'},
            {'chat_id': 'unity', 'chat_name': 'Project – Unity Game', 'kind': 'group', 'from_member': 'karthik', 'time_label': '9:47 AM', 'text': 'Build is ready for review.'},
            {'chat_id': 'general', 'chat_name': 'Team – General', 'kind': 'group', 'from_member': 'arun', 'time_label': '9:20 AM', 'text': 'Standup at 11 AM tomorrow.'},
            {'chat_id': 'arun', 'chat_name': 'Arun', 'kind': 'dm', 'from_member': 'arun', 'time_label': 'Yesterday', 'text': 'Can you check the API logs?'},
            {'chat_id': 'meena', 'chat_name': 'Meena', 'kind': 'dm', 'from_member': 'meena', 'time_label': 'Yesterday', 'text': 'UI changes are pushed.'},
        ]
        for m in chat_msgs:
            ChatMessage.objects.create(**m)

        self.stdout.write(self.style.SUCCESS('Successfully seeded Kathir Studios database.'))
