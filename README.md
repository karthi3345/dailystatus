# Kathir Studios – Workspace & Daily Status Platform

A lightweight, high-performance workspace and daily work logging web application built with **Django REST Framework**, **PostgreSQL**, and a modern, dependency-free **Vanilla JavaScript Single-Page Application (SPA)** frontend.

![Python](https://img.shields.io/badge/Python-3.12-blue.svg)
![Django](https://img.shields.io/badge/Django-5.2-green.svg)
![DRF](https://img.shields.io/badge/Django_REST_Framework-3.16-red.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue.svg)
![Frontend](https://img.shields.io/badge/Frontend-Vanilla_JS_/_CSS3-yellow.svg)

---

## 🌟 Key Features

1. **Projects Management (`#/projects` & `#/project/:id`)**:
   - Multi-view project tracking (Grid and List layouts).
   - Real-time search and status filtering (*In Progress*, *In Review*, *Completed*, *On Hold*).
   - Visual progress indicators with dynamic SVG circular rings and task completion counters.
   - Project detail views with task breakdowns, team members, deliverables, and notes.

2. **Daily Work Log & Timesheet (`#/worklog`)**:
   - Team presence dashboard showing real-time work modes (*In Office*, *WFH*, *Hybrid*).
   - Daily task log entry, time tracking, and productivity summaries.
   - Interactive date navigation.

3. **Team Messenger (`#/messenger`)**:
   - Direct messaging channels and project group chats.
   - Message history with timestamps, file attachment badges, and unread notification indicators.
   - Real-time simulated team responses and typing indicators.

4. **Availability & Status Manager**:
   - Quick availability toggles (*Available*, *Focus Mode*, *In a Meeting*, *Away*).
   - Instant updates across sidebar, team rosters, and backend database.

---

## 🛠️ Architecture & Tech Stack

* **Backend**:
  * **Framework**: Django 5 + Django REST Framework (DRF)
  * **Database**: PostgreSQL (with automatic development fallback to SQLite if PostgreSQL credentials are not set)
  * **Middleware**: `django-cors-headers` for cross-origin requests, `whitenoise` for fast static asset delivery.
* **Frontend**:
  * Ultra-lightweight Vanilla HTML5, CSS3, and modern JavaScript (ES6+).
  * Zero NPM builds, zero bundlers, instant loading and zero lag.
  * Direct asynchronous REST API sync via `fetch()`.

---

## 🚀 REST API Endpoints

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/members/` | `GET`, `POST` | List and create studio team members |
| `/api/members/<id>/` | `GET`, `PATCH` | Retrieve or update availability and work mode |
| `/api/projects/` | `GET`, `POST` | List and create studio projects |
| `/api/projects/<id>/` | `GET`, `PATCH`, `DELETE` | Retrieve or update specific project details |
| `/api/tasks/` | `GET`, `POST` | List and create tasks (filter by `?project=<id>`) |
| `/api/tasks/<id>/` | `PATCH`, `DELETE` | Toggle task completion status or update |
| `/api/worklogs/` | `GET`, `POST` | List and record daily work logs (filter by `?date=` or `?member=`) |
| `/api/chats/` | `GET` | Get all chat channels with their messages |
| `/api/messages/` | `POST` | Send a new message to a chat channel |
| `/api/stats/` | `GET` | Aggregated dashboard metrics across the workspace |

---

## 📦 Getting Started

### 1. Prerequisites
* Python 3.10+
* PostgreSQL (Optional for local development; SQLite works out-of-the-box)

### 2. Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/karthi3345/dailystatus.git
   cd dailystatus
   ```

2. **Create and activate a virtual environment** (optional):
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # Linux/Mac:
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   For PostgreSQL, configure `DATABASE_URL`:
   ```env
   DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/dailystatus_db
   ```
   *(If left blank or unavailable, the backend automatically uses SQLite)*.

5. **Run Migrations & Seed Initial Data**:
   ```bash
   python manage.py makemigrations api
   python manage.py migrate
   python manage.py seed_data
   ```

6. **Start the Development Server**:
   ```bash
   python manage.py runserver 8000
   ```

7. **Open Application**:
   Open your browser and navigate to:
   - Web App: [http://localhost:8000/](http://localhost:8000/)
   - REST API Root: [http://localhost:8000/api/](http://localhost:8000/api/)
   - Admin Panel: [http://localhost:8000/admin/](http://localhost:8000/admin/)

---

## 📄 License
MIT License. Created for Kathir Studios.
