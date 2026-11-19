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
let ME = localStorage.getItem('kathir_auth_user') || '';
let AUTH_TOKEN = localStorage.getItem('kathir_auth_token') || null;

const PEOPLE = {};
const TITLES = {};
let MEMBER_ROWS = [];

const AVAIL = {
  available: { label: 'Available', cls: 'available' },
  meeting:   { label: 'In a Meeting', cls: 'meeting' },
  away:      { label: 'Away (1 hr)', short: 'Away', cls: 'away' },
  dnd:       { label: 'Do Not Disturb', cls: 'dnd' },
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

const projects = [];
const workLogs = [];
const chats = [];

function countTasks(list) {
  if (!list || !list.length) return { done: 0, progress: 0, pending: 0 };
  return list.reduce((a, t) => {
    const st = t.status === 'review' ? 'progress' : (t.status || 'pending');
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
  taskQuery: '', taskStatus: 'all', taskAssignee: 'all', taskPriority: 'all', openTasks: new Set(),
  fileQuery: '', fileType: 'all', fileView: 'list',
  logDate: isoDate(new Date()), logProject: '', logHours: '4h 00m', logAttach: null,
  chatId: '', chatQuery: '',
  starredProjects: new Set(),
};

/* ---------------- Helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function parseISO(s) { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }
function isoDate(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
function fmtShort(s) { const d = parseISO(s); return `${MON[d.getMonth()]} ${d.getDate()}`; }
function fmtLong(s) { const d = parseISO(s); return `${MON[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`; }
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
function rerender() { const top = $('#main').scrollTop; route(); $('#main').scrollTop = top; }
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
        <div class="dates">${icon('calendar', 'sm')} ${fmtLong(p.start).replace(/^(\w+ \d+), (\d+)$/, '$1, $2')} – ${fmtLong(p.end)}</div>
      </div>
      <div class="head-actions">
        <button class="icon-btn ${state.starredProjects.has(p.id) ? 'starred' : ''}" data-action="star-project" data-id="${p.id}" title="Star">${icon('star', 'sm')}</button>
        <button class="icon-btn" data-action="open-project-chat" data-id="${p.id}" title="Open Project Chat">${icon('message', 'sm')}</button>
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
      <td><span class="cell-user">${av(id)}<span class="clickable" data-profile="${id}">${P.name}</span></span></td>
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
  const steps = [['Kickoff', fmtShort(p.start)], ['Development', `(${s.pct}%)`], ['Testing', ''], ['Release', fmtShort(p.end)]];
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
  <div class="card tbl-card">
    <div class="tbl-head"><span class="card-title">Team &amp; Availability</span><span class="muted">${MEMBER_ROWS.length} Members</span></div>
    ${teamTable(p, 'overview')}
  </div>`;
}

function tabTasks(p) {
  const s = projectStats(p);
  const q = state.taskQuery.toLowerCase();
  const list = p.tasks.filter(t =>
    (!q || t.title.toLowerCase().includes(q) || PEOPLE[t.assignee].name.toLowerCase().includes(q)) &&
    (state.taskStatus === 'all' || t.status === state.taskStatus) &&
    (state.taskAssignee === 'all' || t.assignee === state.taskAssignee) &&
    (state.taskPriority === 'all' || t.priority === state.taskPriority));
  const opt = (v, l, cur) => `<option value="${v}" ${v === cur ? 'selected' : ''}>${l}</option>`;
  return `
  <div class="stats" style="grid-template-columns:repeat(4,1fr) 1.3fr">
    <div class="card stat"><span class="stat-ic slate">${icon('calendar')}</span><div><div class="stat-num">${s.total}</div><div class="stat-label">Total Tasks</div></div></div>
    <div class="card stat"><span class="stat-ic ok">${icon('check')}</span><div><div class="stat-num">${s.completed}</div><div class="stat-label">Completed</div></div></div>
    <div class="card stat"><span class="stat-ic amber">${icon('checkCircle')}</span><div><div class="stat-num">${s.inProgress}</div><div class="stat-label">In Progress</div></div></div>
    <div class="card stat"><span class="stat-ic redsoft">${icon('pendingSq')}</span><div><div class="stat-num">${s.pending}</div><div class="stat-label">Pending</div></div></div>
    <div class="card stat" style="flex-direction:column;align-items:stretch;gap:6px"><div><div class="stat-num">${s.pct}%</div><div class="stat-label">Overall Progress</div></div><div class="bar"><i style="width:${s.pct}%"></i></div></div>
  </div>
  <div class="toolbar">
    <label class="search" style="max-width:300px">${icon('search', 'sm')}<input id="taskSearch" placeholder="Search tasks..." value="${esc(state.taskQuery)}"/></label>
    <span style="flex:1"></span>
    <select class="select" data-taskfilter="taskStatus">${opt('all', 'All Tasks', state.taskStatus)}${opt('progress', 'In Progress', state.taskStatus)}${opt('pending', 'Pending', state.taskStatus)}${opt('done', 'Completed', state.taskStatus)}</select>
    <select class="select" data-taskfilter="taskAssignee">${opt('all', 'Assignee', state.taskAssignee)}${MEMBER_ROWS.map(id => opt(id, PEOPLE[id].name, state.taskAssignee)).join('')}</select>
    <select class="select" data-taskfilter="taskPriority">${opt('all', 'Priority', state.taskPriority)}${['High', 'Medium', 'Low'].map(v => opt(v, v, state.taskPriority)).join('')}</select>
    <button class="btn gold" data-action="add-task">${icon('plus', 'sm')} Add Task</button>
  </div>
  <div class="card tbl-card" style="padding-top:4px">
    <table><thead><tr><th style="width:36px"><span class="chk" data-action="check-all"></span></th><th>Task</th><th>Assignee</th><th>Priority</th><th>Due Date</th><th>Status</th><th style="width:40px"></th></tr></thead>
    <tbody>${list.length ? list.map(t => {
      const open = state.openTasks.has(p.id + t.id);
      return `<tr>
        <td><span class="chk ${t.status === 'done' ? 'on' : ''}" data-toggle-task="${t.id}">${t.status === 'done' ? icon('check') : ''}</span></td>
        <td><div class="task-title ${t.status === 'done' ? 'done' : ''}"><span>${esc(t.title)}</span><button class="exp ${open ? 'open' : ''}" data-expand="${t.id}">${icon('chevDown', 'xs')}</button></div></td>
        <td><span class="cell-user">${av(t.assignee)}${PEOPLE[t.assignee].name}</span></td>
        <td><span class="badge ${t.priority.toLowerCase()}">${t.priority}</span></td>
        <td>${fmtShort(t.due)}</td>
        <td><span class="clickable" data-cycle-task="${t.id}" title="Click to change status">${taskBadge(t.status)}</span></td>
        <td><button class="kebab" data-tmenu="${t.id}">${icon('more', 'sm')}</button></td>
      </tr>${open ? `<tr class="task-desc"><td colspan="7">${esc(t.desc || 'No description.')}</td></tr>` : ''}`;
    }).join('') : '<tr><td colspan="7" class="empty">No tasks match these filters.</td></tr>'}</tbody></table>
  </div>`;
}

function tabTeam(p) {
  const counts = MEMBER_ROWS.reduce((a, id) => { a[PEOPLE[id].availability]++; return a; }, { available: 0, meeting: 0, away: 0, dnd: 0 });
  const avg = p.avgWorkload ?? Math.round(MEMBER_ROWS.reduce((a, id) => a + (p.workload[id] || 0), 0) / MEMBER_ROWS.length);
  return `
  <div class="team-stats">
    <div class="card stat"><span class="stat-ic" style="color:var(--gold)">${icon('users', 'lg')}</span><div><div class="stat-num">${MEMBER_ROWS.length}</div><div class="stat-label">Team Members</div></div></div>
    <div class="card stat"><span class="stat-ic" style="color:var(--green)"><svg class="ic lg" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" fill="currentColor"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1z" fill="currentColor"/></svg></span><div><div class="stat-num">${counts.available}</div><div class="stat-label">Available</div></div></div>
    <div class="card stat"><span class="stat-ic" style="background:var(--gold);color:#3d2a05;border-radius:50%;width:30px;height:30px">${icon('message', 'sm')}</span><div><div class="stat-num">${counts.meeting}</div><div class="stat-label">In a Meeting</div></div></div>
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
    ? `<div class="file-grid">${list.map((f, i) => `<div class="file-tile"><span class="file-ic">${FILE_IC[f.kind]}</span><div style="font-weight:500">${esc(f.name)}</div><div class="meta">${PEOPLE[f.by].name} · ${fmtShort(f.date)} · ${f.size}</div></div>`).join('')}</div>`
    : `<table><thead><tr><th>Name</th><th>Uploaded By</th><th>Date</th><th>Size</th><th style="width:40px"></th></tr></thead><tbody>
      ${list.map(f => `<tr><td><span class="file-name"><span class="file-ic">${FILE_IC[f.kind]}</span>${esc(f.name)}</span></td><td><span class="cell-user">${av(f.by)}${PEOPLE[f.by].name}</span></td><td>${fmtShort(f.date)}</td><td>${f.size}</td><td><button class="kebab" data-fmenu="${esc(f.name)}">${icon('more', 'sm')}</button></td></tr>`).join('')}
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
  const sorted = [...workLogs].sort((a, b) => b.date.localeCompare(a.date));
  return `<section class="view" style="max-width:900px">
    <div class="page-head">
      <div><h1 class="page-title">Daily Work Log</h1><p class="page-sub">Log your daily tasks, progress and what you worked on</p></div>
      <div class="date-pill">${icon('calendar', 'sm')}<span>${DOW[d.getDay()]}, ${fmtLong(state.logDate)}</span>
        <button data-logday="-1" title="Previous day">${icon('chevLeft', 'sm')}</button><button data-logday="1" title="Next day">${icon('chevRight', 'sm')}</button></div>
    </div>
    <div class="card composer">
      <textarea id="logText" placeholder="What did you work on today?"></textarea>
      <div class="composer-bar">
        <button class="tool" data-action="log-attach" title="Attach file">${icon('clip')}</button>
        <button class="tool" data-action="log-bullet" title="Add checklist item">${icon('checkSquare')}</button>
        <input type="file" id="logFile" hidden />
        ${state.logAttach ? `<span class="attach-chip">${icon('file', 'xs')}${esc(state.logAttach)}</span>` : ''}
        <select class="select" id="logProject" title="Project">${projects.filter(p => p.status !== 'done').map(p => `<option value="${p.id}" ${p.id === state.logProject ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select>
        <select class="select" id="logHours" title="Time spent">${['1h 00m', '2h 00m', '3h 00m', '4h 00m', '4h 30m', '5h 00m', '5h 30m', '6h 00m', '7h 00m', '8h 00m'].map(h => `<option ${h === state.logHours ? 'selected' : ''}>${h}</option>`).join('')}</select>
        <span class="spacer"></span>
        <button class="btn" data-action="log-cancel">Cancel</button>
        <button class="btn gold" data-action="log-save">${icon('check', 'sm')} Save Log</button>
      </div>
    </div>
    <div class="logs-head"><span class="card-title" style="font-size:16px">My Work Logs</span></div>
    <div class="logs">${sorted.length ? sorted.map((l, i) => {
      const ld = parseISO(l.date), p = projects.find(x => x.id === l.project) || { id: l.project, name: l.project || 'General' };
      return `<div class="log ${l.date === state.logDate ? 'sel' : ''}">
        <div class="log-date"><b>${fmtShort(l.date)}</b><span>${DOW[ld.getDay()]}</span></div>
        <div class="log-rail"><i></i></div>
        <div class="card log-card">
          <span class="log-state ${l.status === 'done' ? 'done' : 'prog'}">${l.status === 'done' ? icon('check') : ''}</span>
          <div><h4 class="clickable" ${p.id ? `data-go="#/project/${p.id}/overview"` : ''}>${esc(p.name)}</h4><ul>${l.items.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
            ${l.attach ? `<div class="attach-chip" style="margin-top:6px">${icon('clip', 'xs')}${esc(l.attach)}</div>` : ''}</div>
          <div class="log-side"><span class="log-hours">${icon('clock', 'sm')}${l.hours}</span>
            <span class="clickable" data-log-status="${workLogs.indexOf(l)}" title="Click to toggle">${l.status === 'done' ? '<span class="badge done">Completed</span>' : '<span class="badge review">In Progress</span>'}</span></div>
        </div>
      </div>`;
    }).join('') : '<div class="card empty" style="padding:32px;text-align:center;color:var(--text-2)">No work logs recorded yet. Write what you worked on above to add your first log!</div>'}</div>
  </section>`;
}

/* ---------------- Messenger ---------------- */
function lastMsg(c) { return (c && c.msgs && c.msgs.length) ? c.msgs[c.msgs.length - 1] : { time: '', text: '' }; }
function renderMessenger() {
  const q = state.chatQuery.toLowerCase();
  const list = chats.filter(c => !q || c.name.toLowerCase().includes(q) || (c.msgs && c.msgs.some(m => (m.text || '').toLowerCase().includes(q))));
  const c = chats.find(x => x.id === state.chatId) || chats[0];
  if (c) c.unread = 0;
  const chatAv = ch => ch.kind === 'dm' ? av(ch.person, 's36', PEOPLE[ch.person]?.availability === 'available' ? '<i class="online"></i>' : '') : `<span class="group-av">${icon('users', 'sm')}</span>`;
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
            <div style="min-width:0"><div class="t">${esc(ch.name)}</div><div class="p">${preview(ch)}</div></div>
            <div class="right"><span>${ch.timeLabel && lastMsg(ch).time === ch.timeLabel ? ch.timeLabel : lastMsg(ch).time}</span>
              ${ch.unread ? `<span class="unread">${ch.unread}</span>` : `<button class="star ${ch.starred ? 'on' : ''}" data-star-chat="${ch.id}" title="Star">${icon('star', 'xs')}</button>`}</div>
          </div>`).join('') || '<div class="empty">No chats found.</div>'}</div>
      </div>
      ${c ? `
      <div class="chat-win">
        <div class="chat-head">
          ${c.kind === 'dm' ? av(c.person, 's36') : `<span class="group-av">${icon('users', 'sm')}</span>`}
          <div><div class="t">${esc(c.name)}</div><div class="s">${c.kind === 'dm' ? (AVAIL[PEOPLE[c.person]?.availability]?.label || 'Available') : `${(c.memberList ? c.memberList.length : c.members) || 1} Members`}</div></div>
          <div class="acts">
            ${c.kind === 'group' ? `<button class="btn flat" data-action="add-group-member" style="height:32px;padding:0 10px;font-size:12px;color:var(--gold);display:flex;align-items:center;gap:4px" title="Add Employee to this Group">${icon('userPlus', 'xs')}Add Member</button>` : ''}
            <button title="Call" data-action="call">${icon('phone', 'sm')}</button>
            <button title="Video" data-action="call">${icon('video', 'sm')}</button>
            <button title="Info" data-action="chat-info">${icon('info', 'sm')}</button>
          </div>
        </div>
        <div class="msgs" id="msgs">
          ${(c.msgs || []).map(m => m.from === ME ? `
            <div class="msg me"><div class="bubble"><div class="meta">${m.time} ${icon('checks', 'xs')}</div>${esc(m.text).replace(/\n/g, '<br>')}</div></div>` : `
            <div class="msg">${av(m.from, 's36')}<div><div class="who">${(PEOPLE[m.from]?.name) || m.from}<span>${m.time}</span></div>
              <div class="bubble">${esc(m.text).replace(/\n/g, '<br>')}
                ${m.file ? `<div class="attach"><span style="color:var(--text-2)">${icon('file')}</span><div><div class="n">${esc(m.file.name)}</div><div class="z">${m.file.size}</div></div><button data-action="download" title="Download">${icon('download', 'sm')}</button></div>` : ''}
              </div></div></div>`).join('')}
        </div>
        <form class="composer-row" id="msgForm">
          <button type="button" class="plus-btn" data-action="msg-attach" title="Attach">${icon('plus', 'sm')}</button>
          <input type="file" id="msgFile" hidden />
          <label class="msg-input"><input id="msgInput" placeholder="Type a message..." autocomplete="off"/><button type="button" data-action="emoji" title="Emoji">${icon('smile')}</button></label>
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
  const box = $('#msgs'); if (box) box.scrollTop = box.scrollHeight;
  const main = $('#main');
  main.style.overflow = 'hidden';
}
function updateMsgDot() {
  $('#msgDot').classList.toggle('hide', !chats.some(c => c.unread));
  if (!location.hash.startsWith('#/messenger')) $('#main').style.overflow = '';
}
function sendMessage(text, file) {
  const c = chats.find(x => x.id === state.chatId);
  const msgContent = text || (file ? 'Shared a file' : '');
  c.msgs.push({ from: ME, time: nowTime(), text: msgContent, file });
  rerender();
  apiSendMessage(c.id, { from_member: ME, text: msgContent, file_info: file, time_label: nowTime() });
  // Simulated reply so the conversation feels alive
  const replier = c.kind === 'dm' ? c.person : (c.id === 'hotel' ? 'divya' : c.id === 'unity' ? 'karthik' : 'arun');
  const box = $('#msgs');
  setTimeout(() => {
    if (!location.hash.startsWith('#/messenger') || state.chatId !== c.id) { c.msgs.push({ from: replier, time: nowTime(), text: 'Got it, thanks! 👍' }); c.unread++; updateMsgDot(); return; }
    box?.insertAdjacentHTML('beforeend', `<div class="typing">${PEOPLE[replier].name} is typing…</div>`); box && (box.scrollTop = box.scrollHeight);
    setTimeout(() => {
      c.msgs.push({ from: replier, time: nowTime(), text: ['Got it, thanks! 👍', 'Sounds good.', 'Sure, will check and update.', 'Noted 🙌'][Math.floor(Math.random() * 4)] });
      if (location.hash.startsWith('#/messenger') && state.chatId === c.id) rerender(); else { c.unread++; updateMsgDot(); }
    }, 1200);
  }, 700);
}

/* ---------------- Floating UI: profile card, menus, modal ---------------- */
function closeFloating() { $$('.pop, .menu').forEach(e => e.remove()); }
function place(el, anchor) {
  document.body.appendChild(el);
  const r = anchor.getBoundingClientRect(), w = el.offsetWidth, h = el.offsetHeight;
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
  const P = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Developer', availability: 'available', mode: 'office' };
  const el = document.createElement('div');
  el.className = 'pop';
  el.innerHTML = `
    <div class="pop-head">${av(id, 's64')}<div><div class="n">${P.name}</div><div class="r">${TITLES[id] || P.role || 'Member'}</div>${availBadge(id)}</div></div>
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
    ${id !== ME ? `<div class="sep"></div><button class="opt" data-dm="${id}" style="margin-top:8px">${icon('message')}Send message</button>` : ''}`;
  el.dataset.person = id;
  place(el, anchor);
}
function openMenu(anchor, items) {
  closeFloating();
  const el = document.createElement('div');
  el.className = 'menu';
  el.innerHTML = items.map((it, i) => `<button data-mi="${i}" class="${it.danger ? 'danger' : ''}">${it.icon ? icon(it.icon, 'sm') : ''}${it.label}</button>`).join('');
  el.addEventListener('click', e => { const b = e.target.closest('[data-mi]'); if (!b) return; el.remove(); items[b.dataset.mi].run(); });
  place(el, anchor);
}
function openModal(title, fields, onSubmit, submitLabel = 'Save') {
  const ov = document.createElement('div');
  ov.className = 'overlay';
  const f = fields.map(fd => {
    const input = fd.type === 'select'
      ? `<select class="select" name="${fd.name}">${fd.options.map(([v, l]) => `<option value="${v}" ${v === fd.value ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select>`
      : fd.type === 'textarea' ? `<textarea name="${fd.name}" placeholder="${fd.placeholder || ''}">${fd.value || ''}</textarea>`
      : `<input name="${fd.name}" type="${fd.type || 'text'}" value="${fd.value || ''}" placeholder="${fd.placeholder || ''}" ${fd.required ? 'required' : ''}/>`;
    return `<div class="field" ${fd.half ? 'data-half' : ''}><label>${fd.label}</label>${input}</div>`;
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
}
const currentProject = () => { const m = location.hash.match(/^#\/project\/([^/]+)/); return m && projects.find(p => p.id === m[1]); };

/* ---------------- Events ---------------- */
document.addEventListener('click', e => {
  const t = e.target;

  // Floating layers: clicks inside handle themselves
  const pop = t.closest('.pop');
  if (pop) {
    const id = pop.dataset.person, P = PEOPLE[id];
    const a = t.closest('[data-set-avail]'), m = t.closest('[data-set-mode]'), dm = t.closest('[data-dm]');
    if (a) { P.availability = a.dataset.setAvail; toast(`${P.name} is now ${AVAIL[P.availability].short || AVAIL[P.availability].label}`); apiPatchMember(id, { availability: P.availability }); }
    if (m) { P.mode = m.dataset.setMode; toast(`${P.name}: ${MODES[P.mode].long}`); apiPatchMember(id, { mode: P.mode }); }
    if (dm) { closeFloating(); state.chatId = id; go('#/messenger/' + id); return; }
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
      { label: 'Mark Completed', icon: 'check', run: () => { task.status = 'done'; rerender(); } },
      { label: 'Mark In Progress', icon: 'clock', run: () => { task.status = 'progress'; rerender(); } },
      { label: 'Mark Pending', icon: 'hourglass', run: () => { task.status = 'pending'; rerender(); } },
      { label: 'Delete task', icon: 'trash', danger: true, run: () => { p.tasks.splice(p.tasks.indexOf(task), 1); rerender(); toast('Task deleted'); } },
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

function handleAction(a, el) {
  const p = currentProject();
  switch (a) {
    case 'new-project':
      const availableLeads = Object.keys(PEOPLE).length ? Object.keys(PEOPLE) : [ME || 'admin'].filter(Boolean);
      openModal('New Project', [
        { name: 'name', label: 'Project name', required: true, placeholder: 'e.g. Restaurant POS' },
        { name: 'type', label: 'Type', type: 'select', half: true, value: 'Web', options: [['Web', 'Web'], ['SaaS', 'SaaS'], ['Mobile', 'Mobile'], ['Game', 'Game']] },
        { name: 'lead', label: 'Lead', type: 'select', half: true, value: availableLeads[0] || (ME || 'admin'), options: availableLeads.map(id => [id, (PEOPLE[id]?.name) || id]) },
        { name: 'start', label: 'Start date', type: 'date', half: true, value: isoDate(new Date()) },
        { name: 'end', label: 'End date', type: 'date', half: true, value: isoDate(new Date(Date.now() + 90 * 864e5)) },
      ], async d => {
        const id = d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString(36);
        const thumb = { Web: 'portfolio', SaaS: 'crm', Mobile: 'cafe', Game: 'game' }[d.type] || 'portfolio';
        const lead = d.lead || ME || 'admin';
        const np = { id, name: d.name, type: d.type, thumb, status: 'progress', start: d.start, end: d.end, team: [lead], extra: 0,
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
      }, 'Create Project');
      break;
    case 'open-project-chat': {
      const pid = el?.dataset?.id || p?.id;
      const c = chats.find(x => x.project === pid || x.id === 'proj-grp-' + pid);
      if (c) {
        state.chatId = c.id;
        go('#/messenger/' + c.id);
      } else {
        toast('No chat found for this project');
      }
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
    case 'add-task':
      openModal('Add Task', [
        { name: 'title', label: 'Task', required: true, placeholder: 'What needs to be done?' },
        { name: 'assignee', label: 'Assignee', type: 'select', half: true, value: 'karthik', options: MEMBER_ROWS.map(id => [id, PEOPLE[id].name]) },
        { name: 'priority', label: 'Priority', type: 'select', half: true, value: 'Medium', options: [['High', 'High'], ['Medium', 'Medium'], ['Low', 'Low']] },
        { name: 'due', label: 'Due date', type: 'date', half: true, value: '2026-11-30' },
        { name: 'status', label: 'Status', type: 'select', half: true, value: 'pending', options: [['pending', 'Pending'], ['progress', 'In Progress'], ['done', 'Completed']] },
        { name: 'desc', label: 'Description', type: 'textarea' },
      ], d => { p.tasks.push({ id: Date.now(), ...d }); rerender(); toast('Task added'); }, 'Add Task');
      break;
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
    case 'log-cancel': $('#logText').value = ''; state.logAttach = null; rerender(); break;
    case 'log-save': {
      const items = $('#logText').value.split('\n').map(s => s.replace(/^[•\-*]\s*/, '').trim()).filter(Boolean);
      if (!items.length) { $('#logText').focus(); toast('Write what you worked on first'); return; }
      state.logProject = $('#logProject').value; state.logHours = $('#logHours').value;
      const existing = workLogs.find(l => l.date === state.logDate && l.project === state.logProject);
      if (existing) { existing.items.push(...items); if (state.logAttach) existing.attach = state.logAttach; }
      else workLogs.push({ date: state.logDate, project: state.logProject, items, hours: state.logHours, status: 'progress', attach: state.logAttach });
      apiCreateWorkLog({ date: state.logDate, project: state.logProject, items, hours: state.logHours, status: 'progress', member: ME });
      state.logAttach = null;
      rerender(); toast('Work log saved');
      break;
    }
    case 'msg-attach': $('#msgFile').click(); break;
    case 'emoji': { const i = $('#msgInput'); i.value += '🙂'; i.focus(); break; }
    case 'download': toast('Downloading pricing-module-v2.zip'); break;
    case 'call': toast('Starting call…'); break;
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
    case 'new-chat':
      openModal('New Message', [
        { name: 'to', label: 'To', type: 'select', value: 'karthik', options: MEMBER_ROWS.map(id => [id, PEOPLE[id].name]) },
        { name: 'text', label: 'Message', required: true },
      ], d => {
        let c = chats.find(x => x.id === d.to);
        if (!c) { c = { id: d.to, kind: 'dm', person: d.to, name: PEOPLE[d.to].name, unread: 0, msgs: [] }; chats.push(c); }
        state.chatId = c.id; go('#/messenger/' + c.id);
        setTimeout(() => sendMessage(d.text), 0);
      }, 'Send');
      break;
  }
}

function reopenProfileAt(id, rect) {
  const fake = { getBoundingClientRect: () => ({ left: rect.left, right: rect.right, top: rect.top - 6, bottom: rect.top - 6 }) };
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
  if (e.key === 'Escape') { closeFloating(); $('.overlay')?.remove(); }
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
    const isMe = id === ME;
    return `
      <label class="emp-check-item" style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;background:var(--panel-2);border:1px solid var(--line-2);margin-bottom:6px">
        <input type="checkbox" name="groupMembers" value="${id}" ${isMe ? 'checked disabled' : ''} style="width:16px;height:16px;accent-color:var(--gold)">
        ${av(id, 's26')}
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:13px">${esc(p.name)} ${isMe ? '<span style="color:var(--text-3);font-size:11px">(You)</span>' : ''}</div>
          <div style="font-size:11px;color:var(--text-2)">${esc(p.role || TITLES[id] || 'Team Member')}</div>
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
            <div style="max-height:190px;overflow-y:auto;padding-right:4px">
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
        body: JSON.stringify({ name, members: checked, initial_message, created_by: ME })
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

function openLoginModal() {
  closeFloating();
  $('#authModal')?.remove();
  const modalHtml = `
    <div class="overlay" id="authModal">
      <div class="modal">
        <h3>Sign In to Kathir Studios</h3>
        <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">Login to sync your daily work log and chat.</p>
        <div id="authErr" style="color:#f06464;font-size:12px;margin-bottom:10px;display:none"></div>
        <form id="loginForm">
          <div class="field">
            <label>Username or Email</label>
            <input type="text" id="authUsername" required placeholder="e.g. kathir" autofocus />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" id="authPassword" required placeholder="••••••••" />
          </div>
          <div class="modal-actions" style="margin-top:16px">
            <button type="button" class="btn flat" onclick="document.getElementById('authModal').remove()">Cancel</button>
            <button type="button" class="btn flat" onclick="openRegisterModal()" style="color:var(--gold)">Register</button>
            <button type="submit" class="btn primary">Sign In</button>
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
    errBox.style.display = 'none';
    const res = await fetch(`${API_BASE}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!res.ok) {
      errBox.textContent = data.error || 'Login failed. Please check your credentials.';
      errBox.style.display = 'block';
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
    $('#authModal').remove();
    toast(`Welcome, ${data.user.name}!`);
    refreshSide();
    rerender();
  };
}

function openRegisterModal() {
  closeFloating();
  $('#authModal')?.remove();
  const modalHtml = `
    <div class="overlay" id="authModal">
      <div class="modal">
        <h3>Create New Account</h3>
        <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">Register a new studio member profile.</p>
        <div id="authErr" style="color:#f06464;font-size:12px;margin-bottom:10px;display:none"></div>
        <form id="regForm">
          <div class="field">
            <label>Full Name</label>
            <input type="text" id="regName" required placeholder="e.g. Karthik Raja" />
          </div>
          <div class="field">
            <label>Username</label>
            <input type="text" id="regUsername" required placeholder="e.g. karthik" />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" id="regEmail" placeholder="name@company.com" />
          </div>
          <div class="field">
            <label>Role / Title</label>
            <input type="text" id="regRole" placeholder="e.g. Full Stack Developer" value="Developer" />
          </div>
          <div class="field">
            <label>Password (min 6 chars)</label>
            <input type="password" id="regPassword" required minlength="6" placeholder="••••••••" />
          </div>
          <div class="modal-actions" style="margin-top:16px">
            <button type="button" class="btn flat" onclick="document.getElementById('authModal').remove()">Cancel</button>
            <button type="button" class="btn flat" onclick="openLoginModal()" style="color:var(--gold)">Sign In</button>
            <button type="submit" class="btn primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  $('#regForm').onsubmit = async (e) => {
    e.preventDefault();
    const name = $('#regName').value.trim();
    const username = $('#regUsername').value.trim().toLowerCase();
    const email = $('#regEmail').value.trim();
    const role = $('#regRole').value.trim();
    const password = $('#regPassword').value;
    const errBox = $('#authErr');
    errBox.style.display = 'none';
    const res = await fetch(`${API_BASE}/auth/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, email, role, password })
    });
    const data = await res.json();
    if (!res.ok) {
      errBox.textContent = data.error || 'Registration failed.';
      errBox.style.display = 'block';
      return;
    }
    AUTH_TOKEN = data.token;
    localStorage.setItem('kathir_auth_token', AUTH_TOKEN);
    ME = data.user.username.toLowerCase();
    localStorage.setItem('kathir_auth_user', ME);
    PEOPLE[ME] = { name: data.user.name, role: data.user.role, availability: 'available', mode: 'office' };
    TITLES[ME] = data.user.role;
    $('#authModal').remove();
    toast(`Account created! Welcome, ${data.user.name}!`);
    refreshSide();
    rerender();
  };
}

function handleLogout() {
  closeFloating();
  fetch(`${API_BASE}/auth/logout/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(AUTH_TOKEN ? { 'Authorization': `Token ${AUTH_TOKEN}` } : {}) }
  }).catch(() => {});
  AUTH_TOKEN = null;
  localStorage.removeItem('kathir_auth_token');
  localStorage.removeItem('kathir_auth_user');
  ME = 'kathir';
  toast('Signed out successfully');
  refreshSide();
  rerender();
}

async function apiPatchMember(id, patchData) {
  return await fetchFromAPI(`/members/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify(patchData)
  });
}

async function apiPatchTask(taskId, patchData) {
  if (!taskId || isNaN(taskId)) return null;
  return await fetchFromAPI(`/tasks/${taskId}/`, {
    method: 'PATCH',
    body: JSON.stringify(patchData)
  });
}

async function apiCreateWorkLog(logData) {
  return await fetchFromAPI(`/worklogs/`, {
    method: 'POST',
    body: JSON.stringify(logData)
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
    } else if (meRes && !meRes.authenticated) {
      AUTH_TOKEN = null;
      localStorage.removeItem('kathir_auth_token');
    }
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
        end: ap.end || isoDate(new Date()),
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
  $('#sideAvatar').innerHTML = avatarSVG(ME);
  const info = $('#sideUser > div');
  if (info) {
    info.innerHTML = `<div class="name">${esc(currentPerson.name)}</div><div class="role">${esc(currentPerson.role || TITLES[ME] || 'Team Member')}</div>`;
  }
}
hydrateIcons();
refreshSide();
window.addEventListener('hashchange', route);
route();
loadInitialData();
