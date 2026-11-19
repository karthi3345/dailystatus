from django.db import models

class Member(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    title = models.CharField(max_length=100, blank=True)
    availability = models.CharField(max_length=30, default='available')
    mode = models.CharField(max_length=30, default='office')
    today = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.name} ({self.id})"


class Project(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=150)
    type = models.CharField(max_length=50, default='Web')
    thumb = models.CharField(max_length=50, default='hotel')
    status = models.CharField(max_length=30, default='progress')
    start = models.CharField(max_length=50, default='2026-01-01', blank=True)
    end = models.CharField(max_length=50, default='', blank=True)
    team = models.JSONField(default=list)
    extra = models.IntegerField(default=0)
    totals = models.JSONField(default=dict)
    workload = models.JSONField(default=dict)
    avg_workload = models.IntegerField(default=0)
    current_tasks = models.JSONField(default=dict)
    files = models.JSONField(default=list)
    notes = models.JSONField(default=list)
    analytics = models.JSONField(default=dict)

    def __str__(self):
        return self.name


class Task(models.Model):
    project = models.ForeignKey(Project, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    key = models.CharField(max_length=50, blank=True, default='')
    task_type = models.CharField(max_length=30, default='task')  # bug, epic, story, task
    category = models.CharField(max_length=50, blank=True, default='')
    checklist = models.JSONField(default=list, blank=True)
    assignee = models.CharField(max_length=50, blank=True, null=True)
    reporter = models.CharField(max_length=50, blank=True, default='')
    priority = models.CharField(max_length=30, default='Medium')
    labels = models.JSONField(default=list, blank=True)
    attachments = models.JSONField(default=list, blank=True)
    comments = models.JSONField(default=list, blank=True)
    worklogs = models.JSONField(default=list, blank=True)
    due = models.CharField(max_length=30, blank=True, default='')
    status = models.CharField(max_length=30, default='pending')
    desc = models.TextField(blank=True, default='')
    approver = models.CharField(max_length=50, blank=True, default='')
    approval_status = models.CharField(max_length=30, default='none')  # none, pending, approved, rejected
    approved_by = models.CharField(max_length=50, blank=True, default='')
    approved_at = models.CharField(max_length=50, blank=True, default='')
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return f"[{self.project.id}] {self.title}"


class DailyWorkLog(models.Model):
    date = models.CharField(max_length=20, db_index=True)
    member = models.CharField(max_length=50, default='kathir')
    project = models.CharField(max_length=50, default='hotel')
    items = models.JSONField(default=list)
    hours = models.CharField(max_length=30, default='0h 00m')
    status = models.CharField(max_length=30, default='progress')  # 'progress', 'done', 'dependency'
    dependency = models.TextField(blank=True, default='')
    lead = models.CharField(max_length=50, blank=True, default='')
    resolved = models.BooleanField(default=False)
    resolved_at = models.CharField(max_length=50, blank=True, default='')
    help_note = models.TextField(blank=True, default='')
    approval_status = models.CharField(max_length=30, default='pending')  # 'pending', 'approved', 'rejected'
    approved_by = models.CharField(max_length=50, blank=True, default='')
    approved_at = models.CharField(max_length=50, blank=True, default='')
    approval_note = models.TextField(blank=True, default='')
    target_date = models.CharField(max_length=30, blank=True, default='')

    def __str__(self):
        return f"{self.date} - {self.member} ({self.hours}) [{self.status}]"


class ChatThread(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=150)
    kind = models.CharField(max_length=20, default='group')  # 'group' or 'dm'
    project = models.CharField(max_length=50, blank=True, null=True)
    person = models.CharField(max_length=50, blank=True, null=True)  # for dm
    members = models.JSONField(default=list)  # list of member ids: ['kathir', 'arun', 'divya']
    created_by = models.CharField(max_length=50, default='kathir')
    starred = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.kind})"


class ChatMessage(models.Model):
    chat_id = models.CharField(max_length=50, db_index=True)
    chat_name = models.CharField(max_length=150, blank=True)
    kind = models.CharField(max_length=20, default='group')
    from_member = models.CharField(max_length=50)
    text = models.TextField()
    time_label = models.CharField(max_length=50, blank=True)
    file_info = models.JSONField(null=True, blank=True)
    reply_to = models.JSONField(null=True, blank=True)
    reactions = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"[{self.chat_id}] {self.from_member}: {self.text[:30]}"
