import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.utils import timezone
from .models import ChatMessage, ChatThread, Member, Project, Task, DailyWorkLog

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.chat_id = self.scope['url_route']['kwargs']['chat_id']
        self.room_group_name = f"chat_{self.chat_id}"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        try:
            data = json.loads(text_data)
        except Exception:
            return

        action_type = data.get('type')

        if action_type == 'chat_message':
            text = (data.get('text') or '').strip()
            sender = (data.get('sender') or 'User').lower()
            file_data = data.get('file')
            voice_data = data.get('voice')
            reply_to = data.get('reply_to')

            if not text and not file_data and not voice_data:
                return

            saved_msg = await self.save_message(sender, text, file_data, voice_data, reply_to)

            # Broadcast to room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message_broadcast',
                    'message': saved_msg
                }
            )

        elif action_type == 'typing':
            user = data.get('user', 'User')
            is_typing = data.get('is_typing', True)
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_typing_broadcast',
                    'user': user,
                    'is_typing': is_typing
                }
            )

        elif action_type == 'react':
            msg_id = data.get('msg_id')
            emoji = data.get('emoji')
            user = (data.get('user') or 'User').lower()
            if msg_id and emoji:
                reactions = await self.toggle_reaction(msg_id, emoji, user)
                await self.channel_layer.group_send(
                    self.room_group_name,
                    {
                        'type': 'chat_reaction_broadcast',
                        'msg_id': msg_id,
                        'emoji': emoji,
                        'reactions': reactions
                    }
                )

    async def chat_message_broadcast(self, event):
        await self.send(text_data=json.dumps({
            'type': 'new_message',
            'message': event['message']
        }))

    async def chat_typing_broadcast(self, event):
        await self.send(text_data=json.dumps({
            'type': 'typing',
            'user': event['user'],
            'is_typing': event['is_typing']
        }))

    async def chat_reaction_broadcast(self, event):
        await self.send(text_data=json.dumps({
            'type': 'reaction_update',
            'msg_id': event['msg_id'],
            'emoji': event['emoji'],
            'reactions': event['reactions']
        }))

    @database_sync_to_async
    def save_message(self, sender, text, file_data, voice_data, reply_to):
        try:
            import zoneinfo
            ist_tz = zoneinfo.ZoneInfo('Asia/Kolkata')
            now_ist = timezone.now().astimezone(ist_tz)
            t_label = now_ist.strftime('%I:%M %p IST').lstrip('0')
            d_label = now_ist.strftime('%d %b %Y')
        except Exception:
            t_label = timezone.now().strftime('%I:%M %p')
            d_label = timezone.now().strftime('%d %b %Y')

        thread = ChatThread.objects.filter(id=self.chat_id).first()
        chat_name = thread.name if thread else self.chat_id
        kind = thread.kind if thread else 'group'

        msg = ChatMessage.objects.create(
            chat_id=self.chat_id,
            chat_name=chat_name,
            kind=kind,
            from_member=sender,
            text=text or ('Shared a file' if file_data else 'Voice message'),
            time_label=t_label,
            reply_to=reply_to or {},
            file=file_data,
            voice=voice_data,
            reactions={}
        )

        return {
            'id': msg.id,
            'chat_id': msg.chat_id,
            'from': msg.from_member,
            'text': msg.text,
            'time': t_label,
            'date': d_label,
            'file': msg.file,
            'voice': msg.voice,
            'reply_to': msg.reply_to,
            'reactions': msg.reactions or {}
        }

    @database_sync_to_async
    def toggle_reaction(self, msg_id, emoji, user):
        try:
            msg = ChatMessage.objects.get(id=msg_id)
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
            msg.save(update_fields=['reactions'])
            return reactions
        except Exception:
            return {}


class AppEventsConsumer(AsyncWebsocketConsumer):
    """
    Universal real-time event consumer for project tasks, Kanban card movements,
    availability / work mode updates, and daily worklogs across all users.
    """
    GROUP_NAME = "app_global_events"

    async def connect(self):
        await self.channel_layer.group_add(
            self.GROUP_NAME,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.GROUP_NAME,
            self.channel_name
        )

    async def receive(self, text_data):
        try:
            data = json.loads(text_data)
        except Exception:
            return

        event_name = data.get('event')
        payload = data.get('data', {})

        if event_name:
            await self.channel_layer.group_send(
                self.GROUP_NAME,
                {
                    'type': 'broadcast_app_event',
                    'event': event_name,
                    'data': payload
                }
            )

    async def broadcast_app_event(self, event):
        await self.send(text_data=json.dumps({
            'event': event['event'],
            'data': event['data']
        }))
