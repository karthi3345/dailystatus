from django.contrib import admin
from .models import Member, Project, Task, DailyWorkLog, ChatMessage, ChatThread

@admin.register(ChatThread)
class ChatThreadAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'kind', 'created_by', 'created_at')
    list_filter = ('kind', 'created_by')

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'role', 'availability', 'mode')
    list_filter = ('availability', 'mode')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'type', 'status', 'start', 'end')
    list_filter = ('status', 'type')

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'project', 'assignee', 'priority', 'status', 'due')
    list_filter = ('status', 'priority', 'project')

@admin.register(DailyWorkLog)
class DailyWorkLogAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'member', 'project', 'hours', 'status')
    list_filter = ('date', 'member', 'project')

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'chat_id', 'from_member', 'text', 'created_at')
    list_filter = ('chat_id', 'from_member')
