from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MemberViewSet, ProjectViewSet, TaskViewSet,
    DailyWorkLogViewSet, ChatMessageViewSet, ChatThreadsView, StatsView
)

router = DefaultRouter()
router.register(r'members', MemberViewSet, basename='member')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'tasks', TaskViewSet, basename='task')
router.register(r'worklogs', DailyWorkLogViewSet, basename='worklog')
router.register(r'messages', ChatMessageViewSet, basename='message')

urlpatterns = [
    path('chats/', ChatThreadsView.as_view(), name='chat-threads'),
    path('stats/', StatsView.as_view(), name='api-stats'),
    path('', include(router.urls)),
]
