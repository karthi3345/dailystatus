import json
import urllib.parse
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.utils import timezone
from .models import ChatMessage, ChatThread, Member, Project, Task, DailyWorkLog

def get_canonical_dm_id(u1, u2):
    p1 = str(u1 or '').lower().strip()
    p2 = str(u2 or '').lower().strip()
    sorted_users = sorted([p1, p2])
    return f"dm-{sorted_users[0]}-{sorted_users[1]}"

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.chat_id = self.scope['url_route']['kwargs']['chat_id']
        self.room_groups = set([f"chat_{self.chat_id}"])

        # Determine user from scope or query parameters
        user = self.scope.get('user')
        current_username = user.username.lower() if user and user.is_authenticated else None
        if not current_username:
            query_string = self.scope.get('query_string', b'').decode('utf-8')
            params = urllib.parse.parse_qs(query_string)
            current_username = params.get('user', [None])[0]
        if current_username:
            current_username = current_username.lower().strip()

        # Handle canonical DM room groups
        if self.chat_id.startswith('dm-'):
            parts = self.chat_id.replace('dm-', '').split('-')
            if len(parts) >= 2:
                canonical = get_canonical_dm_id(parts[0], parts[1])
                self.room_groups.add(f"chat_{canonical}")
                self.room_groups.add(f"chat_dm-{parts[0].lower()}")
                self.room_groups.add(f"chat_dm-{parts[1].lower()}")
            elif len(parts) == 1 and current_username:
                target_user = parts[0].lower().strip()
                canonical = get_canonical_dm_id(current_username, target_user)
                self.room_groups.add(f"chat_{canonical}")
                self.room_groups.add(f"chat_dm-{target_user}")
                self.room_groups.add(f"chat_dm-{current_username}")

        for grp in self.room_groups:
            await self.channel_layer.group_add(grp, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        for grp in getattr(self, 'room_groups', [f"chat_{self.chat_id}"]):
            await self.channel_layer.group_discard(grp, self.channel_name)

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

            saved_msg, extra_groups = await self.save_message(sender, text, file_data, voice_data, reply_to)

            all_groups = set(getattr(self, 'room_groups', [f"chat_{self.chat_id}"]))
            all_groups.update(extra_groups)

            # Broadcast to all matched room groups
            for grp in all_groups:
                await self.channel_layer.group_send(
                    grp,
                    {
                        'type': 'chat_message_broadcast',
                        'message': saved_msg
                    }
                )

            # Also broadcast to app_global_events for unread badge & background update across all open tabs
            await self.channel_layer.group_send(
                "app_global_events",
                {
                    'type': 'broadcast_app_event',
                    'event': 'new_message',
                    'data': saved_msg
                }
            )

        elif action_type == 'typing':
            user = data.get('user', 'User')
            is_typing = data.get('is_typing', True)
            for grp in getattr(self, 'room_groups', [f"chat_{self.chat_id}"]):
                await self.channel_layer.group_send(
                    grp,
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
                for grp in getattr(self, 'room_groups', [f"chat_{self.chat_id}"]):
                    await self.channel_layer.group_send(
                        grp,
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
            t_label = now_ist.strftime('%I:%M %p').lstrip('0').replace('IST', '').strip()
            d_label = now_ist.strftime('%b %d, %Y')
        except Exception:
            t_label = timezone.now().strftime('%I:%M %p').lstrip('0').replace('IST', '').strip()
            d_label = timezone.now().strftime('%b %d, %Y')

        chat_id = self.chat_id
        extra_groups = set()
        target_person = None
        members = [sender]

        if chat_id.startswith('dm-'):
            parts = chat_id.replace('dm-', '').split('-')
            if len(parts) >= 2:
                u1, u2 = parts[0].lower().strip(), parts[1].lower().strip()
                chat_id = get_canonical_dm_id(u1, u2)
                members = [u1, u2]
                target_person = u2 if sender == u1 else u1
            elif len(parts) == 1:
                target_person = parts[0].lower().strip()
                chat_id = get_canonical_dm_id(sender, target_person)
                members = [sender, target_person]

            extra_groups.add(f"chat_{chat_id}")
            if target_person:
                extra_groups.add(f"chat_dm-{target_person}")
            extra_groups.add(f"chat_dm-{sender}")

        thread = ChatThread.objects.filter(id=chat_id).first()
        if not thread and chat_id.startswith('dm-') and target_person:
            # Check legacy thread or create canonical
            target_mem = Member.objects.filter(id=target_person).first()
            p_name = target_mem.name if target_mem else target_person.capitalize()
            thread = ChatThread.objects.create(
                id=chat_id,
                name=p_name,
                kind='dm',
                person=target_person,
                members=members,
                created_by=sender
            )
        elif thread and chat_id.startswith('dm-') and target_person:
            # Keep thread members synced
            t_mems = list(thread.members or [])
            changed = False
            for m in members:
                if m not in t_mems:
                    t_mems.append(m)
                    changed = True
            if changed:
                thread.members = t_mems
                thread.save(update_fields=['members'])

        chat_name = thread.name if thread else chat_id
        kind = thread.kind if thread else ('dm' if chat_id.startswith('dm-') else 'group')

        media_info = voice_data if voice_data else file_data
        default_text = 'Voice message' if voice_data else (file_data.get('name') if (isinstance(file_data, dict) and file_data.get('name')) else 'Shared media')
        msg = ChatMessage.objects.create(
            chat_id=chat_id,
            chat_name=chat_name,
            kind=kind,
            from_member=sender,
            text=text or default_text,
            time_label=t_label,
            reply_to=reply_to or {},
            file_info=media_info,
            reactions={}
        )

        return {
            'id': msg.id,
            'chat_id': msg.chat_id,
            'from': msg.from_member,
            'text': msg.text,
            'time': t_label,
            'date': d_label,
            'created_at': msg.created_at.isoformat() if msg.created_at else None,
            'file_info': media_info,
            'file': file_data,
            'voice': voice_data,
            'reply_to': msg.reply_to,
            'reactions': msg.reactions or {},
            'members': members,
            'person': target_person
        }, extra_groups

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
