# Kathir Studios – Workspace & Daily Status Platform

A lightweight, full-stack workspace, project tracking, daily status, and team messaging web application built with **Django REST Framework**, **Neon PostgreSQL (Cloud Serverless)**, and an ultra-lightweight **Vanilla JavaScript Single-Page Application (SPA)** frontend, ready for 1-click deployment on **Vercel**.

![Python](https://img.shields.io/badge/Python-3.12-blue.svg)
![Django](https://img.shields.io/badge/Django-5.2-green.svg)
![DRF](https://img.shields.io/badge/Django_REST_Framework-3.16-red.svg)
![Database](https://img.shields.io/badge/PostgreSQL-Neon_Cloud-blue.svg)
![Deployment](https://img.shields.io/badge/Deploy-Vercel-black.svg)
![Frontend](https://img.shields.io/badge/Frontend-Vanilla_JS_/_CSS3-yellow.svg)

---

## 🌟 Key Features

1. **Authentication & Dynamic Users**:
   - Built-in **Register** and **Login** system (`/api/auth/register/`, `/api/auth/login/`).
   - Dynamic user profiles: each user has their own customized presence, availability, daily work logs, and chats.
   - Demo Accounts (pre-seeded):
     - `kathir` / `password123` (Administrator)
     - `arun` / `password123` (Project Lead)
     - `karthik` / `password123` (Backend Developer)
     - Or register any new account directly in the UI!

2. **Projects Management (`#/projects` & `#/project/:id`)**:
   - Multi-view project tracking (Grid and List layouts).
   - Real-time search and status filtering (*In Progress*, *In Review*, *Completed*, *On Hold*).
   - Visual progress indicators with dynamic SVG circular rings and task completion counters.
   - Project detail views with task breakdowns, team members, deliverables, and notes.

3. **Daily Work Log & Timesheet (`#/worklog`)**:
   - Team presence dashboard showing real-time work modes (*In Office*, *WFH*, *Hybrid*).
   - Daily task log entry, time tracking, and productivity summaries.
   - Interactive date navigation.

4. **Team Messenger (`#/messenger`)**:
   - Direct messaging channels and project group chats.
   - Message history with timestamps, file attachment badges, and unread notification indicators.
   - Real-time simulated team responses and typing indicators.

5. **Availability & Status Manager**:
   - Quick availability toggles (*Available*, *Focus Mode*, *In a Meeting*, *Away*).
   - Instant updates across sidebar, team rosters, and the Neon PostgreSQL backend.

---

## 🛠️ Tech Stack & Architecture

* **Backend**:
  * **Framework**: Django 5 + Django REST Framework (DRF)
  * **Database**: Neon Serverless PostgreSQL with SSL pooling
  * **Authentication**: Token Authentication & Session Authentication
  * **Static & Serverless Handling**: WhiteNoise + Vercel Python WSGI Serverless Function
* **Frontend**:
  * Ultra-lightweight Vanilla HTML5, modern CSS3, and ES6+ JavaScript.
  * Zero NPM builds or bundlers needed — instant, snappy loading.
  * Direct asynchronous REST API sync via `fetch()`.

---

## 🚀 REST API Endpoints

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/auth/register/` | `POST` | Register a new user and create their team profile |
| `/api/auth/login/` | `POST` | Authenticate user via username or email; returns token & profile |
| `/api/auth/me/` | `GET` | Get authenticated user info & active team profile |
| `/api/auth/logout/` | `POST` | Invalidate token and log out |
| `/api/members/` | `GET`, `POST` | List and create studio team members |
| `/api/members/<id>/` | `GET`, `PATCH` | Retrieve or update availability and work mode |
| `/api/projects/` | `GET`, `POST` | List and create studio projects |
| `/api/projects/<id>/` | `GET`, `PATCH`, `DELETE` | Retrieve or update specific project details |
| `/api/tasks/` | `GET`, `POST` | List and create tasks (filter by `?project=<id>`) |
| `/api/tasks/<id>/` | `PATCH`, `DELETE` | Toggle task completion status or update |
| `/api/worklogs/` | `GET`, `POST` | List and record daily work logs (filter by `?date=` or `?member=`) |
| `/api/chats/` | `GET`, `POST` | List all chat threads or create a new group channel with members |
| `/api/chats/<id>/add-member/` | `POST` | Add one or more employees to an existing group chat |
| `/api/messages/` | `POST` | Send a new message to a chat channel |
| `/api/stats/` | `GET` | Aggregated dashboard metrics across the workspace |

---

## ⚡ Deploying to Vercel

The project is pre-configured with `vercel.json` and `build_files.sh` for effortless deployment to Vercel.

### Method 1: Deploy via Vercel Dashboard (Recommended)
1. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
2. Select your GitHub repository: **`karthi3345/dailystatus`**.
3. Under **Environment Variables**, add:
   * **`DATABASE_URL`**: `postgresql://neondb_owner:npg_irp5gCjXRP2S@ep-small-sky-betsxfzh-pooler.c-9.us-east-2.aws.neon.tech/neondb?sslmode=require`
   * **`SECRET_KEY`**: Any random secret key string
   * **`DEBUG`**: `False`
4. Click **Deploy**!

### Method 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure `.env`**:
   Ensure `DATABASE_URL` points to your Neon PostgreSQL database (or leave empty to fallback to SQLite).

3. **Run Migrations & Seed Initial Data**:
   ```bash
   python manage.py migrate
   python manage.py seed_data
   ```

4. **Start the Development Server**:
   ```bash
   python manage.py runserver 8000
   ```

5. **Open in Browser**:
   * Application: [http://localhost:8000/](http://localhost:8000/)
   * REST API Root: [http://localhost:8000/api/](http://localhost:8000/api/)
   * Admin Panel: [http://localhost:8000/admin/](http://localhost:8000/admin/)

---

## 📄 License
MIT License. Created for Kathir Studios.
