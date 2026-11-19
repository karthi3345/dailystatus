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
    start = models.CharField(max_length=20, default='2026-01-01')
    end = models.CharField(max_length=20, default='2026-12-31')
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
    assignee = models.CharField(max_length=50, blank=True, null=True)
    priority = models.CharField(max_length=30, default='Medium')
    due = models.CharField(max_length=30, blank=True)
    status = models.CharField(max_length=30, default='progress')
    desc = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"[{self.project.id}] {self.title}"


class DailyWorkLog(models.Model):
    date = models.CharField(max_length=20, db_index=True)
    member = models.CharField(max_length=50, default='kathir')
    project = models.CharField(max_length=50, default='hotel')
    items = models.JSONField(default=list)
    hours = models.CharField(max_length=30, default='0h 00m')
    status = models.CharField(max_length=30, default='done')

    def __str__(self):
        return f"{self.date} - {self.member} ({self.hours})"


class ChatMessage(models.Model):
    chat_id = models.CharField(max_length=50, db_index=True)
    chat_name = models.CharField(max_length=150, blank=True)
    kind = models.CharField(max_length=20, default='group')
    from_member = models.CharField(max_length=50)
    text = models.TextField()
    time_label = models.CharField(max_length=50, blank=True)
    file_info = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"[{self.chat_id}] {self.from_member}: {self.text[:30]}"
