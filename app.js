/* ==========================================================
   Kathir Studios – Workspace app
   One shared data store drives every screen, so a change in
   one place (task status, availability, a new log or message)
   shows up everywhere it is used.
   ========================================================== */

/* ---------------- Icons ---------------- */
const ICONS = {
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  checkSquare: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 12 3 3 5-6"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  more: '<circle cx="12" cy="5" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="12" cy="19" r="1.2"/>',
  chevDown: '<path d="m6 9 6 6 6-6"/>',
  chevLeft: '<path d="m15 18-6-6 6-6"/>',
  chevRight: '<path d="m9 18 6-6-6-6"/>',
  arrowRight: '<path d="M5 12h14M13 5l7 7-7 7"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  swap: '<path d="M4 8h16M16 4l4 4-4 4M20 16H4M8 12l-4 4 4 4"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  video: '<path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  clip: '<path d="m21.4 11.1-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checks: '<path d="M18 6 7 17l-5-5M22 10l-7.5 7.5L13 16"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  reply: '<path d="m9 14-5-5 5-5"/><path d="M4 9h11a5 5 0 0 1 5 5v2"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.3l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  edit: '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.4 2.6a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  pin: '<path d="M12 17v5"/><path d="M9 10.8a2 2 0 0 1-1.1 1.8l-1.8.9A2 2 0 0 0 5 15.2V17h14v-1.8a2 2 0 0 0-1.1-1.7l-1.8-.9a2 2 0 0 1-1.1-1.8V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
  clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  hourglass: '<path d="M6 2h12M6 22h12M7 2v4a5 5 0 0 0 10 0V2M7 22v-4a5 5 0 0 1 10 0v4"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  pendingSq: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 7v5l3 2"/>',
  slashCircle: '<circle cx="12" cy="12" r="10"/><line x1="5" y1="5" x2="19" y2="19"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  bookmark: '<path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  alertCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
};
const PLAY = '<svg class="ic" viewBox="0 0 24 24"><path class="fill" d="M7 4.5v15l13-7.5z"/></svg>';
const PAUSE = '<svg class="ic" viewBox="0 0 24 24"><rect class="fill" x="6" y="4.5" width="4" height="15" rx="1"/><rect class="fill" x="14" y="4.5" width="4" height="15" rx="1"/></svg>';
const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24">${ICONS[n] || ''}</svg>`;

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* ---------------- Illustrated avatars ---------------- */
const LOOKS = {
  kathir:  { skin: '#c98f62', hair: '#1d1410', beard: true,  bg: '#3a2d22', shirt: '#e8e3da' },
  arun:    { skin: '#b97f55', hair: '#17110d', beard: true,  bg: '#2d3542', shirt: '#2f6fb0' },
  divya:   { skin: '#d39a72', hair: '#1a110c', female: true, bg: '#4a3628', shirt: '#c96f4d' },
  karthik: { skin: '#c48659', hair: '#1a120d', beard: true,  bg: '#3b2f27', shirt: '#efe9df' },
  meena:   { skin: '#c88e64', hair: '#22150e', female: true, bg: '#3f2a2a', shirt: '#b8425a' },
  sathish: { skin: '#a8714a', hair: '#141010', beard: false, bg: '#2b3a33', shirt: '#3f7d5c' },
};
function avatarSVG(id) {
  const l = LOOKS[id] || { skin: '#c48659', hair: '#222', bg: '#333', shirt: '#888' };
  const backHair = l.female ? `<path d="M9 19c0-9 5-13 11-13s11 4 11 13v11c-2 2-5 3-11 3S11 32 9 30z" fill="${l.hair}"/>` : '';
  const topHair = l.female
    ? `<path d="M12 18c0-6 3.5-9.5 8-9.5s8 3.5 8 9.5c-2-3.5-5-5-8.5-5.2-2.6 1.8-5 3.4-7.5 5.2z" fill="${l.hair}"/>`
    : `<path d="M12.6 17.5c-.9-6.6 3-9.8 7.6-9.8 4.8 0 8.4 3 7.3 9.8-.8-2.4-2.4-4.2-4.9-4.6-2.6.9-6.4.6-8.2.1-.9 1.1-1.5 2.6-1.8 4.5z" fill="${l.hair}"/>`;
  const beard = l.beard ? `<path d="M13 19.5c.3 5.6 3.3 8.4 7 8.4s6.7-2.8 7-8.4c-.9 2.4-2.6 3.6-4.2 3.8-1 .2-1.6-.6-2.8-.6s-1.8.8-2.8.6c-1.6-.2-3.3-1.4-4.2-3.8z" fill="${l.hair}" opacity=".9"/>` : '';
  return `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="${l.bg}"/>${backHair}
    <path d="M6 41c1.2-7.5 6.6-10.5 14-10.5S32.8 33.5 34 41z" fill="${l.shirt}"/>
    <path d="M17 26h6v5.2c-1 1-2 1.4-3 1.4s-2-.4-3-1.4z" fill="${l.skin}" filter="brightness(.9)"/>
    <ellipse cx="20" cy="18.6" rx="7.3" ry="8.6" fill="${l.skin}"/>
    <ellipse cx="12.8" cy="19.5" rx="1.3" ry="2" fill="${l.skin}"/><ellipse cx="27.2" cy="19.5" rx="1.3" ry="2" fill="${l.skin}"/>
    ${topHair}${beard}
    <circle cx="17.3" cy="18.6" r=".9" fill="#1a120d"/><circle cx="22.7" cy="18.6" r=".9" fill="#1a120d"/>
    <path d="M16 16.6q1.3-.8 2.6 0M21.4 16.6q1.3-.8 2.6 0" stroke="${l.hair}" stroke-width=".8" fill="none" stroke-linecap="round"/>
    <path d="M18.2 23.3q1.8 1 3.6 0" stroke="#7a3e2a" stroke-width=".8" fill="none" stroke-linecap="round"/></svg>`;
}
const av = (id, size = 's26', extra = '') => `<span class="av ${size} clickable" data-profile="${id}">${avatarSVG(id)}${extra}</span>`;

/* ---------------- Project thumbnails ---------------- */
const THUMBS = {
  mountains: `<svg viewBox="0 0 74 50" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="tm1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb8e8"/><stop offset="1" stop-color="#d6ecf7"/></linearGradient></defs><rect width="74" height="50" fill="url(#tm1)"/><path d="M0 34 14 16l8 9 12-17 14 18 8-8 18 16v26H0z" fill="#5c7f8f"/><path d="M34 8l4 6-3-1-3 3-2-2z" fill="#fff"/><path d="M0 38 18 26l14 10 16-8 26 12v10H0z" fill="#3f8a4a"/><path d="M0 43c20-3 50-3 74 0v7H0z" fill="#3a9bc0"/></svg>`,
  hotel: `<svg viewBox="0 0 74 50" preserveAspectRatio="xMidYMid slice"><rect width="74" height="50" fill="#a5774a"/><rect x="0" y="0" width="74" height="30" fill="#c99862"/><rect x="6" y="5" width="16" height="18" fill="#f6d9a2" opacity=".75"/><rect x="50" y="6" width="18" height="12" fill="#e9c38a" opacity=".6"/><circle cx="58" cy="22" r="4" fill="#ffe2a6"/><circle cx="58" cy="22" r="9" fill="#ffd27a" opacity=".25"/><rect x="14" y="24" width="40" height="8" rx="2" fill="#6e4426"/><rect x="12" y="30" width="46" height="12" rx="2" fill="#f4efe6"/><rect x="16" y="27" width="12" height="6" rx="2" fill="#fff"/><rect x="31" y="27" width="12" height="6" rx="2" fill="#fff"/><rect x="12" y="37" width="46" height="5" fill="#b9876a"/><rect y="44" width="74" height="6" fill="#5b3a22"/></svg>`,
  game: `<svg viewBox="0 0 74 50" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="tg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2440"/><stop offset="1" stop-color="#3a4570"/></linearGradient><radialGradient id="tg2" cx=".5" cy=".7" r=".5"><stop offset="0" stop-color="#ff9a3c" stop-opacity=".9"/><stop offset="1" stop-color="#ff9a3c" stop-opacity="0"/></radialGradient></defs><rect width="74" height="50" fill="url(#tg1)"/><circle cx="58" cy="10" r="5" fill="#cfd8ff" opacity=".8"/><rect y="28" width="74" height="22" fill="url(#tg2)"/><path d="M0 40h74v10H0z" fill="#121828"/><path d="M34 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM33 20h8l2 10-2 1-1 10h-2l-1-8-1 8h-2l-1-10-2-1z" fill="#0c0f1c"/><path d="M42 21l8-6" stroke="#9fb4ff" stroke-width="1.2"/><path d="M10 30l4-12 4 12zM60 32l3-9 3 9z" fill="#0f1426"/></svg>`,
  film: `<svg viewBox="0 0 74 50" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="tf1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f49b3a"/><stop offset=".6" stop-color="#f6c063"/><stop offset="1" stop-color="#6a3a14"/></linearGradient></defs><rect width="74" height="50" fill="url(#tf1)"/><circle cx="52" cy="26" r="8" fill="#ffe8a8"/><rect y="36" width="74" height="14" fill="#3a1f0c"/><rect x="18" y="16" width="20" height="12" rx="2" fill="#1d120a"/><circle cx="22" cy="13" r="4" fill="#1d120a"/><circle cx="31" cy="13" r="4" fill="#1d120a"/><path d="M38 19l7-3v12l-7-3z" fill="#1d120a"/><path d="M28 28l-7 18M28 28l7 18M28 28v18" stroke="#1d120a" stroke-width="1.6"/></svg>`,
  cafe: `<svg viewBox="0 0 74 50"><rect width="74" height="50" fill="#3b2a22"/><rect x="26" y="14" width="22" height="24" rx="4" fill="#f0e2cf"/><path d="M48 20h4a4 4 0 0 1 0 8h-4" stroke="#f0e2cf" stroke-width="3" fill="none"/><path d="M31 10c0-3 3-3 3-6M38 10c0-3 3-3 3-6" stroke="#bfa58a" stroke-width="1.6" fill="none"/></svg>`,
  crm: `<svg viewBox="0 0 74 50"><rect width="74" height="50" fill="#1d2a3a"/><rect x="8" y="8" width="58" height="34" rx="3" fill="#24364b"/><path d="M14 34l10-10 8 6 12-14 10 8" stroke="#4c8dff" stroke-width="2.4" fill="none"/><rect x="14" y="12" width="14" height="3" rx="1.5" fill="#f5b82e"/></svg>`,
  portfolio: `<svg viewBox="0 0 74 50"><rect width="74" height="50" fill="#2a2430"/><rect x="8" y="9" width="26" height="32" rx="3" fill="#8b6cf6"/><rect x="38" y="9" width="28" height="14" rx="3" fill="#f5b82e"/><rect x="38" y="27" width="28" height="14" rx="3" fill="#2bc46a"/></svg>`,
  fitness: `<svg viewBox="0 0 74 50"><rect width="74" height="50" fill="#2c1e1e"/><rect x="14" y="21" width="46" height="8" rx="2" fill="#bdbdc4"/><rect x="10" y="14" width="8" height="22" rx="2" fill="#f06464"/><rect x="56" y="14" width="8" height="22" rx="2" fill="#f06464"/></svg>`,
};

/* ---------------- Dynamic Data store ---------------- */
let AUTH_TOKEN = localStorage.getItem('kathir_auth_token') || null;
let ME = (AUTH_TOKEN && localStorage.getItem('kathir_auth_user')) ? localStorage.getItem('kathir_auth_user') : '';

const PEOPLE = {};
const TITLES = {};
let MEMBER_ROWS = [];

const AVAIL = {
  available: { label: 'Available', cls: 'available' },
  meeting:   { label: 'In a Meeting', cls: 'meeting' },
  away:      { label: 'Away (1 hr)', short: 'Away', cls: 'away' },
  dnd:       { label: 'Do Not Disturb', cls: 'dnd' },
  absent:    { label: 'Absent Today', short: 'Absent', cls: 'absent' },
};
const MODES = {
  office: { label: 'Office', long: 'Work from Office', icon: 'building' },
  wfh:    { label: 'WFH', long: 'Work from Home', icon: 'home' },
  hybrid: { label: 'Hybrid', long: 'Hybrid', icon: 'swap' },
};

const STATUS = {
  progress: { label: 'In Progress', cls: 'progress' },
  review:   { label: 'In Review', cls: 'review' },
  done:     { label: 'Completed', cls: 'done' },
  hold:     { label: 'On Hold', cls: 'hold' },
};

const TASK_TYPES = {
  task:  { label: 'Task',  icon: 'checkSquare', cls: 'task' },
  bug:   { label: 'Bug',   icon: 'alertCircle', cls: 'bug' },
  story: { label: 'Story', icon: 'bookmark',    cls: 'story' },
  epic:  { label: 'Epic',  icon: 'zap',         cls: 'epic' },
};

const projects = [];
const workLogs = [];
const chats = [];

function getTaskEffectiveStatus(t, curDate = state.currentDate || state.logDate || isoDate(new Date())) {
  if (!t) return 'pending';
  // If task has due date (e.g. 2026-11-20):
  // On Nov 19 (< due): Status is 'progress' (In Progress)
  // On Nov 20 (>= due): Status is 'done' (Completed)
  if (t.due && /^\d{4}-\d{2}-\d{2}$/.test(t.due)) {
    if (curDate < t.due) {
      return 'progress';
    } else {
      return 'done';
    }
  }
  return t.status || 'pending';
}

function countTasks(list) {
  if (!list || !list.length) return { done: 0, progress: 0, pending: 0 };
  const curDate = state.currentDate || state.logDate || isoDate(new Date());
  return list.reduce((a, t) => {
    const eff = getTaskEffectiveStatus(t, curDate);
    const st = eff === 'review' ? 'progress' : eff;
    a[st] = (a[st] || 0) + 1;
    return a;
  }, { done: 0, progress: 0, pending: 0 });
}

function projectStats(p) {
  if (!p) return { total: 0, completed: 0, inProgress: 0, pending: 0, pct: 0 };
  const l = countTasks(p.tasks || []);
  const otherCompleted = (p._other && p._other.completed) || 0;
  const otherProgress = (p._other && p._other.inProgress) || 0;
  const otherPending = (p._other && p._other.pending) || 0;
  const completed = Math.max(0, otherCompleted + l.done);
  const inProgress = Math.max(0, otherProgress + l.progress);
  const pending = Math.max(0, otherPending + l.pending);
  const total = completed + inProgress + pending;
  return { total, completed, inProgress, pending, pct: total ? Math.round((completed / total) * 100) : 0 };
}

/* App state */
const state = {
  projectQuery: '', projectFilter: 'all',
  currentDate: isoDate(new Date()),
  taskQuery: '', taskStatus: 'all', taskAssignee: 'all', taskPriority: 'all', taskType: 'all', taskView: 'board', openTasks: new Set(),
  fileQuery: '', fileType: 'all', fileView: 'list',
  logDate: isoDate(new Date()), logProject: '', logHours: '4h 00m', logAttach: null,
  logStatus: 'progress', logDependency: '', logLead: '', logFilter: 'all', logTargetDate: '2026-11-20',
  chatId: '', chatQuery: '',
  replyingTo: null,
  starredProjects: new Set(),
};

/* ---------------- Helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function parseISO(s) { if (!s || typeof s !== 'string') return new Date(); const parts = s.split('-').map(Number); if (parts.length < 3 || isNaN(parts[0])) return new Date(); return new Date(parts[0], parts[1] - 1, parts[2]); }
function isoDate(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
function fmtShort(s) { if (!s || s === 'none' || s === 'ongoing') return 'Ongoing'; const d = parseISO(s); return (d && !isNaN(d.getTime())) ? `${MON[d.getMonth()]} ${d.getDate()}` : 'Ongoing'; }
function fmtLong(s) { if (!s || s === 'none' || s === 'ongoing') return 'Ongoing'; const d = parseISO(s); return (d && !isNaN(d.getTime())) ? `${MON[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}` : 'Ongoing'; }
function nowTime() { const d = new Date(); let h = d.getHours(); const m = String(d.getMinutes()).padStart(2, '0'); const ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12; return `${h}:${m} ${ap}`; }
const barColor = v => (v >= 75 ? 'red' : v >= 50 && v <= 65 ? '' : 'green');
const statusBadge = s => (STATUS[s] ? `<span class="badge ${STATUS[s].cls}">${STATUS[s].label}</span>` : `<span class="badge progress">In Progress</span>`);
const taskBadge = s => s === 'done' ? '<span class="badge done">Completed</span>' : s === 'pending' ? '<span class="badge pending">Pending</span>' : '<span class="badge progress">In Progress</span>';
const availBadge = (id) => {
  const p = PEOPLE[id];
  const a = (p && AVAIL[p.availability]) || AVAIL['available'];
  return `<span class="badge avail ${a.cls} clickable" data-profile="${id}">${a.label}</span>`;
};
const modeCell = id => {
  const p = PEOPLE[id];
  const m = (p && MODES[p.mode]) || MODES['office'];
  return `<span class="cell-mode">${icon(m.icon, 'sm')}${m.label}</span>`;
};
const userModeIcon = (id, cls = 'xs') => {
  const p = id ? PEOPLE[id] : null;
  const modeKey = (p && p.mode) || 'office';
  const m = MODES[modeKey] || MODES['office'];
  const isAbsent = p && p.availability === 'absent';
  const absentHtml = isAbsent ? `<span class="user-absent-ic" title="Absent Today">${icon('slashCircle', cls)}</span>` : '';
  return `<span class="user-mode-ic" title="${esc(m.long)}">${icon(m.icon, cls)}</span>${absentHtml}`;
};
function ring(pct, size = 118, stroke = 12, color = 'url(#ringGrad)') {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return `<svg viewBox="0 0 ${size} ${size}"><defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd36b"/><stop offset="1" stop-color="#e59b12"/></linearGradient></defs>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="#3a3328" stroke-width="${stroke}"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${(c * pct) / 100} ${c}"/></svg>`;
}
function toast(msg) {
  $('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast'; t.innerHTML = icon('checkCircle') + esc(msg);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}
function hydrateIcons(root = document) {
  $$('[data-icon]', root).forEach(el => { el.outerHTML = icon(el.dataset.icon); });
}

/* ---------------- Router ---------------- */
function route() {
  const parts = (location.hash || '#/projects').slice(2).split('/');
  closeFloating();
  const main = $('#main');
  let nav = parts[0];
  if (parts[0] === 'project' && projects.find(p => p.id === parts[1])) {
    nav = 'projects';
    main.innerHTML = renderProject(parts[1], parts[2] || 'overview');
  } else if (parts[0] === 'worklog') {
    main.innerHTML = renderWorkLog();
  } else if (parts[0] === 'messenger') {
    if (parts[1] && chats.find(c => c.id === parts[1])) state.chatId = parts[1];
    main.innerHTML = renderMessenger();
    afterMessenger();
  } else {
    nav = 'projects';
    main.innerHTML = renderProjects();
  }
  $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.nav === nav));
  updateMsgDot();
  main.scrollTop = 0;
}
function rerender() { refreshSide(); const top = $('#main').scrollTop; route(); $('#main').scrollTop = top; }
const go = h => { if (location.hash === h) rerender(); else location.hash = h; };

/* ---------------- Projects screen ---------------- */
function renderProjects() {
  const c = { all: projects.length, progress: 0, done: 0, hold: 0 };
  projects.forEach(p => { if (p.status === 'progress' || p.status === 'review') c.progress++; else c[p.status]++; });
  const q = state.projectQuery.toLowerCase();
  const list = projects.filter(p =>
    (!q || p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)) &&
    (state.projectFilter === 'all' || (state.projectFilter === 'progress' ? ['progress', 'review'].includes(p.status) : p.status === state.projectFilter)));
  const statTile = (key, ic, num, label) => `
    <button class="card stat clickable" data-pfilter="${key}" style="${state.projectFilter === key ? 'border-color:rgba(245,184,46,.45)' : ''}">
      ${ic}<div style="text-align:left"><div class="stat-num">${num}</div><div class="stat-label">${label}</div></div></button>`;
  return `<section class="view">
    <div class="page-head">
      <div><h1 class="page-title">Projects</h1><p class="page-sub">All company projects, progress and team overview</p></div>
      <button class="btn gold" data-action="new-project">${icon('plus', 'sm')} New Project</button>
    </div>
    <div class="stats">
      ${statTile('all', `<span class="stat-ic gold"><svg class="ic" viewBox="0 0 24 24"><path class="fill" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>`, c.all, 'Total Projects')}
      ${statTile('progress', `<span class="stat-ic green">${PLAY}</span>`, c.progress, 'In Progress')}
      ${statTile('done', `<span class="stat-ic green">${icon('check')}</span>`, c.done, 'Completed')}
      ${statTile('hold', `<span class="stat-ic red">${PAUSE}</span>`, c.hold, 'On Hold')}
    </div>
    <div class="toolbar">
      <label class="search">${icon('search', 'sm')}<input id="projSearch" placeholder="Search projects..." value="${esc(state.projectQuery)}"/></label>
      <button class="btn" data-action="project-filter">${icon('filter', 'sm')} Filter${state.projectFilter !== 'all' ? ' · 1' : ''}</button>
    </div>
    <div class="proj-list" id="projList">
      ${list.length ? list.map(projectRow).join('') : `
        <div class="card empty" style="padding:48px 24px;text-align:center">
          <div style="font-size:36px;margin-bottom:12px">📁</div>
          <h3 style="font-size:16px;font-weight:600;margin-bottom:6px">No projects yet</h3>
          <p style="color:var(--text-2);font-size:13px;margin-bottom:18px">Get started by creating your first project.</p>
          <button class="btn gold" data-action="new-project" style="margin:0 auto">${icon('plus', 'sm')} Create First Project</button>
        </div>`}
    </div>
  </section>`;
}
function projectRow(p) {
  const s = projectStats(p);
  const shown = (p.team || []).slice(0, 2);
  const thumbSvg = THUMBS[p.thumb] || THUMBS['portfolio'];
  return `<div class="card proj-row" data-open="${p.id}">
    <div class="thumb">${thumbSvg}</div>
    <div><div class="proj-name">${esc(p.name)}</div><span class="badge tag">${p.type}</span></div>
    <div><div class="proj-pct">${s.pct}%</div><div class="bar ${s.pct === 100 || s.pct >= 80 ? 'green' : ''}"><i style="width:${s.pct}%"></i></div></div>
    <div class="av-stack team-col">${shown.map(id => av(id)).join('')}${p.extra ? `<span class="av-more">+${p.extra}</span>` : ''}</div>
    <div>${statusBadge(p.status)}</div>
    <button class="kebab" data-pmenu="${p.id}">${icon('more', 'sm')}</button>
  </div>`;
}

/* ---------------- Project detail ---------------- */
const TABS = ['overview', 'tasks', 'team', 'analytics', 'files', 'notes'];
function renderProject(id, tab) {
  const p = projects.find(x => x.id === id);
  if (!p) {
    return `<section class="view"><div class="card empty" style="padding:48px 24px;text-align:center"><p style="color:var(--text-2);margin-bottom:12px">Project not found or no longer exists.</p><a class="btn gold" data-go="#/projects">Back to Projects</a></div></section>`;
  }
  if (!TABS.includes(tab)) tab = 'overview';
  const body = { overview: tabOverview, tasks: tabTasks, team: tabTeam, analytics: tabAnalytics, files: tabFiles, notes: tabNotes }[tab](p);
  return `<section class="view">
    <div class="crumbs"><a data-go="#/projects">Projects</a>${icon('chevRight', 'xs')}<span>${esc(p.name)}</span></div>
    <div class="page-head" style="margin-bottom:0">
      <div>
        <div class="detail-title"><h1>${esc(p.name)}</h1>${statusBadge(p.status)}</div>
        <div class="dates">${icon('calendar', 'sm')} ${fmtLong(p.start).replace(/^(\w+ \d+), (\d+)$/, '$1, $2')}${p.end ? ' – ' + fmtLong(p.end) : ' – Ongoing (No end date)'}</div>
      </div>
      <div class="head-actions" style="display:flex;align-items:center;gap:8px">
        <button class="btn gold" data-action="open-project-chat" data-id="${p.id}" style="height:34px;padding:0 12px;font-size:12.5px;display:inline-flex;align-items:center;gap:6px" title="Open Project Chat in Messenger">
          ${icon('message', 'sm')} <span>Project Chat</span>
        </button>
        <button class="icon-btn ${state.starredProjects.has(p.id) ? 'starred' : ''}" data-action="star-project" data-id="${p.id}" title="Star">${icon('star', 'sm')}</button>
        <button class="icon-btn" data-pmenu="${p.id}" title="More">${icon('more', 'sm')}</button>
      </div>
    </div>
    <div class="tabs">${TABS.map(t => `<button class="tab ${t === tab ? 'active' : ''}" data-go="#/project/${p.id}/${t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join('')}</div>
    <div class="view" data-project="${p.id}">${body}</div>
  </section>`;
}

function teamTable(p, cols) {
  const teamIds = (p.team && p.team.length) ? p.team : (Object.keys(PEOPLE).length ? Object.keys(PEOPLE) : [ME].filter(Boolean));
  const rows = teamIds.map(id => {
    const P = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Member', today: 'Active' };
    const w = (p.workload && p.workload[id]) ?? 0;
    return `<tr>
      <td><span class="cell-user">${av(id)}<span class="clickable" data-profile="${id}" style="display:inline-flex;align-items:center;gap:4px">${esc(P.name)} ${userModeIcon(id, 'xs')}</span></span></td>
      <td>${P.role || 'Member'}</td>
      <td>${availBadge(id)}</td>
      <td>${modeCell(id)}</td>
      <td>${cols === 'overview' ? (P.today || 'Working on tasks') : `${((p.currentTasks || {})[id]) ?? ((p.tasks || []).filter(t => t.assignee === id && t.status !== 'done').length)} Tasks`}</td>
      <td><div class="cell-bar"><div class="bar ${barColor(w)}"><i style="width:${w}%"></i></div><span>${w}%</span></div></td>
    </tr>`;
  }).join('') || '<tr><td colspan="6" style="text-align:center;color:var(--text-2);padding:16px">No team members assigned</td></tr>';
  return `<table><thead><tr><th>Member</th><th>Role</th><th>Availability</th><th>Work Mode</th><th>${cols === 'overview' ? "Today's Task" : 'Current Tasks'}</th><th style="width:22%">${cols === 'overview' ? "Work's Task" : 'Workload'}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function tabOverview(p) {
  const s = projectStats(p);
  const phase = s.pct >= 100 ? 4 : p.status === 'review' ? 2 : 1;
  const steps = [['Kickoff', fmtShort(p.start)], ['Development', `(${s.pct}%)`], ['Testing', ''], ['Release', p.end ? fmtShort(p.end) : 'Ongoing']];
  const fill = phase >= 4 ? 75 : phase * 25;
  return `
  <div class="ov-top">
    <div class="card ov-progress">
      <div class="ring">${ring(s.pct)}<div class="ring-label"><b>${s.pct}%</b><span>Progress</span></div></div>
      <div class="ov-counts">
        <div class="ov-count">${icon('calendar')} Total Tasks <b>${s.total}</b></div>
        <div class="ov-count" style="color:#5bdc8e">${icon('checkSquare')}<span style="color:var(--text-2)">Completed</span><b>${s.completed}</b></div>
        <div class="ov-count" style="color:var(--gold)">${icon('checkCircle')}<span style="color:var(--text-2)">In Progress</span><b>${s.inProgress}</b></div>
        <div class="ov-count" style="color:var(--red)">${icon('pendingSq')}<span style="color:var(--text-2)">Pending</span><b>${s.pending}</b></div>
      </div>
    </div>
    <div class="card timeline">
      <div class="card-title">Timeline</div>
      <div class="tl-track">
        <div class="tl-fill" style="width:${fill}%"></div>
        ${steps.map(([t, d], i) => `<div class="tl-step ${i < phase ? 'done' : i === phase && phase < 4 ? 'now' : ''}"><div class="tl-dot"></div><div class="t">${t}</div><div class="d">${d}</div></div>`).join('')}
      </div>
    </div>
  </div>
  <div class="card" style="margin-top:16px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;background:linear-gradient(90deg, rgba(245,184,46,.12), rgba(245,184,46,.03));border:1px solid rgba(245,184,46,.25);border-radius:12px;flex-wrap:wrap;gap:12px">
    <div style="display:flex;align-items:center;gap:12px">
      <span style="width:38px;height:38px;border-radius:10px;background:rgba(245,184,46,.2);color:var(--gold);display:grid;place-items:center;font-size:18px">💬</span>
      <div>
        <div style="font-weight:600;font-size:14px;color:var(--text)">${esc(p.name)} Group Chat</div>
        <div style="font-size:12px;color:var(--text-2)">Official messenger channel for project team collaboration, task updates and blockers.</div>
      </div>
    </div>
    <button class="btn gold" data-action="open-project-chat" data-id="${p.id}" style="padding:0 16px;height:34px;font-size:12.5px;display:flex;align-items:center;gap:6px">
      ${icon('message', 'sm')} Open Project Chat
    </button>
  </div>
  <div class="card tbl-card">
    <div class="tbl-head"><span class="card-title">Team &amp; Availability</span><span class="muted">${MEMBER_ROWS.length} Members</span></div>
    ${teamTable(p, 'overview')}
  </div>`;
}

function renderKanbanCard(t) {
  const curDate = state.currentDate || state.logDate || isoDate(new Date());
  const effStatus = getTaskEffectiveStatus(t, curDate);
  const isDone = effStatus === 'done';
  const type = TASK_TYPES[t.task_type] || TASK_TYPES['task'];
  const checklist = Array.isArray(t.checklist) ? t.checklist : [];
  const chkDone = checklist.filter(c => c.done).length;
  const chkTotal = checklist.length;
  const pName = (PEOPLE[t.assignee] && PEOPLE[t.assignee].name) || t.assignee || 'Unassigned';
  const isScheduled = t.due && /^\d{4}-\d{2}-\d{2}$/.test(t.due);
  const schedBadge = isScheduled ? (curDate < t.due ?
    `<span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:10px;padding:1px 5px" title="In Progress on Nov 19, Completes on ${fmtShort(t.due)}">⏳ Due ${fmtShort(t.due)}</span>` :
    `<span class="badge done" style="font-size:10px;padding:1px 5px" title="Completed on ${fmtShort(t.due)}">✅ Completed ${fmtShort(t.due)}</span>`
  ) : '';

  return `
  <div class="k-card ${isDone ? 'done' : ''}" draggable="true" data-k-task="${t.id}">
    <div class="k-card-head">
      <span class="k-type-badge ${t.task_type || 'task'}" title="Type: ${type.label}">${icon(type.icon, 'xs')}<span>${type.label}</span></span>
      ${t.category ? `<span class="k-cat-pill">${esc(t.category)}</span>` : ''}
      ${schedBadge}
      ${t.approval_status === 'approved' ? `<span class="badge done" style="font-size:10px;padding:1px 5px" title="Approved by Team Lead">✓ Approved</span>` : t.approval_status === 'rejected' ? `<span class="badge" style="background:rgba(239,68,68,.18);color:#ff5c5c;font-size:10px;padding:1px 5px" title="Changes Requested by Lead">✕ Changes Req</span>` : ''}
      <button class="kebab" data-tmenu="${t.id}" style="margin-left:auto">${icon('more', 'sm')}</button>
    </div>
    <div class="k-card-title clickable" data-open-task-modal="${t.id}">${esc(t.title)}</div>
    ${t.desc ? `<div class="k-card-desc">${esc(t.desc.length > 90 ? t.desc.slice(0, 87) + '...' : t.desc)}</div>` : ''}
    ${chkTotal > 0 ? `
      <div class="k-card-chk clickable" data-open-task-modal="${t.id}">
        ${icon('checkSquare', 'xs')} <span>${chkDone}/${chkTotal} subtasks</span>
        <div class="bar mini" style="flex:1;max-width:70px;height:4px"><i style="width:${Math.round((chkDone/chkTotal)*100)}%"></i></div>
      </div>
    ` : ''}
    <div class="k-card-foot">
      <div class="k-assignee" title="Assignee: ${esc(pName)}">${av(t.assignee, 's22')}<span>${esc(pName)}</span> ${userModeIcon(t.assignee, 'xs')}</div>
      <span class="badge ${t.priority ? t.priority.toLowerCase() : 'medium'}">${t.priority || 'Medium'}</span>
      ${t.due ? `<span class="k-due" title="Due Date">${icon('calendar', 'xs')}${fmtShort(t.due)}</span>` : '<span class="k-due muted">No due date</span>'}
    </div>
    <div class="k-card-actions">
      ${effStatus === 'pending' ? `<button class="k-btn-move" data-move-task="${t.id}" data-target-status="progress">In Progress →</button>` : ''}
      ${effStatus === 'progress' || effStatus === 'review' ? `
        <button class="k-btn-move" data-move-task="${t.id}" data-target-status="pending">← To Do</button>
        <button class="k-btn-move ok" data-move-task="${t.id}" data-target-status="done">Completed ✓</button>
      ` : ''}
      ${effStatus === 'done' ? `<button class="k-btn-move" data-move-task="${t.id}" data-target-status="progress">↩ Reopen</button>` : ''}
    </div>
  </div>`;
}

function renderKanbanBoard(p, list) {
  const curDate = state.currentDate || state.logDate || isoDate(new Date());
  const todoList = list.filter(t => getTaskEffectiveStatus(t, curDate) === 'pending');
  const inProgressList = list.filter(t => {
    const s = getTaskEffectiveStatus(t, curDate);
    return s === 'progress' || s === 'review';
  });
  const doneList = list.filter(t => getTaskEffectiveStatus(t, curDate) === 'done');

  return `
  <div class="kanban-board">
    <div class="kanban-col" data-col-status="pending">
      <div class="kanban-col-head">
        <span class="kanban-col-title"><span class="col-dot pending"></span>To Do <span class="kanban-col-count">${todoList.length}</span></span>
        <button class="btn-col-add" data-action="add-task" data-default-status="pending" title="Create task in To Do">${icon('plus', 'xs')} Add Task</button>
      </div>
      <div class="kanban-cards">
        ${todoList.length ? todoList.map(t => renderKanbanCard(t)).join('') : '<div class="kanban-empty">No tasks in To Do</div>'}
      </div>
    </div>

    <div class="kanban-col" data-col-status="progress">
      <div class="kanban-col-head">
        <span class="kanban-col-title"><span class="col-dot progress"></span>In Progress <span class="kanban-col-count">${inProgressList.length}</span></span>
        <button class="btn-col-add" data-action="add-task" data-default-status="progress" title="Create task in In Progress">${icon('plus', 'xs')} Add</button>
      </div>
      <div class="kanban-cards">
        ${inProgressList.length ? inProgressList.map(t => renderKanbanCard(t)).join('') : '<div class="kanban-empty">No tasks in progress</div>'}
      </div>
    </div>

    <div class="kanban-col" data-col-status="done">
      <div class="kanban-col-head">
        <span class="kanban-col-title"><span class="col-dot done"></span>Completed <span class="kanban-col-count">${doneList.length}</span></span>
      </div>
      <div class="kanban-cards">
        ${doneList.length ? doneList.map(t => renderKanbanCard(t)).join('') : '<div class="kanban-empty">No completed tasks</div>'}
      </div>
    </div>
  </div>`;
}

function renderTaskListView(p, list) {
  return `
  <div class="card tbl-card" style="padding-top:4px">
    <table>
      <thead>
        <tr>
          <th style="width:36px"><span class="chk" data-action="check-all"></span></th>
          <th style="width:84px">Type</th>
          <th>Task</th>
          <th>Category</th>
          <th>Assignee</th>
          <th>Subtasks</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Status</th>
          <th style="width:40px"></th>
        </tr>
      </thead>
      <tbody>${list.length ? list.map(t => {
        const open = state.openTasks.has(p.id + t.id);
        const type = TASK_TYPES[t.task_type] || TASK_TYPES['task'];
        const chk = Array.isArray(t.checklist) ? t.checklist : [];
        const chkDone = chk.filter(c => c.done).length;
        const curDate = state.currentDate || state.logDate || isoDate(new Date());
        const effStatus = getTaskEffectiveStatus(t, curDate);
        const isDone = effStatus === 'done';
        return `<tr>
          <td><span class="chk ${isDone ? 'on' : ''}" data-toggle-task="${t.id}">${isDone ? icon('check') : ''}</span></td>
          <td><span class="k-type-badge ${t.task_type || 'task'}">${icon(type.icon, 'xs')} ${type.label}</span></td>
          <td>
            <div class="task-title ${isDone ? 'done' : ''}">
              <span class="clickable" data-open-task-modal="${t.id}">${esc(t.title)}</span>
              ${(t.desc || chk.length) ? `<button class="exp ${open ? 'open' : ''}" data-expand="${t.id}">${icon('chevDown', 'xs')}</button>` : ''}
            </div>
          </td>
          <td>${t.category ? `<span class="k-cat-pill">${esc(t.category)}</span>` : '<span class="muted">-</span>'}${t.approval_status === 'approved' ? `<span class="badge done" style="font-size:10px;padding:1px 5px;margin-left:4px" title="Approved by Team Lead">✓</span>` : ''}</td>
          <td><span class="cell-user">${av(t.assignee)}<span style="display:inline-flex;align-items:center;gap:4px">${esc((PEOPLE[t.assignee] && PEOPLE[t.assignee].name) || t.assignee || 'Member')} ${userModeIcon(t.assignee, 'xs')}</span></span></td>
          <td>${chk.length ? `<span class="badge" style="background:rgba(255,255,255,.05);font-size:11px">${chkDone}/${chk.length}</span>` : '<span class="muted">-</span>'}</td>
          <td><span class="badge ${t.priority ? t.priority.toLowerCase() : 'medium'}">${t.priority || 'Medium'}</span></td>
          <td>${t.due ? (curDate < t.due ? `<span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:10.5px" title="In Progress until ${fmtShort(t.due)}">⏳ Due ${fmtShort(t.due)}</span>` : `<span class="badge done" style="font-size:10.5px" title="Completed on ${fmtShort(t.due)}">✅ Done ${fmtShort(t.due)}</span>`) : '<span class="muted">Ongoing</span>'}</td>
          <td><span class="clickable" data-cycle-task="${t.id}" title="Click to change status">${taskBadge(effStatus)}</span></td>
          <td><button class="kebab" data-tmenu="${t.id}">${icon('more', 'sm')}</button></td>
        </tr>${open ? `
          <tr class="task-desc">
            <td colspan="10">
              <div style="padding:6px 0">
                ${t.desc ? `<div style="margin-bottom:8px;color:var(--text)">${esc(t.desc)}</div>` : ''}
                ${chk.length ? `
                  <div class="subtask-list" style="margin-top:6px">
                    <strong style="font-size:12px;color:var(--text-2);display:block;margin-bottom:4px">Checklist (${chkDone}/${chk.length}):</strong>
                    ${chk.map((c, idx) => `
                      <label class="chk-item ${c.done ? 'done' : ''}" data-toggle-chk="${idx}" data-task-id="${t.id}">
                        <input type="checkbox" ${c.done ? 'checked' : ''} />
                        <span>${esc(c.text)}</span>
                      </label>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </td>
          </tr>` : ''}`;
      }).join('') : '<tr><td colspan="10" class="empty">No tasks match these filters.</td></tr>'}</tbody>
    </table>
  </div>`;
}

function tabTasks(p) {
  const curDate = state.currentDate || state.logDate || isoDate(new Date());
  const s = projectStats(p);
  const q = state.taskQuery.toLowerCase();
  const list = p.tasks.filter(t => {
    const assigneeName = (PEOPLE[t.assignee] && PEOPLE[t.assignee].name) || t.assignee || '';
    const matchesQ = !q || t.title.toLowerCase().includes(q) || assigneeName.toLowerCase().includes(q) || (t.category && t.category.toLowerCase().includes(q));
    const effStatus = getTaskEffectiveStatus(t, curDate);
    const matchesStatus = state.taskStatus === 'all' || (state.taskStatus === 'progress' ? (effStatus === 'progress' || effStatus === 'review') : effStatus === state.taskStatus);
    const matchesAssignee = state.taskAssignee === 'all' || t.assignee === state.taskAssignee;
    const matchesPriority = state.taskPriority === 'all' || t.priority === state.taskPriority;
    const matchesType = state.taskType === 'all' || (t.task_type || 'task') === state.taskType;
    return matchesQ && matchesStatus && matchesAssignee && matchesPriority && matchesType;
  });

  const opt = (v, l, cur) => `<option value="${v}" ${v === cur ? 'selected' : ''}>${l}</option>`;

  return `
  <div class="stats" style="grid-template-columns:repeat(4,1fr) 1.3fr">
    <div class="card stat"><span class="stat-ic slate">${icon('calendar')}</span><div><div class="stat-num">${s.total}</div><div class="stat-label">Total Tasks</div></div></div>
    <div class="card stat"><span class="stat-ic ok">${icon('check')}</span><div><div class="stat-num">${s.completed}</div><div class="stat-label">Completed</div></div></div>
    <div class="card stat"><span class="stat-ic amber">${icon('checkCircle')}</span><div><div class="stat-num">${s.inProgress}</div><div class="stat-label">In Progress</div></div></div>
    <div class="card stat"><span class="stat-ic redsoft">${icon('pendingSq')}</span><div><div class="stat-num">${s.pending}</div><div class="stat-label">To Do</div></div></div>
    <div class="card stat" style="flex-direction:column;align-items:stretch;gap:6px"><div><div class="stat-num">${s.pct}%</div><div class="stat-label">Overall Progress</div></div><div class="bar"><i style="width:${s.pct}%"></i></div></div>
  </div>
  <div class="toolbar" style="flex-wrap:wrap;gap:10px">
    <label class="search" style="max-width:260px">${icon('search', 'sm')}<input id="taskSearch" placeholder="Search tasks..." value="${esc(state.taskQuery)}"/></label>
    
    <select class="select" data-taskfilter="taskType">
      <option value="all" ${state.taskType === 'all' ? 'selected' : ''}>All Types</option>
      <option value="task" ${state.taskType === 'task' ? 'selected' : ''}>📋 Task</option>
      <option value="bug" ${state.taskType === 'bug' ? 'selected' : ''}>🪲 Bug</option>
      <option value="story" ${state.taskType === 'story' ? 'selected' : ''}>📖 Story</option>
      <option value="epic" ${state.taskType === 'epic' ? 'selected' : ''}>⚡ Epic</option>
    </select>

    <select class="select" data-taskfilter="taskStatus">
      ${opt('all', 'All Statuses', state.taskStatus)}
      ${opt('pending', 'To Do', state.taskStatus)}
      ${opt('progress', 'In Progress', state.taskStatus)}
      ${opt('done', 'Completed', state.taskStatus)}
    </select>

    <select class="select" data-taskfilter="taskAssignee">
      ${opt('all', 'All Assignees', state.taskAssignee)}
      ${MEMBER_ROWS.map(id => opt(id, (PEOPLE[id] && PEOPLE[id].name) || id, state.taskAssignee)).join('')}
    </select>

    <select class="select" data-taskfilter="taskPriority">
      ${opt('all', 'All Priorities', state.taskPriority)}
      ${['High', 'Medium', 'Low'].map(v => opt(v, v, state.taskPriority)).join('')}
    </select>

    <div class="view-toggle" style="display:inline-flex;background:var(--panel-2);border:1px solid var(--line);border-radius:8px;padding:2px">
      <button class="icon-btn ${state.taskView === 'board' ? 'active' : ''}" data-taskview="board" title="Kanban Board" style="width:32px;height:30px;border-radius:6px">${icon('grid', 'sm')}</button>
      <button class="icon-btn ${state.taskView === 'list' ? 'active' : ''}" data-taskview="list" title="List View" style="width:32px;height:30px;border-radius:6px">${icon('list', 'sm')}</button>
    </div>

    <!-- Scheduled Date Preview Switcher (Nov 19 In Progress vs Nov 20 Complete) -->
    <div class="task-date-pill" style="display:inline-flex;align-items:center;gap:8px;background:var(--panel-2);border:1px solid var(--line-2);border-radius:8px;padding:2px 10px;height:34px" title="Change date to view scheduled progress">
      <span style="font-size:12px;color:var(--text-2);display:flex;align-items:center;gap:5px">
        ${icon('calendar', 'xs')} <span>Viewing Date:</span>
      </span>
      <div style="display:inline-flex;gap:4px">
        <button type="button" class="btn pill-btn ${curDate === '2026-11-19' ? 'on' : ''}" data-action="set-app-date" data-date="2026-11-19" style="padding:2px 8px;font-size:11px;border-radius:12px;background:${curDate === '2026-11-19' ? 'rgba(245,184,46,.18)' : 'transparent'};color:${curDate === '2026-11-19' ? 'var(--gold)' : 'var(--text-2)'};border:1px solid ${curDate === '2026-11-19' ? '#f5b82e' : 'var(--line-2)'}">
          Nov 19 (In Progress ⏳)
        </button>
        <button type="button" class="btn pill-btn ${curDate === '2026-11-20' ? 'on' : ''}" data-action="set-app-date" data-date="2026-11-20" style="padding:2px 8px;font-size:11px;border-radius:12px;background:${curDate === '2026-11-20' ? 'rgba(91,220,142,.18)' : 'transparent'};color:${curDate === '2026-11-20' ? '#5bdc8e' : 'var(--text-2)'};border:1px solid ${curDate === '2026-11-20' ? '#5bdc8e' : 'var(--line-2)'}">
          Nov 20 (Complete ✅)
        </button>
      </div>
    </div>

    <span style="flex:1"></span>
    <button class="btn gold" data-action="add-task">${icon('plus', 'sm')} Add Task</button>
  </div>
  ${state.taskView === 'list' ? renderTaskListView(p, list) : renderKanbanBoard(p, list)}`;
}

function tabTeam(p) {
  const counts = MEMBER_ROWS.reduce((a, id) => {
    const st = PEOPLE[id]?.availability || 'available';
    a[st] = (a[st] || 0) + 1;
    return a;
  }, { available: 0, meeting: 0, away: 0, dnd: 0, absent: 0 });
  const avg = p.avgWorkload ?? Math.round(MEMBER_ROWS.reduce((a, id) => a + (p.workload[id] || 0), 0) / (MEMBER_ROWS.length || 1));
  return `
  <div class="team-stats">
    <div class="card stat"><span class="stat-ic" style="color:var(--gold)">${icon('users', 'lg')}</span><div><div class="stat-num">${MEMBER_ROWS.length}</div><div class="stat-label">Team Members</div></div></div>
    <div class="card stat"><span class="stat-ic" style="color:var(--green)"><svg class="ic lg" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" fill="currentColor"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1z" fill="currentColor"/></svg></span><div><div class="stat-num">${counts.available || 0}</div><div class="stat-label">Available</div></div></div>
    <div class="card stat"><span class="stat-ic" style="background:var(--gold);color:#3d2a05;border-radius:50%;width:30px;height:30px">${icon('message', 'sm')}</span><div><div class="stat-num">${counts.meeting || 0}</div><div class="stat-label">In a Meeting</div></div></div>
    <div class="card stat"><span class="stat-ic" style="color:#fb7185"><svg class="ic lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><line x1="5.6" y1="5.6" x2="18.4" y2="18.4" stroke="currentColor" stroke-width="2"/></svg></span><div><div class="stat-num">${counts.absent || 0}</div><div class="stat-label">Absent</div></div></div>
    <div class="card stat" style="flex-direction:column;align-items:stretch;gap:6px"><div><div class="stat-num">${avg}%</div><div class="stat-label">Avg. Workload</div></div><div class="bar"><i style="width:${avg}%"></i></div></div>
    <button class="btn gold" data-action="invite">${icon('user', 'sm')} Invite Member</button>
  </div>
  <div class="card tbl-card" style="padding-top:4px">${teamTable(p, 'team')}</div>`;
}

function tabAnalytics(p) {
  const s = projectStats(p);
  const a = p.analytics || {
    productivity: Object.fromEntries(MEMBER_ROWS.map(id => [id, Math.max(20, 100 - (p.workload[id] || 0) / 2 - 10)])),
    teamProductivity: 70,
    time: [['Development', 200, '#8b6cf6'], ['Design', 90, '#4c8dff'], ['Testing', 60, '#2bc46a'], ['Others', 50, '#6e6e78']],
    trend: [[0, 0], [0.3, s.pct * 0.3], [0.6, s.pct * 0.65], [0.92, s.pct]],
  };
  const totalH = a.time.reduce((x, t) => x + t[1], 0);
  const dist = [['Completed', s.completed, '#2bc46a'], ['In Progress', s.inProgress, '#f5b82e'], ['Pending', s.pending, '#f06464']];
  // Donut
  const R = 50, C = 2 * Math.PI * R; let off = 0;
  const segs = dist.map(([, v, col]) => { const len = s.total ? (v / s.total) * C : 0; const seg = `<circle cx="65" cy="65" r="${R}" fill="none" stroke="${col}" stroke-width="20" stroke-dasharray="${Math.max(0, len - 2)} ${C}" stroke-dashoffset="${-off}"/>`; off += len; return seg; }).join('');
  // Line chart
  const W = 380, H = 170, L = 34, B = 22, T = 10, plotW = W - L - 6, plotH = H - B - T;
  const pts = a.trend.map(([x, y]) => [L + x * plotW, T + plotH - (y / 100) * plotH]);
  pts[pts.length - 1] = [L + a.trend[a.trend.length - 1][0] * plotW, T + plotH - (s.pct / 100) * plotH];
  const line = pts.map(pt => pt.join(',')).join(' ');
  const area = `${L},${T + plotH} ${line} ${pts[pts.length - 1][0]},${T + plotH}`;
  const last = pts[pts.length - 1];
  const grid = [0, 25, 50, 75, 100].map(v => { const y = T + plotH - (v / 100) * plotH; return `<line x1="${L}" x2="${W}" y1="${y}" y2="${y}" stroke="rgba(255,255,255,.06)"/><text x="${L - 6}" y="${y + 3}" fill="#85858e" font-size="9" text-anchor="end">${v}%</text>`; }).join('');
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => `<text x="${L + 14 + i * ((plotW - 28) / 4)}" y="${H - 4}" fill="#85858e" font-size="9" text-anchor="middle">${m}</text>`).join('');
  return `
  <div class="card an-stats">
    <div class="an-stat"><div class="mini-ring">${ring(s.pct, 52, 7)}</div><div><b>${s.pct}%</b><span>Project Progress</span></div></div>
    <div class="an-stat" style="justify-content:center;text-align:center"><div><b>${s.total}</b><span>Total Tasks</span></div></div>
    <div class="an-stat" style="justify-content:center;text-align:center"><div><b>${s.completed}</b><span>Completed</span></div></div>
    <div class="an-stat" style="justify-content:center;text-align:center"><div><b>${a.teamProductivity}%</b><span>Team Productivity</span></div></div>
  </div>
  <div class="an-grid">
    <div class="card an-card"><div class="card-title" style="margin-bottom:12px">Progress Trend</div>
      <div class="chart"><svg viewBox="0 0 ${W} ${H}">
        <defs><linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5b82e" stop-opacity=".45"/><stop offset="1" stop-color="#f5b82e" stop-opacity="0"/></linearGradient></defs>
        ${grid}${months}
        <polygon points="${area}" fill="url(#areaG)"/>
        <polyline points="${line}" fill="none" stroke="#f5b82e" stroke-width="2"/>
        ${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.4" fill="#f5b82e" stroke="#141417" stroke-width="1.5"/>`).join('')}
        <line x1="${last[0]}" x2="${last[0]}" y1="${last[1]}" y2="${T + plotH}" stroke="#f5b82e" stroke-dasharray="3 3" opacity=".6"/>
        <g transform="translate(${last[0] - 22},${last[1] - 42})"><rect width="44" height="32" rx="6" fill="#1c1c20" stroke="#f5b82e" stroke-opacity=".6"/><text x="22" y="15" fill="#fff" font-size="12" font-weight="600" text-anchor="middle">${s.pct}%</text><text x="22" y="26" fill="#b9b9c0" font-size="8.5" text-anchor="middle">Nov 17</text></g>
      </svg></div>
    </div>
    <div class="card an-card"><div class="card-title" style="margin-bottom:12px">Task Distribution</div>
      <div class="dist">
        <div class="donut"><svg viewBox="0 0 130 130">${segs}</svg><div class="ring-label"><b>${s.total}</b><span>Tasks</span></div></div>
        <div class="legend">${dist.map(([l, v, col]) => `<div class="legend-row"><i style="background:${col}"></i>${l}<b>${v} (${s.total ? Math.round((v / s.total) * 100) : 0}%)</b></div>`).join('')}</div>
      </div>
    </div>
  </div>
  <div class="an-grid">
    <div class="card an-card"><div class="card-title" style="margin-bottom:10px">Team Productivity</div>
      ${Object.entries(a.productivity).sort((x, y) => y[1] - x[1]).map(([id, v]) => `<div class="prod-row">${av(id, 's22')}<span>${PEOPLE[id].name}</span><div class="bar"><i style="width:${v}%"></i></div><span>${Math.round(v)}%</span></div>`).join('')}
    </div>
    <div class="card an-card"><div style="display:flex;justify-content:space-between"><span class="card-title">Time Breakdown</span><span style="color:var(--text-2);font-size:12px">Total: ${totalH} hrs</span></div>
      <div class="stack-bar">${a.time.map(([, h, col]) => `<i style="width:${(h / totalH) * 100}%;background:${col}"></i>`).join('')}</div>
      <div class="legend">${a.time.map(([l, h, col]) => `<div class="legend-row"><i style="background:${col}"></i>${l}<b>${h} hrs (${Math.round((h / totalH) * 100)}%)</b></div>`).join('')}</div>
    </div>
  </div>`;
}

const FILE_IC = {
  folder: '<svg viewBox="0 0 24 24"><path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="#f5b82e"/><path d="M2 9h20v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="#ffc94a"/></svg>',
  pdf: '<svg viewBox="0 0 24 24"><path d="M5 2h10l5 5v15H5z" fill="#e5483f"/><path d="M15 2v5h5" fill="#ff8a80"/><text x="12.5" y="17" fill="#fff" font-size="6" font-weight="700" text-anchor="middle" font-family="Arial">PDF</text></svg>',
  fig: '<svg viewBox="0 0 24 24"><circle cx="9.5" cy="5" r="3" fill="#f24e1e"/><circle cx="14.5" cy="5" r="3" fill="#ff7262"/><circle cx="9.5" cy="11" r="3" fill="#a259ff"/><circle cx="14.5" cy="11" r="3" fill="#1abcfe"/><path d="M9.5 14a3 3 0 1 0 3 3v-3z" fill="#0acf83"/></svg>',
  zip: '<svg viewBox="0 0 24 24"><path d="M5 2h10l5 5v15H5z" fill="#6f7480"/><path d="M15 2v5h5" fill="#9aa0ab"/><path d="M10 4h2v2h-2zM12 6h2v2h-2zM10 8h2v2h-2zM12 10h2v2h-2z" fill="#dfe2e8"/><rect x="10" y="13" width="4" height="4" rx="1" fill="#dfe2e8"/></svg>',
  img: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="#2b8a6e"/><circle cx="9" cy="9" r="2" fill="#dff"/><path d="M3 18l6-6 4 4 3-3 5 5v0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#58c7a3"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M5 2h10l5 5v15H5z" fill="#3d6fd8"/><path d="M15 2v5h5" fill="#8fb4ff"/><path d="M8 12h8M8 15h8M8 18h5" stroke="#fff" stroke-width="1.4"/></svg>',
};
function fileKind(name) {
  const ext = name.split('.').pop().toLowerCase();
  if (ext === 'pdf') return 'pdf'; if (ext === 'fig') return 'fig';
  if (['zip', 'rar', '7z'].includes(ext)) return 'zip';
  if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) return 'img';
  return 'doc';
}
function tabFiles(p) {
  const q = state.fileQuery.toLowerCase();
  const list = p.files.filter(f => (!q || f.name.toLowerCase().includes(q)) && (state.fileType === 'all' || (state.fileType === 'folder' ? f.kind === 'folder' : f.kind !== 'folder')));
  const opt = (v, l) => `<option value="${v}" ${state.fileType === v ? 'selected' : ''}>${l}</option>`;
  const body = !list.length ? '<div class="empty">No files found.</div>' : state.fileView === 'grid'
    ? `<div class="file-grid">${list.map((f, i) => `<div class="file-tile"><span class="file-ic">${FILE_IC[f.kind]}</span><div style="font-weight:500">${esc(f.name)}</div><div class="meta" style="display:inline-flex;align-items:center;gap:3px">${esc((PEOPLE[f.by] && PEOPLE[f.by].name) || f.by)} ${userModeIcon(f.by, 'xs')} · ${fmtShort(f.date)} · ${f.size}</div></div>`).join('')}</div>`
    : `<table><thead><tr><th>Name</th><th>Uploaded By</th><th>Date</th><th>Size</th><th style="width:40px"></th></tr></thead><tbody>
      ${list.map(f => `<tr><td><span class="file-name"><span class="file-ic">${FILE_IC[f.kind]}</span>${esc(f.name)}</span></td><td><span class="cell-user">${av(f.by)}<span style="display:inline-flex;align-items:center;gap:4px">${esc((PEOPLE[f.by] && PEOPLE[f.by].name) || f.by)} ${userModeIcon(f.by, 'xs')}</span></span></td><td>${fmtShort(f.date)}</td><td>${f.size}</td><td><button class="kebab" data-fmenu="${esc(f.name)}">${icon('more', 'sm')}</button></td></tr>`).join('')}
    </tbody></table>`;
  return `
  <div class="files-head">
    <div><div class="card-title" style="font-size:17px">Files</div><div class="page-sub" style="font-size:12.5px">Project documents, assets and shared files</div></div>
    <button class="btn gold" data-action="upload">${icon('upload', 'sm')} Upload</button>
    <input type="file" id="fileInput" multiple hidden />
  </div>
  <div class="toolbar">
    <label class="search" style="max-width:340px">${icon('search', 'sm')}<input id="fileSearch" placeholder="Search files..." value="${esc(state.fileQuery)}"/></label>
    <div class="seg"><button class="${state.fileView === 'grid' ? 'on' : ''}" data-fileview="grid">${icon('grid', 'sm')}</button><button class="${state.fileView === 'list' ? 'on' : ''}" data-fileview="list">${icon('list', 'sm')}</button></div>
    <span style="flex:1"></span>
    <select class="select" data-filetype>${opt('all', 'All Files')}${opt('folder', 'Folders')}${opt('file', 'Files only')}</select>
  </div>
  <div class="card tbl-card" style="padding-top:4px">${body}</div>`;
}

function tabNotes(p) {
  return `
  <div class="files-head">
    <div><div class="card-title" style="font-size:17px">Project Notes</div><div class="page-sub" style="font-size:12.5px">Key points, decisions, and important updates</div></div>
    <button class="btn gold" data-action="add-note">${icon('plus', 'sm')} Add Note</button>
  </div>
  <div class="notes">${p.notes.length ? p.notes.map((n, i) => `
    <div class="card note">
      <span class="note-ic">${icon(n.icon)}</span>
      <div>
        <h4>${esc(n.title)}</h4>
        ${n.bullets ? `<ul>${n.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : `<p>${esc(n.body)}</p>`}
        <div class="note-foot">${av(n.by, 's22')}<span>${PEOPLE[n.by].name}</span><span class="time">${n.at}</span></div>
      </div>
      <button class="kebab" data-nmenu="${i}">${icon('more', 'sm')}</button>
    </div>`).join('') : '<div class="card empty">No notes yet.</div>'}</div>`;
}

/* ---------------- Daily Work Log ---------------- */
function renderWorkLog() {
  const d = parseISO(state.logDate);
  const allLogs = [...workLogs].sort((a, b) => b.date.localeCompare(a.date));
  const depCount = allLogs.filter(l => l.status === 'dependency' && !l.resolved).length;
  const pendingApprovalCount = allLogs.filter(l => !l.approval_status || l.approval_status === 'pending').length;
  const approvedCount = allLogs.filter(l => l.approval_status === 'approved').length;

  const filteredLogs = allLogs.filter(l => {
    if (state.logFilter === 'progress') return l.status === 'progress';
    if (state.logFilter === 'done') return l.status === 'done';
    if (state.logFilter === 'dependency') return l.status === 'dependency';
    if (state.logFilter === 'pending_approval') return !l.approval_status || l.approval_status === 'pending';
    if (state.logFilter === 'approved') return l.approval_status === 'approved';
    return true;
  });

  const availableLeads = Object.keys(PEOPLE).map(id => `<option value="${id}" ${id === state.logLead ? 'selected' : ''}>${esc(PEOPLE[id].name || id)} (${esc(PEOPLE[id].role || 'Lead')})</option>`).join('');

  return `<section class="view" style="max-width:920px">
    <div class="page-head">
      <div><h1 class="page-title">Daily Work Log</h1><p class="page-sub">Track daily task progress, log hours, and submit job work for Team Lead approval</p></div>
      <div class="date-pill">${icon('calendar', 'sm')}<span>${DOW[d.getDay()]}, ${fmtLong(state.logDate)}</span>
        <button data-logday="-1" title="Previous day">${icon('chevLeft', 'sm')}</button><button data-logday="1" title="Next day">${icon('chevRight', 'sm')}</button></div>
    </div>
    <div class="card composer" style="box-shadow:0 4px 20px rgba(0,0,0,0.25)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
        <div class="log-status-pills" style="display:flex;gap:6px;align-items:center">
          <span style="font-size:12px;color:var(--text-2);font-weight:600;margin-right:2px">Status:</span>
          <button type="button" class="btn pill-btn" data-set-log-status="progress" style="padding:4px 12px;font-size:12px;border-radius:16px;border:1px solid ${state.logStatus === 'progress' ? '#f5b82e' : 'var(--line-2)'};background:${state.logStatus === 'progress' ? 'rgba(245,184,46,.18)' : 'transparent'};color:${state.logStatus === 'progress' ? 'var(--gold)' : 'var(--text-2)'};font-weight:${state.logStatus === 'progress' ? '600' : 'normal'}">⏳ In Progress</button>
          <button type="button" class="btn pill-btn" data-set-log-status="done" style="padding:4px 12px;font-size:12px;border-radius:16px;border:1px solid ${state.logStatus === 'done' ? '#5bdc8e' : 'var(--line-2)'};background:${state.logStatus === 'done' ? 'rgba(91,220,142,.18)' : 'transparent'};color:${state.logStatus === 'done' ? '#5bdc8e' : 'var(--text-2)'};font-weight:${state.logStatus === 'done' ? '600' : 'normal'}">✅ Completed</button>
          <button type="button" class="btn pill-btn" data-set-log-status="dependency" style="padding:4px 12px;font-size:12px;border-radius:16px;border:1px solid ${state.logStatus === 'dependency' ? '#ff6b6b' : 'var(--line-2)'};background:${state.logStatus === 'dependency' ? 'rgba(255,107,107,.18)' : 'transparent'};color:${state.logStatus === 'dependency' ? '#ff6b6b' : 'var(--text-2)'};font-weight:${state.logStatus === 'dependency' ? '600' : 'normal'}">⚠️ Dependency Needed</button>
        </div>
        <span style="font-size:12px;color:var(--text-2)">Member: <b style="color:var(--text);display:inline-flex;align-items:center;gap:4px">${esc((PEOPLE[ME]?.name) || ME || 'User')} ${userModeIcon(ME, 'xs')}</b></span>
      </div>

      <div style="margin-bottom:12px">
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--text-2);margin-bottom:6px">
          📁 Project Name <span style="font-weight:normal;color:var(--text-3);font-size:11.5px">(Enter the name of the project)</span>
        </label>
        <input type="text" id="logProjectName" list="projectSuggestions" placeholder="Enter the name of the project (e.g. E-Commerce Platform, Hotel Booking App)..." value="${esc(state.logProjectName || (projects.find(p => p.id === state.logProject)?.name) || (projects[0]?.name || ''))}" style="width:100%;height:38px;padding:0 12px;border-radius:8px;background:var(--panel-2);border:1px solid var(--line-2);color:var(--text);font-size:13px" />
        <datalist id="projectSuggestions">
          ${projects.map(p => `<option value="${esc(p.name)}">`).join('')}
        </datalist>
      </div>

      <!-- Assign Team Lead Approver -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:8px;padding:8px 12px">
        <span style="font-size:12px;color:var(--text);font-weight:600;display:flex;align-items:center;gap:6px">
          👤 Assign Team Lead Approver:
        </span>
        <select class="select" id="logLeadApprover" style="height:32px;font-size:12px;flex:1;max-width:280px">
          <option value="">Select Team Lead to Approve</option>
          ${availableLeads}
        </select>
        <span style="font-size:11px;color:var(--gold);margin-left:auto">🛡️ Team Lead sign-off required</span>
      </div>

      <!-- Target Completion Date (In Progress on Nov 19 -> Completed on Nov 20) -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:8px;padding:8px 12px">
        <span style="font-size:12px;color:var(--text);font-weight:600;display:flex;align-items:center;gap:6px">
          📅 Target Completion Date:
        </span>
        <input type="date" id="logTargetDate" value="${state.logTargetDate || '2026-11-20'}" style="height:32px;padding:0 8px;border-radius:6px;font-size:12px;background:var(--panel-2);border:1px solid var(--line-2);color:var(--text)" />
        <span style="font-size:11.5px;color:var(--gold);margin-left:auto">⏳ Nov 19: In Progress → Nov 20: Complete ✅</span>
      </div>

      <textarea id="logText" placeholder="What did you work on today? Describe tasks, milestones, or deliverables completed..."></textarea>

      ${state.logStatus === 'dependency' ? `
      <div class="dep-composer-panel" style="margin-top:12px;padding:12px 14px;background:rgba(255,107,107,.07);border:1px solid rgba(255,107,107,.35);border-radius:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <span style="font-weight:600;color:#ff6b6b;font-size:12.5px;display:flex;align-items:center;gap:6px">
            ⚠️ What is the dependency / blocker needed?
          </span>
          <span style="font-size:11px;color:var(--text-2)">Directly sent to Lead for resolution</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 220px;gap:10px">
          <input type="text" id="logDependency" placeholder="Explain the dependency (e.g. Waiting for Stripe API keys / Need design review)" style="height:38px;padding:0 12px;border-radius:8px;background:var(--panel-2);border:1px solid var(--line-2);color:var(--text);font-size:12.5px" value="${esc(state.logDependency || '')}" />
          <select class="select" id="logLead" title="Assign to Team Lead" style="height:38px;border-radius:8px">
            <option value="">Select Team Lead</option>
            ${availableLeads}
          </select>
        </div>
      </div>` : ''}

      <div class="composer-bar" style="margin-top:12px">
        <button class="tool" data-action="log-attach" title="Attach file">${icon('clip')}</button>
        <button class="tool" data-action="log-bullet" title="Add checklist item">${icon('checkSquare')}</button>
        <input type="file" id="logFile" hidden />
        ${state.logAttach ? `<span class="attach-chip">${icon('file', 'xs')}${esc(state.logAttach)}</span>` : ''}
        <select class="select" id="logProject" title="Project">${projects.filter(p => p.status !== 'done').map(p => `<option value="${p.id}" ${p.id === state.logProject ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select>
        <select class="select" id="logHours" title="Time spent">${['1h 00m', '2h 00m', '3h 00m', '4h 00m', '4h 30m', '5h 00m', '5h 30m', '6h 00m', '7h 00m', '8h 00m'].map(h => `<option ${h === state.logHours ? 'selected' : ''}>${h}</option>`).join('')}</select>
        <span class="spacer"></span>
        <button class="btn" data-action="log-cancel">Cancel</button>
        <button class="btn gold" data-action="log-save">${icon('check', 'sm')} Submit for Approval</button>
      </div>
    </div>

    <div class="logs-head" style="display:flex;justify-content:space-between;align-items:center;margin-top:24px;margin-bottom:14px;flex-wrap:wrap;gap:8px">
      <span class="card-title" style="font-size:16px">Work Logs &amp; Approvals</span>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn flat" data-log-filter="all" style="height:28px;padding:0 12px;font-size:12px;border-radius:14px;${state.logFilter === 'all' ? 'color:var(--gold);background:rgba(245,184,46,.15);font-weight:600' : 'color:var(--text-2)'}">All (${allLogs.length})</button>
        <button class="btn flat" data-log-filter="pending_approval" style="height:28px;padding:0 12px;font-size:12px;border-radius:14px;${state.logFilter === 'pending_approval' ? 'color:var(--gold);background:rgba(245,184,46,.15);font-weight:600' : 'color:var(--text-2)'}">⏳ Pending Approval (${pendingApprovalCount})</button>
        <button class="btn flat" data-log-filter="approved" style="height:28px;padding:0 12px;font-size:12px;border-radius:14px;${state.logFilter === 'approved' ? 'color:#5bdc8e;background:rgba(91,220,142,.15);font-weight:600' : 'color:var(--text-2)'}">✅ Approved by Lead (${approvedCount})</button>
        <button class="btn flat" data-log-filter="dependency" style="height:28px;padding:0 12px;font-size:12px;border-radius:14px;${state.logFilter === 'dependency' ? 'color:#ff6b6b;background:rgba(255,107,107,.18);font-weight:600' : 'color:var(--text-2)'}">⚠️ Dependencies (${depCount})</button>
      </div>
    </div>

    <div class="logs">${filteredLogs.length ? filteredLogs.map((l, i) => {
      const ld = parseISO(l.date), p = projects.find(x => x.id === l.project) || { id: l.project, name: l.project || 'General' };
      const isDep = l.status === 'dependency';
      const hasTarget = l.target_date && /^\d{4}-\d{2}-\d{2}$/.test(l.target_date);
      const isEffDone = l.status === 'done' || (hasTarget && state.logDate >= l.target_date);
      const isEffProgress = !isEffDone && (l.status === 'progress' || (hasTarget && state.logDate < l.target_date));
      const isApproved = l.approval_status === 'approved';
      const isRejected = l.approval_status === 'rejected';

      return `<div class="log ${l.date === state.logDate ? 'sel' : ''}">
        <div class="log-date"><b>${fmtShort(l.date)}</b><span>${DOW[ld.getDay()]}</span></div>
        <div class="log-rail"><i></i></div>
        <div class="card log-card" style="${isApproved ? 'border-color:rgba(91,220,142,.35);' : isDep && !l.resolved ? 'border-color:rgba(255,107,107,.45);' : ''}">
          <span class="log-state ${isApproved || isEffDone ? 'done' : isDep ? 'prog' : 'prog'}" style="${isApproved || isEffDone ? 'background:rgba(91,220,142,.15);color:#5bdc8e;' : isDep ? 'background:rgba(255,107,107,.15);color:#ff6b6b;' : ''}">
            ${isApproved || isEffDone ? icon('check') : isDep ? '⚠️' : '⏳'}
          </span>
          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <h4 class="clickable" ${p.id ? `data-go="#/project/${p.id}/overview"` : ''} style="margin:0;color:var(--gold);font-size:13.5px;font-weight:600;display:inline-flex;align-items:center;gap:5px">📁 Project: ${esc(p.name || l.project || 'General')}</h4>
              <span style="font-size:12px;color:var(--text-2)">Logged by: <b style="color:var(--text);display:inline-flex;align-items:center;gap:4px">${esc((PEOPLE[l.member]?.name) || l.member || 'Member')} ${userModeIcon(l.member, 'xs')}</b></span>
              ${hasTarget ? (state.logDate < l.target_date ?
                `<span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:11px;padding:2px 8px">⏳ In Progress (Target: ${fmtShort(l.target_date)})</span>` :
                `<span class="badge done" style="font-size:11px;padding:2px 8px">✅ Completed (${fmtShort(l.target_date)})</span>`
              ) : ''}
            </div>
            <ul style="margin-top:6px">${l.items.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
            ${l.attach ? `<div class="attach-chip" style="margin-top:6px">${icon('clip', 'xs')}${esc(l.attach)}</div>` : ''}

            <!-- Team Lead Approval Box -->
            <div class="log-approval-box" style="margin-top:12px;padding:10px 14px;border-radius:8px;background:${isApproved ? 'rgba(91,220,142,.07)' : isRejected ? 'rgba(239,68,68,.07)' : 'rgba(245,184,46,.07)'};border:1px solid ${isApproved ? 'rgba(91,220,142,.35)' : isRejected ? 'rgba(239,68,68,.35)' : 'rgba(245,184,46,.35)'}">
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
                <div style="display:flex;align-items:center;gap:8px">
                  ${isApproved ? `
                    <span class="badge done" style="font-size:11.5px;padding:3px 9px">✓ Approved by ${(PEOPLE[l.approved_by] && PEOPLE[l.approved_by].name) || l.approved_by || 'Team Lead'}</span>
                    <span class="muted" style="font-size:11px">${l.approved_at || ''}</span>
                  ` : isRejected ? `
                    <span class="badge" style="background:rgba(239,68,68,.18);color:#ff5c5c;font-size:11.5px;padding:3px 9px">✕ Changes Requested</span>
                    <span class="muted" style="font-size:11px">Reviewed by ${(PEOPLE[l.approved_by] && PEOPLE[l.approved_by].name) || l.approved_by || 'Team Lead'}</span>
                  ` : `
                    <span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:11.5px;padding:3px 9px">⏳ Awaiting Team Lead Approval</span>
                    <span class="muted" style="font-size:11.5px">Assigned Approver: <b style="color:var(--text)">${(PEOPLE[l.lead] && PEOPLE[l.lead].name) || l.lead || 'Team Lead'}</b></span>
                  `}
                </div>

                <!-- Lead Action Buttons -->
                <div style="display:flex;gap:6px">
                  ${!isApproved ? `
                    <button type="button" class="btn ok" data-action="lead-approve-log" data-log-idx="${workLogs.indexOf(l)}" style="height:28px;padding:0 12px;font-size:11.5px;display:flex;align-items:center;gap:4px">
                      ${icon('check', 'xs')} Approve Work
                    </button>
                  ` : ''}
                  ${!isRejected ? `
                    <button type="button" class="btn" data-action="lead-reject-log" data-log-idx="${workLogs.indexOf(l)}" style="height:28px;padding:0 12px;font-size:11.5px;color:#ff6b6b;border-color:rgba(239,68,68,.3);display:flex;align-items:center;gap:4px">
                      ${icon('x', 'xs')} Request Changes
                    </button>
                  ` : ''}
                  <button type="button" class="btn" data-action="chat-lead-dep" data-lead="${l.lead || l.member}" data-project="${l.project}" style="height:28px;padding:0 12px;font-size:11.5px;color:var(--gold)">
                    ${icon('message', 'xs')} Message
                  </button>
                </div>
              </div>
              ${l.approval_note ? `<div style="font-size:12px;color:var(--text);margin-top:6px;line-height:1.4;background:rgba(255,255,255,.03);padding:6px 10px;border-radius:6px"><b>Lead Feedback / Note:</b> ${esc(l.approval_note)}</div>` : ''}
            </div>

            ${(l.dependency || isDep) ? `
            <div class="dep-callout" style="margin-top:10px;padding:10px 14px;border-radius:8px;background:${l.resolved ? 'rgba(91,220,142,.08)' : 'rgba(255,107,107,.08)'};border-left:4px solid ${l.resolved ? '#5bdc8e' : '#ff6b6b'}">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px">
                <span style="font-size:12px;font-weight:600;color:${l.resolved ? '#5bdc8e' : '#ff6b6b'};display:flex;align-items:center;gap:4px">
                  ${l.resolved ? '✓ Dependency Resolved by Team Lead' : '⚠️ Blocker / Dependency Needed'}
                </span>
                <span style="font-size:11.5px;color:var(--text-2)">Assigned Lead: <b style="color:var(--text);display:inline-flex;align-items:center;gap:4px">${esc((PEOPLE[l.lead]?.name) || l.lead || 'Team Lead')} ${userModeIcon(l.lead, 'xs')}</b></span>
              </div>
              <div style="font-size:12.5px;color:var(--text);margin-top:5px;line-height:1.4">
                ${esc(l.dependency || 'Dependency needed to continue task.')}
              </div>
              ${l.help_note ? `<div style="font-size:11.5px;color:#5bdc8e;margin-top:6px;background:rgba(91,220,142,.1);padding:6px 10px;border-radius:6px"><b>Lead Resolution / Help:</b> ${esc(l.help_note)} <span style="color:var(--text-2);font-size:10.5px">(${esc(l.resolved_at || '')})</span></div>` : ''}
              <div style="display:flex;gap:8px;margin-top:10px">
                ${!l.resolved ? `<button class="btn flat" data-action="lead-resolve-dep" data-log-idx="${workLogs.indexOf(l)}" style="height:28px;padding:0 12px;font-size:11.5px;color:#5bdc8e;border:1px solid rgba(91,220,142,.4);display:flex;align-items:center;gap:4px">${icon('check', 'xs')}Resolve / Provide Help</button>` : ''}
                <button class="btn flat" data-action="chat-lead-dep" data-lead="${l.lead || ''}" data-project="${l.project}" style="height:28px;padding:0 12px;font-size:11.5px;color:var(--gold);border:1px solid rgba(245,184,46,.4);display:flex;align-items:center;gap:4px">${icon('message', 'xs')}Message in Chat</button>
              </div>
            </div>` : ''}
          </div>
          <div class="log-side">
            <span class="log-hours">${icon('clock', 'sm')}${l.hours}</span>
            <button class="badge-btn clickable" data-log-menu="${workLogs.indexOf(l)}" title="Click to change status" style="background:none;border:none;cursor:pointer;padding:0;outline:none">
              ${isApproved ? '<span class="badge done">Approved ✓</span>' : isDone ? '<span class="badge done">Completed</span>' : isDep ? '<span class="badge" style="background:rgba(255,107,107,.15);border:1px solid rgba(255,107,107,.4);color:#ff6b6b;font-weight:600">⚠️ Dependency</span>' : '<span class="badge review">In Progress</span>'}
            </button>
          </div>
        </div>
      </div>`;
    }).join('') : '<div class="card empty" style="padding:36px;text-align:center;color:var(--text-2)"><div style="font-size:32px;margin-bottom:8px">📝</div>No work logs match this filter. Write what you worked on above to add a log!</div>'}</div>
  </section>`;
}

/* ---------------- Messenger ---------------- */
function lastMsg(c) { return (c && c.msgs && c.msgs.length) ? c.msgs[c.msgs.length - 1] : { time: '', text: '' }; }
function renderMessenger() {
  const q = state.chatQuery.toLowerCase();
  const list = chats.filter(c => !q || c.name.toLowerCase().includes(q) || (c.msgs && c.msgs.some(m => (m.text || '').toLowerCase().includes(q))));
  const c = chats.find(x => x.id === state.chatId) || chats[0];
  if (c) c.unread = 0;
  const chatAv = ch => ch.kind === 'dm' ? av(ch.person, 's36', PEOPLE[ch.person]?.availability === 'available' ? '<i class="online"></i>' : (PEOPLE[ch.person]?.availability === 'absent' ? '<i class="absent-dot"></i>' : '')) : `<span class="group-av">${icon('users', 'sm')}</span>`;
  const preview = ch => { const m = lastMsg(ch); const who = m.from === ME ? 'You' : ((PEOPLE[m.from]?.name) || m.from || 'User'); return ch.kind === 'dm' ? esc((m.text || '').split('\n')[0]) : `${who}: ${esc((m.text || '').split('\n')[0])}`; };
  return `<section class="view">
    <div class="page-head" style="margin-bottom:16px">
      <div><h1 class="page-title" style="font-size:24px">Messenger</h1><p class="page-sub">Team communication, project discussions and quick support</p></div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn primary" data-action="new-group" style="height:36px;padding:0 14px;font-size:13px;display:flex;align-items:center;gap:6px">${icon('users', 'sm')}New Group</button>
        <button class="icon-btn" style="color:var(--gold);width:38px;height:38px" data-action="new-chat" title="New direct message">${icon('edit', 'sm')}</button>
      </div>
    </div>
    <div class="card msgr">
      <div class="chat-list">
        <label class="search">${icon('search', 'sm')}<input id="chatSearch" placeholder="Search chats or people..." value="${esc(state.chatQuery)}"/></label>
        <div class="chats">${list.map(ch => `
          <div class="chat-item ${c && ch.id === c.id ? 'active' : ''}" data-chat="${ch.id}">
            ${chatAv(ch)}
            <div style="min-width:0">
              <div class="t" style="display:flex;align-items:center;gap:6px">
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(ch.name)}</span>
                ${ch.project ? `<span style="font-size:9.5px;padding:1px 6px;background:rgba(245,184,46,.15);color:var(--gold);border-radius:4px;flex-shrink:0;font-weight:600">Project</span>` : ch.kind === 'group' ? `<span style="font-size:9.5px;padding:1px 6px;background:rgba(255,255,255,.07);color:var(--text-2);border-radius:4px;flex-shrink:0">Group</span>` : ''}
              </div>
              <div class="p">${preview(ch)}</div>
            </div>
            <div class="right"><span>${ch.timeLabel && lastMsg(ch).time === ch.timeLabel ? ch.timeLabel : lastMsg(ch).time}</span>
              ${ch.unread ? `<span class="unread">${ch.unread}</span>` : `<button class="star ${ch.starred ? 'on' : ''}" data-star-chat="${ch.id}" title="Star">${icon('star', 'xs')}</button>`}</div>
          </div>`).join('') || '<div class="empty">No chats found.</div>'}</div>
      </div>
      ${c ? `
      <div class="chat-win">
        <div class="chat-head">
          ${c.kind === 'dm' ? `<span class="clickable" data-profile="${c.person}">${av(c.person, 's36')}</span>` : `<span class="group-av">${icon(c.project ? 'portfolio' : 'users', 'sm')}</span>`}
          <div>
            <div class="t" style="display:flex;align-items:center;gap:6px">
              <span>${esc(c.name)}</span>
              ${c.kind === 'dm' && c.person ? userModeIcon(c.person, 'sm') : ''}
              ${c.project ? `<span style="font-size:10px;padding:2px 7px;background:rgba(245,184,46,.15);color:var(--gold);border-radius:4px;font-weight:600">Project Channel</span>` : ''}
            </div>
            <div class="s">${c.kind === 'dm' ? (AVAIL[PEOPLE[c.person]?.availability]?.label || 'Available') : `${(c.memberList ? c.memberList.length : c.members) || 1} Members`}</div>
          </div>
          <div class="acts">
            ${c.project ? `<button class="btn flat" data-go="#/project/${c.project}/overview" style="height:32px;padding:0 10px;font-size:12px;color:var(--gold);display:flex;align-items:center;gap:4px" title="View Project in Projects View">${icon('chevLeft', 'xs')}Project View</button>` : ''}
            ${c.kind === 'group' ? `<button class="btn flat" data-action="add-group-member" style="height:32px;padding:0 10px;font-size:12px;color:var(--gold);display:flex;align-items:center;gap:4px" title="Add Employee to this Group">${icon('userPlus', 'xs')}Add Member</button>` : ''}
            <button title="Info" data-action="chat-info">${icon('info', 'sm')}</button>
          </div>
        </div>
        <div class="msgs" id="msgs">
          ${(c.msgs || []).map((m, idx) => {
            const isMe = m.from === ME;
            const fromName = isMe ? 'You' : ((PEOPLE[m.from]?.name) || m.from || 'Member');
            const reactions = m.reactions || {};
            const rxEntries = Object.entries(reactions);

            return `
            <div class="msg ${isMe ? 'me' : ''}" id="msg-item-${idx}" data-msg-idx="${idx}">
              ${!isMe ? av(m.from, 's36') : ''}
              <div class="msg-content-wrap">
                ${!isMe ? `
                  <div class="who" style="display:flex;align-items:center;gap:4px">
                    <span>${esc(fromName)}</span>
                    ${userModeIcon(m.from, 'xs')}
                    <span style="margin-left:auto">${m.time}</span>
                  </div>` : ''}

                <div class="bubble-container">
                  <div class="bubble">
                    ${isMe ? `<div class="meta">${m.time} ${icon('checks', 'xs')}</div>` : ''}

                    <!-- Quoted Message (WhatsApp Style Reply Preview) -->
                    ${m.reply_to ? `
                      <div class="msg-quote-card" data-action="jump-quoted-msg" data-quoted-text="${esc(m.reply_to.text || '')}" title="Click to view quoted message">
                        <div class="msg-quote-name">${esc(m.reply_to.from_name || (PEOPLE[m.reply_to.from]?.name) || m.reply_to.from || 'Member')}</div>
                        <div class="msg-quote-snippet">${esc(m.reply_to.text || '')}</div>
                      </div>
                    ` : ''}

                    <div class="msg-text">${esc(m.text || '').replace(/\n/g, '<br>')}</div>

                    ${m.file ? `
                      <div class="attach">
                        <span style="color:var(--text-2)">${icon('file')}</span>
                        <div><div class="n">${esc(m.file.name)}</div><div class="z">${m.file.size}</div></div>
                        <button type="button" data-action="download" title="Download">${icon('download', 'sm')}</button>
                      </div>` : ''}
                  </div>

                  <!-- WhatsApp Style Message Actions (Hover / Tap) -->
                  <div class="msg-actions-pill">
                    <button type="button" class="msg-act-btn" data-action="quick-react" data-emoji="👍" data-msg-idx="${idx}" title="Thumbs Up">👍</button>
                    <button type="button" class="msg-act-btn" data-action="quick-react" data-emoji="❤️" data-msg-idx="${idx}" title="Heart">❤️</button>
                    <button type="button" class="msg-act-btn" data-action="quick-react" data-emoji="😂" data-msg-idx="${idx}" title="Laugh">😂</button>
                    <button type="button" class="msg-act-btn" data-action="quick-react" data-emoji="😮" data-msg-idx="${idx}" title="Surprised">😮</button>
                    <button type="button" class="msg-act-btn" data-action="quick-react" data-emoji="🙏" data-msg-idx="${idx}" title="Thanks">🙏</button>
                    <button type="button" class="msg-act-btn" data-action="open-more-emojis" data-msg-idx="${idx}" title="More emojis">➕</button>
                    <button type="button" class="msg-act-btn reply-act" data-action="reply-to-msg" data-msg-idx="${idx}" title="Reply to this message">
                      ${icon('reply', 'xs')} <span>Reply</span>
                    </button>
                  </div>
                </div>

                <!-- Emoji Reactions Display Under Bubble -->
                ${rxEntries.length ? `
                  <div class="msg-rx-row">
                    ${rxEntries.map(([emoji, users]) => {
                      const userList = Array.isArray(users) ? users : [];
                      const hasReacted = userList.includes(ME || 'raja');
                      const names = userList.map(u => (PEOPLE[u]?.name) || u).join(', ');
                      return `
                        <button type="button" class="msg-rx-pill ${hasReacted ? 'active' : ''}" data-action="quick-react" data-emoji="${emoji}" data-msg-idx="${idx}" title="${esc(names)}">
                          <span>${emoji}</span>
                          <span class="rx-cnt">${userList.length}</span>
                        </button>
                      `;
                    }).join('')}
                    <button type="button" class="msg-rx-add" data-action="open-more-emojis" data-msg-idx="${idx}" title="Add reaction">+</button>
                  </div>
                ` : ''}
              </div>
            </div>`;
          }).join('')}
        </div>

        <!-- WhatsApp Reply Preview Banner -->
        ${state.replyingTo ? `
          <div class="reply-banner">
            <div class="reply-banner-bar"></div>
            <div class="reply-banner-body">
              <div class="reply-banner-title">
                ${icon('reply', 'xs')} Replying to <strong style="color:var(--gold);margin-left:4px">${esc(state.replyingTo.from_name || state.replyingTo.from)}</strong>
              </div>
              <div class="reply-banner-text">${esc(state.replyingTo.text)}</div>
            </div>
            <button type="button" class="reply-banner-close" data-action="cancel-reply" title="Cancel Reply (Esc)">
              ${icon('x', 'xs')}
            </button>
          </div>
        ` : ''}

        <form class="composer-row" id="msgForm">
          <button type="button" class="plus-btn" data-action="msg-attach" title="Attach">${icon('plus', 'sm')}</button>
          <input type="file" id="msgFile" hidden />
          <label class="msg-input"><input id="msgInput" placeholder="${state.replyingTo ? `Reply to ${state.replyingTo.from_name}...` : 'Type a message...'}" autocomplete="off"/><button type="button" data-action="emoji" title="Emoji">${icon('smile')}</button></label>
          <button class="send" type="submit" title="Send">${icon('send', 'sm')}</button>
        </form>
      </div>` : `
      <div class="chat-win" style="display:grid;place-items:center;padding:48px 24px;text-align:center">
        <div>
          <div style="font-size:42px;margin-bottom:12px">💬</div>
          <h3 style="font-size:17px;font-weight:600;margin-bottom:6px">No conversations yet</h3>
          <p style="color:var(--text-2);font-size:13px;margin-bottom:18px">Start chatting by creating a team group or sending a direct message.</p>
          <div style="display:flex;gap:10px;justify-content:center">
            <button class="btn primary" data-action="new-group">${icon('users', 'sm')} Create Group</button>
            <button class="btn" data-action="new-chat">${icon('edit', 'sm')} New Message</button>
          </div>
        </div>
      </div>
      `}
    </div>
  </section>`;
}
function afterMessenger() {
  const box = $('#msgs');
  if (box) box.scrollTop = box.scrollHeight;
  const main = $('#main');
  main.style.overflow = 'hidden';
  if (state.replyingTo) {
    $('#msgInput')?.focus();
  }
}
function updateMsgDot() {
  $('#msgDot').classList.toggle('hide', !chats.some(c => c.unread));
  if (!location.hash.startsWith('#/messenger')) $('#main').style.overflow = '';
}
function sendMessage(text, file) {
  const c = chats.find(x => x.id === state.chatId);
  if (!c) return;
  const msgContent = text || (file ? 'Shared a file' : '');
  const replyTo = state.replyingTo ? { ...state.replyingTo } : null;
  state.replyingTo = null;

  const newMsg = {
    id: Date.now(),
    from: ME || 'raja',
    time: nowTime(),
    text: msgContent,
    file,
    reply_to: replyTo,
    reactions: {}
  };
  c.msgs.push(newMsg);
  rerender();

  apiSendMessage(c.id, {
    from_member: ME || 'raja',
    text: msgContent,
    file_info: file,
    time_label: nowTime(),
    reply_to: replyTo,
    reactions: {}
  }).then(saved => {
    if (saved && saved.id) newMsg.id = saved.id;
  });

  // Simulated reply so the conversation feels alive
  const replier = c.kind === 'dm' ? c.person : (c.id === 'hotel' ? 'divya' : c.id === 'unity' ? 'karthik' : 'arun');
  const box = $('#msgs');
  setTimeout(() => {
    if (!location.hash.startsWith('#/messenger') || state.chatId !== c.id) {
      c.msgs.push({ from: replier, time: nowTime(), text: 'Got it, thanks! 👍', reactions: {} });
      c.unread++;
      updateMsgDot();
      return;
    }
    box?.insertAdjacentHTML('beforeend', `<div class="typing">${(PEOPLE[replier]?.name) || replier} is typing…</div>`);
    if (box) box.scrollTop = box.scrollHeight;
    setTimeout(() => {
      c.msgs.push({
        from: replier,
        time: nowTime(),
        text: ['Got it, thanks! 👍', 'Sounds good.', 'Sure, will check and update.', 'Noted 🙌'][Math.floor(Math.random() * 4)],
        reactions: {}
      });
      if (location.hash.startsWith('#/messenger') && state.chatId === c.id) rerender();
      else { c.unread++; updateMsgDot(); }
    }, 1200);
  }, 700);
}

async function toggleMessageReaction(c, msgIdx, emoji) {
  const m = c.msgs[msgIdx];
  if (!m) return;
  if (!m.reactions || typeof m.reactions !== 'object') m.reactions = {};
  const current = ME || 'raja';
  const users = Array.isArray(m.reactions[emoji]) ? [...m.reactions[emoji]] : [];
  const uIdx = users.indexOf(current);
  if (uIdx >= 0) {
    users.splice(uIdx, 1);
    if (!users.length) {
      delete m.reactions[emoji];
    } else {
      m.reactions[emoji] = users;
    }
  } else {
    users.push(current);
    m.reactions[emoji] = users;
  }
  rerender();
  if (m.id) {
    await fetchFromAPI(`/messages/${m.id}/react/`, {
      method: 'POST',
      body: JSON.stringify({ emoji, user: current })
    });
  }
}

function openMoreEmojis(anchor, msgIdx) {
  closeFloating();
  const c = chats.find(x => x.id === state.chatId);
  if (!c || !c.msgs[msgIdx]) return;
  const emojis = ['👍', '❤️', '😂', '😮', '😢', '🙏', '🔥', '👏', '🎉', '🚀', '💯', '✨', '😍', '👀', '🤝', '💪', '👌', '⚡'];
  const el = document.createElement('div');
  el.className = 'rx-popover';
  el.innerHTML = emojis.map(em => `<button type="button" class="rx-pop-btn" data-emoji="${em}">${em}</button>`).join('');
  el.addEventListener('click', async e => {
    const btn = e.target.closest('[data-emoji]');
    if (!btn) return;
    const emoji = btn.dataset.emoji;
    el.remove();
    await toggleMessageReaction(c, msgIdx, emoji);
  });
  place(el, anchor);
}

/* ---------------- Floating UI: profile card, menus, modal ---------------- */
function closeFloating() { $$('.pop, .menu').forEach(e => e.remove()); }
let currentProfileAnchor = null;
function place(el, anchor) {
  document.body.appendChild(el);
  const r = anchor.getBoundingClientRect(), w = el.offsetWidth, h = el.offsetHeight;
  if (anchor && !anchor.nodeType && r.top !== undefined && r.left !== undefined) {
    el.style.left = Math.max(12, Math.min(innerWidth - w - 12, r.left)) + 'px';
    el.style.top = Math.max(12, Math.min(innerHeight - h - 12, r.top)) + 'px';
    return;
  }
  let left = r.left, top = r.bottom + 6;
  if (left + w > innerWidth - 12) left = r.right - w;
  if (top + h > innerHeight - 12) top = r.top - h - 6;
  el.style.left = Math.max(12, left) + 'px';
  el.style.top = Math.max(12, top) + 'px';
}
function openProfile(id, anchor) {
  closeFloating();
  if (!ME || !AUTH_TOKEN) {
    openLoginModal();
    return;
  }
  if (anchor && anchor.nodeType) {
    currentProfileAnchor = anchor;
  } else if (!currentProfileAnchor || !document.body.contains(currentProfileAnchor)) {
    currentProfileAnchor = (id === ME) ? $('#sideUser') : null;
  }
  const personId = id || ME;
  const P = (personId && PEOPLE[personId]) || {
    name: (personId && typeof personId === 'string' && personId.length) ? personId.charAt(0).toUpperCase() + personId.slice(1) : 'Member',
    role: 'Developer',
    availability: 'available',
    mode: 'office'
  };
  const modeKey = P.mode || 'office';
  const mInfo = MODES[modeKey] || MODES['office'];
  const el = document.createElement('div');
  el.className = 'pop';
  el.innerHTML = `
    <div class="pop-head">${av(personId, 's64')}<div><div class="n" style="display:flex;align-items:center;gap:6px"><span>${esc(P.name)}</span><span class="user-mode-badge" title="${esc(mInfo.long)}">${icon(mInfo.icon, 'xs')}<span>${mInfo.label}</span></span>${P.availability === 'absent' ? `<span class="user-absent-badge" title="Absent Today">${icon('slashCircle', 'xs')}<span>Absent</span></span>` : ''}</div><div class="r">${TITLES[personId] || P.role || 'Member'}</div>${availBadge(personId)}</div></div>
    <h5>Availability</h5>
    ${Object.entries(AVAIL).map(([k, a]) => `<button class="opt ${P.availability === k ? 'on' : ''}" data-set-avail="${k}"><i class="sdot ${a.cls}"></i>${a.short || a.label}<span class="tick">${icon('check', 'sm')}</span></button>`).join('')}
    <div class="sep"></div>
    <h5>Work Location</h5>
    ${Object.entries(MODES).map(([k, m]) => `<button class="opt ${P.mode === k ? 'on' : ''}" data-set-mode="${k}">${icon(m.icon)}${m.long}<span class="tick">${icon('check', 'sm')}</span></button>`).join('')}
    <div class="sep"></div>
    <h5>Account</h5>
    <button class="opt" data-action="open-login">${icon('user')}Switch Account / Sign In</button>
    <button class="opt" data-action="open-register">${icon('userPlus')}Register New Account</button>
    ${AUTH_TOKEN ? `<button class="opt" data-action="auth-logout" style="color:var(--red)">${icon('x')}Log Out</button>` : ''}
    ${personId !== ME ? `<div class="sep"></div><button class="opt" data-dm="${personId}" style="margin-top:8px">${icon('message')}Send message</button>` : ''}`;
  el.dataset.person = personId;
  place(el, anchor || currentProfileAnchor || document.body);
}
function openMenu(anchor, items) {
  closeFloating();
  const el = document.createElement('div');
  el.className = 'menu';
  el.innerHTML = items.map((it, i) => `<button data-mi="${i}" class="${it.danger ? 'danger' : ''}">${it.icon ? icon(it.icon, 'sm') : ''}${it.label}</button>`).join('');
  el.addEventListener('click', e => { const b = e.target.closest('[data-mi]'); if (!b) return; el.remove(); items[b.dataset.mi].run(); });
  place(el, anchor);
}
function openJiraTaskModal(p, task, isNew = false) {
  const ov = document.createElement('div');
  ov.className = 'jira-overlay';

  // Ensure arrays exist
  if (!Array.isArray(task.checklist)) task.checklist = [];
  if (!Array.isArray(task.attachments)) task.attachments = [];
  if (!Array.isArray(task.comments)) task.comments = [];
  if (!Array.isArray(task.worklogs)) task.worklogs = [];
  if (!Array.isArray(task.labels)) task.labels = task.category ? [task.category] : ['All_Projects'];
  if (!task.key) {
    const projCode = ((p && p.name) || 'IPP').replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase() || 'IPP';
    task.key = `${projCode}-${task.id ? String(task.id).slice(-3) : 1}`;
  }
  if (!task.reporter) task.reporter = ME || 'raja';
  if (!task.approver) task.approver = 'raja';
  if (!task.approval_status) task.approval_status = 'pending';
  if (!task.watchers) task.watchers = 2;
  if (task.isWatching === undefined) task.isWatching = true;

  let activeTab = 'comments'; // 'all', 'comments', 'history', 'worklog'
  let isFullscreen = false;

  const saveTask = async () => {
    if (!isNew && task.id) {
      await apiPatchTask(task.id, {
        title: task.title,
        desc: task.desc,
        task_type: task.task_type,
        category: task.category,
        assignee: task.assignee,
        reporter: task.reporter,
        approver: task.approver || 'raja',
        approval_status: task.approval_status || 'pending',
        approved_by: task.approved_by || '',
        approved_at: task.approved_at || '',
        priority: task.priority,
        status: task.status,
        due: task.due,
        key: task.key,
        checklist: task.checklist,
        attachments: task.attachments,
        comments: task.comments,
        worklogs: task.worklogs,
        labels: task.labels
      });
      rerender();
    }
  };

  const renderModal = () => {
    const type = TASK_TYPES[task.task_type] || TASK_TYPES['task'];
    const members = (p && p.team && p.team.length ? p.team : Object.keys(PEOPLE));
    const assigneeName = (PEOPLE[task.assignee] && PEOPLE[task.assignee].name) || task.assignee || 'Unassigned';
    const reporterName = (PEOPLE[task.reporter] && PEOPLE[task.reporter].name) || task.reporter || 'Reporter';

    const chkDone = task.checklist.filter(c => c.done).length;
    const chkTotal = task.checklist.length;
    const pct = chkTotal ? Math.round((chkDone / chkTotal) * 100) : 0;

    ov.innerHTML = `
      <div class="jira-modal ${isFullscreen ? 'fullscreen' : ''}">
        <!-- Top Bar -->
        <div class="jira-topbar">
          <div style="display:flex;align-items:center;gap:10px">
            <span class="jira-key-badge" title="Click to change task type" id="jiraKeyBadge" style="cursor:pointer">
              ${icon(type.icon, 'xs')} <span>${esc(task.key)}</span> ${icon('chevDown', 'xs')}
            </span>
          </div>

          <div class="jira-top-actions">
            <button class="jira-top-btn" id="jiraWatchBtn" title="Toggle Watchers">
              <svg class="ic xs" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>
              <span>${task.watchers}</span>
            </button>
            <button class="jira-top-btn" id="jiraShareBtn" title="Share task link">
              <svg class="ic xs" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
            <button class="jira-top-btn" id="jiraMenuBtn" title="More actions">
              ${icon('more', 'xs')}
            </button>
            <button class="jira-top-btn" id="jiraExpandBtn" title="Toggle Fullscreen">
              <svg class="ic xs" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </button>
            <button class="icon-btn" data-close style="width:30px;height:30px;margin-left:4px">${icon('x', 'sm')}</button>
          </div>
        </div>

        <!-- Body: Two Columns -->
        <div class="jira-body">
          <!-- Left Column (Main) -->
          <div class="jira-main">
            <!-- Title -->
            <div>
              <input class="jira-title-input" id="jiraTitleInput" value="${esc(task.title)}" placeholder="Task title..." autocomplete="off" />
              <div style="display:flex;align-items:center;gap:6px;margin-top:6px">
                <button class="jira-top-btn" id="jiraAddSubtaskQuick" title="Add subtask">${icon('plus', 'xs')} Add Subtask</button>
                <label class="jira-top-btn" style="cursor:pointer">
                  <input type="file" id="jiraQuickFileInput" multiple hidden />
                  ${icon('clip', 'xs')} Attach
                </label>
              </div>
            </div>

            <!-- Description -->
            <div class="jira-sec">
              <div class="jira-sec-head">${icon('chevDown', 'xs')} Description</div>
              <div class="jira-desc-box">
                <textarea class="jira-desc-area" id="jiraDescArea" placeholder="Add a description...">${esc(task.desc || '')}</textarea>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
                  <span class="jira-pill-btn" style="background:rgba(59,130,246,.15);color:#60a5fa;border-color:rgba(59,130,246,.3)">
                    <svg class="ic xs" viewBox="0 0 24 24" style="display:inline-block;vertical-align:middle;margin-right:3px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    Connect Slack to update
                  </span>
                  <button type="button" class="btn-xs gold" id="jiraSaveDescBtn" style="padding:4px 10px">Save</button>
                </div>
              </div>
            </div>

            <!-- Attachments -->
            <div class="jira-sec">
              <div class="jira-sec-head">${icon('chevDown', 'xs')} Attachments (${task.attachments.length})</div>
              <div class="jira-attach-drop">
                <label class="btn" style="cursor:pointer;padding:0 14px;height:34px;font-size:12.5px;display:inline-flex;align-items:center;gap:6px">
                  <input type="file" id="jiraAttachInput" multiple hidden />
                  ${icon('clip', 'sm')} Add attachment
                </label>
                <span class="muted" style="font-size:11.5px">Click to upload files, screenshots, or documents</span>
              </div>
              ${task.attachments.length ? `
                <div class="jira-attach-list">
                  ${task.attachments.map((att, idx) => `
                    <div class="jira-attach-card">
                      <span class="file-ic">${icon('file', 'sm')}</span>
                      <div class="fname" title="${esc(att.name)}">${esc(att.name)}</div>
                      <span class="muted" style="font-size:10.5px">${att.size || ''}</span>
                      <button type="button" class="del-btn" data-del-attach="${idx}" title="Delete attachment">${icon('trash', 'xs')}</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <!-- Subtasks -->
            <div class="jira-sec">
              <div class="jira-sec-head" style="justify-content:space-between">
                <span>Subtasks ${chkTotal ? `(${chkDone}/${chkTotal})` : ''}</span>
                ${chkTotal ? `<span style="font-size:11.5px;color:var(--text-2)">${pct}% complete</span>` : ''}
              </div>
              ${chkTotal ? `
                <div class="bar" style="height:5px;margin-bottom:6px"><i style="width:${pct}%"></i></div>
              ` : ''}
              <div style="display:flex;flex-direction:column;gap:5px">
                ${task.checklist.map((c, idx) => `
                  <div class="jira-subtask-item ${c.done ? 'done' : ''}">
                    <input type="checkbox" data-jira-subtask="${idx}" ${c.done ? 'checked' : ''} style="cursor:pointer" />
                    <span style="flex:1">${esc(c.text)}</span>
                    <button type="button" class="del-btn" data-del-jira-subtask="${idx}" title="Delete subtask">${icon('trash', 'xs')}</button>
                  </div>
                `).join('')}
              </div>
              <div style="display:flex;gap:6px;margin-top:6px">
                <input id="jiraSubtaskInp" placeholder="Add subtask..." style="flex:1;height:34px;font-size:12.5px" />
                <button type="button" id="jiraAddSubtaskBtn" class="btn" style="height:34px;padding:0 12px;font-size:12px">${icon('plus', 'sm')} Add</button>
              </div>
            </div>

            <!-- Agent sessions / AI Helper -->
            <div class="jira-sec" style="background:rgba(255,255,255,.015);border:1px solid var(--line);border-radius:10px;padding:12px 14px">
              <div style="display:flex;align-items:center;justify-content:space-between">
                <div style="font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px">
                  <span style="color:#22c55e">●</span> Agent sessions
                </div>
                <button type="button" class="btn-xs ok" id="jiraStartWorkBtn" style="padding:4px 10px;display:flex;align-items:center;gap:4px">
                  ${icon('checkCircle', 'xs')} Start work ${icon('chevDown', 'xs')}
                </button>
              </div>
            </div>

            <!-- Activity & Comments -->
            <div class="jira-sec">
              <div class="jira-activity-tabs">
                <button class="jira-tab-btn ${activeTab === 'all' ? 'active' : ''}" data-jiratab="all">All</button>
                <button class="jira-tab-btn ${activeTab === 'comments' ? 'active' : ''}" data-jiratab="comments">Comments (${task.comments.length})</button>
                <button class="jira-tab-btn ${activeTab === 'history' ? 'active' : ''}" data-jiratab="history">History</button>
                <button class="jira-tab-btn ${activeTab === 'worklog' ? 'active' : ''}" data-jiratab="worklog">Work log (${task.worklogs.length})</button>
              </div>

              ${activeTab === 'comments' ? `
                <div class="jira-comment-box">
                  <textarea id="jiraCommentInput" placeholder="Add a comment..."></textarea>
                  <div class="jira-pills-row">
                    <button type="button" class="jira-pill-btn" data-insert-pill="[Status update]: Working on this...">Status update...</button>
                    <button type="button" class="jira-pill-btn" data-insert-pill="Thanks for the update!">Thanks...</button>
                    <button type="button" class="jira-pill-btn" data-insert-pill="Looks good, approved.">Agree...</button>
                    <button type="button" class="jira-pill-btn" data-insert-pill="[Blocker]: Need assistance with dependencies.">Blocker...</button>
                  </div>
                  <div style="display:flex;justify-content:flex-end;gap:6px;margin-top:4px">
                    <button type="button" class="btn gold" id="jiraSaveCommentBtn" style="height:30px;padding:0 12px;font-size:12px">Save Comment</button>
                  </div>
                </div>
                <div class="jira-comments-stream">
                  ${task.comments.length ? task.comments.map((cm, idx) => `
                    <div class="jira-comment-item">
                      ${av(cm.author || 'raja', 's32')}
                      <div style="flex:1">
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                          <strong style="font-size:12.5px">${esc((PEOPLE[cm.author] && PEOPLE[cm.author].name) || cm.author || 'Member')}</strong>
                          <span class="muted" style="font-size:11px">${cm.time || 'just now'}</span>
                          <button type="button" class="del-btn" data-del-comment="${idx}" style="margin-left:auto">${icon('trash', 'xs')}</button>
                        </div>
                        <div style="font-size:13px;line-height:1.45;color:var(--text);white-space:pre-wrap">${esc(cm.text)}</div>
                      </div>
                    </div>
                  `).join('') : '<div class="muted" style="text-align:center;padding:16px 0;font-size:12px">No comments yet.</div>'}
                </div>
              ` : ''}

              ${activeTab === 'worklog' ? `
                <div class="jira-comment-box">
                  <div style="font-size:12.5px;font-weight:600">Log Work</div>
                  <div class="field-row" style="margin-bottom:0">
                    <div class="field" style="margin-bottom:0">
                      <label style="font-size:11px">Time Spent (e.g. 2h 30m)</label>
                      <input id="jiraWorkHours" placeholder="1h 30m" style="height:32px;font-size:12px" />
                    </div>
                    <div class="field" style="margin-bottom:0">
                      <label style="font-size:11px">Work Description</label>
                      <input id="jiraWorkNote" placeholder="What did you work on?" style="height:32px;font-size:12px" />
                    </div>
                  </div>
                  <div style="display:flex;justify-content:flex-end;margin-top:4px">
                    <button type="button" class="btn gold" id="jiraSaveWorkBtn" style="height:30px;padding:0 12px;font-size:12px">Log Work</button>
                  </div>
                </div>
                <div class="jira-comments-stream" style="margin-top:10px">
                  ${task.worklogs.length ? task.worklogs.map(w => `
                    <div class="jira-comment-item">
                      ${av(w.author || 'raja', 's28')}
                      <div style="flex:1">
                        <div style="display:flex;align-items:center;gap:6px">
                          <strong style="font-size:12.5px">${esc((PEOPLE[w.author] && PEOPLE[w.author].name) || w.author || 'Member')}</strong>
                          <span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:11px">${esc(w.hours)}</span>
                          <span class="muted" style="font-size:11px">${w.date || 'Today'}</span>
                        </div>
                        ${w.note ? `<div style="font-size:12.5px;color:var(--text-2);margin-top:2px">${esc(w.note)}</div>` : ''}
                      </div>
                    </div>
                  `).join('') : '<div class="muted" style="text-align:center;padding:16px 0;font-size:12px">No work logged yet.</div>'}
                </div>
              ` : ''}

              ${activeTab === 'history' || activeTab === 'all' ? `
                <div style="display:flex;flex-direction:column;gap:8px;padding:10px 0">
                  <div style="font-size:12px;color:var(--text-2);display:flex;gap:8px">
                    <span>${icon('clock', 'xs')}</span>
                    <span>Issue created by <b>${esc(reporterName)}</b></span>
                  </div>
                  <div style="font-size:12px;color:var(--text-2);display:flex;gap:8px">
                    <span>${icon('checkSquare', 'xs')}</span>
                    <span>Status set to <b>${task.status === 'pending' ? 'To Do' : task.status === 'progress' ? 'In Progress' : 'Done'}</b></span>
                  </div>
                  ${task.checklist.filter(c => c.done).map(c => `
                    <div style="font-size:12px;color:var(--text-2);display:flex;gap:8px">
                      <span style="color:#22c55e">${icon('check', 'xs')}</span>
                      <span>Completed subtask: <i>${esc(c.text)}</i></span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Right Column (Sidebar / Details) -->
          <div class="jira-side">
            <!-- Status Dropdown -->
            <div>
              <select class="jira-status-select ${task.status}" id="jiraStatusSelect">
                <option value="pending" ${task.status === 'pending' ? 'selected' : ''}>To Do ⌄</option>
                <option value="progress" ${task.status === 'progress' || task.status === 'review' ? 'selected' : ''}>In Progress ⌄</option>
                <option value="done" ${task.status === 'done' ? 'selected' : ''}>Done ⌄</option>
              </select>
            </div>

            <!-- Action buttons -->
            <div style="display:flex;gap:8px">
              <button type="button" class="btn" id="jiraImproveTaskBtn" style="flex:1;height:34px;font-size:12px;display:flex;align-items:center;justify-content:center;gap:6px">
                <span style="color:var(--gold)">✦</span> Improve Task
              </button>
            </div>

            <!-- Details Card -->
            <div class="jira-details-card">
              <div style="font-size:12.5px;font-weight:700;display:flex;align-items:center;gap:6px">
                ${icon('chevDown', 'xs')} Details
              </div>

              <!-- Assignee -->
              <div class="jira-field-row">
                <span class="jira-field-label">Assignee</span>
                <div class="jira-field-val">
                  ${av(task.assignee, 's22')}
                  <select class="select" id="jiraAssigneeSelect" style="height:30px;font-size:12px;flex:1">
                    ${members.map(id => `<option value="${id}" ${id === task.assignee ? 'selected' : ''}>${esc((PEOPLE[id] && PEOPLE[id].name) || id)}</option>`).join('')}
                  </select>
                </div>
              </div>

              <!-- Reporter -->
              <div class="jira-field-row">
                <span class="jira-field-label">Reporter</span>
                <div class="jira-field-val">
                  ${av(task.reporter, 's22')}
                  <span style="font-size:12.5px;font-weight:500">${esc(reporterName)}</span>
                </div>
              </div>

              <!-- Approver (Team Lead Sign-off) -->
              <div class="jira-field-row">
                <span class="jira-field-label">Approver</span>
                <div class="jira-field-val">
                  ${av(task.approver || 'raja', 's22')}
                  <select class="select" id="jiraApproverSelect" style="height:30px;font-size:12px;flex:1">
                    ${members.map(id => `<option value="${id}" ${id === (task.approver || 'raja') ? 'selected' : ''}>${esc((PEOPLE[id] && PEOPLE[id].name) || id)} (${esc((PEOPLE[id] && PEOPLE[id].role) || 'Lead')})</option>`).join('')}
                  </select>
                </div>
              </div>

              <!-- Lead Approval Status & Actions -->
              <div class="jira-field-row" style="align-items:flex-start">
                <span class="jira-field-label" style="margin-top:4px">Lead Approval</span>
                <div style="flex:1;display:flex;flex-direction:column;gap:6px">
                  ${task.approval_status === 'approved' ? `
                    <div style="background:rgba(91,220,142,.12);border:1px solid rgba(91,220,142,.35);padding:6px 10px;border-radius:6px;font-size:11.5px;color:#5bdc8e;display:flex;align-items:center;justify-content:space-between">
                      <span style="font-weight:600">✓ Approved by ${(PEOPLE[task.approved_by] && PEOPLE[task.approved_by].name) || task.approved_by || (PEOPLE[task.approver] && PEOPLE[task.approver].name) || 'Team Lead'}</span>
                      <span class="muted" style="font-size:10.5px">${task.approved_at || 'Verified'}</span>
                    </div>
                  ` : task.approval_status === 'rejected' ? `
                    <div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);padding:6px 10px;border-radius:6px;font-size:11.5px;color:#ff5c5c">
                      <div style="font-weight:600">✕ Changes Requested by ${(PEOPLE[task.approved_by] && PEOPLE[task.approved_by].name) || task.approved_by || 'Lead'}</div>
                      <button type="button" class="btn ok" id="jiraApproveTaskBtn" style="height:26px;font-size:11px;margin-top:4px;width:100%;display:flex;align-items:center;justify-content:center;gap:4px">
                        ${icon('check', 'xs')} Approve Work (Team Lead)
                      </button>
                    </div>
                  ` : `
                    <div style="display:flex;flex-direction:column;gap:5px">
                      <span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);padding:3px 8px;font-size:11px;width:fit-content">⏳ Awaiting Lead Approval</span>
                      <div style="display:flex;gap:4px">
                        <button type="button" class="btn ok" id="jiraApproveTaskBtn" style="height:28px;font-size:11.5px;flex:1;display:flex;align-items:center;justify-content:center;gap:4px">
                          ${icon('check', 'xs')} Approve
                        </button>
                        <button type="button" class="btn" id="jiraRejectTaskBtn" style="height:28px;font-size:11.5px;color:#ff6b6b;border-color:rgba(239,68,68,.3);display:flex;align-items:center;justify-content:center;gap:4px">
                          ${icon('x', 'xs')} Reject
                        </button>
                      </div>
                    </div>
                  `}
                </div>
              </div>

              <!-- Priority -->
              <div class="jira-field-row">
                <span class="jira-field-label">Priority</span>
                <div class="jira-field-val">
                  <select class="select" id="jiraPrioritySelect" style="height:30px;font-size:12px;flex:1">
                    <option value="Highest" ${task.priority === 'Highest' ? 'selected' : ''}>⯭ Highest</option>
                    <option value="High" ${task.priority === 'High' ? 'selected' : ''}>▲ High</option>
                    <option value="Medium" ${(!task.priority || task.priority === 'Medium') ? 'selected' : ''}>〓 Medium</option>
                    <option value="Low" ${task.priority === 'Low' ? 'selected' : ''}>▼ Low</option>
                  </select>
                </div>
              </div>

              <!-- Labels -->
              <div class="jira-field-row" style="align-items:flex-start">
                <span class="jira-field-label" style="margin-top:4px">Labels</span>
                <div style="flex:1;display:flex;flex-direction:column;gap:4px">
                  <div style="display:flex;gap:4px;flex-wrap:wrap">
                    ${task.labels.map((lbl, lIdx) => `
                      <span class="k-cat-pill" style="background:rgba(245,184,46,.12);color:var(--gold);border-color:rgba(245,184,46,.3)">
                        ${esc(lbl)}
                        <button type="button" class="del-btn" data-del-label="${lIdx}" style="margin-left:4px">${icon('x', 'xs')}</button>
                      </span>
                    `).join('')}
                  </div>
                  <input id="jiraAddLabelInp" placeholder="+ Add label..." style="height:26px;font-size:11px;padding:0 6px;border-radius:4px" />
                </div>
              </div>

              <!-- Due Date (Manual & Optional) -->
              <div class="jira-field-row">
                <span class="jira-field-label">Due Date</span>
                <div class="jira-field-val">
                  <input type="date" id="jiraDueInput" value="${task.due || ''}" style="height:30px;font-size:11.5px;flex:1" />
                </div>
              </div>
              <div style="font-size:11px;color:var(--text-2);background:rgba(255,255,255,.025);padding:6px 10px;border-radius:6px;line-height:1.45;border-left:3px solid var(--gold);margin-top:2px">
                <b>📅 Scheduled Date Rule:</b><br>
                • <b>November 19:</b> Status shows as <span style="color:var(--gold);font-weight:600">⏳ In Progress</span><br>
                • <b>November 20:</b> Status automatically shows as <span style="color:#5bdc8e;font-weight:600">✅ Completed</span>
              </div>
            </div>

            <!-- Automation & Checklist Accordions -->
            <div class="jira-details-card" style="padding:10px 14px;gap:8px">
              <div style="font-size:12px;font-weight:600;display:flex;align-items:center;justify-content:space-between;cursor:pointer">
                <span>› Automation ⚡</span>
                <span class="muted" style="font-size:11px">Rule executions</span>
              </div>
              <div style="font-size:12px;font-weight:600;display:flex;align-items:center;justify-content:space-between;cursor:pointer">
                <span>› Checklist ☑</span>
                <span class="badge ok" style="font-size:10px">${chkDone}/${chkTotal}</span>
              </div>
            </div>

            <!-- Metadata -->
            <div style="font-size:11px;color:var(--text-2);display:flex;flex-direction:column;gap:4px;padding:4px">
              <div>Created today by ${esc(reporterName)}</div>
              <div>Updated just now</div>
            </div>

            <!-- If New Task: Create Button -->
            ${isNew ? `
              <div style="margin-top:auto;padding-top:10px;border-top:1px solid var(--line);display:flex;gap:8px">
                <button type="button" class="btn" data-close style="flex:1">Cancel</button>
                <button type="button" class="btn gold" id="jiraCreateTaskSubmit" style="flex:1.4">${icon('check', 'sm')} Create Task</button>
              </div>
            ` : `
              <div style="margin-top:auto;padding-top:10px;border-top:1px solid var(--line);display:flex;justify-content:space-between">
                <button type="button" class="btn danger" id="jiraDeleteTaskBtn" style="color:var(--red);font-size:12px">${icon('trash', 'xs')} Delete Issue</button>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  };

  renderModal();
  document.body.appendChild(ov);

  const close = () => ov.remove();

  // Event handlers
  ov.addEventListener('click', async e => {
    if (e.target === ov || e.target.closest('[data-close]')) {
      close();
      return;
    }

    // Toggle watchers
    if (e.target.closest('#jiraWatchBtn')) {
      task.isWatching = !task.isWatching;
      task.watchers = Math.max(1, (task.watchers || 2) + (task.isWatching ? 1 : -1));
      renderModal();
      toast(task.isWatching ? 'You are watching this issue' : 'You stopped watching this issue');
      return;
    }

    // Share button
    if (e.target.closest('#jiraShareBtn')) {
      navigator.clipboard?.writeText?.(window.location.href + ` [${task.key}] ${task.title}`);
      toast('Task link copied to clipboard!');
      return;
    }

    // Fullscreen toggle
    if (e.target.closest('#jiraExpandBtn')) {
      isFullscreen = !isFullscreen;
      const modalEl = ov.querySelector('.jira-modal');
      modalEl?.classList.toggle('fullscreen', isFullscreen);
      return;
    }

    // Task Type Change
    if (e.target.closest('#jiraKeyBadge')) {
      const types = ['task', 'bug', 'story', 'epic'];
      const nextIdx = (types.indexOf(task.task_type) + 1) % types.length;
      task.task_type = types[nextIdx];
      await saveTask();
      renderModal();
      toast(`Type changed to ${TASK_TYPES[task.task_type].label}`);
      return;
    }

    // Save Description
    if (e.target.closest('#jiraSaveDescBtn')) {
      const descVal = (ov.querySelector('#jiraDescArea')?.value || '').trim();
      task.desc = descVal;
      await saveTask();
      toast('Description saved');
      return;
    }

    // Subtask checkbox toggle
    const chk = e.target.closest('[data-jira-subtask]');
    if (chk) {
      const idx = parseInt(chk.dataset.jiraSubtask, 10);
      if (task.checklist[idx]) {
        task.checklist[idx].done = chk.checked;
        await saveTask();
        renderModal();
      }
      return;
    }

    // Delete subtask
    const delSub = e.target.closest('[data-del-jira-subtask]');
    if (delSub) {
      const idx = parseInt(delSub.dataset.delJiraSubtask, 10);
      task.checklist.splice(idx, 1);
      await saveTask();
      renderModal();
      return;
    }

    // Add subtask
    if (e.target.closest('#jiraAddSubtaskBtn') || e.target.closest('#jiraAddSubtaskQuick')) {
      const inp = ov.querySelector('#jiraSubtaskInp');
      const val = (inp?.value || '').trim();
      if (val) {
        task.checklist.push({ text: val, done: false });
        await saveTask();
        renderModal();
      } else {
        inp?.focus();
      }
      return;
    }

    // Improve Task AI button
    if (e.target.closest('#jiraImproveTaskBtn')) {
      toast('AI Assistant improving task...');
      if (!task.desc) {
        task.desc = `Objective: ${task.title || 'Implement project requirement'}\n\nAcceptance Criteria:\n1. Verify edge case handling and responsiveness.\n2. Ensure proper authentication & permission checks.\n3. Validate unit & integration test coverage.`;
      }
      if (!task.checklist.length) {
        task.checklist.push(
          { text: 'Analyze technical requirements & architecture', done: false },
          { text: 'Implement core functionality & error states', done: false },
          { text: 'Verify QA testing & lead sign-off', done: false }
        );
      }
      await saveTask();
      renderModal();
      toast('✦ Task improved with AI suggestions!');
      return;
    }

    // Start work button
    if (e.target.closest('#jiraStartWorkBtn')) {
      task.status = 'progress';
      await saveTask();
      renderModal();
      toast('Started work — moved to In Progress!');
      return;
    }

    // Activity Tabs switch
    const tabBtn = e.target.closest('[data-jiratab]');
    if (tabBtn) {
      activeTab = tabBtn.dataset.jiratab;
      renderModal();
      return;
    }

    // Insert quick comment pill
    const pill = e.target.closest('[data-insert-pill]');
    if (pill) {
      const txt = ov.querySelector('#jiraCommentInput');
      if (txt) {
        txt.value = (txt.value ? txt.value + ' ' : '') + pill.dataset.insertPill;
        txt.focus();
      }
      return;
    }

    // Save Comment
    if (e.target.closest('#jiraSaveCommentBtn')) {
      const txt = ov.querySelector('#jiraCommentInput');
      const commentText = (txt?.value || '').trim();
      if (commentText) {
        task.comments.unshift({
          id: Date.now(),
          author: ME || 'raja',
          text: commentText,
          time: nowTime() + ', today'
        });
        await saveTask();
        renderModal();
        toast('Comment added');
      }
      return;
    }

    // Delete comment
    const delCom = e.target.closest('[data-del-comment]');
    if (delCom) {
      const idx = parseInt(delCom.dataset.delComment, 10);
      task.comments.splice(idx, 1);
      await saveTask();
      renderModal();
      return;
    }

    // Log work
    if (e.target.closest('#jiraSaveWorkBtn')) {
      const hours = (ov.querySelector('#jiraWorkHours')?.value || '').trim();
      const note = (ov.querySelector('#jiraWorkNote')?.value || '').trim();
      if (hours) {
        task.worklogs.unshift({
          author: ME || 'raja',
          hours,
          note,
          date: isoDate(new Date())
        });
        await saveTask();
        renderModal();
        toast(`Logged ${hours} work`);
      }
      return;
    }

    // Delete attachment
    const delAtt = e.target.closest('[data-del-attach]');
    if (delAtt) {
      const idx = parseInt(delAtt.dataset.delAttach, 10);
      task.attachments.splice(idx, 1);
      await saveTask();
      renderModal();
      return;
    }

    // Delete label
    const delLbl = e.target.closest('[data-del-label]');
    if (delLbl) {
      const idx = parseInt(delLbl.dataset.delLabel, 10);
      task.labels.splice(idx, 1);
      await saveTask();
      renderModal();
      return;
    }

    // Create Task (if isNew)
    if (e.target.closest('#jiraCreateTaskSubmit')) {
      const titleInp = (ov.querySelector('#jiraTitleInput')?.value || '').trim();
      if (!titleInp) {
        toast('Please enter a task title');
        ov.querySelector('#jiraTitleInput')?.focus();
        return;
      }
      task.title = titleInp;
      close();
      toast('Creating task...');
      try {
        const created = await apiCreateTask({
          project: p.id,
          title: task.title,
          key: task.key,
          task_type: task.task_type || 'task',
          category: task.labels[0] || 'General',
          checklist: task.checklist,
          assignee: task.assignee,
          reporter: task.reporter,
          approver: task.approver || 'raja',
          approval_status: task.approval_status || 'pending',
          approved_by: task.approved_by || '',
          approved_at: task.approved_at || '',
          priority: task.priority || 'Medium',
          labels: task.labels,
          attachments: task.attachments,
          comments: task.comments,
          worklogs: task.worklogs,
          due: task.due || '',
          status: task.status || 'pending',
          desc: task.desc || ''
        });
        if (created && created.id) p.tasks.push(created);
        else p.tasks.push(task);
        rerender();
        toast(`Task "${task.title}" created in ${task.status === 'done' ? 'Done' : task.status === 'progress' ? 'In Progress' : 'To Do'}`);
      } catch (err) {
        p.tasks.push(task);
        rerender();
        toast(`Task created`);
      }
      return;
    }

    // Lead Approve Task
    if (e.target.closest('#jiraApproveTaskBtn')) {
      task.approval_status = 'approved';
      task.approved_by = ME || 'raja';
      task.approved_at = `${nowTime()}, today`;
      await saveTask();
      renderModal();
      rerender();
      toast(`Task approved by Team Lead (${(PEOPLE[task.approved_by] && PEOPLE[task.approved_by].name) || task.approved_by})! ✅`);
      return;
    }

    // Lead Reject / Request Changes Task
    if (e.target.closest('#jiraRejectTaskBtn')) {
      task.approval_status = 'rejected';
      task.approved_by = ME || 'raja';
      task.approved_at = `${nowTime()}, today`;
      await saveTask();
      renderModal();
      rerender();
      toast(`Changes requested by Team Lead! ✕`);
      return;
    }

    // Delete issue
    if (e.target.closest('#jiraDeleteTaskBtn') || e.target.closest('#jiraMenuBtn')) {
      if (confirm(`Delete issue ${task.key}: "${task.title}"?`)) {
        p.tasks.splice(p.tasks.indexOf(task), 1);
        apiDeleteTask(task.id);
        rerender();
        close();
        toast('Issue deleted');
      }
      return;
    }
  });

  // Input change listeners
  ov.addEventListener('change', async e => {
    // Status change
    if (e.target.id === 'jiraStatusSelect') {
      task.status = e.target.value;
      await saveTask();
      renderModal();
      toast(`Status moved to ${task.status === 'done' ? 'Done' : task.status === 'progress' ? 'In Progress' : 'To Do'}`);
      return;
    }

    // Assignee change
    if (e.target.id === 'jiraAssigneeSelect') {
      task.assignee = e.target.value;
      await saveTask();
      renderModal();
      toast(`Reassigned to ${(PEOPLE[task.assignee] && PEOPLE[task.assignee].name) || task.assignee}`);
      return;
    }

    // Approver change
    if (e.target.id === 'jiraApproverSelect') {
      task.approver = e.target.value;
      await saveTask();
      renderModal();
      toast(`Approver set to ${(PEOPLE[task.approver] && PEOPLE[task.approver].name) || task.approver}`);
      return;
    }

    // Priority change
    if (e.target.id === 'jiraPrioritySelect') {
      task.priority = e.target.value;
      await saveTask();
      renderModal();
      toast(`Priority set to ${task.priority}`);
      return;
    }

    // Due Date change
    if (e.target.id === 'jiraDueInput') {
      task.due = e.target.value.trim();
      await saveTask();
      toast(task.due ? `Due date: ${task.due}` : 'Due date cleared');
      return;
    }

    // File attachments upload
    if (e.target.id === 'jiraAttachInput' || e.target.id === 'jiraQuickFileInput') {
      const files = Array.from(e.target.files || []);
      if (files.length) {
        files.forEach(f => {
          task.attachments.push({
            name: f.name,
            size: (f.size > 1024 * 1024) ? (f.size / (1024 * 1024)).toFixed(1) + ' MB' : Math.max(1, Math.round(f.size / 1024)) + ' KB',
            date: nowTime()
          });
        });
        await saveTask();
        renderModal();
        toast(`${files.length} attachment(s) added`);
      }
    }
  });

  // Enter key in input fields
  ov.addEventListener('keydown', async e => {
    if (e.key === 'Enter') {
      if (e.target.id === 'jiraSubtaskInp') {
        e.preventDefault();
        const val = e.target.value.trim();
        if (val) {
          task.checklist.push({ text: val, done: false });
          await saveTask();
          renderModal();
        }
      } else if (e.target.id === 'jiraAddLabelInp') {
        e.preventDefault();
        const val = e.target.value.trim();
        if (val && !task.labels.includes(val)) {
          task.labels.push(val);
          await saveTask();
          renderModal();
        }
      } else if (e.target.id === 'jiraTitleInput') {
        task.title = e.target.value.trim();
        await saveTask();
      }
    }
  });
}

function openNewTaskModal(p, defaultStatus = 'pending') {
  const nextNum = (p.tasks && p.tasks.length ? p.tasks.length + 1 : 1);
  const projCode = ((p && p.name) || 'IPP').replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase() || 'IPP';
  const newTask = {
    id: Date.now(),
    key: `${projCode}-${nextNum}`,
    title: '',
    task_type: 'task',
    category: 'All_Projects',
    checklist: [],
    assignee: ME || 'raja',
    reporter: ME || 'raja',
    priority: 'Medium',
    status: defaultStatus || 'pending',
    due: '',
    desc: '',
    labels: ['All_Projects'],
    attachments: [],
    comments: [],
    worklogs: [],
    watchers: 2,
    isWatching: true
  };
  openJiraTaskModal(p, newTask, true);
}

function openTaskDetailsModal(p, task) {
  openJiraTaskModal(p, task, false);
}

function openModal(title, fields, onSubmit, submitLabel = 'Save', onMount = null) {
  const ov = document.createElement('div');
  ov.className = 'overlay';
  const f = fields.map(fd => {
    const input = fd.type === 'select'
      ? `<select class="select" name="${fd.name}">${fd.options.map(([v, l]) => `<option value="${v}" ${v === fd.value ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select>`
      : fd.type === 'textarea' ? `<textarea name="${fd.name}" placeholder="${fd.placeholder || ''}">${fd.value || ''}</textarea>`
      : `<input name="${fd.name}" type="${fd.type || 'text'}" value="${fd.value || ''}" placeholder="${fd.placeholder || ''}" ${fd.required ? 'required' : ''}/>`;
    const label = fd.labelHtml || `<label>${fd.label}</label>`;
    return `<div class="field" ${fd.half ? 'data-half' : ''} ${fd.id ? `id="${fd.id}"` : ''}>${label}${input}</div>`;
  });
  // pair up "half" fields
  let html = '', i = 0;
  while (i < f.length) { if (fields[i].half && fields[i + 1]?.half) { html += `<div class="field-row">${f[i]}${f[i + 1]}</div>`; i += 2; } else html += f[i++]; }
  ov.innerHTML = `<form class="modal"><h3>${title}</h3>${html}<div class="modal-actions"><button type="button" class="btn" data-close>Cancel</button><button class="btn gold" type="submit">${submitLabel}</button></div></form>`;
  document.body.appendChild(ov);
  ov.querySelector('input, textarea')?.focus();
  const close = () => ov.remove();
  ov.addEventListener('click', e => { if (e.target === ov || e.target.closest('[data-close]')) close(); });
  ov.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    if (onSubmit(data) !== false) close();
  });
  if (typeof onMount === 'function') onMount(ov);
}
const currentProject = () => { const m = location.hash.match(/^#\/project\/([^/]+)/); return m && projects.find(p => p.id === m[1]); };

/* ---------------- Events ---------------- */
document.addEventListener('click', e => {
  const t = e.target;

  // Floating layers: clicks inside handle themselves
  const pop = t.closest('.pop');
  if (pop) {
    const act = t.closest('[data-action]');
    if (act) {
      closeFloating();
      handleAction(act.dataset.action, act);
      return;
    }
    const id = pop.dataset.person, P = (id && PEOPLE[id]) || { name: (id && typeof id === 'string' && id.length) ? id.charAt(0).toUpperCase() + id.slice(1) : 'Member', role: 'Developer', availability: 'available', mode: 'office' };
    const a = t.closest('[data-set-avail]'), m = t.closest('[data-set-mode]'), dm = t.closest('[data-dm]');
    if (a && P) {
      P.availability = a.dataset.setAvail;
      toast(`${P.name} is now ${AVAIL[P.availability].short || AVAIL[P.availability].label}`);
      apiPatchMember(id, { availability: P.availability });
      rerender();
      openProfile(id, currentProfileAnchor);
    }
    if (m && P) {
      P.mode = m.dataset.setMode;
      toast(`${P.name}: ${MODES[P.mode].long}`);
      apiPatchMember(id, { mode: P.mode });
      rerender();
      openProfile(id, currentProfileAnchor);
    }
    if (dm) {
      closeFloating();
      const targetId = dm.dataset.dm || id;
      let c = chats.find(x => x.id === targetId || (x.kind === 'dm' && (x.person === targetId || (x.memberList && x.memberList.includes(targetId)))));
      if (!c) {
        const targetP = PEOPLE[targetId] || { name: targetId.charAt(0).toUpperCase() + targetId.slice(1) };
        c = {
          id: targetId,
          name: targetP.name,
          kind: 'dm',
          person: targetId,
          members: 2,
          memberList: [ME, targetId].filter(Boolean),
          starred: false,
          unread: 0,
          msgs: []
        };
        chats.unshift(c);
        fetchFromAPI('/chats/', {
          method: 'POST',
          body: JSON.stringify({ kind: 'dm', person: targetId, created_by: ME })
        }).catch(() => {});
      }
      state.chatId = c.id;
      go('#/messenger/' + c.id);
      return;
    }
    if (a || m) { const anchorRect = pop.getBoundingClientRect(); rerender(); refreshSide(); reopenProfileAt(id, anchorRect); }
    return;
  }
  if (t.closest('.menu')) return;

  const profile = t.closest('[data-profile]');
  if (profile) { e.stopPropagation(); openProfile(profile.dataset.profile, profile); return; }
  if (t.closest('#sideUser')) { openProfile(ME, $('#sideUser')); return; }

  closeFloating();

  const goEl = t.closest('[data-go]');
  if (goEl) { go(goEl.dataset.go); return; }

  // Projects list
  const pm = t.closest('[data-pmenu]');
  if (pm) {
    e.stopPropagation();
    const p = projects.find(x => x.id === pm.dataset.pmenu);
    openMenu(pm, [
      { label: 'Open project', icon: 'folder', run: () => go(`#/project/${p.id}/overview`) },
      { label: 'Open chat', icon: 'message', run: () => { const c = chats.find(x => x.project === p.id || x.id === 'proj-grp-' + p.id); if (c) { state.chatId = c.id; go('#/messenger/' + c.id); } else toast('No chat for this project yet'); } },
      ...Object.entries(STATUS).filter(([k]) => k !== p.status).map(([k, s]) => ({ label: `Mark ${s.label}`, icon: 'check', run: () => { p.status = k; rerender(); toast(`${p.name} → ${s.label}`); } })),
      { label: 'Delete project', icon: 'trash', danger: true, run: async () => {
        const delId = p.id;
        projects.splice(projects.indexOf(p), 1);
        await fetchFromAPI(`/projects/${delId}/`, { method: 'DELETE' });
        const cIdx = chats.findIndex(x => x.project === delId || x.id === 'proj-grp-' + delId);
        if (cIdx !== -1) chats.splice(cIdx, 1);
        go('#/projects'); toast('Project deleted');
      } },
    ]);
    return;
  }
  const open = t.closest('[data-open]');
  if (open) { go(`#/project/${open.dataset.open}/overview`); return; }
  const pf = t.closest('[data-pfilter]');
  if (pf) { state.projectFilter = state.projectFilter === pf.dataset.pfilter ? 'all' : pf.dataset.pfilter; rerender(); return; }

  // Tasks
  const tv = t.closest('[data-taskview]');
  if (tv) { state.taskView = tv.dataset.taskview; rerender(); return; }

  const mv = t.closest('[data-move-task]');
  if (mv) {
    const p = currentProject();
    const task = p && p.tasks.find(x => x.id == mv.dataset.moveTask);
    if (task) {
      task.status = mv.dataset.targetStatus;
      rerender();
      apiPatchTask(task.id, { status: task.status });
      const targetName = task.status === 'done' ? 'Completed' : task.status === 'progress' ? 'In Progress' : 'To Do';
      toast(`Task moved to ${targetName}`);
    }
    return;
  }

  const opTask = t.closest('[data-open-task-modal]');
  if (opTask) {
    const p = currentProject();
    const task = p && p.tasks.find(x => x.id == opTask.dataset.openTaskModal);
    if (p && task) openTaskDetailsModal(p, task);
    return;
  }

  const tgChk = t.closest('[data-toggle-chk]');
  if (tgChk) {
    const p = currentProject();
    const task = p && p.tasks.find(x => x.id == tgChk.dataset.taskId);
    const idx = parseInt(tgChk.dataset.toggleChk, 10);
    if (task && Array.isArray(task.checklist) && task.checklist[idx]) {
      task.checklist[idx].done = !task.checklist[idx].done;
      rerender();
      apiPatchTask(task.id, { checklist: task.checklist });
    }
    return;
  }

  const tg = t.closest('[data-toggle-task]');
  if (tg) { const p = currentProject(), task = p.tasks.find(x => x.id == tg.dataset.toggleTask); task.status = task.status === 'done' ? 'progress' : 'done'; rerender(); apiPatchTask(task.id, { status: task.status }); return; }
  const cy = t.closest('[data-cycle-task]');
  if (cy) { const p = currentProject(), task = p.tasks.find(x => x.id == cy.dataset.cycleTask); task.status = { pending: 'progress', progress: 'done', done: 'pending' }[task.status]; rerender(); apiPatchTask(task.id, { status: task.status }); return; }
  const ex = t.closest('[data-expand]');
  if (ex) { const k = currentProject().id + ex.dataset.expand; state.openTasks.has(k) ? state.openTasks.delete(k) : state.openTasks.add(k); rerender(); return; }
  const tm = t.closest('[data-tmenu]');
  if (tm) {
    const p = currentProject(), task = p.tasks.find(x => x.id == tm.dataset.tmenu);
    openMenu(tm, [
      { label: 'View / Edit Task', icon: 'edit', run: () => openTaskDetailsModal(p, task) },
      { label: 'Mark Completed', icon: 'check', run: () => { task.status = 'done'; rerender(); apiPatchTask(task.id, { status: task.status }); } },
      { label: 'Mark In Progress', icon: 'clock', run: () => { task.status = 'progress'; rerender(); apiPatchTask(task.id, { status: task.status }); } },
      { label: 'Mark To Do', icon: 'hourglass', run: () => { task.status = 'pending'; rerender(); apiPatchTask(task.id, { status: task.status }); } },
      { label: 'Delete task', icon: 'trash', danger: true, run: () => {
        p.tasks.splice(p.tasks.indexOf(task), 1);
        rerender();
        apiDeleteTask(task.id);
        toast('Task deleted');
      } },
    ]);
    return;
  }

  // Files
  const fv = t.closest('[data-fileview]');
  if (fv) { state.fileView = fv.dataset.fileview; rerender(); return; }
  const fm = t.closest('[data-fmenu]');
  if (fm) {
    const p = currentProject(), f = p.files.find(x => x.name === fm.dataset.fmenu);
    openMenu(fm, [
      { label: 'Download', icon: 'download', run: () => toast(`Downloading ${f.name}`) },
      { label: 'Delete', icon: 'trash', danger: true, run: () => { p.files.splice(p.files.indexOf(f), 1); rerender(); toast('File removed'); } },
    ]);
    return;
  }

  // Notes
  const nm = t.closest('[data-nmenu]');
  if (nm) {
    const p = currentProject();
    openMenu(nm, [{ label: 'Delete note', icon: 'trash', danger: true, run: () => { p.notes.splice(+nm.dataset.nmenu, 1); rerender(); } }]);
    return;
  }

  // Work log
  const ld = t.closest('[data-logday]');
  if (ld) { const d = parseISO(state.logDate); d.setDate(d.getDate() + +ld.dataset.logday); state.logDate = isoDate(d); rerender(); return; }

  const sls = t.closest('[data-set-log-status]');
  if (sls) { state.logStatus = sls.dataset.setLogStatus; rerender(); return; }

  const lf = t.closest('[data-log-filter]');
  if (lf) { state.logFilter = lf.dataset.logFilter; rerender(); return; }

  const lm = t.closest('[data-log-menu]');
  if (lm) {
    e.stopPropagation();
    const l = workLogs[+lm.dataset.logMenu];
    if (l) {
      openMenu(lm, [
        { label: 'Mark In Progress', icon: 'clock', run: async () => {
          l.status = 'progress';
          if (l.id) await fetchFromAPI(`/worklogs/${l.id}/`, { method: 'PATCH', body: JSON.stringify({ status: 'progress' }) });
          rerender(); toast('Status: In Progress');
        }},
        { label: 'Mark Completed', icon: 'check', run: async () => {
          l.status = 'done';
          if (l.id) await fetchFromAPI(`/worklogs/${l.id}/`, { method: 'PATCH', body: JSON.stringify({ status: 'done' }) });
          rerender(); toast('Status: Completed');
        }},
        { label: 'Report Dependency Needed', icon: 'alert', run: () => {
          openModal('Report Dependency / Blocker', [
            { name: 'dependency', label: 'Dependency / Blocker description', required: true, type: 'textarea', placeholder: 'Explain what dependency or blocker is needed...' },
            { name: 'lead', label: 'Assign to Team Lead', type: 'select', value: l.lead || '', options: Object.keys(PEOPLE).map(id => [id, `${PEOPLE[id].name || id} (${PEOPLE[id].role || 'Lead'})`]) }
          ], async d => {
            l.status = 'dependency';
            l.dependency = d.dependency;
            l.lead = d.lead;
            l.resolved = false;
            if (l.id) await fetchFromAPI(`/worklogs/${l.id}/`, { method: 'PATCH', body: JSON.stringify({ status: 'dependency', dependency: d.dependency, lead: d.lead, resolved: false }) });
            rerender(); toast('Dependency reported to Lead!');
          }, 'Submit Blocker');
        }}
      ]);
    }
    return;
  }

  const ls = t.closest('[data-log-status]');
  if (ls) { const l = workLogs[+ls.dataset.logStatus]; l.status = l.status === 'done' ? 'progress' : 'done'; rerender(); return; }

  // Messenger
  const sc = t.closest('[data-star-chat]');
  if (sc) { const c = chats.find(x => x.id === sc.dataset.starChat); c.starred = !c.starred; rerender(); return; }
  const ch = t.closest('[data-chat]');
  if (ch) { state.chatId = ch.dataset.chat; go('#/messenger/' + ch.dataset.chat); return; }

  const act = t.closest('[data-action]');
  if (act) handleAction(act.dataset.action, act);
});

async function handleAction(a, el) {
  const p = currentProject();
  switch (a) {
    case 'new-project':
      openModal('New Project', [
        { name: 'name', label: 'Project name', required: true, placeholder: 'e.g. Restaurant POS' },
        { name: 'type', label: 'Type', type: 'select', half: true, value: 'Web', options: [['Web', 'Web'], ['SaaS', 'SaaS'], ['Mobile', 'Mobile'], ['Game', 'Game']] },
        { name: 'lead', label: 'Lead name (Team Lead)', type: 'text', half: true, placeholder: 'Enter lead name manually (e.g. Karthik, Ram)...', required: true },
        {
          name: 'start',
          half: true,
          labelHtml: `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <label style="margin:0">Start date</label>
              <label class="tick-no-end" style="display:inline-flex;align-items:center;gap:5px;font-size:11.5px;color:var(--gold);cursor:pointer;font-weight:500;user-select:none" title="Tick mark: project has no end date">
                <input type="checkbox" id="noEndTick" name="noEndDate" style="accent-color:var(--gold);cursor:pointer;width:15px;height:15px;margin:0" />
                <span>No end date</span>
              </label>
            </div>`,
          type: 'date',
          value: isoDate(new Date())
        },
        {
          name: 'end',
          id: 'fieldEndDate',
          half: true,
          labelHtml: `<label id="lblEndDate" style="margin-bottom:6px">End date</label>`,
          type: 'date',
          value: isoDate(new Date(Date.now() + 90 * 864e5))
        },
      ], async d => {
        const id = d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString(36);
        const thumb = { Web: 'portfolio', SaaS: 'crm', Mobile: 'cafe', Game: 'game' }[d.type] || 'portfolio';
        const rawLead = (d.lead || '').trim();
        const existingLeadId = Object.keys(PEOPLE).find(k => k.toLowerCase() === rawLead.toLowerCase() || (PEOPLE[k]?.name || '').toLowerCase() === rawLead.toLowerCase());
        const lead = existingLeadId || (rawLead ? rawLead.toLowerCase().replace(/[^a-z0-9_]+/g, '_') : (ME || 'admin'));
        if (!PEOPLE[lead] && rawLead) {
          PEOPLE[lead] = { name: rawLead, role: 'Team Lead', availability: 'available', mode: 'office' };
          TITLES[lead] = 'Team Lead';
          MEMBER_ROWS = Object.keys(PEOPLE);
        }
        const teamMembers = Array.from(new Set([lead, ME].filter(Boolean)));
        const noEnd = d.noEndDate === 'on' || d.noEndDate === true || !d.end;
        const endDate = noEnd ? '' : d.end;
        const np = { id, name: d.name, type: d.type, thumb, status: 'progress', start: d.start, end: endDate, team: teamMembers, extra: 0,
          totals: { total: 0, completed: 0, inProgress: 0 }, workload: {}, tasks: [], files: [], notes: [], _other: { completed: 0, inProgress: 0, pending: 0 } };
        projects.unshift(np);
        await fetchFromAPI('/projects/', {
          method: 'POST',
          body: JSON.stringify(np)
        });
        try {
          const apiChats = await fetchFromAPI('/chats/');
          if (Array.isArray(apiChats) && apiChats.length) {
            chats.length = 0;
            chats.push(...apiChats);
          } else {
            const groupChat = {
              id: `proj-grp-${id}`,
              name: d.name,
              kind: 'group',
              project: id,
              members: 1,
              memberList: [lead],
              starred: false,
              unread: 0,
              msgs: [{ from: lead, time: nowTime(), text: `Welcome to the ${d.name} group discussion channel! 🚀` }]
            };
            if (!chats.find(c => c.id === groupChat.id)) chats.unshift(groupChat);
          }
        } catch (e) {
          console.warn('Could not sync chats:', e);
        }
        go(`#/project/${id}/overview`); toast(`Project "${d.name}" and messenger group created!`);
      }, 'Create Project', ov => {
        const chk = ov.querySelector('#noEndTick');
        const endFld = ov.querySelector('#fieldEndDate');
        const endInput = ov.querySelector('input[name="end"]');
        const endLbl = ov.querySelector('#lblEndDate');
        if (chk && endFld && endInput) {
          chk.addEventListener('change', () => {
            if (chk.checked) {
              endInput.disabled = true;
              endInput.dataset.savedVal = endInput.value;
              endInput.value = '';
              endFld.style.opacity = '0.35';
              endFld.style.pointerEvents = 'none';
              if (endLbl) endLbl.innerHTML = `End date <span style="font-size:11px;color:var(--text-2);font-weight:normal">(Not needed)</span>`;
            } else {
              endInput.disabled = false;
              endInput.value = endInput.dataset.savedVal || isoDate(new Date(Date.now() + 90 * 864e5));
              endFld.style.opacity = '1';
              endFld.style.pointerEvents = 'auto';
              if (endLbl) endLbl.innerHTML = `End date`;
            }
          });
        }
      });
      break;
    case 'open-project-chat': {
      const pid = el?.dataset?.id || p?.id;
      let c = chats.find(x => x.project === pid || x.id === 'proj-grp-' + pid);
      if (!c) {
        const prj = projects.find(x => x.id === pid) || p;
        const name = prj ? prj.name : pid;
        const lead = (prj && prj.team && prj.team[0]) || ME || 'admin';
        const team = (prj && prj.team && prj.team.length) ? prj.team : [ME || 'admin'];
        c = {
          id: 'proj-grp-' + pid,
          name: name,
          kind: 'group',
          project: pid,
          members: team.length,
          memberList: team,
          starred: false,
          unread: 0,
          msgs: [{ from: lead, time: nowTime(), text: `Welcome to the ${name} group discussion channel! 🚀` }]
        };
        chats.unshift(c);
        fetchFromAPI('/chats/', {
          method: 'POST',
          body: JSON.stringify({ id: c.id, name, kind: 'group', project: pid, members: team, initial_message: c.msgs[0].text })
        }).catch(() => {});
      }
      state.chatId = c.id;
      go('#/messenger/' + c.id);
      break;
    }
    case 'project-filter':
      openMenu(el, [['all', 'All projects'], ['progress', 'In Progress'], ['done', 'Completed'], ['hold', 'On Hold']].map(([k, l]) => ({
        label: (state.projectFilter === k ? '✓ ' : '') + l, run: () => { state.projectFilter = k; rerender(); } })));
      break;
    case 'star-project':
      state.starredProjects.has(el.dataset.id) ? state.starredProjects.delete(el.dataset.id) : state.starredProjects.add(el.dataset.id);
      rerender();
      break;
    case 'add-task': {
      const defaultStatus = el.dataset.defaultStatus || 'pending';
      openNewTaskModal(p, defaultStatus);
      break;
    }
    case 'check-all': {
      const allDone = p.tasks.every(t => t.status === 'done');
      p.tasks.forEach(t => (t.status = allDone ? 'progress' : 'done'));
      rerender();
      break;
    }
    case 'invite':
      openModal('Invite Member', [
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'name@kathirstudios.com' },
        { name: 'role', label: 'Role', type: 'select', value: 'Frontend', options: [['Frontend', 'Frontend'], ['Backend', 'Backend'], ['UI/UX', 'UI/UX'], ['QA', 'QA']] },
      ], d => toast(`Invite sent to ${d.email}`), 'Send Invite');
      break;
    case 'upload': $('#fileInput').click(); break;
    case 'add-note':
      openModal('Add Note', [
        { name: 'title', label: 'Title', required: true, placeholder: 'e.g. Client call – Nov 19, 2026' },
        { name: 'body', label: 'Note', type: 'textarea', placeholder: 'Key points, decisions… (one point per line for a list)' },
      ], d => {
        const lines = d.body.split('\n').map(s => s.trim()).filter(Boolean);
        p.notes.unshift({ icon: 'pin', title: d.title, ...(lines.length > 1 ? { bullets: lines } : { body: lines[0] || '' }), by: 'arun', at: `${fmtShort(isoDate(new Date()))}, ${nowTime()}` });
        p.notes[0].by = 'arun';
        rerender(); toast('Note added');
      }, 'Add Note');
      break;
    case 'log-attach': $('#logFile').click(); break;
    case 'log-bullet': {
      const ta = $('#logText');
      ta.value += (ta.value && !ta.value.endsWith('\n') ? '\n' : '') + '• ';
      ta.focus();
      break;
    }
    case 'log-cancel':
      $('#logText').value = '';
      state.logAttach = null;
      state.logDependency = '';
      state.logStatus = 'progress';
      rerender();
      break;
    case 'log-save': {
      const items = $('#logText').value.split('\n').map(s => s.replace(/^[•\-*]\s*/, '').trim()).filter(Boolean);
      if (!items.length) { $('#logText').focus(); toast('Write what you worked on first'); return; }
      const enteredProject = $('#logProjectName')?.value?.trim() || $('#logProject')?.value || 'General';
      const matchedProj = projects.find(p => p.name.toLowerCase() === enteredProject.toLowerCase() || p.id.toLowerCase() === enteredProject.toLowerCase());
      state.logProject = matchedProj ? matchedProj.id : enteredProject;
      state.logProjectName = matchedProj ? matchedProj.name : enteredProject;
      state.logHours = $('#logHours')?.value || '4h 00m';
      const status = state.logStatus || 'progress';
      const dependency = status === 'dependency' ? ($('#logDependency')?.value?.trim() || '') : '';
      const leadApprover = $('#logLeadApprover')?.value || $('#logLead')?.value || 'raja';
      const lead = leadApprover;
      const targetDate = $('#logTargetDate')?.value || '2026-11-20';
      state.logTargetDate = targetDate;

      if (status === 'dependency' && !dependency) {
        $('#logDependency')?.focus();
        toast('Please mention what the dependency or blocker is');
        return;
      }

      const logPayload = {
        date: state.logDate,
        project: state.logProject,
        member: ME || 'user',
        items,
        hours: state.logHours,
        status,
        dependency,
        lead,
        target_date: targetDate,
        approval_status: 'pending',
        approved_by: '',
        approved_at: '',
        approval_note: '',
        resolved: false,
        attach: state.logAttach
      };

      const existing = workLogs.find(l => l.date === state.logDate && l.project === state.logProject && l.member === (ME || 'user'));
      if (existing) {
        existing.items.push(...items);
        existing.status = status;
        if (dependency) existing.dependency = dependency;
        existing.lead = lead;
        existing.target_date = targetDate;
        existing.approval_status = 'pending';
        if (state.logAttach) existing.attach = state.logAttach;
        if (existing.id) {
          apiPatchWorkLog(existing.id, {
            items: existing.items,
            status: existing.status,
            dependency: existing.dependency,
            lead: existing.lead,
            target_date: existing.target_date,
            approval_status: 'pending',
            attach: existing.attach
          });
        } else {
          apiCreateWorkLog(existing).then(saved => {
            if (saved && saved.id) existing.id = saved.id;
          });
        }
      } else {
        workLogs.unshift(logPayload);
        apiCreateWorkLog(logPayload).then(saved => {
          if (saved && saved.id) logPayload.id = saved.id;
        });
      }

      state.logAttach = null;
      state.logDependency = '';
      $('#logText').value = '';
      rerender();
      if (status === 'dependency') {
        toast('Work log submitted for Lead approval & blocker flagged! ⚠️');
      } else {
        toast('Job work submitted for Team Lead approval! ⏳');
      }
      break;
    }
    case 'lead-approve-log': {
      const logIdx = +el.dataset.logIdx;
      const l = workLogs[logIdx];
      if (!l) return;
      l.approval_status = 'approved';
      l.approved_by = ME || 'raja';
      l.approved_at = `${nowTime()}, today`;
      l.approval_note = l.approval_note || 'Work verified and approved by Team Lead.';
      if (l.id) {
        await apiPatchWorkLog(l.id, {
          approval_status: 'approved',
          approved_by: l.approved_by,
          approved_at: l.approved_at,
          approval_note: l.approval_note
        });
      }
      rerender();
      toast(`Job work log approved by Team Lead (${(PEOPLE[l.approved_by] && PEOPLE[l.approved_by].name) || l.approved_by})! ✅`);
      break;
    }
    case 'lead-reject-log': {
      const logIdx = +el.dataset.logIdx;
      const l = workLogs[logIdx];
      if (!l) return;
      openModal('Request Changes / Feedback on Job Work', [
        { name: 'note', label: 'Reason / Changes required by Team Lead', type: 'textarea', required: true, placeholder: 'Explain what needs to be changed, tested, or improved before approval...' }
      ], async d => {
        l.approval_status = 'rejected';
        l.approved_by = ME || 'raja';
        l.approved_at = `${nowTime()}, today`;
        l.approval_note = d.note;
        if (l.id) {
          await apiPatchWorkLog(l.id, {
            approval_status: 'rejected',
            approved_by: l.approved_by,
            approved_at: l.approved_at,
            approval_note: l.approval_note
          });
        }
        rerender();
        toast('Feedback sent and changes requested from member! ✕');
      }, 'Submit Feedback');
      break;
    }
    case 'lead-resolve-dep': {
      const logIdx = +el.dataset.logIdx;
      const l = workLogs[logIdx];
      if (!l) return;
      openModal('Resolve Dependency & Provide Help', [
        { name: 'help_note', label: 'Resolution note / guidance for team member', required: true, type: 'textarea', placeholder: 'Explain how the blocker was resolved (e.g. Added API keys, code review approved, unblocked)' }
      ], async d => {
        l.resolved = true;
        l.status = 'progress';
        l.help_note = d.help_note;
        l.resolved_at = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (l.id) {
          await fetchFromAPI(`/worklogs/${l.id}/resolve-dependency/`, {
            method: 'POST',
            body: JSON.stringify({ help_note: d.help_note, lead: ME || 'Lead' })
          });
        }
        rerender();
        toast('Dependency resolved and member unblocked!');
      }, 'Resolve & Unblock');
      break;
    }
    case 'chat-lead-dep': {
      const leadId = el.dataset.lead;
      const projId = el.dataset.project;
      const c = chats.find(x => x.project === projId || x.id === 'proj-grp-' + projId || (x.kind === 'dm' && x.person === leadId));
      if (c) {
        state.chatId = c.id;
        go('#/messenger/' + c.id);
      } else {
        go('#/messenger');
      }
      break;
    }
    case 'msg-attach': $('#msgFile').click(); break;
    case 'emoji': {
      const emojis = ['🙂', '👍', '❤️', '😂', '🔥', '🎉', '🙌', '✨', '💯', '👌'];
      const elPop = document.createElement('div');
      elPop.className = 'rx-popover';
      elPop.innerHTML = emojis.map(em => `<button type="button" class="rx-pop-btn" data-input-emoji="${em}">${em}</button>`).join('');
      elPop.addEventListener('click', e => {
        const btn = e.target.closest('[data-input-emoji]');
        if (!btn) return;
        const inp = $('#msgInput');
        if (inp) {
          inp.value += btn.dataset.inputEmoji;
          inp.focus();
        }
        elPop.remove();
      });
      place(elPop, el);
      break;
    }
    case 'reply-to-msg': {
      const idx = +el.dataset.msgIdx;
      const c = chats.find(x => x.id === state.chatId);
      if (!c || !c.msgs[idx]) return;
      const m = c.msgs[idx];
      const fromName = (m.from === ME ? 'You' : ((PEOPLE[m.from]?.name) || m.from || 'Member'));
      state.replyingTo = {
        id: m.id,
        from: m.from,
        from_name: fromName,
        text: (m.text || (m.file ? m.file.name : 'Attachment')).slice(0, 140)
      };
      rerender();
      setTimeout(() => $('#msgInput')?.focus(), 40);
      break;
    }
    case 'cancel-reply': {
      state.replyingTo = null;
      rerender();
      break;
    }
    case 'quick-react': {
      const idx = +el.dataset.msgIdx;
      const emoji = el.dataset.emoji;
      const c = chats.find(x => x.id === state.chatId);
      if (!c || !c.msgs[idx] || !emoji) return;
      await toggleMessageReaction(c, idx, emoji);
      break;
    }
    case 'open-more-emojis': {
      const idx = +el.dataset.msgIdx;
      openMoreEmojis(el, idx);
      break;
    }
    case 'jump-quoted-msg': {
      const text = el.dataset.quotedText;
      const c = chats.find(x => x.id === state.chatId);
      if (!c || !text) return;
      const targetIdx = c.msgs.findIndex(x => (x.text || '').includes(text) || text.includes(x.text || ''));
      if (targetIdx >= 0) {
        const targetEl = $(`#msg-item-${targetIdx}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.classList.add('msg-highlight-pulse');
          setTimeout(() => targetEl.classList.remove('msg-highlight-pulse'), 1800);
        }
      }
      break;
    }
    case 'set-app-date': {
      const d = el.dataset.date;
      if (d) {
        state.currentDate = d;
        state.logDate = d;
        rerender();
        if (d === '2026-11-20') {
          toast('📅 Viewing Nov 20: Scheduled tasks now show as Completed! ✅');
        } else {
          toast('📅 Viewing Nov 19: Scheduled tasks now show as In Progress! ⏳');
        }
      }
      break;
    }
    case 'download': toast('Downloading pricing-module-v2.zip'); break;
    case 'chat-info': {
      const c = chats.find(x => x.id === state.chatId);
      if (!c) break;
      if (c.kind === 'dm') openProfile(c.person, el);
      else openGroupInfoModal(c);
      break;
    }
    case 'new-group': openNewGroupModal(); break;
    case 'add-group-member': openAddMemberModal(state.chatId); break;
    case 'open-login': openLoginModal(); break;
    case 'open-register': openRegisterModal(); break;
    case 'auth-logout': handleLogout(); break;
    case 'new-chat': openNewDirectMessageModal(); break;
  }
}

function reopenProfileAt(id, rect) {
  if (currentProfileAnchor && document.body.contains(currentProfileAnchor)) {
    openProfile(id, currentProfileAnchor);
    return;
  }
  const fake = { getBoundingClientRect: () => rect };
  openProfile(id, fake);
}

/* Inputs (search / filters) */
document.addEventListener('input', e => {
  const id = e.target.id;
  const keep = (key) => { state[key] = e.target.value; const pos = e.target.selectionStart; rerender(); const el = $('#' + id); el.focus(); el.setSelectionRange(pos, pos); };
  if (id === 'projSearch') keep('projectQuery');
  if (id === 'taskSearch') keep('taskQuery');
  if (id === 'fileSearch') keep('fileQuery');
  if (id === 'chatSearch') keep('chatQuery');
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.taskfilter) { state[t.dataset.taskfilter] = t.value; rerender(); }
  if (t.hasAttribute('data-filetype')) { state.fileType = t.value; rerender(); }
  if (t.id === 'logProject') state.logProject = t.value;
  if (t.id === 'logHours') state.logHours = t.value;
  if (t.id === 'fileInput' && t.files.length) {
    const p = currentProject();
    [...t.files].forEach(f => p.files.push({ name: f.name, kind: fileKind(f.name), by: 'karthik', date: isoDate(new Date()), size: (f.size / 1048576).toFixed(1) + ' MB' }));
    rerender(); toast(`${t.files.length} file(s) uploaded`);
  }
  if (t.id === 'logFile' && t.files.length) { const keepText = $('#logText').value; state.logAttach = t.files[0].name; rerender(); $('#logText').value = keepText; }
  if (t.id === 'msgFile' && t.files.length) { const f = t.files[0]; sendMessage('', { name: f.name, size: (f.size / 1048576).toFixed(1) + ' MB' }); }
});
document.addEventListener('submit', e => {
  if (e.target.id === 'msgForm') {
    e.preventDefault();
    const v = $('#msgInput').value.trim();
    if (v) sendMessage(v);
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeFloating();
    $('.overlay')?.remove();
    if (state.replyingTo) {
      state.replyingTo = null;
      rerender();
    }
  }
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && e.target.id === 'logText') handleAction('log-save');
});
window.addEventListener('resize', closeFloating);
$('#main').addEventListener('scroll', closeFloating, true);

/* ---------------- REST API Client Integration ---------------- */
const API_BASE = '/api';

async function fetchFromAPI(endpoint, options = {}) {
  try {
    const headers = { 'Content-Type': 'application/json', ...options.headers };
    if (AUTH_TOKEN) {
      headers['Authorization'] = `Token ${AUTH_TOKEN}`;
    }
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers,
      ...options
    });
    if (res.status === 401 && !endpoint.startsWith('/auth/login')) {
      AUTH_TOKEN = null;
      ME = null;
      localStorage.removeItem('kathir_auth_token');
      localStorage.removeItem('kathir_auth_user');
      refreshSide();
    }
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

function openNewGroupModal() {
  closeFloating();
  const allEmployees = Object.keys(PEOPLE);
  const employeeCheckboxes = allEmployees.map(id => {
    const p = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Member' };
    const a = (p && AVAIL[p.availability]) || AVAIL['available'];
    const isMe = id === ME;
    return `
      <label class="emp-check-item" style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;background:var(--panel-2);border:1px solid var(--line-2);margin-bottom:6px">
        <input type="checkbox" name="groupMembers" value="${id}" ${isMe ? 'checked disabled' : ''} style="width:16px;height:16px;accent-color:var(--gold)">
        ${av(id, 's26')}
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:13px;display:flex;align-items:center;gap:6px">
            <span>${esc(p.name)}</span>
            ${userModeIcon(id, 'xs')}
            ${isMe ? '<span style="color:var(--text-3);font-size:11px">(You)</span>' : ''}
            <span class="badge avail ${a.cls}" style="font-size:9.5px;padding:1px 5px;margin-left:auto">${a.label}</span>
          </div>
          <div style="font-size:11px;color:var(--text-2);margin-top:2px">${esc(p.role || TITLES[id] || 'Team Member')}</div>
        </div>
      </label>
    `;
  }).join('');

  const modalHtml = `
    <div class="overlay" id="groupModal">
      <div class="modal" style="width:480px">
        <h3>Create New Group</h3>
        <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">Set up a new team group channel and add employees.</p>
        <div id="grpErr" style="color:#f06464;font-size:12px;margin-bottom:10px;display:none"></div>
        <form id="newGroupForm">
          <div class="field">
            <label>Group Name</label>
            <input type="text" id="grpName" required placeholder="e.g. Design Sync, Backend Team, Alpha Release" autofocus />
          </div>
          <div class="field">
            <label>Add Employees to Group</label>
            <input type="text" id="grpEmpSearch" placeholder="Search employees by name..." style="margin-bottom:8px;height:34px;font-size:12px" />
            <div id="grpEmpList" style="max-height:180px;overflow-y:auto;padding-right:4px">
              ${employeeCheckboxes}
            </div>
          </div>
          <div class="field" style="margin-top:8px">
            <label>Initial Message (optional)</label>
            <input type="text" id="grpInitMsg" placeholder="e.g. Welcome everyone to the group!" />
          </div>
          <div class="modal-actions" style="margin-top:16px">
            <button type="button" class="btn flat" onclick="document.getElementById('groupModal').remove()">Cancel</button>
            <button type="submit" class="btn primary">Create Group</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const searchInp = $('#grpEmpSearch');
  if (searchInp) {
    searchInp.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      $$('.emp-check-item', $('#grpEmpList')).forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = (!q || text.includes(q)) ? 'flex' : 'none';
      });
    });
  }

  $('#newGroupForm').onsubmit = async (e) => {
    e.preventDefault();
    const name = $('#grpName').value.trim();
    if (!name) return;
    const checked = [...document.querySelectorAll('input[name="groupMembers"]:checked')].map(i => i.value);
    if (!checked.includes(ME)) checked.push(ME);
    const initial_message = $('#grpInitMsg').value.trim();

    const errBox = $('#grpErr');
    errBox.style.display = 'none';

    try {
      const res = await fetch(`${API_BASE}/chats/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(AUTH_TOKEN ? { 'Authorization': `Token ${AUTH_TOKEN}` } : {})
        },
        body: JSON.stringify({ kind: 'group', name, members: checked, initial_message, created_by: ME })
      });
      const data = await res.json();
      if (!res.ok) {
        errBox.textContent = data.error || 'Failed to create group.';
        errBox.style.display = 'block';
        return;
      }
      $('#groupModal').remove();
      chats.unshift(data);
      state.chatId = data.id;
      go('#/messenger/' + data.id);
      rerender();
      toast(`Group "${name}" created!`);
    } catch (err) {
      errBox.textContent = 'Network error creating group.';
      errBox.style.display = 'block';
    }
  };
}

function openNewDirectMessageModal() {
  closeFloating();
  const allEmployees = Object.keys(PEOPLE).filter(id => id !== ME);
  if (!allEmployees.length) {
    toast('No other employees registered yet to message.');
    return;
  }

  const employeeOptions = allEmployees.map((id, idx) => {
    const p = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Member' };
    const a = (p && AVAIL[p.availability]) || AVAIL['available'];
    return `
      <label class="emp-radio-item" style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;background:var(--panel-2);border:1px solid var(--line-2);margin-bottom:6px;transition:border-color .15s">
        <input type="radio" name="dmRecipient" value="${id}" ${idx === 0 ? 'checked' : ''} style="width:16px;height:16px;accent-color:var(--gold)" required>
        ${av(id, 's32')}
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-weight:600;font-size:13px">${esc(p.name)}</span>
            ${userModeIcon(id, 'xs')}
            <span class="badge avail ${a.cls}" style="font-size:10px;padding:1px 6px;margin-left:auto">${a.label}</span>
          </div>
          <div style="font-size:11.5px;color:var(--text-2);margin-top:2px">${esc(p.role || TITLES[id] || 'Team Member')}</div>
        </div>
      </label>
    `;
  }).join('');

  const modalHtml = `
    <div class="overlay" id="dmModal">
      <div class="modal" style="width:480px">
        <h3>New Direct Message</h3>
        <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">Select an employee and start a direct conversation.</p>
        <div id="dmErr" style="color:#f06464;font-size:12px;margin-bottom:10px;display:none"></div>
        <form id="newDmForm">
          <div class="field">
            <label>Select Team Member</label>
            <input type="text" id="dmFilter" placeholder="Search employee by name..." style="margin-bottom:8px;height:34px;font-size:12px" />
            <div id="dmEmpList" style="max-height:180px;overflow-y:auto;padding-right:4px">
              ${employeeOptions}
            </div>
          </div>
          <div class="field" style="margin-top:10px">
            <label>Message</label>
            <textarea id="dmInitMsg" required placeholder="Type your message..." style="height:64px;resize:none" autofocus></textarea>
          </div>
          <div class="modal-actions" style="margin-top:16px">
            <button type="button" class="btn flat" onclick="document.getElementById('dmModal').remove()">Cancel</button>
            <button type="submit" class="btn primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const filterInp = $('#dmFilter');
  if (filterInp) {
    filterInp.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      $$('.emp-radio-item', $('#dmEmpList')).forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = (!q || text.includes(q)) ? 'flex' : 'none';
      });
    });
  }

  $('#newDmForm').onsubmit = async (e) => {
    e.preventDefault();
    const sel = document.querySelector('input[name="dmRecipient"]:checked');
    if (!sel) return;
    const recipient = sel.value;
    const text = $('#dmInitMsg').value.trim();
    if (!text) return;

    const errBox = $('#dmErr');
    errBox.style.display = 'none';

    try {
      const res = await fetch(`${API_BASE}/chats/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(AUTH_TOKEN ? { 'Authorization': `Token ${AUTH_TOKEN}` } : {})
        },
        body: JSON.stringify({ kind: 'dm', person: recipient, text, created_by: ME })
      });
      const data = await res.json();
      if (!res.ok) {
        errBox.textContent = data.error || 'Failed to start direct message.';
        errBox.style.display = 'block';
        return;
      }
      $('#dmModal').remove();
      const existingIdx = chats.findIndex(x => x.id === data.id);
      if (existingIdx >= 0) chats.splice(existingIdx, 1);
      chats.unshift(data);
      state.chatId = data.id;
      go('#/messenger/' + data.id);
      rerender();
      toast(`Conversation started with ${PEOPLE[recipient]?.name || recipient}!`);
    } catch (err) {
      errBox.textContent = 'Network error starting direct message.';
      errBox.style.display = 'block';
    }
  };
}

function openAddMemberModal(chatId) {
  closeFloating();
  const c = chats.find(x => x.id === chatId) || chats.find(x => x.id === state.chatId);
  if (!c || c.kind !== 'group') return;

  const currentMembers = c.memberList || [];
  const availableEmployees = Object.keys(PEOPLE).filter(id => !currentMembers.includes(id));

  if (!availableEmployees.length) {
    toast('All studio employees are already in this group!');
    return;
  }

  const employeeCheckboxes = availableEmployees.map(id => {
    const p = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Member' };
    return `
      <label class="emp-check-item" style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;background:var(--panel-2);border:1px solid var(--line-2);margin-bottom:6px">
        <input type="checkbox" name="addEmpMembers" value="${id}" style="width:16px;height:16px;accent-color:var(--gold)">
        ${av(id, 's26')}
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:13px">${esc(p.name)}</div>
          <div style="font-size:11px;color:var(--text-2)">${esc(p.role || TITLES[id] || 'Team Member')}</div>
        </div>
      </label>
    `;
  }).join('');

  const modalHtml = `
    <div class="overlay" id="addMemberModal">
      <div class="modal" style="width:440px">
        <h3>Add Employees to "${esc(c.name)}"</h3>
        <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">Select employees to add to this group.</p>
        <div id="addErr" style="color:#f06464;font-size:12px;margin-bottom:10px;display:none"></div>
        <form id="addMemberForm">
          <div class="field">
            <div style="max-height:220px;overflow-y:auto;padding-right:4px">
              ${employeeCheckboxes}
            </div>
          </div>
          <div class="modal-actions" style="margin-top:16px">
            <button type="button" class="btn flat" onclick="document.getElementById('addMemberModal').remove()">Cancel</button>
            <button type="submit" class="btn primary">Add to Group</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  $('#addMemberForm').onsubmit = async (e) => {
    e.preventDefault();
    const checked = [...document.querySelectorAll('input[name="addEmpMembers"]:checked')].map(i => i.value);
    if (!checked.length) {
      toast('Please select at least one employee');
      return;
    }

    const errBox = $('#addErr');
    errBox.style.display = 'none';

    try {
      const res = await fetch(`${API_BASE}/chats/${c.id}/add-member/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(AUTH_TOKEN ? { 'Authorization': `Token ${AUTH_TOKEN}` } : {})
        },
        body: JSON.stringify({ member_ids: checked })
      });
      const data = await res.json();
      if (!res.ok) {
        errBox.textContent = data.error || 'Failed to add members.';
        errBox.style.display = 'block';
        return;
      }
      $('#addMemberModal').remove();
      c.memberList = data.memberList;
      c.members = data.members;
      c.msgs = data.msgs;
      rerender();
      toast(`Added ${checked.length} employee(s) to ${c.name}`);
    } catch (err) {
      errBox.textContent = 'Network error adding members.';
      errBox.style.display = 'block';
    }
  };
}

function openGroupInfoModal(c) {
  closeFloating();
  const members = (c.memberList || []).map(id => {
    const p = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Member' };
    return `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--line-2)">
        ${av(id, 's32')}
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:13px">${esc(p.name)} ${id === ME ? '<span style="color:var(--text-3);font-size:11px">(You)</span>' : ''}</div>
          <div style="font-size:11px;color:var(--text-2)">${esc(p.role || TITLES[id] || 'Team Member')}</div>
        </div>
        ${availBadge(id)}
      </div>
    `;
  }).join('') || '<div style="color:var(--text-3);font-size:12px;padding:8px 0">No members listed</div>';

  const modalHtml = `
    <div class="overlay" id="grpInfoModal">
      <div class="modal" style="width:440px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <h3>${esc(c.name)}</h3>
          <span style="font-size:12px;color:var(--gold)">${(c.memberList ? c.memberList.length : c.members) || 1} Members</span>
        </div>
        <div style="max-height:240px;overflow-y:auto;margin-bottom:16px">
          ${members}
        </div>
        <div class="modal-actions" style="justify-content:space-between">
          <button type="button" class="btn primary" onclick="document.getElementById('grpInfoModal').remove(); openAddMemberModal('${c.id}')" style="display:flex;align-items:center;gap:6px">${icon('userPlus', 'sm')}Add Employee</button>
          <button type="button" class="btn flat" onclick="document.getElementById('grpInfoModal').remove()">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function togglePwdVis(btn, inputId) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  if (inp.type === 'password') {
    inp.type = 'text';
    btn.innerHTML = `<svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
    btn.title = "Hide password";
  } else {
    inp.type = 'password';
    btn.innerHTML = `<svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    btn.title = "Show password";
  }
}
window.togglePwdVis = togglePwdVis;

function openLoginModal() {
  closeFloating();
  $('#authModal')?.remove();
  const modalHtml = `
    <div class="overlay" id="authModal">
      <div class="modal" style="width:420px">
        <h3 style="margin-bottom:6px">Sign In to Kathir Studios</h3>
        <p style="font-size:12.5px;color:var(--text-2);margin-bottom:14px">Login with your username or email address to access your workspace.</p>
        <div id="authErr" style="color:#f06464;background:rgba(240,100,100,.1);border:1px solid rgba(240,100,100,.25);padding:9px 12px;border-radius:8px;font-size:12.5px;margin-bottom:14px;display:none"></div>
        <form id="loginForm">
          <div class="field">
            <label>Username or Email Address</label>
            <input type="text" id="authUsername" required placeholder="e.g. karthik or alex@gmail.com" autofocus autocomplete="username" />
          </div>
          <div class="field" style="position:relative">
            <label>Password</label>
            <div style="position:relative;display:flex;align-items:center">
              <input type="password" id="authPassword" required placeholder="••••••••" style="width:100%;padding-right:38px" autocomplete="current-password" />
              <button type="button" onclick="togglePwdVis(this, 'authPassword')" style="position:absolute;right:8px;background:none;border:none;color:var(--text-2);cursor:pointer;display:flex;align-items:center;padding:4px" title="Show password">
                <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
          <div class="modal-actions" style="margin-top:18px;display:flex;justify-content:space-between;align-items:center">
            <button type="button" class="btn flat" onclick="openRegisterModal()" style="color:var(--gold);padding-left:0;font-size:13px">Create Account</button>
            <div style="display:flex;gap:8px">
              <button type="button" class="btn flat" onclick="document.getElementById('authModal').remove()">Cancel</button>
              <button type="submit" id="btnSignIn" class="btn primary">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  $('#loginForm').onsubmit = async (e) => {
    e.preventDefault();
    const username = $('#authUsername').value.trim();
    const password = $('#authPassword').value;
    const errBox = $('#authErr');
    const submitBtn = $('#btnSignIn');
    errBox.style.display = 'none';

    if (!username || !password) {
      errBox.textContent = 'Please enter your username/email and password.';
      errBox.style.display = 'block';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';

    try {
      const res = await fetch(`${API_BASE}/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!res.ok) {
        errBox.textContent = data.error || 'Login failed. Please check your credentials.';
        errBox.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign In';
        return;
      }
      AUTH_TOKEN = data.token;
      localStorage.setItem('kathir_auth_token', AUTH_TOKEN);
      ME = data.user.username.toLowerCase();
      localStorage.setItem('kathir_auth_user', ME);
      if (!PEOPLE[ME]) {
        PEOPLE[ME] = { name: data.user.name, role: data.user.role, availability: data.user.availability || 'available', mode: data.user.mode || 'office' };
      } else {
        PEOPLE[ME].name = data.user.name;
        PEOPLE[ME].role = data.user.role;
      }
      TITLES[ME] = data.user.role;
      MEMBER_ROWS = Object.keys(PEOPLE);
      $('#authModal')?.remove();
      toast(`Welcome back, ${data.user.name}!`);
      refreshSide();
      rerender();
    } catch (err) {
      errBox.textContent = 'Network or server error. Please try again.';
      errBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Sign In';
    }
  };

  const modal = $('#authModal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.remove();
    });
  }
}
window.openLoginModal = openLoginModal;

function openRegisterModal() {
  closeFloating();
  $('#authModal')?.remove();
  const modalHtml = `
    <div class="overlay" id="authModal">
      <div class="modal" style="width:460px;max-height:92vh;overflow-y:auto">
        <h3 style="margin-bottom:6px">Create New Account</h3>
        <p style="font-size:12.5px;color:var(--text-2);margin-bottom:14px">Register as a member. Personal emails (Gmail, Yahoo, Outlook, etc.) are welcome!</p>
        <div id="authErr" style="color:#f06464;background:rgba(240,100,100,.1);border:1px solid rgba(240,100,100,.25);padding:9px 12px;border-radius:8px;font-size:12.5px;margin-bottom:14px;display:none"></div>
        <form id="regForm">
          <div class="field">
            <label>Full Name</label>
            <input type="text" id="regName" required placeholder="e.g. Karthik Raja" autofocus autocomplete="name" />
          </div>
          <div class="field-row">
            <div class="field">
              <label>Username</label>
              <input type="text" id="regUsername" required placeholder="e.g. karthik3345" autocomplete="username" />
            </div>
            <div class="field">
              <label>Role / Title</label>
              <input type="text" id="regRole" placeholder="e.g. Developer" value="Developer" />
            </div>
          </div>
          <div class="field">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <label style="margin:0">Email Address</label>
              <span style="font-size:11px;color:var(--gold)">Personal emails welcome</span>
            </div>
            <input type="email" id="regEmail" required placeholder="e.g. yourname@gmail.com" autocomplete="email" />
          </div>
          <div class="field" style="position:relative">
            <label>Password (min 6 characters)</label>
            <div style="position:relative;display:flex;align-items:center">
              <input type="password" id="regPassword" required minlength="6" placeholder="••••••••" style="width:100%;padding-right:38px" autocomplete="new-password" />
              <button type="button" onclick="togglePwdVis(this, 'regPassword')" style="position:absolute;right:8px;background:none;border:none;color:var(--text-2);cursor:pointer;display:flex;align-items:center;padding:4px" title="Show password">
                <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
          <div class="field" style="position:relative">
            <label>Confirm Password</label>
            <div style="position:relative;display:flex;align-items:center">
              <input type="password" id="regConfirmPassword" required minlength="6" placeholder="••••••••" style="width:100%;padding-right:38px" autocomplete="new-password" />
              <button type="button" onclick="togglePwdVis(this, 'regConfirmPassword')" style="position:absolute;right:8px;background:none;border:none;color:var(--text-2);cursor:pointer;display:flex;align-items:center;padding:4px" title="Show password">
                <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
            <div id="pwdMatchNote" style="font-size:11.5px;margin-top:4px;display:none"></div>
          </div>
          <div class="modal-actions" style="margin-top:18px;display:flex;justify-content:space-between;align-items:center">
            <button type="button" class="btn flat" onclick="openLoginModal()" style="color:var(--gold);padding-left:0;font-size:13px">Already have an account? Sign In</button>
            <div style="display:flex;gap:8px">
              <button type="button" class="btn flat" onclick="document.getElementById('authModal').remove()">Cancel</button>
              <button type="submit" id="btnRegister" class="btn primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Live password matching indicator
  const p1 = $('#regPassword');
  const p2 = $('#regConfirmPassword');
  const note = $('#pwdMatchNote');
  const checkMatch = () => {
    if (!p2.value) {
      note.style.display = 'none';
      return;
    }
    note.style.display = 'block';
    if (p1.value === p2.value) {
      note.style.color = '#5bdc8e';
      note.textContent = '✓ Passwords match';
      p2.style.borderColor = 'rgba(91, 220, 142, 0.5)';
    } else {
      note.style.color = '#f06464';
      note.textContent = '✕ Passwords do not match';
      p2.style.borderColor = 'rgba(240, 100, 100, 0.5)';
    }
  };
  p1.oninput = checkMatch;
  p2.oninput = checkMatch;

  $('#regForm').onsubmit = async (e) => {
    e.preventDefault();
    const name = $('#regName').value.trim();
    const username = $('#regUsername').value.trim().toLowerCase();
    const email = $('#regEmail').value.trim().toLowerCase();
    const role = $('#regRole').value.trim() || 'Developer';
    const password = $('#regPassword').value;
    const confirmPassword = $('#regConfirmPassword').value;
    const errBox = $('#authErr');
    const submitBtn = $('#btnRegister');
    errBox.style.display = 'none';

    // Frontend validations
    if (!name) {
      errBox.textContent = 'Please enter your full name.';
      errBox.style.display = 'block';
      return;
    }
    if (!username || username.length < 3) {
      errBox.textContent = 'Username must be at least 3 characters.';
      errBox.style.display = 'block';
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      errBox.textContent = 'Username can only contain letters, numbers, and underscores.';
      errBox.style.display = 'block';
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errBox.textContent = 'Please enter a valid email address (e.g. alex@gmail.com).';
      errBox.style.display = 'block';
      return;
    }
    if (!password || password.length < 6) {
      errBox.textContent = 'Password must be at least 6 characters.';
      errBox.style.display = 'block';
      return;
    }
    if (password !== confirmPassword) {
      errBox.textContent = 'Passwords do not match. Please verify and re-enter.';
      errBox.style.display = 'block';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Registering...';

    try {
      const res = await fetch(`${API_BASE}/auth/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, role, password, confirm_password: confirmPassword })
      });
      const data = await res.json();
      if (!res.ok) {
        errBox.textContent = data.error || 'Registration failed. Please check your details.';
        errBox.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Register';
        return;
      }
      AUTH_TOKEN = data.token;
      localStorage.setItem('kathir_auth_token', AUTH_TOKEN);
      ME = data.user.username.toLowerCase();
      localStorage.setItem('kathir_auth_user', ME);
      PEOPLE[ME] = { name: data.user.name, role: data.user.role, availability: 'available', mode: 'office' };
      TITLES[ME] = data.user.role;
      MEMBER_ROWS = Object.keys(PEOPLE);
      $('#authModal')?.remove();
      toast(`Account created! Welcome, ${data.user.name}!`);
      refreshSide();
      rerender();
    } catch (err) {
      errBox.textContent = 'Network or server error. Please try again.';
      errBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Register';
    }
  };

  const modal = $('#authModal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.remove();
    });
  }
}
window.openRegisterModal = openRegisterModal;

function handleLogout() {
  closeFloating();
  fetch(`${API_BASE}/auth/logout/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(AUTH_TOKEN ? { 'Authorization': `Token ${AUTH_TOKEN}` } : {}) }
  }).catch(() => {});
  AUTH_TOKEN = null;
  localStorage.removeItem('kathir_auth_token');
  localStorage.removeItem('kathir_auth_user');
  ME = null;
  toast('Signed out successfully');
  refreshSide();
  rerender();
  setTimeout(() => openLoginModal(), 300);
}
window.handleLogout = handleLogout;

async function apiPatchMember(id, patchData) {
  return await fetchFromAPI(`/members/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify(patchData)
  });
}

async function apiCreateTask(taskData) {
  return await fetchFromAPI(`/tasks/`, {
    method: 'POST',
    body: JSON.stringify(taskData)
  });
}

async function apiPatchTask(taskId, patchData) {
  if (!taskId || isNaN(taskId)) return null;
  return await fetchFromAPI(`/tasks/${taskId}/`, {
    method: 'PATCH',
    body: JSON.stringify(patchData)
  });
}

async function apiDeleteTask(taskId) {
  if (!taskId || isNaN(taskId)) return null;
  return await fetchFromAPI(`/tasks/${taskId}/`, {
    method: 'DELETE'
  });
}

async function apiCreateWorkLog(logData) {
  return await fetchFromAPI(`/worklogs/`, {
    method: 'POST',
    body: JSON.stringify(logData)
  });
}

async function apiPatchWorkLog(logId, patchData) {
  if (!logId) return null;
  return await fetchFromAPI(`/worklogs/${logId}/`, {
    method: 'PATCH',
    body: JSON.stringify(patchData)
  });
}

async function apiSendMessage(chatId, messageData) {
  return await fetchFromAPI(`/messages/`, {
    method: 'POST',
    body: JSON.stringify({ chat_id: chatId, ...messageData })
  });
}

async function loadInitialData() {
  if (AUTH_TOKEN) {
    const meRes = await fetchFromAPI('/auth/me/');
    if (meRes && meRes.authenticated && meRes.user) {
      ME = meRes.user.username.toLowerCase();
      localStorage.setItem('kathir_auth_user', ME);
      if (!PEOPLE[ME]) {
        PEOPLE[ME] = { name: meRes.user.name, role: meRes.user.role, availability: meRes.user.availability, mode: meRes.user.mode };
      }
    } else {
      AUTH_TOKEN = null;
      localStorage.removeItem('kathir_auth_token');
      localStorage.removeItem('kathir_auth_user');
      ME = null;
    }
  } else {
    ME = null;
    localStorage.removeItem('kathir_auth_user');
  }

  const [apiMembers, apiProjects, apiLogs, apiChats] = await Promise.all([
    fetchFromAPI('/members/'),
    fetchFromAPI('/projects/'),
    fetchFromAPI('/worklogs/'),
    fetchFromAPI('/chats/')
  ]);

  let updated = false;

  if (Array.isArray(apiMembers) && apiMembers.length) {
    apiMembers.forEach(m => {
      if (PEOPLE[m.id]) {
        PEOPLE[m.id].name = m.name || PEOPLE[m.id].name;
        PEOPLE[m.id].role = m.role || PEOPLE[m.id].role;
        PEOPLE[m.id].availability = m.availability || PEOPLE[m.id].availability;
        PEOPLE[m.id].mode = m.mode || PEOPLE[m.id].mode;
        if (m.today) PEOPLE[m.id].today = m.today;
      } else {
        PEOPLE[m.id] = { name: m.name, role: m.role, availability: m.availability, mode: m.mode };
        TITLES[m.id] = m.role;
      }
    });
    MEMBER_ROWS = Object.keys(PEOPLE);
    updated = true;
  }

  projects.length = 0;
  if (Array.isArray(apiProjects)) {
    apiProjects.forEach(ap => {
      projects.push({
        id: ap.id,
        name: ap.name,
        type: ap.type || 'Web',
        thumb: ap.thumb || 'portfolio',
        status: ap.status || 'progress',
        start: ap.start || isoDate(new Date()),
        end: (ap.end !== undefined && ap.end !== null) ? ap.end : '',
        team: ap.team || [ME].filter(Boolean),
        extra: ap.extra || 0,
        totals: ap.totals || { total: 0, completed: 0, inProgress: 0 },
        workload: ap.workload || {},
        tasks: ap.tasks || [],
        files: ap.files || [],
        notes: ap.notes || [],
        analytics: ap.analytics || {},
        _other: { completed: 0, inProgress: 0, pending: 0 }
      });
    });
  }

  workLogs.length = 0;
  if (Array.isArray(apiLogs)) {
    workLogs.push(...apiLogs);
  }

  chats.length = 0;
  if (Array.isArray(apiChats)) {
    chats.push(...apiChats);
    if (chats.length && (!state.chatId || !chats.some(c => c.id === state.chatId))) {
      state.chatId = chats[0].id;
    }
  }

  refreshSide();
  rerender();

  if (!AUTH_TOKEN) {
    setTimeout(() => {
      openLoginModal();
    }, 350);
  }
}

/* ---------------- Drag and Drop for Kanban Board ---------------- */
document.addEventListener('dragstart', e => {
  const card = e.target.closest('[data-k-task]');
  if (card) {
    e.dataTransfer.setData('text/plain', card.dataset.kTask);
    card.style.opacity = '0.5';
  }
});
document.addEventListener('dragend', e => {
  const card = e.target.closest('[data-k-task]');
  if (card) card.style.opacity = '1';
  $$('.kanban-col').forEach(c => c.classList.remove('drag-over'));
});
document.addEventListener('dragover', e => {
  const col = e.target.closest('.kanban-col');
  if (col) {
    e.preventDefault();
    col.classList.add('drag-over');
  }
});
document.addEventListener('dragleave', e => {
  const col = e.target.closest('.kanban-col');
  if (col && !col.contains(e.relatedTarget)) {
    col.classList.remove('drag-over');
  }
});
document.addEventListener('drop', e => {
  const col = e.target.closest('.kanban-col');
  if (col) {
    e.preventDefault();
    col.classList.remove('drag-over');
    const taskId = e.dataTransfer.getData('text/plain');
    const targetStatus = col.dataset.colStatus;
    const p = currentProject();
    if (p && taskId && targetStatus) {
      const task = p.tasks.find(x => x.id == taskId);
      if (task && task.status !== targetStatus) {
        task.status = targetStatus;
        rerender();
        apiPatchTask(task.id, { status: task.status });
        const targetName = task.status === 'done' ? 'Completed' : task.status === 'progress' ? 'In Progress' : 'To Do';
        toast(`Task moved to ${targetName}`);
      }
    }
  }
});

/* ---------------- Boot ---------------- */
function refreshSide() {
  if (!ME || !AUTH_TOKEN) {
    $('#sideAvatar').innerHTML = `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#2d2d33"/><circle cx="20" cy="16" r="7" fill="#888"/><path d="M8 38c2-8 7-10 12-10s10 2 12 10z" fill="#888"/></svg>`;
    const info = $('#sideUser > div');
    if (info) {
      info.innerHTML = `<div class="name" style="color:var(--gold)">Sign In / Register</div><div class="role">Guest (Click to Login)</div>`;
    }
    return;
  }
  const currentPerson = PEOPLE[ME] || { name: ME ? ME.charAt(0).toUpperCase() + ME.slice(1) : 'User', role: 'Team Member' };
  const modeKey = (currentPerson && currentPerson.mode) || 'office';
  const m = MODES[modeKey] || MODES['office'];
  $('#sideAvatar').innerHTML = avatarSVG(ME);
  const info = $('#sideUser > div');
  if (info) {
    info.innerHTML = `<div class="name" style="display:flex;align-items:center;gap:6px"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(currentPerson.name)}</span><span class="user-mode-ic" title="${esc(m.long)}">${icon(m.icon, 'xs')}</span></div><div class="role">${esc(currentPerson.role || TITLES[ME] || 'Team Member')}</div>`;
  }
}
hydrateIcons();
refreshSide();
window.addEventListener('hashchange', route);
route();
loadInitialData();
