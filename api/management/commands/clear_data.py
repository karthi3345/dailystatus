from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from api.models import Member, Project, Task, DailyWorkLog, ChatMessage, ChatThread

class Command(BaseCommand):
    help = 'Clears all users, members, projects, tasks, logs, and chats from the database'

    def handle(self, *args, **options):
        self.stdout.write('Clearing all database records...')
        Token.objects.all().delete()
        User.objects.all().delete()
        Member.objects.all().delete()
        Task.objects.all().delete()
        Project.objects.all().delete()
        DailyWorkLog.objects.all().delete()
        ChatMessage.objects.all().delete()
        ChatThread.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Successfully cleared all records. Database is fresh.'))
