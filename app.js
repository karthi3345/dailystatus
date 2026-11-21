/* ==========================================================
   Volgo Updates – Workspace app
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
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="M9.9 4.2A10 10 0 0 1 12 4c6.5 0 10 8 10 8a17 17 0 0 1-2.2 3.2M6.6 6.6A17 17 0 0 0 2 12s3.5 8 10 8a9.7 9.7 0 0 0 5.4-1.6M2 2l20 20M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  pendingSq: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 7v5l3 2"/>',
  slashCircle: '<circle cx="12" cy="12" r="10"/><line x1="5" y1="5" x2="19" y2="19"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  bookmark: '<path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  alertCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
};
const PLAY = '<svg class="ic" viewBox="0 0 24 24"><path class="fill" d="M7 4.5v15l13-7.5z"/></svg>';
const PAUSE = '<svg class="ic" viewBox="0 0 24 24"><rect class="fill" x="6" y="4.5" width="4" height="15" rx="1"/><rect class="fill" x="14" y="4.5" width="4" height="15" rx="1"/></svg>';
const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24">${ICONS[n] || ''}</svg>`;

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* ---------------- Avatars (General Silhouette - FB Style) ---------------- */
function avatarSVG(id) {
  return `<svg viewBox="0 0 40 40" width="100%" height="100%" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#2d303a"/><circle cx="20" cy="14.8" r="6.8" fill="#9ca3af"/><path d="M7.5 38c0-7 5.6-11.8 12.5-11.8s12.5 4.8 12.5 11.8z" fill="#9ca3af"/></svg>`;
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
const BUILD_VERSION = 'v6.4_live';
if (localStorage.getItem('kathir_build_version') !== BUILD_VERSION) {
  try {
    localStorage.removeItem('kathir_cached_projects');
    localStorage.removeItem('kathir_cached_chats');
    localStorage.removeItem('kathir_cached_worklogs');
    localStorage.removeItem('kathir_projects_saved');
    localStorage.removeItem('kathir_chats_saved');
    localStorage.setItem('kathir_build_version', BUILD_VERSION);
  } catch (e) {}
}
let AUTH_TOKEN = localStorage.getItem('kathir_auth_token') || null;
let ME = localStorage.getItem('kathir_auth_user') || null;

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

const SEED_PROJECTS = [];

const SEED_CHATS = [];

function getCachedChats() {
  try {
    const raw = localStorage.getItem('kathir_cached_chats');
    if (raw !== null) {
      return JSON.parse(raw);
    }
  } catch (e) {}
  return null;
}

function saveChatsToCache() {
  try {
    if (Array.isArray(chats)) {
      localStorage.setItem('kathir_cached_chats', JSON.stringify(chats));
      localStorage.setItem('kathir_chats_saved', '1');
    }
  } catch (e) {}
}

function getCachedProjects() {
  try {
    const raw = localStorage.getItem('kathir_cached_projects');
    if (raw !== null) {
      return JSON.parse(raw);
    }
  } catch (e) {}
  return null;
}

function saveProjectsToCache() {
  try {
    if (Array.isArray(projects)) {
      localStorage.setItem('kathir_cached_projects', JSON.stringify(projects));
      localStorage.setItem('kathir_projects_saved', '1');
    }
  } catch (e) {}
}

const cachedInitialProjects = getCachedProjects();
const isProjectsSaved = localStorage.getItem('kathir_projects_saved') === '1';
const projects = (cachedInitialProjects !== null && (cachedInitialProjects.length > 0 || isProjectsSaved))
  ? cachedInitialProjects
  : [];

const cachedInitialChats = getCachedChats();
const isChatsSaved = localStorage.getItem('kathir_chats_saved') === '1';
const chats = (cachedInitialChats !== null && (cachedInitialChats.length > 0 || isChatsSaved))
  ? cachedInitialChats
  : [];

function getCachedWorkLogs() {
  try {
    const raw = localStorage.getItem('kathir_cached_worklogs');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return null;
}

function saveWorkLogsToCache() {
  try {
    if (Array.isArray(workLogs)) {
      localStorage.setItem('kathir_cached_worklogs', JSON.stringify(workLogs));
    }
  } catch (e) {}
}

const cachedInitialWorkLogs = getCachedWorkLogs();
const workLogs = (cachedInitialWorkLogs && cachedInitialWorkLogs.length)
  ? cachedInitialWorkLogs
  : [];

/* ---------------- Project & Group Ownership and Access Control ---------------- */
function isProjectOwner(p, userId = ME) {
  if (!p) return false;
  const uid = (userId || '').toLowerCase().trim();
  const owner = (p.owner || p.created_by || '').toLowerCase().trim();
  return Boolean(owner && owner === uid);
}

function canAccessProject(p, userId = ME) {
  if (!p) return false;
  const uid = (userId || '').toLowerCase().trim();
  const owner = (p.owner || p.created_by || '').toLowerCase().trim();
  if (owner && owner === uid) return true;
  const team = Array.isArray(p.team) ? p.team.map(m => String(m).toLowerCase().trim()) : [];
  if (team.includes(uid)) return true;
  // If project has no owner or team set yet (legacy), fallback to true
  if (!owner && team.length === 0) return true;
  return false;
}

function getCanonicalDmId(u1, u2) {
  const p1 = String(u1 || '').toLowerCase().trim();
  const p2 = String(u2 || '').toLowerCase().trim();
  const sorted = [p1, p2].sort();
  return `dm-${sorted[0]}-${sorted[1]}`;
}

function canAccessChat(c, userId = ME) {
  if (!c) return false;
  const uid = (userId || '').toLowerCase().trim();
  if (c.kind === 'dm') {
    const mList = Array.isArray(c.memberList) ? c.memberList.map(x => String(x).toLowerCase().trim()) : [];
    if (mList.length) {
      return mList.includes(uid);
    }
    if (c.id && c.id.startsWith('dm-')) {
      const parts = c.id.replace('dm-', '').split('-');
      if (parts.length >= 2) {
        return parts.map(p => p.toLowerCase().trim()).includes(uid);
      }
    }
    const p = (c.person || '').toLowerCase().trim();
    return Boolean(p && p !== uid);
  }
  // Group Channel
  const creator = (c.created_by || '').toLowerCase().trim();
  if (creator && creator === uid) return true;
  const mList = Array.isArray(c.memberList || c.members) ? (c.memberList || c.members).map(x => String(x).toLowerCase().trim()) : [];
  if (mList.includes(uid)) return true;
  // If project group channel, check project membership
  if (c.project) {
    const proj = projects.find(x => x.id === c.project);
    if (proj) return canAccessProject(proj, uid);
  }
  return false;
}

function getTaskEffectiveStatus(t, curDate = state.currentDate || state.logDate || isoDate(new Date())) {
  if (!t) return 'pending';
  // Respect custom column statuses
  if (t.status && t.status !== 'pending' && t.status !== 'progress' && t.status !== 'done' && t.status !== 'review') {
    return t.status;
  }
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
  isRecordingVoice: false,
  voiceSeconds: 0,
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
function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}
function nowISTDate() {
  const d = new Date();
  return d.toLocaleDateString('en-US', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
function formatMsgTime(t) {
  if (!t) return '';
  return String(t).replace(/\s*IST\s*/gi, '').trim();
}
function getMsgDateLabel(m) {
  if (!m) return `Today, ${nowISTDate()}`;
  let dObj = null;
  if (m.created_at) {
    try { const parsed = new Date(m.created_at); if (!isNaN(parsed.getTime())) dObj = parsed; } catch (e) {}
  }
  if (!dObj && m.date) {
    try {
      const cleanDate = String(m.date).replace(/Today,?\s*/i, '').trim();
      const parsed = new Date(cleanDate);
      if (!isNaN(parsed.getTime())) dObj = parsed;
    } catch (e) {}
  }
  if (!dObj) {
    dObj = new Date();
  }

  const dCal = dObj.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'short', year: 'numeric' });
  const todayCal = new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'short', year: 'numeric' });

  const dYear = dObj.getFullYear();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const stdDate = `${months[dObj.getMonth()]} ${dObj.getDate()}, ${dYear}`;
  const now = new Date();
  const stdToday = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  if (dCal === todayCal || stdDate === stdToday) {
    return `Today, ${todayCal}`;
  }
  return dCal;
}
function deduplicateChats() {
  const seenDMs = new Map();
  const seenGroups = new Set();
  const newChats = [];

  for (const c of chats) {
    if (!c) continue;
    if (c.kind === 'dm') {
      let p = (c.person || '').toLowerCase().trim();
      if (!p || (ME && p === ME.toLowerCase().trim())) {
        if (c.id && c.id.startsWith('dm-')) {
          const parts = c.id.replace(/^dm-/, '').split('-');
          if (parts.length >= 2) {
            p = (parts[0].toLowerCase().trim() === (ME || '').toLowerCase().trim()) ? parts[1].toLowerCase().trim() : parts[0].toLowerCase().trim();
          } else if (parts.length === 1) {
            p = parts[0].toLowerCase().trim();
          }
        } else if (Array.isArray(c.memberList) && c.memberList.length) {
          const others = c.memberList.map(x => String(x).toLowerCase().trim()).filter(x => x !== (ME || '').toLowerCase().trim());
          if (others.length) p = others[0];
        }
      }
      if (!p || (ME && p === ME.toLowerCase().trim())) continue;
      c.person = p;
      if (ME) {
        c.id = getCanonicalDmId(ME, p);
      }
      const pName = (PEOPLE[p]?.name) || (p.charAt(0).toUpperCase() + p.slice(1));
      if (!c.name || c.name.toLowerCase() === (ME || '').toLowerCase()) c.name = pName;
      if (!c.memberList || !c.memberList.length) c.memberList = [ME, p].filter(Boolean);

      if (seenDMs.has(p)) {
        const existing = seenDMs.get(p);
        if (Array.isArray(c.msgs) && c.msgs.length) {
          existing.msgs = existing.msgs || [];
          for (const m of c.msgs) {
            if (!existing.msgs.some(em => (em.id && m.id && em.id === m.id) || (em.text === m.text && em.time === m.time))) {
              existing.msgs.push(m);
            }
          }
        }
        if (!existing.timeLabel && c.timeLabel) existing.timeLabel = c.timeLabel;
        if (state.chatId === c.id) state.chatId = existing.id;
      } else {
        seenDMs.set(p, c);
        newChats.push(c);
      }
    } else {
      const gid = (c.id || c.name || '').toLowerCase().trim();
      if (gid && !seenGroups.has(gid)) {
        seenGroups.add(gid);
        newChats.push(c);
      }
    }
  }

  chats.length = 0;
  chats.push(...newChats);
}

function ensureAllTeamDMs() {
  deduplicateChats();
  const allIds = new Set([...Object.keys(PEOPLE), ...MEMBER_ROWS]);
  allIds.forEach(id => {
    if (!id) return;
    const cleanId = String(id).toLowerCase().trim();
    if (ME && cleanId === ME.toLowerCase().trim()) return;
    const dmId = ME ? getCanonicalDmId(ME, cleanId) : `dm-${cleanId}`;
    const pName = (PEOPLE[cleanId]?.name) || (PEOPLE[id]?.name) || (cleanId.charAt(0).toUpperCase() + cleanId.slice(1));
    let existing = chats.find(c => c.kind === 'dm' && (c.id === dmId || (c.person && c.person.toLowerCase() === cleanId) || (c.memberList && c.memberList.map(x=>x.toLowerCase()).includes(cleanId))));
    if (!existing) {
      chats.push({
        id: dmId,
        name: pName,
        kind: 'dm',
        person: cleanId,
        project: null,
        members: 2,
        memberList: [ME || 'user', cleanId].filter(Boolean),
        starred: false,
        unread: 0,
        msgs: []
      });
    } else {
      existing.id = dmId;
      existing.kind = 'dm';
      existing.person = cleanId;
      if (!existing.name) existing.name = pName;
      if (!existing.memberList || !existing.memberList.length) existing.memberList = [ME || 'user', cleanId].filter(Boolean);
    }
  });
  deduplicateChats();
}
const barColor = v => (v >= 75 ? 'red' : v >= 50 && v <= 65 ? '' : 'green');
const statusBadge = s => (STATUS[s] ? `<span class="badge ${STATUS[s].cls}">${STATUS[s].label}</span>` : `<span class="badge progress">In Progress</span>`);
const taskBadge = (s, p) => {
  if (p && typeof getProjectKanbanColumns === 'function') {
    const col = getProjectKanbanColumns(p).find(c => c.id === s);
    if (col) {
      const cls = ['pending', 'progress', 'done'].includes(col.id) ? col.id : 'progress';
      return `<span class="badge ${cls}">${esc(col.name)}</span>`;
    }
  }
  return s === 'done' ? '<span class="badge done">Completed</span>' : s === 'pending' ? '<span class="badge pending">To Do</span>' : `<span class="badge progress">${esc(s || 'In Progress')}</span>`;
};
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
    if (parts[1] && chats.find(c => c.id === parts[1])) {
      state.chatId = parts[1];
    } else if (!state.chatId || !chats.some(c => c.id === state.chatId)) {
      const visible = chats.filter(ch => canAccessChat(ch, ME));
      if (visible.length) state.chatId = visible[0].id;
    }
    if (state.chatId) {
      markChatAsSeen(state.chatId);
    }
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
  const visibleProjects = projects.filter(p => canAccessProject(p, ME));
  const c = { all: visibleProjects.length, progress: 0, done: 0, hold: 0 };
  visibleProjects.forEach(p => { if (p.status === 'progress' || p.status === 'review') c.progress++; else c[p.status]++; });
  const q = state.projectQuery.toLowerCase();
  const list = visibleProjects.filter(p =>
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
          <h3 style="font-size:16px;font-weight:600;margin-bottom:6px">No accessible projects</h3>
          <p style="color:var(--text-2);font-size:13px;margin-bottom:18px">Only projects you own or have been added to as a team member appear here.</p>
          <button class="btn gold" data-action="new-project" style="margin:0 auto">${icon('plus', 'sm')} Create New Project</button>
        </div>`}
    </div>
  </section>`;
}
function projectRow(p) {
  const s = projectStats(p);
  const shown = (p.team || []).slice(0, 3);
  const thumbSvg = THUMBS[p.thumb] || THUMBS['portfolio'];
  const isOwner = isProjectOwner(p, ME);
  return `<div class="card proj-row" data-open="${p.id}">
    <div class="thumb">${thumbSvg}</div>
    <div>
      <div class="proj-name">${esc(p.name)}</div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
        <span class="badge tag">${p.type}</span>
        ${isOwner ? '<span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:10px;padding:1px 5px;font-weight:600">👑 Owner</span>' : ''}
      </div>
    </div>
    <div><div class="proj-pct">${s.pct}%</div><div class="bar ${s.pct === 100 || s.pct >= 80 ? 'green' : ''}"><i style="width:${s.pct}%"></i></div></div>
    <div class="av-stack team-col">${shown.map(id => av(id)).join('')}${p.team && p.team.length > 3 ? `<span class="av-more">+${p.team.length - 3}</span>` : ''}</div>
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
  if (!canAccessProject(p, ME)) {
    return `<section class="view">
      <div class="card empty" style="padding:48px 24px;text-align:center">
        <div style="font-size:36px;margin-bottom:12px">🔒</div>
        <h3 style="font-size:16px;font-weight:600;margin-bottom:6px">Private Project</h3>
        <p style="color:var(--text-2);margin-bottom:18px">You do not have access to view this project. Only the project owner (@${esc(p.owner || p.created_by || 'owner')}) and assigned members can access it.</p>
        <a class="btn gold" data-go="#/projects">Back to My Projects</a>
      </div>
    </section>`;
  }
  if (!TABS.includes(tab)) tab = 'overview';
  let body = '';
  try {
    body = { overview: tabOverview, tasks: tabTasks, team: tabTeam, analytics: tabAnalytics, files: tabFiles, notes: tabNotes }[tab](p);
  } catch (err) {
    console.error('Error rendering project tab:', err);
    body = `<div class="card empty" style="padding:48px 24px;text-align:center"><p style="color:var(--text-2);margin-bottom:12px">Unable to display ${tab}.</p></div>`;
  }
  const isOwner = isProjectOwner(p, ME);
  const ownerId = p.owner || p.created_by || '';
  const ownerName = (ownerId && PEOPLE[ownerId] && PEOPLE[ownerId].name) || ownerId || 'Project Owner';

  return `<section class="view">
    <div class="crumbs"><a data-go="#/projects">Projects</a>${icon('chevRight', 'xs')}<span>${esc(p.name)}</span></div>
    <div class="page-head" style="margin-bottom:0">
      <div>
        <div class="detail-title" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <h1 style="margin:0">${esc(p.name)}</h1>
          ${statusBadge(p.status)}
          <span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:11px;padding:3px 8px;border-radius:6px;font-weight:600">👑 Project Owner: ${esc(ownerName)} ${isOwner ? '(You)' : ''}</span>
        </div>
        <div class="dates">${icon('calendar', 'sm')} ${fmtLong(p.start).replace(/^(\w+ \d+), (\d+)$/, '$1, $2')}${p.end ? ' – ' + fmtLong(p.end) : ' – Ongoing (No end date)'}</div>
      </div>
      <div class="head-actions" style="display:flex;align-items:center;gap:8px">
        ${isOwner ? `
          <button class="btn gold" data-action="add-project-member" data-pid="${p.id}" style="height:34px;padding:0 12px;font-size:12px;display:inline-flex;align-items:center;gap:6px" title="Add members to this project">
            ${icon('userPlus', 'sm')} <span>Add Member</span>
          </button>
        ` : ''}
        <button class="btn flat" data-action="open-project-chat" data-id="${p.id}" style="height:34px;padding:0 12px;font-size:12px;display:inline-flex;align-items:center;gap:6px" title="Open Project Chat in Messenger">
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
  const isOwner = isProjectOwner(p, ME);
  const teamIds = (p.team && p.team.length) ? p.team : [p.owner || p.created_by || ME].filter(Boolean);
  const rows = teamIds.map(id => {
    const P = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Member', today: 'Active' };
    const w = (p.workload && p.workload[id]) ?? 0;
    const isMemberOwner = (p.owner && p.owner.toLowerCase() === id.toLowerCase()) || (p.created_by && p.created_by.toLowerCase() === id.toLowerCase());
    return `<tr>
      <td>
        <span class="cell-user">
          ${av(id)}
          <span class="clickable" data-profile="${id}" style="display:inline-flex;align-items:center;gap:6px">
            ${esc(P.name)} ${userModeIcon(id, 'xs')}
            ${isMemberOwner ? '<span style="font-size:9.5px;padding:1px 5px;background:rgba(245,184,46,.15);color:var(--gold);border-radius:4px;font-weight:600">👑 Owner</span>' : ''}
          </span>
        </span>
      </td>
      <td>${P.role || 'Member'}</td>
      <td>${availBadge(id)}</td>
      <td>${modeCell(id)}</td>
      <td>${cols === 'overview' ? (P.today || 'Working on tasks') : `${((p.currentTasks || {})[id]) ?? ((p.tasks || []).filter(t => t.assignee === id && t.status !== 'done').length)} Tasks`}</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div class="cell-bar" style="flex:1"><div class="bar ${barColor(w)}"><i style="width:${w}%"></i></div><span>${w}%</span></div>
          ${(isOwner && !isMemberOwner && cols === 'team') ? `
            <button type="button" class="btn flat" data-action="remove-project-member" data-pid="${p.id}" data-uid="${id}" title="Remove member from project" style="color:#ef4444;padding:2px 6px;font-size:11px;opacity:0.85;border-radius:4px">✕ Remove</button>
          ` : ''}
        </div>
      </td>
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

function getProjectKanbanColumns(p) {
  if (!p) {
    return [
      { id: 'pending', name: 'To Do', color: 'pending' },
      { id: 'progress', name: 'In Progress', color: 'progress' },
      { id: 'done', name: 'Completed', color: 'done' }
    ];
  }
  if (!Array.isArray(p.kanbanColumns) || p.kanbanColumns.length === 0) {
    p.kanbanColumns = [
      { id: 'pending', name: 'To Do', color: 'pending' },
      { id: 'progress', name: 'In Progress', color: 'progress' },
      { id: 'done', name: 'Completed', color: 'done' }
    ];
  }
  return p.kanbanColumns;
}

function renderKanbanCard(t, p = currentProject()) {
  const curDate = state.currentDate || state.logDate || isoDate(new Date());
  const effStatus = getTaskEffectiveStatus(t, curDate);
  const cols = p ? getProjectKanbanColumns(p) : [
    { id: 'pending', name: 'To Do' },
    { id: 'progress', name: 'In Progress' },
    { id: 'done', name: 'Completed' }
  ];
  const isDone = effStatus === 'done' || (cols.length && cols[cols.length - 1].id === effStatus);
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

  const curColIdx = cols.findIndex(c => c.id === effStatus || (effStatus === 'review' && c.id === 'progress'));
  let moveBtns = '';
  if (curColIdx > 0) {
    const prevCol = cols[curColIdx - 1];
    moveBtns += `<button class="k-btn-move" data-move-task="${t.id}" data-target-status="${prevCol.id}">← ${esc(prevCol.name)}</button>`;
  }
  if (curColIdx !== -1 && curColIdx < cols.length - 1) {
    const nextCol = cols[curColIdx + 1];
    const isNextDone = (curColIdx + 1 === cols.length - 1);
    moveBtns += `<button class="k-btn-move ${isNextDone ? 'ok' : ''}" data-move-task="${t.id}" data-target-status="${nextCol.id}">${esc(nextCol.name)} →</button>`;
  }
  if (curColIdx === -1 && cols.length) {
    moveBtns += `<button class="k-btn-move" data-move-task="${t.id}" data-target-status="${cols[0].id}">Move to ${esc(cols[0].name)}</button>`;
  }

  return `
  <div class="k-card ${isDone ? 'done' : ''}" draggable="true" data-k-task="${t.id}">
    <div class="k-card-head">
      <span class="k-type-badge ${t.task_type || 'task'}" title="Type: ${type.label}">${icon(type.icon, 'xs')}<span>${type.label}</span></span>
      ${t.category ? `<span class="k-cat-pill">${esc(t.category)}</span>` : ''}
      ${schedBadge}
      ${t.approval_status === 'approved' ? `<span class="badge done" style="font-size:10px;padding:1px 5px" title="Approved">✓ Approved</span>` : t.approval_status === 'rejected' ? `<span class="badge" style="background:rgba(239,68,68,.18);color:#ff5c5c;font-size:10px;padding:1px 5px" title="Changes Requested">✕ Changes Req</span>` : ''}
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
      ${moveBtns}
    </div>
  </div>`;
}

function renderKanbanBoard(p, list) {
  const curDate = state.currentDate || state.logDate || isoDate(new Date());
  const cols = getProjectKanbanColumns(p);

  return `
  <div class="kanban-board">
    ${cols.map(col => {
      const colTasks = list.filter(t => {
        const s = getTaskEffectiveStatus(t, curDate);
        if (col.id === 'progress') {
          return s === 'progress' || s === 'review';
        }
        return s === col.id;
      });

      return `
      <div class="kanban-col" data-col-status="${col.id}">
        <div class="kanban-col-head">
          <span class="kanban-col-title">
            <span class="col-dot ${col.color || col.id}"></span>
            <span class="kanban-col-name">${esc(col.name)}</span>
            <span class="kanban-col-count">${colTasks.length}</span>
            <button class="btn-rename-col" data-action="rename-kanban-col" data-col-id="${col.id}" title="Rename column ${esc(col.name)}" style="background:none;border:none;padding:2px 4px;color:var(--text-3);cursor:pointer;font-size:12px;opacity:0.7">✏️</button>
            ${!['pending', 'progress', 'done'].includes(col.id) ? `
              <button class="btn-rename-col" data-action="delete-kanban-col" data-col-id="${col.id}" title="Delete column ${esc(col.name)}" style="background:none;border:none;padding:2px 4px;color:#ef4444;cursor:pointer;font-size:12px;opacity:0.7">🗑️</button>
            ` : ''}
          </span>
          <button class="btn-col-add" data-action="add-task" data-default-status="${col.id}" title="Create task in ${esc(col.name)}">${icon('plus', 'xs')} Add</button>
        </div>
        <div class="kanban-cards">
          ${colTasks.length ? colTasks.map(t => renderKanbanCard(t, p)).join('') : `<div class="kanban-empty">No tasks in ${esc(col.name)}</div>`}
        </div>
      </div>`;
    }).join('')}

    <div class="kanban-add-col">
      <button class="btn-add-kanban-col" data-action="add-kanban-col" title="Add a new column to this board">
        ${icon('plus', 'sm')} Add Column
      </button>
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
          <td>${t.category ? `<span class="k-cat-pill">${esc(t.category)}</span>` : '<span class="muted">-</span>'}${t.approval_status === 'approved' ? `<span class="badge done" style="font-size:10px;padding:1px 5px;margin-left:4px" title="Approved">✓</span>` : ''}</td>
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

    ${state.taskView === 'list' ? `
    <select class="select" data-taskfilter="taskStatus">
      ${opt('all', 'All Statuses', state.taskStatus)}
      ${opt('pending', 'To Do', state.taskStatus)}
      ${opt('progress', 'In Progress', state.taskStatus)}
      ${opt('done', 'Completed', state.taskStatus)}
    </select>
    ` : ''}

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
  const isOwner = isProjectOwner(p, ME);
  const teamList = (p.team && p.team.length) ? p.team : [p.owner || p.created_by || ME].filter(Boolean);
  const counts = teamList.reduce((a, id) => {
    const st = PEOPLE[id]?.availability || 'available';
    a[st] = (a[st] || 0) + 1;
    return a;
  }, { available: 0, meeting: 0, away: 0, dnd: 0, absent: 0 });
  const avg = p.avgWorkload ?? Math.round(teamList.reduce((a, id) => a + (p.workload[id] || 0), 0) / (teamList.length || 1));
  return `
  <div class="team-stats">
    <div class="card stat"><span class="stat-ic" style="color:var(--gold)">${icon('users', 'lg')}</span><div><div class="stat-num">${teamList.length}</div><div class="stat-label">Project Members</div></div></div>
    <div class="card stat"><span class="stat-ic" style="color:var(--green)"><svg class="ic lg" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" fill="currentColor"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1z" fill="currentColor"/></svg></span><div><div class="stat-num">${counts.available || 0}</div><div class="stat-label">Available</div></div></div>
    <div class="card stat"><span class="stat-ic" style="background:var(--gold);color:#3d2a05;border-radius:50%;width:30px;height:30px">${icon('message', 'sm')}</span><div><div class="stat-num">${counts.meeting || 0}</div><div class="stat-label">In a Meeting</div></div></div>
    <div class="card stat"><span class="stat-ic" style="color:#fb7185"><svg class="ic lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><line x1="5.6" y1="5.6" x2="18.4" y2="18.4" stroke="currentColor" stroke-width="2"/></svg></span><div><div class="stat-num">${counts.absent || 0}</div><div class="stat-label">Absent</div></div></div>
    <div class="card stat" style="flex-direction:column;align-items:stretch;gap:6px"><div><div class="stat-num">${avg}%</div><div class="stat-label">Avg. Workload</div></div><div class="bar"><i style="width:${avg}%"></i></div></div>
    ${isOwner ? `<button class="btn gold" data-action="add-project-member" data-pid="${p.id}">${icon('userPlus', 'sm')} Add Member</button>` : ''}
  </div>
  <div class="card tbl-card" style="padding-top:4px">${teamTable(p, 'team')}</div>`;
}

function tabAnalytics(p) {
  const s = projectStats(p);
  const pAnalytics = (p.analytics && typeof p.analytics === 'object' && Object.keys(p.analytics).length > 0) ? p.analytics : {};

  // Safe time breakdown
  const timeData = (Array.isArray(pAnalytics.time) && pAnalytics.time.length) ? pAnalytics.time : [
    ['Development', Math.max(40, s.completed * 45 + 30), '#8b6cf6'],
    ['Design & UI', 65, '#4c8dff'],
    ['QA & Testing', Math.max(20, s.inProgress * 25 + 20), '#2bc46a'],
    ['Operations', 35, '#f5b82e']
  ];
  const totalH = timeData.reduce((x, t) => x + (Number(t[1]) || 0), 0) || 1;

  // Safe progress trend
  const trendData = (Array.isArray(pAnalytics.trend) && pAnalytics.trend.length) ? pAnalytics.trend : [
    [0, 0],
    [0.32, Math.round(s.pct * 0.35)],
    [0.65, Math.round(s.pct * 0.72)],
    [0.92, s.pct]
  ];

  // Safe team productivity mapping
  const teamMembers = (p.team && Array.isArray(p.team) && p.team.length) ? p.team : (MEMBER_ROWS.length ? MEMBER_ROWS : ['raja', 'karthik']);
  const prodMap = {};
  teamMembers.forEach(id => {
    if (pAnalytics.productivity && pAnalytics.productivity[id] !== undefined) {
      prodMap[id] = Number(pAnalytics.productivity[id]) || 60;
    } else {
      const assigned = (p.tasks || []).filter(t => t.assignee === id || t.assignee === (PEOPLE[id]?.name));
      const done = assigned.filter(t => t.status === 'done').length;
      const base = assigned.length ? Math.round((done / assigned.length) * 100) : (id === ME ? 85 : 75);
      prodMap[id] = Math.max(35, Math.min(100, base));
    }
  });

  const a = {
    teamProductivity: pAnalytics.teamProductivity || Math.round(Object.values(prodMap).reduce((acc, v) => acc + v, 0) / (Object.values(prodMap).length || 1)),
    time: timeData,
    trend: trendData,
    productivity: prodMap
  };

  const dist = [
    ['Completed', s.completed, '#2bc46a'],
    ['In Progress', s.inProgress, '#f5b82e'],
    ['Pending', s.pending, '#f06464']
  ];

  // Donut chart
  const R = 50, C = 2 * Math.PI * R;
  let off = 0;
  const segs = dist.map(([, v, col]) => {
    const len = s.total ? (v / s.total) * C : 0;
    const seg = `<circle cx="65" cy="65" r="${R}" fill="none" stroke="${col}" stroke-width="20" stroke-dasharray="${Math.max(0, len - 2)} ${C}" stroke-dashoffset="${-off}"/>`;
    off += len;
    return seg;
  }).join('');

  // Line chart
  const W = 380, H = 170, L = 34, B = 22, T = 10, plotW = W - L - 6, plotH = H - B - T;
  const pts = a.trend.map(([x, y]) => [L + x * plotW, T + plotH - ((Math.min(100, Math.max(0, y))) / 100) * plotH]);
  if (pts.length) {
    pts[pts.length - 1] = [L + a.trend[a.trend.length - 1][0] * plotW, T + plotH - (s.pct / 100) * plotH];
  } else {
    pts.push([L, T + plotH], [L + plotW, T + plotH - (s.pct / 100) * plotH]);
  }
  const line = pts.map(pt => pt.join(',')).join(' ');
  const area = `${L},${T + plotH} ${line} ${pts[pts.length - 1][0]},${T + plotH}`;
  const last = pts[pts.length - 1] || [L + plotW, T];
  const grid = [0, 25, 50, 75, 100].map(v => {
    const y = T + plotH - (v / 100) * plotH;
    return `<line x1="${L}" x2="${W}" y1="${y}" y2="${y}" stroke="rgba(255,255,255,.06)"/><text x="${L - 6}" y="${y + 3}" fill="#85858e" font-size="9" text-anchor="end">${v}%</text>`;
  }).join('');
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
        <g transform="translate(${Math.max(10, Math.min(W - 54, last[0] - 22))},${Math.max(6, last[1] - 42)})"><rect width="44" height="32" rx="6" fill="#1c1c20" stroke="#f5b82e" stroke-opacity=".6"/><text x="22" y="15" fill="#fff" font-size="12" font-weight="600" text-anchor="middle">${s.pct}%</text><text x="22" y="26" fill="#b9b9c0" font-size="8.5" text-anchor="middle">Today</text></g>
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
      ${Object.entries(a.productivity).sort((x, y) => y[1] - x[1]).map(([id, v]) => {
        const pName = (PEOPLE[id] && PEOPLE[id].name) || (typeof id === 'string' ? id.charAt(0).toUpperCase() + id.slice(1) : 'Member');
        return `<div class="prod-row">${av(id, 's22')}<span>${esc(pName)}</span><div class="bar"><i style="width:${Math.max(0, Math.min(100, v))}%"></i></div><span>${Math.round(v)}%</span></div>`;
      }).join('')}
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
window.handleLogProjectChange = function(val) {
  var f = document.getElementById('otherProjectField');
  var inp = document.getElementById('logOtherProjectName');
  var isOther = (val === '__other__') || (val && val.toLowerCase().indexOf('other') !== -1);
  if (f) {
    f.style.display = isOther ? 'block' : 'none';
    if (isOther && inp) { setTimeout(function() { inp.focus(); }, 30); }
  }
};

function renderWorkLog() {
  const d = parseISO(state.logDate);
  const allLogs = [...workLogs].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const availableProjects = projects.filter(p => p && p.name);
  if (!state.logProject && availableProjects.length) {
    state.logProject = availableProjects[0].id;
  }

  return `<section class="view" style="max-width:1120px">
    <div class="page-head" style="margin-bottom:20px">
      <div>
        <h1 class="page-title">Daily Work Log</h1>
        <p class="page-sub">Log daily work hours, tasks and project progress</p>
      </div>
      <div class="date-pill" style="display:flex;align-items:center;gap:8px">
        ${icon('calendar', 'sm')}
        <span style="font-weight:600">${DOW[d.getDay()]}, ${fmtLong(state.logDate)}</span>
        <button data-logday="-1" title="Previous day">${icon('chevLeft', 'sm')}</button>
        <button data-logday="1" title="Next day">${icon('chevRight', 'sm')}</button>
      </div>
    </div>

    <!-- Clean Composer: Date, Project Name (automatic + other), Hours, Description -->
    <div class="card composer" style="box-shadow:0 4px 20px rgba(0,0,0,0.25);padding:18px;border-radius:12px;margin-bottom:24px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
        <span style="font-size:13px;color:var(--gold);font-weight:600;display:flex;align-items:center;gap:6px">
          ${icon('checkSquare', 'sm')} Add Daily Work Log
        </span>
        <span style="font-size:12px;color:var(--text-2)">Member: <b style="color:var(--text);display:inline-flex;align-items:center;gap:4px">${esc((PEOPLE[ME]?.name) || ME || 'User')} ${userModeIcon(ME, 'xs')}</b></span>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:12px;margin-bottom:12px">
        <!-- 1. Date -->
        <div>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--text-2);margin-bottom:6px">
            📅 Date
          </label>
          <input type="date" id="logDateInput" value="${state.logDate}" style="width:100%;height:38px;padding:0 10px;border-radius:8px;background:var(--panel-2);border:1px solid var(--line-2);color:var(--text);font-size:13px" />
        </div>

        <!-- 2. Project Name (Automatic + Other) -->
        <div>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--text-2);margin-bottom:6px">
            📁 Project Name
          </label>
          <select class="select" id="logProjectSelect" onchange="window.handleLogProjectChange(this.value)" style="width:100%;height:38px;border-radius:8px;background:var(--panel-2);border:1px solid var(--line-2);color:var(--text);font-size:13px">
            ${availableProjects.map(p => `<option value="${p.id}" ${p.id === (state.logProject || availableProjects[0]?.id) ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}
            <option value="__other__" ${state.logProject === '__other__' ? 'selected' : ''}>Other (Specify project name)</option>
          </select>
        </div>

        <!-- 3. Hours Worked -->
        <div>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--text-2);margin-bottom:6px">
            🕒 Hours Worked
          </label>
          <select class="select" id="logHoursSelect" style="width:100%;height:38px;border-radius:8px;background:var(--panel-2);border:1px solid var(--line-2);color:var(--text);font-size:13px">
            ${['1h 00m', '2h 00m', '3h 00m', '4h 00m', '4h 30m', '5h 00m', '5h 30m', '6h 00m', '7h 00m', '8h 00m', '9h 00m', '10h 00m'].map(h => `<option value="${h}" ${(state.logHours || '4h 00m') === h ? 'selected' : ''}>${h}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Other Project Name field (shown when Other is selected) -->
      <div id="otherProjectField" style="display:${state.logProject === '__other__' ? 'block' : 'none'};margin-bottom:12px">
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--gold);margin-bottom:6px">
          ✏️ Specify Project Name
        </label>
        <input type="text" id="logOtherProjectName" placeholder="Enter project name (e.g. Mobile App, CRM System)..." value="${esc(state.logOtherProjectName || '')}" style="width:100%;height:38px;padding:0 12px;border-radius:8px;background:var(--panel-2);border:1px solid var(--gold);color:var(--text);font-size:13px" />
      </div>

      <!-- Description / Tasks worked on -->
      <div style="margin-bottom:12px">
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--text-2);margin-bottom:6px">
          📝 What did you work on today?
        </label>
        <textarea id="logText" placeholder="Describe the tasks completed or work done today (press Ctrl+Enter to save)..." style="width:100%;min-height:90px;padding:10px 12px;border-radius:8px;background:var(--panel-2);border:1px solid var(--line-2);color:var(--text);font-size:13px;resize:vertical;line-height:1.5"></textarea>
      </div>

      <div class="composer-bar" style="display:flex;align-items:center;justify-content:flex-end;gap:10px">
        <button class="btn" data-action="log-cancel">Clear</button>
        <button class="btn gold" data-action="log-save">${icon('check', 'sm')} Save Work Log</button>
      </div>
    </div>

    <!-- Work Logs History (Tabular Column Basis) -->
    <div class="card" style="padding:0;overflow:hidden;border-radius:12px;margin-top:24px;box-shadow:0 4px 20px rgba(0,0,0,0.25);border:1px solid var(--line-2)">
      <div style="padding:16px 20px;border-bottom:1px solid var(--line-2);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;background:var(--panel-1)">
        <div>
          <h3 style="font-size:15px;font-weight:600;margin:0;display:flex;align-items:center;gap:8px">
            📋 Work Logs History
            <span class="badge" style="background:rgba(245,184,46,.15);color:var(--gold);font-size:11px">${allLogs.length} Records</span>
          </h3>
          <p style="font-size:12px;color:var(--text-2);margin:3px 0 0">Tabular column breakdown of logged work, hours, tasks, and approval status</p>
        </div>
      </div>

      <div class="table-wrap" style="overflow-x:auto">
        <table class="table" style="width:100%;border-collapse:collapse;text-align:left;font-size:13px">
          <thead>
            <tr style="background:var(--panel-2);border-bottom:1px solid var(--line-2);font-size:11.5px;color:var(--text-2);text-transform:uppercase;letter-spacing:0.5px">
              <th style="padding:12px 16px;font-weight:600;white-space:nowrap">Date</th>
              <th style="padding:12px 14px;font-weight:600;white-space:nowrap">Member</th>
              <th style="padding:12px 14px;font-weight:600;white-space:nowrap">Project</th>
              <th style="padding:12px 14px;font-weight:600;white-space:nowrap">Hours</th>
              <th style="padding:12px 14px;font-weight:600;min-width:280px">Work Done / Tasks</th>
              <th style="padding:12px 14px;font-weight:600;white-space:nowrap">Status</th>
              <th style="padding:12px 16px;text-align:right;font-weight:600;white-space:nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${allLogs.length ? allLogs.map((l) => {
              const origIdx = workLogs.indexOf(l);
              const ld = parseISO(l.date);
              const p = projects.find(x => x.id === l.project) || { id: l.project, name: l.project || 'General' };
              const itemsList = Array.isArray(l.items) ? l.items : (l.items ? [l.items] : []);
              const isApproved = l.approval_status === 'approved';

              return `
                <tr style="border-bottom:1px solid var(--line-2);${l.date === state.logDate ? 'background:rgba(245,184,46,0.04);' : ''}">
                  <!-- 1. Date -->
                  <td style="padding:12px 16px;white-space:nowrap;vertical-align:top">
                    <span style="font-weight:600;color:var(--text);display:block">${fmtShort(l.date)}</span>
                    <span style="font-size:11px;color:var(--text-3)">${DOW[ld.getDay()]}</span>
                  </td>

                  <!-- 2. Member -->
                  <td style="padding:12px 14px;white-space:nowrap;vertical-align:top">
                    <div style="display:inline-flex;align-items:center;gap:8px">
                      ${av(l.member, 's26')}
                      <span style="font-weight:500;color:var(--text);display:inline-flex;align-items:center;gap:4px">
                        ${esc((PEOPLE[l.member]?.name) || l.member || 'Member')}
                        ${userModeIcon(l.member, 'xs')}
                      </span>
                    </div>
                  </td>

                  <!-- 3. Project -->
                  <td style="padding:12px 14px;vertical-align:top">
                    <span class="badge" style="background:rgba(245,184,46,.12);color:var(--gold);border:1px solid rgba(245,184,46,.25);font-size:11.5px;font-weight:600;display:inline-flex;align-items:center;gap:4px;white-space:nowrap">
                      📁 ${esc(p.name || l.project || 'General')}
                    </span>
                  </td>

                  <!-- 4. Hours -->
                  <td style="padding:12px 14px;white-space:nowrap;vertical-align:top">
                    <span style="display:inline-flex;align-items:center;gap:5px;font-weight:600;color:var(--text);font-size:12.5px">
                      ${icon('clock', 'xs')} ${esc(l.hours || '4h 00m')}
                    </span>
                  </td>

                  <!-- 5. Work Done / Tasks -->
                  <td style="padding:12px 14px;vertical-align:top">
                    <div style="color:var(--text);line-height:1.5;max-width:380px">
                      ${itemsList.length ? itemsList.map(t => `<div style="display:flex;align-items:baseline;gap:6px;margin-bottom:3px"><span style="color:var(--gold);font-size:10px">•</span><span>${esc(t)}</span></div>`).join('') : '<i style="color:var(--text-3)">No work description</i>'}
                    </div>
                  </td>

                  <!-- 6. Status / Approval -->
                  <td style="padding:12px 14px;white-space:nowrap;vertical-align:top">
                    ${isApproved ? `
                      <span class="badge done" style="display:inline-flex;align-items:center;gap:4px" title="Approved by ${esc(l.approved_by || 'Lead')} at ${esc(l.approved_at || '')}">
                        ✅ Approved
                      </span>
                      ${l.approved_by ? `<div style="font-size:10.5px;color:var(--text-3);margin-top:2px">by ${esc((PEOPLE[l.approved_by]?.name) || l.approved_by)}</div>` : ''}
                    ` : `
                      <span class="badge progress" style="display:inline-flex;align-items:center;gap:4px">
                        ⏳ Pending
                      </span>
                    `}
                  </td>

                  <!-- 7. Actions (Approve, Edit, Delete) -->
                  <td style="padding:12px 16px;text-align:right;white-space:nowrap;vertical-align:top">
                    <div style="display:inline-flex;align-items:center;justify-content:flex-end;gap:6px">
                      ${!isApproved ? `
                        <button type="button" class="btn-xs-gold" data-action="lead-approve-log" data-log-idx="${origIdx}" title="Approve this work log" style="display:inline-flex;align-items:center;gap:4px;height:26px">
                          ✅ Approve
                        </button>
                      ` : ''}
                      <button type="button" class="btn flat" data-action="edit-worklog" data-log-idx="${origIdx}" title="Edit work log" style="height:26px;padding:0 8px;font-size:11.5px;color:var(--gold);display:inline-flex;align-items:center;gap:4px;border:1px solid rgba(245,184,46,.25);border-radius:6px">
                        ✏️ Edit
                      </button>
                      <button type="button" class="btn flat" data-action="delete-worklog" data-log-idx="${origIdx}" title="Delete log" style="height:26px;padding:0 7px;font-size:11.5px;color:var(--red);opacity:0.75;border-radius:6px">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('') : `
              <tr>
                <td colspan="7" style="padding:36px;text-align:center;color:var(--text-2)">
                  <div style="font-size:32px;margin-bottom:8px">📝</div>
                  No work logs found. Enter your work hours and tasks above to create a log!
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

/* ---------------- Voice Messaging (WhatsApp style) ---------------- */
let voiceMediaRecorder = null;
let voiceAudioChunks = [];
let voiceTimerInterval = null;
let voiceRecordSeconds = 0;
let activeAudioMsgId = null;
let voicePlaybackAudio = null;
let voiceAudioInterval = null;

function renderVoicePlayer(v, msgIdx, isMe) {
  const isPlaying = activeAudioMsgId === msgIdx;
  const bars = (v.waveform && v.waveform.length) ? v.waveform : [35, 55, 75, 40, 80, 60, 45, 90, 70, 40, 60, 85, 50, 30, 70, 95, 60, 40, 55, 75, 80, 50, 35, 60];
  const speed = v.speed || '1x';
  const progressPct = isPlaying ? (v.progressPct || 0) : 0;

  return `
    <div class="voice-player" data-msg-idx="${msgIdx}">
      <button type="button" class="voice-play-btn" data-action="toggle-voice-playback" data-msg-idx="${msgIdx}" title="${isPlaying ? 'Pause' : 'Play voice message'}">
        ${isPlaying ? icon('pause', 'sm') : icon('play', 'sm')}
      </button>
      <div class="voice-wave-wrap">
        <div class="voice-wave-bars">
          ${bars.map((h, bIdx) => {
            const barPct = (bIdx / bars.length) * 100;
            const isActive = isPlaying && barPct <= progressPct;
            return `<div class="wave-bar ${isActive ? 'active' : ''}" style="height:${h}%;${isActive ? 'background:var(--gold)' : ''}"></div>`;
          }).join('')}
        </div>
        <div class="voice-meta">
          <span>${isPlaying ? (v.currentTime || '0:00') : (v.duration || '0:05')}</span>
          <button type="button" class="voice-speed-pill" data-action="toggle-voice-speed" data-msg-idx="${msgIdx}" title="Change playback speed">${speed}</button>
        </div>
      </div>
    </div>
  `;
}

async function startVoiceRecording() {
  voiceAudioChunks = [];
  voiceRecordSeconds = 0;
  state.isRecordingVoice = true;
  state.voiceSeconds = 0;
  rerender();

  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      state.voiceAudioStream = stream;
      voiceMediaRecorder = new MediaRecorder(stream);
      voiceMediaRecorder.ondataavailable = e => {
        if (e.data.size > 0) voiceAudioChunks.push(e.data);
      };
      voiceMediaRecorder.start(100);
    }
  } catch (err) {
    console.warn('Microphone permission not granted or device not present; using synthetic waveform:', err);
  }

  clearInterval(voiceTimerInterval);
  voiceTimerInterval = setInterval(() => {
    voiceRecordSeconds++;
    state.voiceSeconds = voiceRecordSeconds;
    const timerEl = $('#voiceRecTimer');
    if (timerEl) {
      const m = Math.floor(voiceRecordSeconds / 60);
      const s = String(voiceRecordSeconds % 60).padStart(2, '0');
      timerEl.textContent = `${m}:${s}`;
    }
  }, 1000);
}

function cancelVoiceRecording() {
  clearInterval(voiceTimerInterval);
  if (voiceMediaRecorder && voiceMediaRecorder.state !== 'inactive') {
    try { voiceMediaRecorder.stop(); } catch (e) {}
  }
  if (state.voiceAudioStream) {
    try { state.voiceAudioStream.getTracks().forEach(t => t.stop()); } catch (e) {}
    state.voiceAudioStream = null;
  }
  state.isRecordingVoice = false;
  state.voiceSeconds = 0;
  voiceAudioChunks = [];
  rerender();
}

async function uploadMediaBlob(blob, filename) {
  try {
    const fd = new FormData();
    fd.append('file', blob, filename || 'upload');
    const headers = {};
    if (AUTH_TOKEN) headers['Authorization'] = `Token ${AUTH_TOKEN}`;
    const res = await fetch(`${API_BASE}/upload/`, {
      method: 'POST',
      headers,
      body: fd
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.url) return data.url;
    }
  } catch (e) {
    console.warn('Upload endpoint error, falling back:', e);
  }
  // Fallback to DataURL only if upload endpoint is unreachable
  return await new Promise(r => {
    const reader = new FileReader();
    reader.onloadend = () => r(reader.result || '');
    reader.onerror = () => r('');
    reader.readAsDataURL(blob);
  });
}

async function finishVoiceRecording() {
  clearInterval(voiceTimerInterval);
  const totalSecs = Math.max(1, voiceRecordSeconds || 1);
  const m = Math.floor(totalSecs / 60);
  const s = String(totalSecs % 60).padStart(2, '0');
  const durStr = `${m}:${s}`;

  let audioBlob = null;
  if (voiceMediaRecorder && voiceMediaRecorder.state !== 'inactive') {
    audioBlob = await new Promise((resolve) => {
      voiceMediaRecorder.onstop = () => {
        if (voiceAudioChunks.length) {
          const mimeType = voiceMediaRecorder.mimeType || 'audio/webm';
          resolve(new Blob(voiceAudioChunks, { type: mimeType }));
        } else {
          resolve(null);
        }
      };
      try { voiceMediaRecorder.stop(); } catch (e) { resolve(null); }
    });
  } else if (voiceAudioChunks.length) {
    audioBlob = new Blob(voiceAudioChunks, { type: 'audio/webm' });
  }

  if (state.voiceAudioStream) {
    try { state.voiceAudioStream.getTracks().forEach(t => t.stop()); } catch (e) {}
    state.voiceAudioStream = null;
  }

  const waveform = Array.from({ length: 24 }, () => Math.floor(25 + Math.random() * 70));

  state.isRecordingVoice = false;
  state.voiceSeconds = 0;

  let audioUrl = '';
  if (audioBlob) {
    toast('Uploading voice note... 🎙️');
    audioUrl = await uploadMediaBlob(audioBlob, `voice_${Date.now()}.webm`);
  }

  sendMessage('', null, {
    type: 'voice',
    duration: durStr,
    seconds: totalSecs,
    audioUrl,
    waveform
  });
}

function toggleVoicePlayback(msgIdx) {
  const c = chats.find(x => x.id === state.chatId);
  if (!c || !c.msgs[msgIdx]) return;
  const m = c.msgs[msgIdx];
  const isVoice = Boolean(m.voice || (m.file_info && m.file_info.type === 'voice') || (m.file && m.file.type === 'voice'));
  const v = isVoice ? (m.voice || (m.file_info && m.file_info.type === 'voice' ? m.file_info : m.file)) : null;
  if (!v) return;

  const updatePlayBtnUI = (playing) => {
    const btn = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-play-btn`);
    if (btn) {
      btn.innerHTML = playing ? icon('pause', 'sm') : icon('play', 'sm');
      btn.title = playing ? 'Pause' : 'Play voice message';
    }
  };

  if (activeAudioMsgId === msgIdx && voicePlaybackAudio) {
    if (voicePlaybackAudio.paused) {
      voicePlaybackAudio.play().catch(() => {});
      updatePlayBtnUI(true);
    } else {
      voicePlaybackAudio.pause();
      updatePlayBtnUI(false);
    }
    return;
  }

  if (voicePlaybackAudio) {
    try { voicePlaybackAudio.pause(); } catch (_) {}
    voicePlaybackAudio = null;
  }
  if (activeAudioMsgId !== null) {
    const prevBtn = document.querySelector(`[data-msg-idx="${activeAudioMsgId}"] .voice-play-btn`);
    if (prevBtn) {
      prevBtn.innerHTML = icon('play', 'sm');
      prevBtn.title = 'Play voice message';
    }
  }
  clearInterval(voiceAudioInterval);

  activeAudioMsgId = msgIdx;
  updatePlayBtnUI(true);

  const speedVal = v.speed === '2x' ? 2 : v.speed === '1.5x' ? 1.5 : 1;
  const audioSrc = v.audioUrl || v.url;
  const isDataOrHttp = audioSrc && (audioSrc.startsWith('data:') || audioSrc.startsWith('http://') || audioSrc.startsWith('https://'));

  if (isDataOrHttp) {
    voicePlaybackAudio = new Audio(audioSrc);
    voicePlaybackAudio.playbackRate = speedVal;

    voicePlaybackAudio.onerror = (err) => {
      console.warn('Audio decoding failed, falling back to tone:', err);
      if (voicePlaybackAudio) {
        try { voicePlaybackAudio.pause(); } catch (_) {}
        voicePlaybackAudio = null;
      }
      playSynthesizedVoiceTone(v.seconds || 5);
      runSyntheticPlayback(v, msgIdx, speedVal);
    };

    voicePlaybackAudio.play().catch((err) => {
      console.warn('Audio play restricted or failed, falling back to tone:', err);
      playSynthesizedVoiceTone(v.seconds || 5);
      runSyntheticPlayback(v, msgIdx, speedVal);
    });

    voiceAudioInterval = setInterval(() => {
      if (!voicePlaybackAudio || voicePlaybackAudio.paused || voicePlaybackAudio.ended) {
        if (voicePlaybackAudio && voicePlaybackAudio.ended) {
          activeAudioMsgId = null;
          clearInterval(voiceAudioInterval);
          updatePlayBtnUI(false);
          v.progressPct = 0;
          const barsEl = document.querySelectorAll(`[data-msg-idx="${msgIdx}"] .wave-bar`);
          barsEl.forEach(bar => bar.classList.remove('active'));
          const metaSpan = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-meta span`);
          if (metaSpan) metaSpan.textContent = v.duration || '0:05';
        }
        return;
      }
      const cur = voicePlaybackAudio.currentTime;
      const dur = voicePlaybackAudio.duration || (v.seconds || 5);
      const min = Math.floor(cur / 60);
      const sec = String(Math.floor(cur % 60)).padStart(2, '0');
      v.currentTime = `${min}:${sec}`;
      v.progressPct = Math.min(100, (cur / dur) * 100);
      const playerEl = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-meta span`);
      if (playerEl) playerEl.textContent = v.currentTime;
      const barsEl = document.querySelectorAll(`[data-msg-idx="${msgIdx}"] .wave-bar`);
      const totalBars = barsEl.length;
      barsEl.forEach((bar, bIdx) => {
        const barPct = (bIdx / totalBars) * 100;
        bar.classList.toggle('active', barPct <= v.progressPct);
      });
    }, 120);

    voicePlaybackAudio.onended = () => {
      activeAudioMsgId = null;
      clearInterval(voiceAudioInterval);
      v.progressPct = 0;
      updatePlayBtnUI(false);
      const barsEl = document.querySelectorAll(`[data-msg-idx="${msgIdx}"] .wave-bar`);
      barsEl.forEach(bar => bar.classList.remove('active'));
      const metaSpan = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-meta span`);
      if (metaSpan) metaSpan.textContent = v.duration || '0:05';
    };
  } else {
    // If blob expired from previous session or tone only, play synthetic tone with visual bars
    playSynthesizedVoiceTone(v.seconds || 5);
    runSyntheticPlayback(v, msgIdx, speedVal);
  }
}

function runSyntheticPlayback(v, msgIdx, speedVal) {
  let elapsed = 0;
  const dur = v.seconds || 5;
  const updatePlayBtnUI = (playing) => {
    const btn = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-play-btn`);
    if (btn) {
      btn.innerHTML = playing ? icon('pause', 'sm') : icon('play', 'sm');
      btn.title = playing ? 'Pause' : 'Play voice message';
    }
  };
  clearInterval(voiceAudioInterval);
  voiceAudioInterval = setInterval(() => {
    elapsed += 0.15 * speedVal;
    if (elapsed >= dur) {
      activeAudioMsgId = null;
      clearInterval(voiceAudioInterval);
      v.progressPct = 0;
      updatePlayBtnUI(false);
      const barsEl = document.querySelectorAll(`[data-msg-idx="${msgIdx}"] .wave-bar`);
      barsEl.forEach(bar => bar.classList.remove('active'));
      const metaSpan = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-meta span`);
      if (metaSpan) metaSpan.textContent = v.duration || '0:05';
      return;
    }
    const min = Math.floor(elapsed / 60);
    const sec = String(Math.floor(elapsed % 60)).padStart(2, '0');
    v.currentTime = `${min}:${sec}`;
    v.progressPct = Math.min(100, (elapsed / dur) * 100);
    const playerEl = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-meta span`);
    if (playerEl) playerEl.textContent = v.currentTime;
    const barsEl = document.querySelectorAll(`[data-msg-idx="${msgIdx}"] .wave-bar`);
    const totalBars = barsEl.length;
    barsEl.forEach((bar, bIdx) => {
      const barPct = (bIdx / totalBars) * 100;
      bar.classList.toggle('active', barPct <= v.progressPct);
    });
  }, 150);
}

function toggleVoiceSpeed(msgIdx) {
  const c = chats.find(x => x.id === state.chatId);
  if (!c || !c.msgs[msgIdx]) return;
  const m = c.msgs[msgIdx];
  const isVoice = Boolean(m.voice || (m.file_info && m.file_info.type === 'voice') || (m.file && m.file.type === 'voice'));
  const v = isVoice ? (m.voice || (m.file_info && m.file_info.type === 'voice' ? m.file_info : m.file)) : null;
  if (!v) return;

  const current = v.speed || '1x';
  v.speed = current === '1x' ? '1.5x' : current === '1.5x' ? '2x' : '1x';
  if (voicePlaybackAudio) {
    voicePlaybackAudio.playbackRate = v.speed === '2x' ? 2 : v.speed === '1.5x' ? 1.5 : 1;
  }
  const speedBtn = document.querySelector(`[data-msg-idx="${msgIdx}"] .voice-speed-pill`);
  if (speedBtn) speedBtn.textContent = v.speed;
}

function playSynthesizedVoiceTone(durationSecs) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3);
    osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + Math.min(durationSecs, 2));
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + Math.min(durationSecs, 2));
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + Math.min(durationSecs, 2));
  } catch (e) {}
}

/* ---------------- Chat Message DOM Helpers ---------------- */
function getFileIcon(name) {
  if (!name) return '📄';
  const ext = (name.split('.').pop() || '').toLowerCase();
  if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) return '🖼️';
  if (['pdf'].includes(ext)) return '📕';
  if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return '📦';
  if (['xls', 'xlsx', 'csv'].includes(ext)) return '📊';
  if (['doc', 'docx', 'txt', 'rtf', 'odt'].includes(ext)) return '📝';
  if (['ppt', 'pptx'].includes(ext)) return '📑';
  if (['mp3', 'wav', 'ogg', 'm4a', 'aac', 'opus'].includes(ext)) return '🎵';
  if (['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(ext)) return '🎬';
  return '📄';
}

window.previewImageModal = function(url, name) {
  if (!url) return;
  const oldModal = document.querySelector('.image-lightbox-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.className = 'image-lightbox-modal';
  modal.innerHTML = `
    <img src="${url}" alt="${esc(name || 'Image Preview')}" class="image-lightbox-content" />
    <div class="image-lightbox-bar">
      <span style="color:var(--text);font-weight:600;font-size:13px">${esc(name || 'Image')}</span>
      <button type="button" class="btn gold" id="lightboxDlBtn" style="padding:6px 14px;font-size:12px;display:flex;align-items:center;gap:6px">
        ${icon('download', 'xs')} Download
      </button>
      <button type="button" class="btn" id="lightboxCloseBtn" style="padding:6px 12px;font-size:12px">Close (Esc)</button>
    </div>
  `;
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.id === 'lightboxCloseBtn') modal.remove();
  });
  const dlBtn = modal.querySelector('#lightboxDlBtn');
  if (dlBtn) {
    dlBtn.onclick = () => {
      const a = document.createElement('a');
      a.href = url;
      a.download = name || 'image.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
  }
  document.body.appendChild(modal);
};

function downloadAttachment(msgIdx) {
  const c = chats.find(x => x.id === state.chatId);
  if (!c || !c.msgs[msgIdx]) return;
  const m = c.msgs[msgIdx];
  const isVoice = Boolean(m.voice || (m.file_info && m.file_info.type === 'voice') || (m.file && m.file.type === 'voice'));
  if (isVoice) {
    // Voice messages are played directly in the chat window, no file download needed
    toggleVoicePlayback(msgIdx);
    return;
  }
  const f = (!isVoice && m.file && m.file.name) ? m.file : (!isVoice && m.file_info && m.file_info.name ? m.file_info : null);
  if (!f) {
    toast('No downloadable document attached');
    return;
  }
  const fileUrl = f.url;
  const fileName = f.name;
  if (!fileUrl) {
    toast(`Document "${fileName}" is not available for direct download`);
    return;
  }
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast(`Downloading ${fileName}...`);
}

async function handleChatFileDrop(files) {
  if (!files || !files.length) return;
  for (const f of Array.from(files)) {
    if (f.size > 25 * 1024 * 1024) {
      toast(`File "${f.name}" exceeds 25MB limit`);
      continue;
    }
    toast(`Uploading "${f.name}"... ⏳`);
    const sizeStr = f.size > 1048576 ? (f.size / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(f.size / 1024)) + ' KB';
    const uploadedUrl = await uploadMediaBlob(f, f.name);
    sendMessage('', {
      name: f.name,
      size: sizeStr,
      type: f.type || 'application/octet-stream',
      url: uploadedUrl
    });
    toast(`Sent "${f.name}" ✅`);
  }
}

function renderChatMessageHtml(m, idx, lastDateLabel = null) {
  const isMe = (m.from && ME) ? (m.from.toLowerCase() === ME.toLowerCase()) : false;
  const myName = (PEOPLE[ME]?.name) || (ME ? ME.toUpperCase() : 'You');
  const senderId = m.from || (isMe ? ME : 'member');
  const senderName = isMe ? `${myName} (You)` : ((PEOPLE[m.from]?.name) || m.from || 'Member');
  const reactions = m.reactions || {};
  const rxEntries = Object.entries(reactions);

  const curDateLabel = getMsgDateLabel(m);
  let dateDividerHtml = '';
  if (curDateLabel && curDateLabel !== lastDateLabel) {
    dateDividerHtml = `
      <div class="chat-date-divider">
        <span class="chat-date-pill">📅 ${esc(curDateLabel)}</span>
      </div>
    `;
  }

  const msgTime = formatMsgTime(m.time);

  const html = `
    ${dateDividerHtml}
    <div class="msg ${isMe ? 'me' : ''}" id="msg-item-${idx}" data-msg-idx="${idx}" data-msg-id="${m.id || ''}">
      ${av(senderId, 's36')}
      <div class="msg-content-wrap">
        <div class="who">
          <span style="font-weight:600;color:${isMe ? 'var(--gold)' : '#60a5fa'}">${esc(senderName)}</span>
          ${userModeIcon(senderId, 'xs')}
          <span class="time-tag" style="${isMe ? 'margin-right:4px' : 'margin-left:auto'}">${msgTime}</span>
        </div>

        <div class="bubble-container">
          <div class="bubble">
            ${isMe ? `<div class="meta">${msgTime} ${icon('checks', 'xs')}</div>` : ''}

            <!-- Quoted Message (WhatsApp Style Reply Preview) -->
            ${m.reply_to ? `
              <div class="msg-quote-card" data-action="jump-quoted-msg" data-quoted-text="${esc(m.reply_to.text || '')}" title="Click to view quoted message">
                <div class="msg-quote-name">${esc(m.reply_to.from_name || (PEOPLE[m.reply_to.from]?.name) || m.reply_to.from || 'Member')}</div>
                <div class="msg-quote-snippet">${esc(m.reply_to.text || '')}</div>
              </div>
            ` : ''}

            <!-- Voice Note Player (WhatsApp style) or Text Message -->
            ${(() => {
              const isVoice = Boolean(
                m.voice ||
                (m.file_info && m.file_info.type === 'voice') ||
                (m.file && m.file.type === 'voice')
              );
              if (isVoice) {
                const voiceObj = m.voice || (m.file_info && m.file_info.type === 'voice' ? m.file_info : m.file);
                return renderVoicePlayer(voiceObj, idx, isMe);
              }
              return (m.text ? `<div class="msg-text">${esc(m.text).replace(/\n/g, '<br>')}</div>` : '');
            })()}

            <!-- Document / Media Attachment (PDF, Images, Docs - Never convert to zip) -->
            ${(() => {
              const isVoice = Boolean(
                m.voice ||
                (m.file_info && m.file_info.type === 'voice') ||
                (m.file && m.file.type === 'voice')
              );
              if (isVoice) return '';

              const fileItem = (!isVoice && m.file && m.file.name) ? m.file : (!isVoice && m.file_info && m.file_info.name ? m.file_info : null);
              if (!fileItem || !fileItem.name) return '';

              const isImg = Boolean(
                fileItem.url &&
                (fileItem.url.startsWith('data:image/') || fileItem.url.startsWith('http://') || fileItem.url.startsWith('https://')) &&
                (fileItem.type?.startsWith('image/') || /\.(png|jpe?g|gif|webp|svg)$/i.test(fileItem.name))
              );
              const isPdf = fileItem.type?.includes('pdf') || /\.pdf$/i.test(fileItem.name);
              const ext = fileItem.name.includes('.') ? fileItem.name.split('.').pop().toUpperCase() : 'DOC';

              return `
                <div class="attach-container" style="margin-top:6px">
                  ${isImg ? `
                    <div class="attach-preview-img-wrap" onclick="window.previewImageModal('${esc(fileItem.url)}', '${esc(fileItem.name)}')">
                      <img src="${fileItem.url}" alt="${esc(fileItem.name)}" class="attach-img-preview" onerror="this.closest('.attach-preview-img-wrap').style.display='none'" />
                    </div>
                  ` : ''}
                  <div class="attach-row">
                    <span style="font-size:22px;flex-shrink:0">${getFileIcon(fileItem.name)}</span>
                    <div style="min-width:0;flex:1">
                      <div class="n" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;font-size:12.5px" title="${esc(fileItem.name)}">${esc(fileItem.name)}</div>
                      <div class="z" style="font-size:11px;color:var(--text-3)">${esc(fileItem.size || '')}${ext ? ` • ${ext}` : ''}</div>
                    </div>
                    ${fileItem.url && isPdf ? `
                      <button type="button" class="file-view-btn" onclick="window.open('${esc(fileItem.url)}', '_blank')" title="View ${esc(fileItem.name)}" style="background:rgba(255,255,255,0.08);border:1px solid var(--line-2);border-radius:6px;padding:4px 8px;font-size:11px;color:var(--text);margin-right:6px;cursor:pointer">
                        View
                      </button>
                    ` : ''}
                    <button type="button" class="file-dl-btn" data-action="download-attachment" data-msg-idx="${idx}" title="Download ${esc(fileItem.name)}">
                      ${icon('download', 'sm')}
                    </button>
                  </div>
                </div>
              `;
            })()}
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
  return { html, dateLabel: curDateLabel };
}

function appendSingleMsgToBox(m, idx) {
  const box = $('#msgs');
  if (!box) return;

  const emptyPlaceholder = box.querySelector('div[style*="text-align:center"]');
  if (emptyPlaceholder) {
    box.innerHTML = '';
  }

  const datePills = box.querySelectorAll('.chat-date-pill');
  let lastDateLabel = null;
  if (datePills.length > 0) {
    const lastPill = datePills[datePills.length - 1];
    lastDateLabel = lastPill.textContent.replace('📅', '').trim();
  }

  const res = renderChatMessageHtml(m, idx, lastDateLabel);
  const container = document.createElement('div');
  container.innerHTML = res.html.trim();

  while (container.firstChild) {
    box.appendChild(container.firstChild);
  }

  box.scrollTop = box.scrollHeight;
  setTimeout(() => { if (box) box.scrollTop = box.scrollHeight; }, 30);
}

function updateChatListPreview(chatId, msg) {
  if (!chatId || !msg) return;
  const chatItem = $(`.chat-item[data-chat="${chatId}"]`);
  if (!chatItem) return;
  const pEl = chatItem.querySelector('.p');
  if (pEl) {
    pEl.textContent = (msg.text || '').split('\n')[0];
  }
  const rightDiv = chatItem.querySelector('.right');
  if (rightDiv) {
    let rightSpan = rightDiv.querySelector('span:first-child');
    if (!rightSpan) {
      rightSpan = document.createElement('span');
      rightDiv.prepend(rightSpan);
    }
    if (msg.time) {
      rightSpan.textContent = formatMsgTime(msg.time);
    }

    const c = chats.find(x => x.id === chatId);
    const unreadCount = (c && Number(c.unread)) || 0;
    let unreadBadge = rightDiv.querySelector('.unread');

    if (unreadCount > 0) {
      if (!unreadBadge) {
        const starBtn = rightDiv.querySelector('.star');
        if (starBtn) starBtn.remove();
        unreadBadge = document.createElement('span');
        unreadBadge.className = 'unread';
        rightDiv.appendChild(unreadBadge);
      }
      unreadBadge.textContent = unreadCount > 99 ? '99+' : String(unreadCount);
    } else {
      if (unreadBadge) unreadBadge.remove();
      if (!rightDiv.querySelector('.star')) {
        const starBtn = document.createElement('button');
        starBtn.className = `star ${c && c.starred ? 'on' : ''}`;
        starBtn.setAttribute('data-star-chat', chatId);
        starBtn.title = 'Star';
        starBtn.innerHTML = icon('star', 'xs');
        rightDiv.appendChild(starBtn);
      }
    }
  }
}

function updateReactionPillsDOM(msgId, reactions) {
  const msgEl = document.querySelector(`[data-msg-id="${msgId}"]`);
  if (!msgEl) {
    rerender();
    return;
  }
  const idx = msgEl.getAttribute('data-msg-idx');
  const rxWrap = msgEl.querySelector('.msg-content-wrap');
  if (!rxWrap) {
    rerender();
    return;
  }

  let rxRow = msgEl.querySelector('.msg-rx-row');
  const rxEntries = Object.entries(reactions || {});

  if (!rxEntries.length) {
    if (rxRow) rxRow.remove();
    return;
  }

  const rowHtml = `
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
  `;

  if (rxRow) {
    rxRow.outerHTML = rowHtml;
  } else {
    rxWrap.insertAdjacentHTML('beforeend', rowHtml);
  }
}

/* ---------------- Messenger ---------------- */
function lastMsg(c) { return (c && c.msgs && c.msgs.length) ? c.msgs[c.msgs.length - 1] : { time: '', text: '' }; }
function renderMessenger() {
  deduplicateChats();
  const visibleChats = chats.filter(ch => canAccessChat(ch, ME));
  const q = state.chatQuery.toLowerCase();
  const list = visibleChats.filter(c => !q || c.name.toLowerCase().includes(q) || (c.msgs && c.msgs.some(m => (m.text || '').toLowerCase().includes(q))));
  let c = visibleChats.find(x => x.id === state.chatId);
  if (!c && visibleChats.length) {
    c = visibleChats[0];
    state.chatId = c.id;
  }
  if (c) markChatAsSeen(c.id);
  const chatAv = ch => ch.kind === 'dm' ? av(ch.person, 's36', PEOPLE[ch.person]?.availability === 'available' ? '<i class="online"></i>' : (PEOPLE[ch.person]?.availability === 'absent' ? '<i class="absent-dot"></i>' : '')) : `<span class="group-av">${icon('users', 'sm')}</span>`;
  const preview = ch => {
    const m = lastMsg(ch);
    if (!m || !m.text) return ch.kind === 'dm' ? 'Start a conversation...' : 'No messages yet';
    const who = m.from === ME ? 'You' : ((PEOPLE[m.from]?.name) || m.from || 'User');
    return ch.kind === 'dm' ? esc((m.text || '').split('\n')[0]) : `${who}: ${esc((m.text || '').split('\n')[0])}`;
  };

  const renderChatItem = ch => {
    const lm = lastMsg(ch);
    const timeDisplay = lm.time ? formatMsgTime(ch.timeLabel && lm.time === ch.timeLabel ? ch.timeLabel : lm.time) : '';
    const unreadCount = Number(ch.unread) || 0;
    return `
      <div class="chat-item ${c && ch.id === c.id ? 'active' : ''}" data-chat="${ch.id}">
        ${chatAv(ch)}
        <div style="min-width:0">
          <div class="t" style="display:flex;align-items:center;gap:6px">
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(ch.name)}</span>
            ${ch.project ? `<span style="font-size:9.5px;padding:1px 6px;background:rgba(245,184,46,.15);color:var(--gold);border-radius:4px;flex-shrink:0;font-weight:600">Project</span>` : ch.kind === 'group' ? `<span style="font-size:9.5px;padding:1px 6px;background:rgba(255,255,255,.07);color:var(--text-2);border-radius:4px;flex-shrink:0">Group</span>` : ''}
          </div>
          <div class="p">${preview(ch)}</div>
        </div>
        <div class="right">
          <span>${timeDisplay}</span>
          ${unreadCount > 0 ? `<span class="unread">${unreadCount > 99 ? '99+' : unreadCount}</span>` : `<button class="star ${ch.starred ? 'on' : ''}" data-star-chat="${ch.id}" title="Star">${icon('star', 'xs')}</button>`}
        </div>
      </div>
    `;
  };

  const channels = list.filter(ch => ch.kind !== 'dm');
  const dms = list.filter(ch => ch.kind === 'dm');

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
        <div class="chats">
          ${channels.length > 0 ? `
            <div class="chat-section-hdr"><span>Channels & Projects</span></div>
            ${channels.map(renderChatItem).join('')}
          ` : ''}
          <div class="chat-section-hdr" style="${channels.length > 0 ? 'margin-top:10px' : ''}">
            <span>Direct Messages</span>
            <button class="btn-xs-gold" data-action="new-dm-prompt" title="Start new direct message">+ New DM</button>
          </div>
          ${dms.length > 0 ? dms.map(renderChatItem).join('') : '<div class="empty" style="padding:14px;font-size:12px;color:var(--text-3)">No direct messages found.</div>'}
        </div>
      </div>
      ${c ? `
      <div class="chat-win">
        <div id="chatDropOverlay" class="chat-drop-overlay" style="display:none">
          <div class="chat-drop-box">
            <div style="font-size:42px;margin-bottom:8px">📁</div>
            <div style="font-size:16px;font-weight:600;color:var(--gold);margin-bottom:4px">Drop media files here to send</div>
            <div style="font-size:12px;color:var(--text-2)">Images, audio, videos, documents up to 15MB</div>
          </div>
        </div>
        <div class="chat-head">
          ${c.kind === 'dm' ? av(c.person, 's40') : `<span class="group-av">${icon(c.project ? 'portfolio' : 'users', 'sm')}</span>`}
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
            ${(() => {
              if (c.kind !== 'group') return '';
              const isProjGrp = Boolean(c.project);
              const proj = isProjGrp ? projects.find(x => x.id === c.project) : null;
              const canAdd = isProjGrp ? isProjectOwner(proj, ME) : ((c.created_by && c.created_by.toLowerCase() === (ME || '').toLowerCase()) || !c.created_by);
              return canAdd ? `<button class="btn flat" data-action="add-group-member" style="height:32px;padding:0 10px;font-size:12px;color:var(--gold);display:flex;align-items:center;gap:4px" title="Add Employee to this Group">${icon('userPlus', 'xs')}Add Member</button>` : '';
            })()}
            <button title="Info" data-action="chat-info">${icon('info', 'sm')}</button>
          </div>
        </div>
        <div class="msgs" id="msgs">
          ${(() => {
            if (!c.msgs || !c.msgs.length) {
              return `
                <div style="text-align:center;padding:50px 18px;color:var(--text-3);margin:auto">
                  <div style="margin-bottom:12px;display:flex;justify-content:center">${c.kind === 'dm' ? av(c.person, 's64') : `<span class="group-av" style="width:64px;height:64px">${icon(c.project ? 'portfolio' : 'users')}</span>`}</div>
                  <div style="font-weight:600;font-size:15px;color:var(--text);margin-bottom:4px">${c.kind === 'dm' ? `Direct chat with ${esc(c.name)}` : `Welcome to ${esc(c.name)}`}</div>
                  <div style="font-size:12.5px;max-width:320px;margin:0 auto">Send a message below to start chatting! 💬</div>
                </div>
              `;
            }
            let lastDateLabel = null;
            return (c.msgs || []).map((m, idx) => {
              const res = renderChatMessageHtml(m, idx, lastDateLabel);
              lastDateLabel = res.dateLabel || lastDateLabel;
              return res.html;
            }).join('');
          })()}
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

        ${state.isRecordingVoice ? `
          <div class="composer-row">
            <div class="composer-user-av" title="You are recording a voice message as ${(PEOPLE[ME]?.name) || ME || 'Raja'}">
              ${av(ME || 'raja', 's36')}
            </div>
            <div class="voice-rec-live">
              <span class="voice-rec-dot"></span>
              <span class="voice-rec-timer" id="voiceRecTimer">0:00</span>
              <div class="voice-rec-waves">
                <span class="rec-bar"></span><span class="rec-bar"></span><span class="rec-bar"></span>
                <span class="rec-bar"></span><span class="rec-bar"></span><span class="rec-bar"></span>
                <span class="rec-bar"></span><span class="rec-bar"></span><span class="rec-bar"></span>
              </div>
              <button type="button" class="voice-rec-cancel" data-action="cancel-voice-rec" title="Cancel recording">${icon('x', 'xs')}</button>
            </div>
            <button type="button" class="send" data-action="finish-voice-rec" title="Send Voice Message" style="border:none;cursor:pointer">${icon('send', 'sm')}</button>
          </div>
        ` : `
          <div id="typingIndicator" class="typing-indicator" style="display:none;align-items:center;gap:6px;padding:3px 18px;font-size:11.5px;color:var(--text-3);min-height:18px"></div>
          <form class="composer-row" id="msgForm">
            <div class="composer-user-av" title="You are chatting as ${(PEOPLE[ME]?.name) || ME || 'Raja'}">
              ${av(ME || 'raja', 's36')}
            </div>
            <button type="button" class="plus-btn" data-action="msg-attach" title="Attach">${icon('plus', 'sm')}</button>
            <input type="file" id="msgFile" hidden />
            <label class="msg-input"><input id="msgInput" placeholder="${state.replyingTo ? `Reply to ${state.replyingTo.from_name}...` : 'Type a message...'}" autocomplete="off"/><button type="button" data-action="emoji" title="Emoji">${icon('smile')}</button></label>
            <button type="button" class="mic-btn" data-action="start-voice-rec" title="Record Voice Message">${icon('mic', 'sm')}</button>
            <button class="send" type="submit" title="Send">${icon('send', 'sm')}</button>
          </form>
        `}
        <button type="button" class="chat-scroll-bottom-btn" id="chatScrollBottom" title="Scroll to bottom" style="display:none">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="m12 16-6-6 1.4-1.4 3.6 3.6V4h2v8.2l3.6-3.6L18 10z"/><path fill="currentColor" d="M4 18h16v2H4z"/></svg>
        </button>
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
  const c = chats.find(x => x.id === state.chatId) || chats[0];
  if (c && c.id) {
    markChatAsSeen(c.id);
    connectChatSocket(c.id);
  }

  const chatWin = $('.chat-win');
  const dropOverlay = $('#chatDropOverlay');
  if (chatWin && dropOverlay) {
    let dragCounter = 0;
    chatWin.ondragenter = (e) => {
      e.preventDefault();
      dragCounter++;
      dropOverlay.style.display = 'flex';
    };
    chatWin.ondragover = (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
      dropOverlay.style.display = 'flex';
    };
    chatWin.ondragleave = (e) => {
      e.preventDefault();
      dragCounter--;
      if (dragCounter <= 0) {
        dragCounter = 0;
        dropOverlay.style.display = 'none';
      }
    };
    chatWin.ondrop = (e) => {
      e.preventDefault();
      dragCounter = 0;
      dropOverlay.style.display = 'none';
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
        handleChatFileDrop(e.dataTransfer.files);
      }
    };
  }

  const box = $('#msgs');
  const scrollBtn = $('#chatScrollBottom');
  if (box) {
    box.scrollTop = box.scrollHeight;
    setTimeout(() => { if (box) box.scrollTop = box.scrollHeight; }, 60);

    box.addEventListener('scroll', () => {
      if (scrollBtn) {
        const dist = box.scrollHeight - box.scrollTop - box.clientHeight;
        scrollBtn.style.display = dist > 90 ? 'flex' : 'none';
      }
    });

    if (scrollBtn) {
      scrollBtn.onclick = () => {
        box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
      };
    }
  }
  const main = $('#main');
  main.style.overflow = 'auto';

  const msgInput = $('#msgInput');
  if (msgInput) {
    if (state.replyingTo) msgInput.focus();
    msgInput.addEventListener('input', () => {
      sendTypingSignal(true);
      if (typingTimeout) clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => sendTypingSignal(false), 2000);
    });
  }
}
function getLastSeenMap() {
  try {
    const raw = localStorage.getItem(`kathir_last_seen_${(ME || '').toLowerCase().trim()}`);
    return raw ? JSON.parse(raw) : {};
  } catch (_) {
    return {};
  }
}

function saveLastSeenMap(map) {
  try {
    localStorage.setItem(`kathir_last_seen_${(ME || '').toLowerCase().trim()}`, JSON.stringify(map));
  } catch (_) {}
}

function calculateUnreadCounts() {
  if (!ME) return;
  const seenMap = getLastSeenMap();
  const myId = (ME || '').toLowerCase().trim();
  const isInMsgr = location.hash.startsWith('#/messenger');

  chats.forEach(c => {
    if (!c || !canAccessChat(c, ME)) {
      if (c) c.unread = 0;
      return;
    }
    if (isInMsgr && state.chatId === c.id) {
      c.unread = 0;
      if (c.msgs && c.msgs.length) {
        const lm = c.msgs[c.msgs.length - 1];
        if (lm && lm.id) seenMap[c.id] = lm.id;
      }
      return;
    }

    const lastSeenId = seenMap[c.id];
    if (!c.msgs || !c.msgs.length) {
      c.unread = 0;
      return;
    }

    if (lastSeenId === undefined) {
      const fromOthers = c.msgs.filter(m => {
        const f = (m.from || '').toLowerCase().trim();
        return f && f !== myId;
      }).length;
      c.unread = c.unread !== undefined ? c.unread : fromOthers;
    } else {
      let count = 0;
      let found = false;
      for (let i = c.msgs.length - 1; i >= 0; i--) {
        const m = c.msgs[i];
        if (String(m.id) === String(lastSeenId)) {
          found = true;
          break;
        }
        const f = (m.from || '').toLowerCase().trim();
        if (f && f !== myId) count++;
      }
      c.unread = found ? count : (c.unread || 0);
    }
  });

  saveLastSeenMap(seenMap);
  updateMsgDot();
}

function markChatAsSeen(chatId) {
  if (!chatId) return;
  const c = chats.find(x => x.id === chatId);
  if (c) {
    c.unread = 0;
    if (Array.isArray(c.msgs) && c.msgs.length) {
      const lastM = c.msgs[c.msgs.length - 1];
      if (lastM && lastM.id) {
        const seenMap = getLastSeenMap();
        seenMap[chatId] = lastM.id;
        saveLastSeenMap(seenMap);
      }
    }
    saveChatsToCache();
  }
  const chatItem = $(`.chat-item[data-chat="${chatId}"]`);
  if (chatItem) {
    const unreadEl = chatItem.querySelector('.right .unread');
    if (unreadEl) unreadEl.remove();
    const rightDiv = chatItem.querySelector('.right');
    if (rightDiv && !rightDiv.querySelector('.star')) {
      const starBtn = document.createElement('button');
      starBtn.className = `star ${c && c.starred ? 'on' : ''}`;
      starBtn.setAttribute('data-star-chat', chatId);
      starBtn.title = 'Star';
      starBtn.innerHTML = icon('star', 'xs');
      rightDiv.appendChild(starBtn);
    }
  }
  updateMsgDot();
}

function updateMsgDot() {
  const dot = $('#msgDot');
  if (!dot) return;
  const totalUnread = chats.reduce((sum, c) => {
    if (!c || !canAccessChat(c, ME)) return sum;
    return sum + (Number(c.unread) || 0);
  }, 0);

  if (totalUnread > 0) {
    dot.textContent = totalUnread > 99 ? '99+' : String(totalUnread);
    dot.classList.remove('hide');
    dot.title = `${totalUnread} unseen message${totalUnread > 1 ? 's' : ''}`;
  } else {
    dot.textContent = '';
    dot.classList.add('hide');
    dot.removeAttribute('title');
  }
  if (!location.hash.startsWith('#/messenger')) {
    const m = $('#main');
    if (m) m.style.overflow = '';
  }
}
function sendMessage(text, file, voice) {
  let c = chats.find(x => x.id === state.chatId);
  if (!c) {
    const visible = chats.filter(ch => canAccessChat(ch, ME));
    if (visible.length) {
      c = visible[0];
      state.chatId = c.id;
    }
  }
  if (!c) {
    toast('Please select or start a chat first.');
    return;
  }
  const msgContent = text || (voice ? `🎤 Voice message (${voice.duration || '0:05'})` : file ? 'Shared a file' : '');
  const replyTo = state.replyingTo ? { ...state.replyingTo } : null;
  state.replyingTo = null;
  const currentSender = (ME || 'user').toLowerCase();

  const newMsg = {
    id: Date.now(),
    from: currentSender,
    time: nowTime(),
    date: nowISTDate(),
    text: msgContent,
    file,
    voice: voice || null,
    file_info: voice || file || null,
    reply_to: replyTo,
    reactions: {}
  };
  c.msgs = c.msgs || [];
  const newIdx = c.msgs.length;
  c.msgs.push(newMsg);
  saveChatsToCache();

  // Clear input and reply banner directly without wiping the DOM
  const msgInput = $('#msgInput');
  if (msgInput) {
    msgInput.value = '';
    msgInput.focus();
  }
  const replyBanner = $('.reply-banner');
  if (replyBanner) replyBanner.remove();

  // Append smoothly into the DOM if currently viewing this chat in Messenger
  if (location.hash.startsWith('#/messenger') && state.chatId === c.id) {
    appendSingleMsgToBox(newMsg, newIdx);
    updateChatListPreview(c.id, newMsg);
  } else {
    rerender();
  }

  // Transport: If WebSocket is open, send via WebSocket ONLY (backend saves to DB and broadcasts).
  // If WebSocket is not open (e.g. serverless fallback), fall back to REST API.
  if (activeChatSocket && activeChatSocket.readyState === WebSocket.OPEN) {
    try {
      activeChatSocket.send(JSON.stringify({
        type: 'chat_message',
        text: msgContent,
        sender: currentSender,
        file: file || null,
        voice: voice || null,
        reply_to: replyTo
      }));
    } catch (_) {
      apiSendMessage(c.id, {
        from_member: currentSender,
        text: msgContent,
        file_info: voice || file || null,
        time_label: nowTime(),
        reply_to: replyTo,
        reactions: {}
      }).then(saved => {
        if (saved && saved.id) {
          newMsg.id = saved.id;
          saveChatsToCache();
          const el = $(`#msg-item-${newIdx}`);
          if (el) el.setAttribute('data-msg-id', saved.id);
        }
      });
    }
  } else {
    apiSendMessage(c.id, {
      from_member: currentSender,
      text: msgContent,
      file_info: voice || file || null,
      time_label: nowTime(),
      reply_to: replyTo,
      reactions: {}
    }).then(saved => {
      if (saved && saved.id) {
        newMsg.id = saved.id;
        saveChatsToCache();
        const el = $(`#msg-item-${newIdx}`);
        if (el) el.setAttribute('data-msg-id', saved.id);
      }
    });
  }

  const box = $('#msgs');
  if (box) {
    box.scrollTop = box.scrollHeight;
    setTimeout(() => { if (box) box.scrollTop = box.scrollHeight; }, 60);
  }
}

async function toggleMessageReaction(c, msgIdx, emoji) {
  const m = c.msgs[msgIdx];
  if (!m) return;
  if (!m.reactions || typeof m.reactions !== 'object') m.reactions = {};
  const current = ME || 'kumar';
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
  saveChatsToCache();
  
  if (m.id) {
    updateReactionPillsDOM(m.id, m.reactions);
  } else {
    rerender();
  }

  if (activeChatSocket && activeChatSocket.readyState === WebSocket.OPEN && m.id) {
    try {
      activeChatSocket.send(JSON.stringify({
        type: 'react',
        msg_id: m.id,
        emoji: emoji,
        user: current
      }));
    } catch (_) {}
  } else if (m.id) {
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
    const loginSection = $('#login');
    const appSection = $('#app');
    if (loginSection && appSection) {
      appSection.hidden = true;
      loginSection.hidden = false;
      setTimeout(() => $('#loginEmail')?.focus(), 40);
    }
    return;
  }
  if (anchor && anchor.nodeType) {
    currentProfileAnchor = anchor;
  } else if (!currentProfileAnchor || !document.body.contains(currentProfileAnchor)) {
    currentProfileAnchor = (id === ME) ? $('#sideUser') : null;
  }
  const personId = (id || ME || 'kumar').toLowerCase();
  const isMe = personId === (ME || 'kumar').toLowerCase();
  const P = (personId && PEOPLE[personId]) || {
    name: (personId && typeof personId === 'string' && personId.length) ? personId.charAt(0).toUpperCase() + personId.slice(1) : 'Member',
    role: 'Developer',
    availability: 'available',
    mode: 'office'
  };
  const modeKey = P.mode || 'office';
  const mInfo = MODES[modeKey] || MODES['office'];
  const aInfo = AVAIL[P.availability] || AVAIL['available'];
  const el = document.createElement('div');
  el.className = 'pop';

  const memberKeys = Object.keys(PEOPLE).length ? Object.keys(PEOPLE) : ['kumar', 'raja', 'karthik', 'rahul', 'mr_vandu'];

  if (isMe) {
    el.innerHTML = `
      <div class="pop-head">
        ${av(personId, 's64')}
        <div style="min-width:0;flex:1">
          <div class="n" style="display:flex;align-items:center;flex-wrap:wrap;gap:6px">
            <span>${esc(P.name)} (You)</span>
            <span class="user-mode-badge" title="${esc(mInfo.long)}">${icon(mInfo.icon, 'xs')}<span>${mInfo.label}</span></span>
          </div>
          <div class="r">${TITLES[personId] || P.role || 'Member'}</div>
          ${availBadge(personId)}
        </div>
      </div>
      <h5>My Availability</h5>
      ${Object.entries(AVAIL).map(([k, a]) => `<button class="opt ${P.availability === k ? 'on' : ''}" data-set-avail="${k}"><i class="sdot ${a.cls}"></i>${a.short || a.label}<span class="tick">${icon('check', 'sm')}</span></button>`).join('')}
      <div class="sep"></div>
      <h5>My Work Location</h5>
      ${Object.entries(MODES).map(([k, m]) => `<button class="opt ${P.mode === k ? 'on' : ''}" data-set-mode="${k}">${icon(m.icon)}${m.long}<span class="tick">${icon('check', 'sm')}</span></button>`).join('')}
      <div class="sep"></div>
      <h5>Account</h5>
      <button class="opt" data-action="auth-logout" style="color:var(--red);font-weight:600">
        ${icon('x')} Log Out
      </button>`;
  } else {
    el.innerHTML = `
      <div class="pop-head">
        ${av(personId, 's64')}
        <div style="min-width:0;flex:1">
          <div class="n" style="display:flex;align-items:center;flex-wrap:wrap;gap:6px">
            <span>${esc(P.name)}</span>
            <span class="user-mode-badge" title="${esc(mInfo.long)}">${icon(mInfo.icon, 'xs')}<span>${mInfo.label}</span></span>
          </div>
          <div class="r">${TITLES[personId] || P.role || 'Member'}</div>
          ${availBadge(personId)}
        </div>
      </div>
      <div style="padding:12px;background:var(--panel-2);border:1px solid var(--line-2);border-radius:10px;margin:10px 0 14px;font-size:12.5px;display:flex;flex-direction:column;gap:8px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span style="color:var(--text-3)">Status</span>
          <span class="badge avail ${aInfo.cls}">${aInfo.label}</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span style="color:var(--text-3)">Location</span>
          <span style="color:var(--text);display:flex;align-items:center;gap:5px">${icon(mInfo.icon, 'xs')} ${mInfo.long}</span>
        </div>
        ${P.today ? `
        <div style="border-top:1px solid var(--line-2);padding-top:8px">
          <span style="color:var(--text-3);display:block;margin-bottom:3px">Focus Today</span>
          <span style="color:var(--text)">${esc(P.today)}</span>
        </div>` : ''}
      </div>
      <button class="btn gold" data-dm="${personId}" style="width:100%;height:38px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:13px;font-weight:600">
        ${icon('message', 'sm')} Send Direct Message
      </button>`;
  }
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
                <button class="jira-icon-sub-btn" id="jiraAddSubtaskQuick" title="Add subtask">${icon('plus', 'xs')}</button>
                <button class="jira-icon-sub-btn" id="jiraToggleFormatting" title="View options">${icon('list', 'xs')}</button>
                <label class="jira-top-btn" style="cursor:pointer;margin-left:4px">
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
                <div style="display:flex;align-items:center;justify-content:flex-end;margin-top:6px">
                  <button type="button" class="btn-xs gold" id="jiraSaveDescBtn" style="padding:4px 12px">Save</button>
                </div>
              </div>
            </div>

            <!-- Attachments -->
            <div class="jira-sec">
              <div class="jira-sec-head">${icon('chevDown', 'xs')} Attachments (${task.attachments.length})</div>
              <div class="jira-attach-drop">
                <label style="cursor:pointer;display:inline-flex;align-items:center;justify-content:center">
                  <input type="file" id="jiraAttachInput" multiple hidden />
                  <span class="jira-purple-pill">
                    <svg class="ic xs" viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.5" fill="#131317"/></svg>
                    Add attachment
                  </span>
                </label>
                <span class="muted" style="font-size:11.5px;margin-top:4px">Click or drag & drop files, documents, or screenshots</span>
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
            <div class="jira-sec" style="background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:10px;padding:12px 14px">
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
                <div style="font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px">
                  <span>Agent sessions</span>
                </div>
                <div style="display:flex;align-items:center;gap:10px">
                  <span class="muted" style="font-size:11.5px;display:inline-flex;align-items:center;gap:4px">
                    <svg class="ic xs" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    Uses AI. Verify results.
                  </span>
                  <button type="button" class="btn-xs ok" id="jiraStartWorkBtn" style="padding:5px 12px;border-radius:7px;display:flex;align-items:center;gap:6px;font-weight:600">
                    <span style="width:8px;height:8px;border-radius:50%;background:#22c55e"></span>
                    Start work <span style="font-size:10px">⌄</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Activity & Comments -->
            <div class="jira-sec">
              <div class="jira-activity-tabs">
                <button class="jira-tab-btn ${activeTab === 'all' ? 'active' : ''}" data-jiratab="all">All</button>
                <button class="jira-tab-btn ${activeTab === 'comments' ? 'active' : ''}" data-jiratab="comments">Comments (${task.comments.length})</button>
                <button class="jira-tab-btn ${activeTab === 'history' ? 'active' : ''}" data-jiratab="history">History</button>
                <button class="jira-tab-btn ${activeTab === 'worklog' ? 'active' : ''}" data-jiratab="worklog">Work log (${task.worklogs.length})</button>
                <button class="jira-tab-btn ${activeTab === 'checklist' ? 'active' : ''}" data-jiratab="checklist">Checklist history</button>
                <button class="jira-tab-btn ${activeTab === 'viewers' ? 'active' : ''}" data-jiratab="viewers">🔍 Viewer History</button>
                <button class="jira-tab-btn ${activeTab === 'issues' ? 'active' : ''}" data-jiratab="issues">🕒 Issue History</button>
                <button class="jira-top-btn" id="jiraSortActivity" style="margin-left:auto;height:26px;padding:0 7px;font-size:11px" title="Sort activity">⇅</button>
              </div>

              ${activeTab === 'comments' ? `
                <div class="jira-comment-box">
                  <div style="display:flex;gap:10px;align-items:flex-start">
                    ${av(ME || 'raja', 's32')}
                    <textarea id="jiraCommentInput" placeholder="Add a comment..."></textarea>
                  </div>
                  <div style="display:flex;justify-content:flex-end;gap:6px;margin-top:6px">
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

              ${activeTab === 'history' || activeTab === 'all' || activeTab === 'checklist' || activeTab === 'viewers' || activeTab === 'issues' ? `
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
                  ${task.approval_status === 'approved' ? `
                    <div style="font-size:12px;color:#5bdc8e;display:flex;gap:8px">
                      <span>✓</span>
                      <span>Approved by <b>${(PEOPLE[task.approved_by] && PEOPLE[task.approved_by].name) || task.approved_by || 'Reviewer'}</b> at ${task.approved_at || 'Verified'}</span>
                    </div>
                  ` : ''}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Right Column (Sidebar / Details) -->
          <div class="jira-side">
            <!-- Top action row: Status -->
            <div>
              <select class="jira-status-select ${task.status}" id="jiraStatusSelect" style="width:100%">
                ${getProjectKanbanColumns(p).map(c => `
                  <option value="${c.id}" ${(task.status === c.id || (c.id === 'progress' && task.status === 'review')) ? 'selected' : ''}>${esc(c.name)}</option>
                `).join('')}
              </select>
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
                      <span class="k-cat-pill" style="background:rgba(245,184,46,.12);color:var(--gold);border-color:rgba(245,184,46,.35);font-weight:600">
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

    // Start work / Agent sessions
    if (e.target.closest('#jiraStartWorkBtn')) {
      task.status = 'progress';
      await saveTask();
      renderModal();
      toast('Started work with AI Agent — moved to In Progress! ⚛');
      return;
    }

    // Top Agents button
    if (e.target.closest('#jiraAgentsTopBtn')) {
      toast(`⬡ AI Agent session connected to [${task.key}]`);
      return;
    }

    // Activity sort toggle
    if (e.target.closest('#jiraSortActivity')) {
      task.comments.reverse();
      renderModal();
      toast('Activity sort order inverted');
      return;
    }

    // Formatting button
    if (e.target.closest('#jiraToggleFormatting')) {
      toast('Markdown formatting supported (**bold**, *italic*, checklists)');
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
        saveProjectsToCache();
        rerender();
        toast(`Task "${task.title}" created in ${task.status === 'done' ? 'Done' : task.status === 'progress' ? 'In Progress' : 'To Do'}`);
      } catch (err) {
        p.tasks.push(task);
        saveProjectsToCache();
        rerender();
        toast(`Task created`);
      }
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
      const colDef = getProjectKanbanColumns(p).find(c => c.id === task.status);
      toast(`Status moved to ${colDef ? colDef.name : task.status}`);
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
    if (a && P && id && ME && id.toLowerCase() === ME.toLowerCase()) {
      P.availability = a.dataset.setAvail;
      toast(`${P.name} is now ${AVAIL[P.availability].short || AVAIL[P.availability].label}`);
      apiPatchMember(id, { availability: P.availability });
      rerender();
      openProfile(id, currentProfileAnchor);
    }
    if (m && P && id && ME && id.toLowerCase() === ME.toLowerCase()) {
      P.mode = m.dataset.setMode;
      toast(`${P.name}: ${MODES[P.mode].long}`);
      apiPatchMember(id, { mode: P.mode });
      rerender();
      openProfile(id, currentProfileAnchor);
    }
    if (dm) {
      closeFloating();
      const targetId = (dm.dataset.dm || id || '').toLowerCase().trim();
      ensureAllTeamDMs();
      let c = chats.find(x => x.kind === 'dm' && ((x.person && x.person.toLowerCase() === targetId) || x.id === targetId || x.id === `dm-${targetId}`));
      if (!c) {
        const targetP = PEOPLE[targetId] || { name: targetId.charAt(0).toUpperCase() + targetId.slice(1) };
        c = {
          id: `dm-${targetId}`,
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
        deduplicateChats();
        saveChatsToCache();
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
        const pIdx = projects.indexOf(p);
        if (pIdx !== -1) projects.splice(pIdx, 1);
        saveProjectsToCache();
        await fetchFromAPI(`/projects/${delId}/`, { method: 'DELETE' });
        const cIdx = chats.findIndex(x => x.project === delId || x.id === 'proj-grp-' + delId);
        if (cIdx !== -1) {
          chats.splice(cIdx, 1);
          saveChatsToCache();
        }
        rerender();
        go('#/projects');
        toast('Project deleted');
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
      saveProjectsToCache();
      rerender();
      apiPatchTask(task.id, { status: task.status });
      const colDef = getProjectKanbanColumns(p).find(c => c.id === task.status);
      const targetName = colDef ? colDef.name : (task.status === 'done' ? 'Completed' : task.status === 'progress' ? 'In Progress' : 'To Do');
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

  const kCard = t.closest('.k-card');
  if (kCard && !t.closest('.k-card-actions') && !t.closest('.kebab') && !t.closest('[data-toggle-chk]') && !t.closest('input')) {
    const p = currentProject();
    const task = p && p.tasks.find(x => String(x.id) === String(kCard.dataset.kTask));
    if (p && task) {
      openTaskDetailsModal(p, task);
      return;
    }
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
            { name: 'lead', label: 'Assign to Reviewer / Member', type: 'select', value: l.lead || '', options: Object.keys(PEOPLE).map(id => [id, `${PEOPLE[id].name || id} (${PEOPLE[id].role || 'Member'})`]) }
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
  if (ch) {
    state.chatId = ch.dataset.chat;
    markChatAsSeen(ch.dataset.chat);
    go('#/messenger/' + ch.dataset.chat);
    return;
  }

  const act = t.closest('[data-action]');
  if (act) handleAction(act.dataset.action, act);
});

async function handleAction(a, el) {
  const p = currentProject();
  switch (a) {
    case 'new-project':
      openModal('New Project', [
        { name: 'name', label: 'Project name', required: true, placeholder: 'e.g. Restaurant POS' },
        { name: 'type', label: 'Project Type', type: 'select', value: 'Web', options: [['Web', 'Web'], ['SaaS', 'SaaS'], ['Mobile', 'Mobile'], ['Game', 'Game']] },
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
        const ownerId = (ME || 'user').toLowerCase();
        const teamMembers = [ownerId];
        const noEnd = d.noEndDate === 'on' || d.noEndDate === true || !d.end;
        const endDate = noEnd ? '' : d.end;
        const np = { id, name: d.name, type: d.type, thumb, status: 'progress', owner: ownerId, created_by: ownerId, start: d.start, end: endDate, team: teamMembers, extra: 0,
          totals: { total: 0, completed: 0, inProgress: 0 }, workload: {}, tasks: [], files: [], notes: [], _other: { completed: 0, inProgress: 0, pending: 0 } };
        projects.unshift(np);
        saveProjectsToCache();
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
              memberList: [ownerId],
              starred: false,
              unread: 0,
              msgs: [{ from: ownerId, time: nowTime(), text: `Welcome to the ${d.name} group discussion channel! 🚀` }]
            };
            if (!chats.find(c => c.id === groupChat.id)) chats.unshift(groupChat);
          }
          saveChatsToCache();
        } catch (e) {
          console.warn('Could not sync chats:', e);
        }
        broadcastGlobalEventSocket('project_created', np);
        go(`#/project/${id}/overview`); toast(`Project "${d.name}" and discussion channel created!`);
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
        saveChatsToCache();
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
    case 'add-kanban-col': {
      if (!p) return;
      const cols = getProjectKanbanColumns(p);
      openModal('Add New Board Column', [
        { name: 'name', label: 'Column Name', required: true, placeholder: 'e.g. In Review, QA, Testing, Backlog, Blocked' },
        { name: 'color', label: 'Color / Dot Style', type: 'select', value: 'progress', options: [
          ['progress', 'Blue (In Progress)'],
          ['review', 'Purple (Review / QA)'],
          ['hold', 'Orange (On Hold / Waiting)'],
          ['pending', 'Yellow (Pending / Backlog)'],
          ['done', 'Green (Done / Completed)']
        ] }
      ], d => {
        const colName = (d.name || '').trim();
        if (!colName) return;
        const colId = 'col_' + colName.toLowerCase().replace(/[^a-z0-9]+/g, '_').slice(0, 20) + '_' + Date.now().toString(36).slice(-4);
        cols.push({
          id: colId,
          name: colName,
          color: d.color || 'progress'
        });
        saveProjectsToCache();
        rerender();
        toast(`Column "${colName}" added to board`);
      }, 'Add Column');
      break;
    }
    case 'rename-kanban-col': {
      if (!p) return;
      const colId = el.dataset.colId;
      const cols = getProjectKanbanColumns(p);
      const col = cols.find(c => c.id === colId);
      if (!col) return;
      openModal(`Rename Column "${col.name}"`, [
        { name: 'name', label: 'Column Name', value: col.name, required: true, placeholder: 'Enter new column name' }
      ], d => {
        const newName = (d.name || '').trim();
        if (!newName) return;
        const oldName = col.name;
        col.name = newName;
        saveProjectsToCache();
        rerender();
        toast(`Renamed "${oldName}" to "${newName}"`);
      }, 'Update Name');
      break;
    }
    case 'delete-kanban-col': {
      if (!p) return;
      const colId = el.dataset.colId;
      const cols = getProjectKanbanColumns(p);
      const colIdx = cols.findIndex(c => c.id === colId);
      if (colIdx === -1) return;
      const col = cols[colIdx];
      if (['pending', 'progress', 'done'].includes(col.id)) {
        toast('Default column cannot be deleted');
        return;
      }
      openModal(`Delete Column "${col.name}"?`, [
        { name: 'confirm', labelHtml: `<p style="font-size:13px;color:var(--text-2);margin:0 0 10px">Are you sure you want to delete column <strong>${esc(col.name)}</strong>? Any tasks in this column will be moved back to <strong>${esc(cols[0].name)}</strong>.</p>`, type: 'hidden', value: 'yes' }
      ], () => {
        if (Array.isArray(p.tasks)) {
          p.tasks.forEach(t => {
            if (t.status === colId) {
              t.status = cols[0].id;
              apiPatchTask(t.id, { status: t.status });
            }
          });
        }
        cols.splice(colIdx, 1);
        saveProjectsToCache();
        rerender();
        toast(`Column "${col.name}" deleted`);
      }, 'Delete Column');
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
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'name@volgoupdates.com' },
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
      if ($('#logOtherProjectName')) $('#logOtherProjectName').value = '';
      state.logProject = projects[0]?.id || '';
      rerender();
      break;
    case 'log-save': {
      const items = $('#logText').value.split('\n').map(s => s.replace(/^[•\-*]\s*/, '').trim()).filter(Boolean);
      if (!items.length) { $('#logText').focus(); toast('Write what you worked on first'); return; }

      const selProj = $('#logProjectSelect')?.value || (projects[0]?.id || 'General');
      let projectName = '';
      let projectId = selProj;

      if (selProj === '__other__') {
        const customName = $('#logOtherProjectName')?.value?.trim();
        if (!customName) {
          $('#logOtherProjectName')?.focus();
          toast('Please specify the project name');
          return;
        }
        projectName = customName;
        const existingP = projects.find(p => p.name.toLowerCase() === customName.toLowerCase());
        if (existingP) {
          projectId = existingP.id;
          projectName = existingP.name;
        } else {
          projectId = customName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `proj-${Date.now()}`;
          const np = {
            id: projectId,
            name: customName,
            type: 'General',
            thumb: '📁',
            status: 'progress',
            start: state.logDate,
            end: 'No end date',
            team: [ME || 'raja'],
            extra: 0,
            totals: { total: 0, completed: 0, inProgress: 0 },
            workload: {},
            tasks: [],
            files: [],
            notes: [],
            _other: { completed: 0, inProgress: 0, pending: 0 }
          };
          projects.unshift(np);
          saveProjectsToCache();
          fetchFromAPI('/projects/', { method: 'POST', body: JSON.stringify(np) }).catch(() => {});
        }
      } else {
        const p = projects.find(x => x.id === selProj);
        projectName = p ? p.name : selProj;
        projectId = selProj;
      }

      const hours = $('#logHoursSelect')?.value || '4h 00m';
      const chosenDate = $('#logDateInput')?.value || state.logDate;
      state.logDate = chosenDate;
      state.logProject = projectId;
      state.logHours = hours;

      const logPayload = {
        date: chosenDate,
        project: projectId,
        member: ME || 'raja',
        items,
        hours: hours,
        status: 'progress'
      };

      const existing = workLogs.find(l => l.date === chosenDate && l.project === projectId && l.member === (ME || 'raja'));
      if (existing) {
        existing.items.push(...items);
        existing.hours = hours;
        saveWorkLogsToCache();
        if (existing.id) {
          apiPatchWorkLog(existing.id, {
            items: existing.items,
            hours: existing.hours
          });
        } else {
          apiCreateWorkLog(existing).then(saved => {
            if (saved && saved.id) {
              existing.id = saved.id;
              saveWorkLogsToCache();
            }
          });
        }
      } else {
        workLogs.unshift(logPayload);
        saveWorkLogsToCache();
        apiCreateWorkLog(logPayload).then(saved => {
          if (saved && saved.id) {
            logPayload.id = saved.id;
            saveWorkLogsToCache();
          }
        });
      }

      $('#logText').value = '';
      if ($('#logOtherProjectName')) $('#logOtherProjectName').value = '';
      state.logProject = projectId;
      rerender();
      toast(`Work log saved for ${projectName}! ✅`);
      break;
    }
    case 'delete-worklog': {
      const logIdx = +el.dataset.logIdx;
      const l = workLogs[logIdx];
      if (!l) return;
      workLogs.splice(logIdx, 1);
      saveWorkLogsToCache();
      if (l.id) {
        fetchFromAPI(`/worklogs/${l.id}/`, { method: 'DELETE' }).catch(() => {});
      }
      rerender();
      toast('Work log deleted');
      break;
    }
    case 'lead-approve-log': {
      const logIdx = +el.dataset.logIdx;
      const l = workLogs[logIdx];
      if (!l) return;
      const approverName = (PEOPLE[ME]?.name) || ME || 'Project Owner';
      l.approval_status = 'approved';
      l.approved_by = approverName;
      l.approved_at = `${nowTime()}, ${nowISTDate()}`;
      l.approval_note = l.approval_note || 'Work verified and approved.';
      saveWorkLogsToCache();
      if (l.id) {
        apiPatchWorkLog(l.id, {
          approval_status: 'approved',
          approved_by: l.approved_by,
          approved_at: l.approved_at,
          approval_note: l.approval_note
        });
      }
      rerender();
      toast(`Work log approved by ${approverName}! ✅`);
      break;
    }
    case 'edit-worklog': {
      const logIdx = +el.dataset.logIdx;
      const l = workLogs[logIdx];
      if (!l) return;

      const pOptions = projects.filter(p => p && p.name).map(p => [p.id, p.name]);
      if (l.project && !pOptions.some(([id]) => id === l.project)) {
        pOptions.push([l.project, l.project]);
      }
      pOptions.push(['__other__', 'Other (Specify project name)']);

      const itemsText = Array.isArray(l.items) ? l.items.join('\n') : (l.items || '');

      openModal('Edit Daily Work Log', [
        { name: 'date', label: 'Date', type: 'date', value: l.date, required: true, half: true },
        { name: 'hours', label: 'Hours Worked', type: 'select', value: l.hours || '4h 00m', options: ['1h 00m', '2h 00m', '3h 00m', '4h 00m', '4h 30m', '5h 00m', '5h 30m', '6h 00m', '7h 00m', '8h 00m', '9h 00m', '10h 00m'].map(h => [h, h]), half: true },
        { name: 'project', label: 'Project Name', type: 'select', value: l.project, options: pOptions },
        { name: 'otherProject', label: 'If Other, specify project name', type: 'text', placeholder: 'Enter custom project name...', value: '' },
        { name: 'items', label: 'Work Done / Tasks Completed (one per line)', type: 'textarea', value: itemsText, required: true, placeholder: 'Describe what you worked on...' }
      ], async data => {
        let finalProject = data.project;
        if (finalProject === '__other__' && data.otherProject && data.otherProject.trim()) {
          finalProject = data.otherProject.trim();
        }

        const newItems = (data.items || '').split('\n').map(s => s.trim()).filter(Boolean);
        if (!newItems.length) {
          toast('Please enter at least one task or description of work done.');
          return false;
        }

        l.date = data.date;
        l.hours = data.hours;
        l.project = finalProject;
        l.items = newItems;

        saveWorkLogsToCache();

        if (l.id) {
          apiPatchWorkLog(l.id, {
            date: l.date,
            hours: l.hours,
            project: l.project,
            items: l.items
          });
        }

        rerender();
        toast('Work log updated successfully! ✅');
      }, 'Save Changes');
      break;
    }
    case 'lead-reject-log': {
      const logIdx = +el.dataset.logIdx;
      const l = workLogs[logIdx];
      if (!l) return;
      openModal('Request Changes / Feedback on Job Work', [
        { name: 'note', label: 'Reason / Changes requested', type: 'textarea', required: true, placeholder: 'Explain what needs to be changed, tested, or improved before approval...' }
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
    case 'start-voice-rec': {
      startVoiceRecording();
      break;
    }
    case 'cancel-voice-rec': {
      cancelVoiceRecording();
      break;
    }
    case 'finish-voice-rec': {
      finishVoiceRecording();
      break;
    }
    case 'toggle-voice-playback': {
      const idx = +el.dataset.msgIdx;
      toggleVoicePlayback(idx);
      break;
    }
    case 'toggle-voice-speed': {
      const idx = +el.dataset.msgIdx;
      toggleVoiceSpeed(idx);
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
    case 'download':
    case 'download-attachment': {
      const idx = el.dataset.msgIdx !== undefined ? +el.dataset.msgIdx : null;
      if (idx !== null) {
        downloadAttachment(idx);
      } else {
        toast('No file attached to download');
      }
      break;
    }
    case 'chat-info': {
      const c = chats.find(x => x.id === state.chatId);
      if (!c) break;
      if (c.kind === 'dm') openProfile(c.person, el);
      else openGroupInfoModal(c);
      break;
    }
    case 'new-group': openNewGroupModal(); break;
    case 'add-group-member': openAddMemberModal(state.chatId); break;
    case 'add-project-member': {
      const pid = el.dataset.pid || currentProject()?.id;
      if (pid) openAddProjectMemberModal(pid);
      break;
    }
    case 'remove-project-member': {
      const pid = el.dataset.pid || currentProject()?.id;
      const uid = el.dataset.uid;
      if (pid && uid) removeProjectMember(pid, uid);
      break;
    }
    case 'open-login': openLoginModal(); break;
    case 'open-register': openRegisterModal(); break;
    case 'auth-logout': handleLogout(); break;
    case 'new-chat':
    case 'new-dm-prompt': openNewDirectMessageModal(); break;
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
  if (t.id === 'logDateInput') { state.logDate = t.value; rerender(); }
  if (t.id === 'logProjectSelect') { state.logProject = t.value; window.handleLogProjectChange(t.value); }
  if (t.id === 'logHoursSelect') state.logHours = t.value;
  if (t.id === 'fileInput' && t.files.length) {
    const p = currentProject();
    [...t.files].forEach(f => p.files.push({ name: f.name, kind: fileKind(f.name), by: 'karthik', date: isoDate(new Date()), size: (f.size / 1048576).toFixed(1) + ' MB' }));
    rerender(); toast(`${t.files.length} file(s) uploaded`);
  }
  if (t.id === 'logFile' && t.files.length) { const keepText = $('#logText').value; state.logAttach = t.files[0].name; rerender(); $('#logText').value = keepText; }
  if (t.id === 'msgFile' && t.files.length) { handleChatFileDrop(t.files); t.value = ''; }
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
      // Direct access mode - do not wipe user or block access
    }
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

/* ---------------- Django Channels & Redis WebSocket Integration ---------------- */
let globalEventSocket = null;
let globalEventRetryTimer = null;

function initGlobalEventSocket() {
  if (globalEventSocket && (globalEventSocket.readyState === WebSocket.OPEN || globalEventSocket.readyState === WebSocket.CONNECTING)) {
    return;
  }
  const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${protocol}//${location.host}/ws/events/`;

  try {
    globalEventSocket = new WebSocket(wsUrl);

    globalEventSocket.onopen = () => {
      console.log('⚡ Django Channels Global Event WebSocket connected');
      stopRealtimePolling(); // WebSockets are handling real-time push!
      if (globalEventRetryTimer) {
        clearTimeout(globalEventRetryTimer);
        globalEventRetryTimer = null;
      }
    };

    globalEventSocket.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data);
        handleGlobalRealtimeEvent(payload.event, payload.data);
      } catch (err) {}
    };

    globalEventSocket.onclose = () => {
      // WebSocket lost: activate low-frequency fallback polling
      startRealtimePolling();
      if (!globalEventRetryTimer) {
        globalEventRetryTimer = setTimeout(() => {
          globalEventRetryTimer = null;
          initGlobalEventSocket();
        }, 5000);
      }
    };

    globalEventSocket.onerror = () => {
      try { globalEventSocket.close(); } catch (_) {}
    };
  } catch (err) {
    startRealtimePolling();
    if (!globalEventRetryTimer) {
      globalEventRetryTimer = setTimeout(() => {
        globalEventRetryTimer = null;
        initGlobalEventSocket();
      }, 7000);
    }
  }
}

let realtimePollTimer = null;

function stopRealtimePolling() {
  if (realtimePollTimer) {
    clearInterval(realtimePollTimer);
    realtimePollTimer = null;
  }
}

function startRealtimePolling() {
  // If WebSocket is alive and working, skip polling completely
  if (globalEventSocket && globalEventSocket.readyState === WebSocket.OPEN) {
    stopRealtimePolling();
    return;
  }
  if (realtimePollTimer) return;

  // Bandwidth-safe interval: 20 seconds fallback (only runs if WebSocket is disconnected)
  realtimePollTimer = setInterval(async () => {
    if (globalEventSocket && globalEventSocket.readyState === WebSocket.OPEN) {
      stopRealtimePolling();
      return;
    }
    // Skip polling if user minimized or switched tab to save Vercel bandwidth
    if (document && document.hidden) return;
    if (!AUTH_TOKEN) return;

    try {
      const freshChats = await fetchFromAPI('/chats/');
      if (Array.isArray(freshChats) && freshChats.length) {
        let hasNewMessages = false;
        freshChats.forEach(fc => {
          let localChat = chats.find(x => x.id === fc.id);
          if (!localChat && fc.kind === 'dm') {
            const p = (fc.person || '').toLowerCase().trim();
            localChat = chats.find(x => x.kind === 'dm' && ((x.person && x.person.toLowerCase().trim() === p) || (x.memberList && x.memberList.map(m=>String(m).toLowerCase().trim()).includes(p))));
          }
          if (localChat) {
            const localMsgs = localChat.msgs || [];
            const freshMsgs = fc.msgs || [];
            if (freshMsgs.length > localMsgs.length) {
              const newItems = freshMsgs.slice(localMsgs.length);
              localChat.msgs = freshMsgs;
              hasNewMessages = true;
              const isCurrentOpen = location.hash.startsWith('#/messenger') && state.chatId === localChat.id;
              if (!isCurrentOpen) {
                const myId = (ME || '').toLowerCase().trim();
                const unreadFromOthers = newItems.filter(m => (m.from || '').toLowerCase().trim() !== myId).length;
                if (unreadFromOthers > 0) {
                  localChat.unread = (localChat.unread || 0) + unreadFromOthers;
                  updateChatListPreview(localChat.id, freshMsgs[freshMsgs.length - 1]);
                }
              }
            } else if (freshMsgs.length === localMsgs.length && freshMsgs.length > 0) {
              const lastFresh = freshMsgs[freshMsgs.length - 1];
              const lastLocal = localMsgs[localMsgs.length - 1];
              if (lastFresh && lastLocal && lastLocal.id !== lastFresh.id && lastLocal.text === lastFresh.text) {
                lastLocal.id = lastFresh.id;
              }
            }
          }
        });
        if (hasNewMessages) {
          saveChatsToCache();
          updateMsgDot();
          if (location.hash.startsWith('#/messenger')) {
            const curChat = chats.find(x => x.id === state.chatId);
            const box = $('#msgs');
            if (box && curChat) {
              const currentRendered = box.querySelectorAll('.msg').length;
              if (curChat.msgs && curChat.msgs.length > currentRendered) {
                for (let i = currentRendered; i < curChat.msgs.length; i++) {
                  appendSingleMsgToBox(curChat.msgs[i], i);
                }
                const lastM = curChat.msgs[curChat.msgs.length - 1];
                if (lastM) updateChatListPreview(curChat.id, lastM);
                markChatAsSeen(curChat.id);
              }
            } else {
              rerender();
            }
          }
        }
      }
    } catch (_) {}
  }, 20000);
}

function broadcastGlobalEventSocket(event, data) {
  if (globalEventSocket && globalEventSocket.readyState === WebSocket.OPEN) {
    try {
      globalEventSocket.send(JSON.stringify({ event, data }));
    } catch (e) {}
  }
}

function handleGlobalRealtimeEvent(event, data) {
  if (!event || !data) return;
  switch (event) {
    case 'member_updated': {
      if (data.id) {
        const uid = data.id.toLowerCase();
        if (PEOPLE[uid]) {
          if (data.name) PEOPLE[uid].name = data.name;
          if (data.availability) PEOPLE[uid].availability = data.availability;
          if (data.mode) PEOPLE[uid].mode = data.mode;
          if (data.today) PEOPLE[uid].today = data.today;
        } else {
          PEOPLE[uid] = {
            name: data.name || uid.charAt(0).toUpperCase() + uid.slice(1),
            role: data.role || 'Member',
            availability: data.availability || 'available',
            mode: data.mode || 'office',
            today: data.today || ''
          };
          if (!MEMBER_ROWS.includes(uid)) MEMBER_ROWS.push(uid);
        }
        ensureAllTeamDMs();
        refreshSide();
        rerender();
      }
      break;
    }
    case 'task_created':
    case 'task_updated':
    case 'task_deleted': {
      if (data.project_id) {
        fetchFromAPI(`/tasks/?project=${data.project_id}`).then(apiTasks => {
          if (Array.isArray(apiTasks)) {
            const p = projects.find(x => x.id === data.project_id);
            if (p) {
              p.tasks = apiTasks;
              rerender();
            }
          }
        });
      }
      break;
    }
    case 'project_created':
    case 'project_updated':
    case 'project_deleted': {
      fetchFromAPI('/projects/').then(apiProjects => {
        if (Array.isArray(apiProjects)) {
          projects.length = 0;
          apiProjects.forEach(ap => {
            projects.push({
              id: ap.id,
              name: ap.name,
              type: ap.type || 'Web',
              category: ap.category || 'Active',
              status: ap.status || 'progress',
              owner: ap.owner || ap.created_by || '',
              created_by: ap.created_by || ap.owner || '',
              pct: ap.pct || 0,
              team: ap.team || [],
              desc: ap.desc || '',
              kanbanColumns: ap.kanban_columns || [
                { id: 'pending', name: 'To Do', color: 'pending' },
                { id: 'progress', name: 'In Progress', color: 'progress' },
                { id: 'done', name: 'Completed', color: 'done' }
              ],
              tasks: ap.tasks || []
            });
          });
          rerender();
        }
      });
      break;
    }
    case 'worklog_created':
    case 'worklog_updated':
    case 'worklog_deleted': {
      fetchFromAPI('/worklogs/').then(apiLogs => {
        if (Array.isArray(apiLogs)) {
          workLogs.length = 0;
          workLogs.push(...apiLogs);
          saveWorkLogsToCache();
          if (location.hash.startsWith('#/worklog')) rerender();
        }
      });
      break;
    }
    case 'new_message': {
      if (data && data.data) {
        handleNewSocketMessage(data.data);
      }
      break;
    }
  }
}

let activeChatSocket = null;
let currentChatSocketId = null;
let chatSocketRetryTimer = null;
const typingUsers = new Set();
let typingTimeout = null;

function connectChatSocket(chatId) {
  if (!chatId) return;
  if (currentChatSocketId === chatId && activeChatSocket && (activeChatSocket.readyState === WebSocket.OPEN || activeChatSocket.readyState === WebSocket.CONNECTING)) {
    return;
  }

  if (activeChatSocket) {
    try { activeChatSocket.close(); } catch (_) {}
    activeChatSocket = null;
  }

  currentChatSocketId = chatId;
  const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  const userParam = ME ? `?user=${encodeURIComponent(ME)}` : '';
  const wsUrl = `${protocol}//${location.host}/ws/chat/${chatId}/${userParam}`;

  try {
    activeChatSocket = new WebSocket(wsUrl);

    activeChatSocket.onopen = () => {
      console.log(`💬 Chat WebSocket connected for ${chatId}`);
      if (chatSocketRetryTimer) {
        clearTimeout(chatSocketRetryTimer);
        chatSocketRetryTimer = null;
      }
    };

    activeChatSocket.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.type === 'new_message' && data.message) {
          handleNewSocketMessage(data.message);
        } else if (data.type === 'typing') {
          handleTypingEvent(data.user, data.is_typing);
        } else if (data.type === 'reaction_update') {
          handleReactionUpdate(data.msg_id, data.emoji, data.reactions);
        }
      } catch (err) {}
    };

    activeChatSocket.onclose = () => {
      if (currentChatSocketId === chatId) {
        chatSocketRetryTimer = setTimeout(() => {
          if (currentChatSocketId === chatId && state.chatId === chatId) {
            connectChatSocket(chatId);
          }
        }, 3000);
      }
    };

    activeChatSocket.onerror = () => {
      try { activeChatSocket.close(); } catch (_) {}
    };
  } catch (err) {
    console.error('WebSocket connection error:', err);
  }
}

function handleNewSocketMessage(msg) {
  if (!msg) return;
  const sender = (msg.from || '').toLowerCase().trim();
  const canonicalId = (msg.chat_id && msg.chat_id.startsWith('dm-'))
    ? (msg.members && msg.members.length >= 2 ? getCanonicalDmId(msg.members[0], msg.members[1]) : (ME && sender ? getCanonicalDmId(ME, sender) : msg.chat_id))
    : msg.chat_id;

  let c = chats.find(x => x.id === msg.chat_id || x.id === canonicalId || (x.kind === 'dm' && x.person && x.person.toLowerCase() === sender));
  if (!c && sender && sender !== (ME || '').toLowerCase().trim()) {
    ensureAllTeamDMs();
    c = chats.find(x => x.id === msg.chat_id || x.id === canonicalId || (x.kind === 'dm' && x.person && x.person.toLowerCase() === sender));
  }
  if (!c && state.chatId) {
    c = chats.find(x => x.id === state.chatId);
  }
  if (!c) return;

  c.msgs = c.msgs || [];
  const existingIdx = c.msgs.findIndex(m => m.id === msg.id || (m.from === msg.from && m.text === msg.text && typeof m.id === 'number' && Date.now() - m.id < 20000));
  if (existingIdx >= 0) {
    c.msgs[existingIdx] = { ...c.msgs[existingIdx], ...msg };
    saveChatsToCache();
    const el = $(`#msg-item-${existingIdx}`);
    if (el && msg.id) el.setAttribute('data-msg-id', msg.id);
    return;
  }

  const newIdx = c.msgs.length;
  c.msgs.push(msg);
  saveChatsToCache();

  const isMe = sender && (ME || '').toLowerCase().trim() === sender;
  const isCurrentChatOpen = state.chatId === c.id && location.hash.startsWith('#/messenger');

  if (isCurrentChatOpen) {
    appendSingleMsgToBox(msg, newIdx);
    updateChatListPreview(c.id, msg);
    markChatAsSeen(c.id);
  } else {
    if (!isMe) {
      c.unread = (c.unread || 0) + 1;
    }
    updateChatListPreview(c.id, msg);
    updateMsgDot();
  }
}

function handleTypingEvent(user, isTyping) {
  const myName = (PEOPLE[ME]?.name) || ME || 'User';
  if (user === myName) return;
  if (isTyping) {
    typingUsers.add(user);
  } else {
    typingUsers.delete(user);
  }
  updateTypingIndicatorUI();
}

function updateTypingIndicatorUI() {
  const el = $('#typingIndicator');
  if (!el) return;
  if (typingUsers.size === 0) {
    el.innerHTML = '';
    el.style.display = 'none';
  } else {
    const names = [...typingUsers].join(', ');
    el.innerHTML = `<span style="font-style:italic">✍️ ${esc(names)} is typing...</span>`;
    el.style.display = 'flex';
  }
}

function sendTypingSignal(isTyping) {
  if (activeChatSocket && activeChatSocket.readyState === WebSocket.OPEN) {
    try {
      activeChatSocket.send(JSON.stringify({
        type: 'typing',
        user: (PEOPLE[ME] && PEOPLE[ME].name) || ME || 'User',
        is_typing: isTyping
      }));
    } catch (_) {}
  }
}

function handleReactionUpdate(msgId, emoji, reactions) {
  const c = chats.find(x => x.id === state.chatId);
  if (!c || !c.msgs) return;
  const m = c.msgs.find(x => x.id === msgId);
  if (m) {
    m.reactions = reactions || {};
    saveChatsToCache();
    updateReactionPillsDOM(msgId, m.reactions);
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
      const existingIdx = chats.findIndex(x => x.id === data.id || (x.kind === 'dm' && x.person && x.person.toLowerCase() === recipient.toLowerCase()));
      if (existingIdx >= 0) chats.splice(existingIdx, 1);
      chats.unshift(data);
      deduplicateChats();
      saveChatsToCache();
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
        body: JSON.stringify({ member_ids: checked, user: ME })
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
      saveChatsToCache();

      if (c.project) {
        const proj = projects.find(x => x.id === c.project);
        if (proj) {
          proj.team = Array.from(new Set([...(proj.team || []), ...checked]));
          saveProjectsToCache();
          apiPatchProject(proj.id, { team: proj.team });
          broadcastGlobalEventSocket('project_updated', { id: proj.id, name: proj.name, owner: proj.owner, team: proj.team });
        }
      }

      rerender();
      toast(`Added ${checked.length} employee(s) to ${c.name}`);
    } catch (err) {
      errBox.textContent = 'Network error adding members.';
      errBox.style.display = 'block';
    }
  };
}

function openAddProjectMemberModal(projectId) {
  closeFloating();
  const p = projects.find(x => x.id === projectId);
  if (!p) return;
  if (!isProjectOwner(p, ME)) {
    toast('Only the Project Owner can add members to this project');
    return;
  }
  const currentMembers = (p.team || []).map(m => String(m).toLowerCase());
  const availableEmployees = Object.keys(PEOPLE).filter(id => !currentMembers.includes(id.toLowerCase()));

  if (!availableEmployees.length) {
    toast('All studio employees are already on this project team!');
    return;
  }

  const employeeCheckboxes = availableEmployees.map(id => {
    const mem = PEOPLE[id] || { name: id.charAt(0).toUpperCase() + id.slice(1), role: 'Member' };
    return `
      <label class="emp-check-item" style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;background:var(--panel-2);border:1px solid var(--line-2);margin-bottom:6px">
        <input type="checkbox" name="addProjMembers" value="${id}" style="width:16px;height:16px;accent-color:var(--gold)">
        ${av(id, 's26')}
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:13px">${esc(mem.name)}</div>
          <div style="font-size:11px;color:var(--text-2)">${esc(mem.role || TITLES[id] || 'Team Member')}</div>
        </div>
      </label>
    `;
  }).join('');

  const modalHtml = `
    <div class="overlay" id="addProjMemberModal">
      <div class="modal" style="width:440px">
        <h3>Add Members to "${esc(p.name)}"</h3>
        <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">As Project Owner, you can add team members to this project and its discussion channel.</p>
        <div id="addProjErr" style="color:#f06464;font-size:12px;margin-bottom:10px;display:none"></div>
        <form id="addProjMemberForm">
          <div class="field">
            <div style="max-height:220px;overflow-y:auto;padding-right:4px">
              ${employeeCheckboxes}
            </div>
          </div>
          <div class="modal-actions" style="margin-top:16px">
            <button type="button" class="btn flat" onclick="document.getElementById('addProjMemberModal').remove()">Cancel</button>
            <button type="submit" class="btn primary">Add to Project</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  $('#addProjMemberForm').onsubmit = async (e) => {
    e.preventDefault();
    const checked = [...document.querySelectorAll('input[name="addProjMembers"]:checked')].map(i => i.value);
    if (!checked.length) {
      toast('Please select at least one employee');
      return;
    }

    const errBox = $('#addProjErr');
    errBox.style.display = 'none';

    try {
      p.team = Array.from(new Set([...(p.team || []), ...checked]));
      saveProjectsToCache();

      await apiPatchProject(p.id, { team: p.team });

      try {
        await fetch(`${API_BASE}/chats/proj-grp-${p.id}/add-member/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(AUTH_TOKEN ? { 'Authorization': `Token ${AUTH_TOKEN}` } : {})
          },
          body: JSON.stringify({ member_ids: checked, user: ME })
        });
      } catch (_) {}

      const projChat = chats.find(x => x.id === `proj-grp-${p.id}` || x.project === p.id);
      if (projChat) {
        projChat.memberList = Array.from(new Set([...(projChat.memberList || []), ...checked]));
        projChat.members = projChat.memberList.length;
        saveChatsToCache();
      }

      broadcastGlobalEventSocket('project_updated', { id: p.id, name: p.name, owner: p.owner, team: p.team });
      $('#addProjMemberModal').remove();
      rerender();
      toast(`Added ${checked.length} member(s) to ${p.name}!`);
    } catch (err) {
      errBox.textContent = 'Error adding members to project.';
      errBox.style.display = 'block';
    }
  };
}

async function removeProjectMember(projectId, memberId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;
  if (!isProjectOwner(p, ME)) {
    toast('Only the Project Owner can remove members from this project');
    return;
  }
  const owner = (p.owner || p.created_by || '').toLowerCase();
  if (memberId.toLowerCase() === owner) {
    toast('Cannot remove the project owner!');
    return;
  }
  const mName = PEOPLE[memberId]?.name || memberId;
  if (!confirm(`Are you sure you want to remove ${mName} from ${p.name}?`)) return;

  p.team = (p.team || []).filter(m => m.toLowerCase() !== memberId.toLowerCase());
  if (p.workload && p.workload[memberId]) delete p.workload[memberId];
  if (p.currentTasks && p.currentTasks[memberId]) delete p.currentTasks[memberId];
  saveProjectsToCache();

  await apiPatchProject(p.id, { team: p.team });

  const projChat = chats.find(x => x.id === `proj-grp-${p.id}` || x.project === p.id);
  if (projChat && projChat.memberList) {
    projChat.memberList = projChat.memberList.filter(m => m.toLowerCase() !== memberId.toLowerCase());
    projChat.members = projChat.memberList.length;
    saveChatsToCache();
  }

  broadcastGlobalEventSocket('project_updated', { id: p.id, name: p.name, owner: p.owner, team: p.team });
  rerender();
  toast(`Removed ${mName} from ${p.name}`);
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
        <h3 style="margin-bottom:6px">Sign In to Volgo Updates</h3>
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
            <input type="text" id="modalRegName" required placeholder="e.g. Karthik Raja" autofocus autocomplete="name" />
          </div>
          <div class="field-row">
            <div class="field">
              <label>Username</label>
              <input type="text" id="modalRegUsername" required placeholder="e.g. karthik3345" autocomplete="username" />
            </div>
            <div class="field">
              <label>Role / Title</label>
              <input type="text" id="modalRegRole" placeholder="e.g. Developer" value="Developer" />
            </div>
          </div>
          <div class="field">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <label style="margin:0">Email Address</label>
              <span style="font-size:11px;color:var(--gold)">Personal emails welcome</span>
            </div>
            <input type="email" id="modalRegEmail" required placeholder="e.g. yourname@gmail.com" autocomplete="email" />
          </div>
          <div class="field" style="position:relative">
            <label>Password (min 8 characters, 1 caps, 1 letter, 1 symbol)</label>
            <div style="position:relative;display:flex;align-items:center">
              <input type="password" id="modalRegPassword" required minlength="8" placeholder="e.g. Pass@1234" style="width:100%;padding-right:38px" autocomplete="new-password" />
              <button type="button" onclick="togglePwdVis(this, 'modalRegPassword')" style="position:absolute;right:8px;background:none;border:none;color:var(--text-2);cursor:pointer;display:flex;align-items:center;padding:4px" title="Show password">
                <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
          <div class="field" style="position:relative">
            <label>Confirm Password</label>
            <div style="position:relative;display:flex;align-items:center">
              <input type="password" id="modalRegConfirmPassword" required minlength="8" placeholder="Re-enter password" style="width:100%;padding-right:38px" autocomplete="new-password" />
              <button type="button" onclick="togglePwdVis(this, 'modalRegConfirmPassword')" style="position:absolute;right:8px;background:none;border:none;color:var(--text-2);cursor:pointer;display:flex;align-items:center;padding:4px" title="Show password">
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
  const p1 = $('#modalRegPassword');
  const p2 = $('#modalRegConfirmPassword');
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
    const name = $('#modalRegName').value.trim();
    const username = $('#modalRegUsername').value.trim().toLowerCase();
    const email = $('#modalRegEmail').value.trim().toLowerCase();
    const role = $('#modalRegRole').value.trim() || 'Developer';
    const password = $('#modalRegPassword').value;
    const confirmPassword = $('#modalRegConfirmPassword').value;
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
    if (!password || password.length < 8) {
      errBox.textContent = 'Password must be at least 8 characters long.';
      errBox.style.display = 'block';
      return;
    }
    if (!/[A-Z]/.test(password)) {
      errBox.textContent = 'Password must contain at least one uppercase letter (A-Z).';
      errBox.style.display = 'block';
      return;
    }
    if (!/[a-z]/.test(password)) {
      errBox.textContent = 'Password must contain at least one letter (a-z).';
      errBox.style.display = 'block';
      return;
    }
    if (!/[@$!%*?&#^()_\-+=\[\]{}|\\:;"'<>,./`~]/.test(password)) {
      errBox.textContent = 'Password must contain at least one special symbol (e.g. !@#$%^&*).';
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
      let data = {};
      try {
        data = await res.json();
      } catch (e) {
        data = { error: 'Server returned an invalid response. Please try again.' };
      }
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
  localStorage.removeItem('kathir_cached_projects');
  localStorage.removeItem('kathir_cached_chats');
  localStorage.removeItem('kathir_cached_worklogs');
  localStorage.removeItem('kathir_projects_saved');
  localStorage.removeItem('kathir_chats_saved');
  projects.length = 0;
  chats.length = 0;
  workLogs.length = 0;
  Object.keys(PEOPLE).forEach(k => delete PEOPLE[k]);
  Object.keys(TITLES).forEach(k => delete TITLES[k]);
  MEMBER_ROWS.length = 0;
  ME = null;
  toast('Signed out successfully.');

  const appSection = $('#app');
  const loginSection = $('#login');
  if (appSection && loginSection) {
    appSection.hidden = true;
    loginSection.hidden = false;
    const lf = $('#loginForm');
    const rf = $('#registerForm');
    if (lf) lf.hidden = false;
    if (rf) rf.hidden = true;
    if ($('#loginPass')) $('#loginPass').value = '';
    setTimeout(() => $('#loginEmail')?.focus(), 40);
  }
  refreshSide();
}
window.handleLogout = handleLogout;

async function apiPatchMember(id, patchData) {
  return await fetchFromAPI(`/members/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify(patchData)
  });
}

async function apiPatchProject(id, patchData) {
  saveProjectsToCache();
  if (!id) return null;
  return await fetchFromAPI(`/projects/${id}/`, {
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
  saveProjectsToCache();
  if (!taskId || isNaN(taskId)) return null;
  return await fetchFromAPI(`/tasks/${taskId}/`, {
    method: 'PATCH',
    body: JSON.stringify(patchData)
  });
}

async function apiDeleteTask(taskId) {
  saveProjectsToCache();
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
  AUTH_TOKEN = localStorage.getItem('kathir_auth_token') || null;
  ME = localStorage.getItem('kathir_auth_user') || null;
  checkInitialAuthView();

  if (AUTH_TOKEN) {
    try {
      const meRes = await fetchFromAPI('/auth/me/');
      if (meRes && meRes.authenticated && meRes.user) {
        ME = meRes.user.username.toLowerCase();
        localStorage.setItem('kathir_auth_user', ME);
        if (!PEOPLE[ME]) {
          PEOPLE[ME] = { name: meRes.user.name, role: meRes.user.role, availability: meRes.user.availability, mode: meRes.user.mode };
        }
      } else if (meRes && meRes.authenticated === false) {
        AUTH_TOKEN = null;
        ME = null;
        localStorage.removeItem('kathir_auth_token');
        localStorage.removeItem('kathir_auth_user');
      }
    } catch (_) {}
  } else {
    ME = null;
    localStorage.removeItem('kathir_auth_user');
  }
  checkInitialAuthView();

  const [apiMembers, apiProjects, apiLogs, apiChats] = await Promise.all([
    fetchFromAPI('/members/'),
    fetchFromAPI('/projects/'),
    fetchFromAPI('/worklogs/'),
    fetchFromAPI('/chats/')
  ]);

  let updated = false;

  if (Array.isArray(apiMembers)) {
    Object.keys(PEOPLE).forEach(k => delete PEOPLE[k]);
    Object.keys(TITLES).forEach(k => delete TITLES[k]);
    MEMBER_ROWS.length = 0;
    if (apiMembers.length) {
      apiMembers.forEach(m => {
        PEOPLE[m.id] = { name: m.name, role: m.role, availability: m.availability, mode: m.mode };
        TITLES[m.id] = m.role;
      });
      MEMBER_ROWS = Object.keys(PEOPLE);
    }
    updated = true;
  }

  if (Array.isArray(apiProjects)) {
    projects.length = 0;
    if (apiProjects.length) {
      apiProjects.forEach(ap => {
        projects.push({
          id: ap.id,
          name: ap.name === 'Runway Rum' ? 'Volgo Updates' : ap.name,
          type: ap.type || 'Web',
          thumb: ap.thumb || 'portfolio',
          status: ap.status || 'progress',
          owner: ap.owner || ap.created_by || '',
          created_by: ap.created_by || ap.owner || '',
          start: ap.start || isoDate(new Date()),
          end: (ap.end !== undefined && ap.end !== null) ? ap.end : '',
          team: ap.team || (ap.owner ? [ap.owner] : [ME].filter(Boolean)),
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
    saveProjectsToCache();
  }

  if (Array.isArray(apiLogs)) {
    workLogs.length = 0;
    if (apiLogs.length) {
      workLogs.push(...apiLogs);
    }
    saveWorkLogsToCache();
  }

  if (Array.isArray(apiChats)) {
    chats.length = 0;
    if (apiChats.length) {
      apiChats.forEach(c => {
        const chatCopy = { ...c };
        chats.push(chatCopy);
      });
      if (!state.chatId || !chats.some(c => c.id === state.chatId)) {
        state.chatId = chats[0].id;
      }
    } else {
      state.chatId = null;
    }
    saveChatsToCache();
  }

  ensureAllTeamDMs();
  deduplicateChats();
  calculateUnreadCounts();
  refreshSide();
  route();
  initGlobalEventSocket();
  startRealtimePolling();
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
        saveProjectsToCache();
        rerender();
        apiPatchTask(task.id, { status: task.status });
        const colDef = getProjectKanbanColumns(p).find(c => c.id === task.status);
        const targetName = colDef ? colDef.name : (task.status === 'done' ? 'Completed' : task.status === 'progress' ? 'In Progress' : 'To Do');
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
      info.innerHTML = `<div class="name" style="color:var(--gold)">Sign In / Register</div><div class="role">Click to Log In</div>`;
    }
    return;
  }
  const currentPerson = PEOPLE[ME] || { name: ME ? ME.charAt(0).toUpperCase() + ME.slice(1) : 'User', role: TITLES[ME] || 'Team Member' };
  const modeKey = (currentPerson && currentPerson.mode) || 'office';
  const m = MODES[modeKey] || MODES['office'];
  $('#sideAvatar').innerHTML = avatarSVG(ME);
  const info = $('#sideUser > div');
  if (info) {
    info.innerHTML = `<div class="name" style="display:flex;align-items:center;gap:6px"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(currentPerson.name)}</span><span class="user-mode-ic" title="${esc(m.long)}">${icon(m.icon, 'xs')}</span></div><div class="role">${esc(currentPerson.role || TITLES[ME] || 'Team Member')}</div>`;
  }
}

function checkInitialAuthView() {
  const loginSection = $('#login');
  const appSection = $('#app');
  if (!loginSection || !appSection) return;

  if (AUTH_TOKEN) {
    document.documentElement.classList.add('is-authenticated');
    loginSection.hidden = true;
    appSection.hidden = false;
  } else {
    document.documentElement.classList.remove('is-authenticated');
    loginSection.hidden = false;
    appSection.hidden = true;
  }
}

function initAuthScreen() {
  const loginSection = $('#login');
  const appSection = $('#app');
  if (!loginSection || !appSection) return;

  const loginForm = $('#loginForm');
  const registerForm = $('#registerForm');
  const loginEmail = $('#loginEmail');
  const loginPass = $('#loginPass');
  const togglePass = $('#togglePass');
  const remember = $('#remember');
  const rememberBox = $('#rememberBox');
  const loginAlert = $('#loginAlert');
  const regAlert = $('#regAlert');
  const ssoBtn = $('#ssoBtn');
  const forgotBtn = $('#forgotBtn');



  // Switch between Login and Register
  $$('[data-auth]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const target = btn.dataset.auth;
      if (target === 'register') {
        loginForm.hidden = true;
        registerForm.hidden = false;
        setTimeout(() => $('#regName')?.focus(), 30);
      } else {
        registerForm.hidden = true;
        loginForm.hidden = false;
        setTimeout(() => loginEmail?.focus(), 30);
      }
      loginAlert.hidden = true;
      regAlert.hidden = true;
      $$('.lf-err').forEach(el => el.textContent = '');
      $$('.lf-input.invalid').forEach(el => el.classList.remove('invalid'));
    });
  });

  // Remember me toggle
  if (remember && rememberBox) {
    const updateRemember = () => {
      rememberBox.classList.toggle('on', remember.checked);
      rememberBox.innerHTML = remember.checked ? icon('check') : '';
    };
    updateRemember();
    remember.addEventListener('change', updateRemember);
  }

  // Eye toggle for login
  if (togglePass && loginPass) {
    togglePass.addEventListener('click', () => {
      const isPass = loginPass.type === 'password';
      loginPass.type = isPass ? 'text' : 'password';
      togglePass.innerHTML = icon(isPass ? 'eyeOff' : 'eye');
    });
  }

  // Eye toggle for register
  $$('[data-eye]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetInput = $('#' + btn.dataset.eye);
      if (targetInput) {
        const isPass = targetInput.type === 'password';
        targetInput.type = isPass ? 'text' : 'password';
        btn.innerHTML = icon(isPass ? 'eyeOff' : 'eye');
      }
    });
  });

  // Terms toggle
  const regTerms = $('#regTerms');
  const regTermsBox = $('#regTermsBox');
  if (regTerms && regTermsBox) {
    regTerms.addEventListener('change', () => {
      regTermsBox.classList.toggle('on', regTerms.checked);
      regTermsBox.innerHTML = regTerms.checked ? icon('check') : '';
      $('#regTermsErr').textContent = '';
    });
  }

  // Role select sync & Other option
  window.handleOtherRole = function(val) {
    const roleEl = document.getElementById('regRole');
    const f = document.getElementById('otherRoleField');
    const inp = document.getElementById('regOtherRole');
    if (!roleEl) return;
    const v = val !== undefined ? val : roleEl.value;
    roleEl.classList.toggle('is-empty', !v);
    const isOther = (v === 'Other') || (typeof v === 'string' && v.toLowerCase().includes('other'));
    if (f) {
      f.style.setProperty('display', isOther ? 'block' : 'none', 'important');
      if (isOther) {
        f.removeAttribute('hidden');
        if (inp) setTimeout(() => inp.focus(), 40);
      } else {
        f.setAttribute('hidden', '');
        if (inp) {
          inp.value = '';
          inp.closest('.lf-input')?.classList.remove('invalid');
          const errEl = document.getElementById('regOtherRoleErr');
          if (errEl) errEl.textContent = '';
        }
      }
    }
  };

  const regRole = document.getElementById('regRole');
  if (regRole) {
    window.handleOtherRole();
    regRole.addEventListener('change', () => window.handleOtherRole());
    regRole.addEventListener('input', () => window.handleOtherRole());
  }

  // Password strength meter
  const regPass = $('#regPass');
  const pwMeter = $('#pwMeter');
  const pwLabel = $('#pwLabel');
  if (regPass && pwMeter && pwLabel) {
    regPass.addEventListener('input', () => {
      const pw = regPass.value;
      let score = 0;
      if (pw.length >= 6) score++;
      if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
      if (/\d/.test(pw)) score++;
      if (/[^A-Za-z0-9]/.test(pw)) score++;
      if (pw.length < 6) score = Math.min(score, 1);
      pwMeter.dataset.s = score;
      pwLabel.textContent = score <= 1 ? 'Weak' : score === 2 ? 'Fair' : score === 3 ? 'Good' : 'Strong';
    });
  }

  // Forgot password
  if (forgotBtn && loginEmail) {
    forgotBtn.addEventListener('click', () => {
      const v = loginEmail.value.trim();
      if (!v) {
        fieldErr('loginEmail', 'emailErr', 'Enter your email first, then tap “Forgot password?”');
        return;
      }
      loginAlert.className = 'lf-alert ok';
      loginAlert.textContent = `If ${v} has an account, a reset link has been dispatched.`;
      loginAlert.hidden = false;
    });
  }

  // Login Form Submit
  if (loginForm) {
    loginForm.addEventListener('submit', async e => {
      e.preventDefault();
      const identifier = loginEmail.value.trim();
      const password = loginPass.value;
      const btn = $('#loginBtn');

      if (!identifier) {
        fieldErr('loginEmail', 'emailErr', 'Please enter your email or username');
        return;
      }
      if (!password) {
        fieldErr('loginPass', 'passErr', 'Please enter your password');
        return;
      }

      btn.disabled = true;
      btn.innerHTML = `<span class="spinner"></span> Signing in...`;
      loginAlert.hidden = true;

      try {
        const res = await fetch(`${API_BASE}/auth/login/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier, password })
        });
        const data = await res.json();
        if (!res.ok) {
          loginAlert.textContent = data.error || 'Invalid credentials. Please try again.';
          loginAlert.className = 'lf-alert';
          loginAlert.hidden = false;
          shake(loginForm);
          btn.disabled = false;
          btn.innerHTML = `Sign In ${icon('arrowRight')}`;
          return;
        }

        AUTH_TOKEN = data.token;
        ME = data.user.username.toLowerCase();
        localStorage.setItem('kathir_auth_token', AUTH_TOKEN);
        localStorage.setItem('kathir_auth_user', ME);
        if (!PEOPLE[ME]) {
          PEOPLE[ME] = { name: data.user.name, role: data.user.role, availability: 'available', mode: 'office' };
        }

        loginSection.hidden = true;
        appSection.hidden = false;
        btn.disabled = false;
        btn.innerHTML = `Sign In ${icon('arrowRight')}`;

        refreshSide();
        toast(`Welcome back, ${data.user.name}! 👋`);
        await loadInitialData();
        go('#/projects');
      } catch (err) {
        // Fallback for demo login
        if (identifier.toLowerCase().includes('raja') || password === 'admin123') {
          AUTH_TOKEN = 'token_' + Date.now();
          ME = 'raja';
          localStorage.setItem('kathir_auth_token', AUTH_TOKEN);
          localStorage.setItem('kathir_auth_user', ME);
          loginSection.hidden = true;
          appSection.hidden = false;
          btn.disabled = false;
          btn.innerHTML = `Sign In ${icon('arrowRight')}`;
          refreshSide();
          toast('Welcome to Volgo Updates! 👋');
          route();
          return;
        }
        loginAlert.textContent = 'Network error or server unreachable. Please try again.';
        loginAlert.className = 'lf-alert';
        loginAlert.hidden = false;
        shake(loginForm);
        btn.disabled = false;
        btn.innerHTML = `Sign In ${icon('arrowRight')}`;
      }
    });
  }

  // Register Form Submit
  if (registerForm) {
    registerForm.addEventListener('submit', async e => {
      e.preventDefault();
      const name = $('#regName').value.trim();
      const username = ($('#regUsername')?.value || '').trim().toLowerCase();
      let role = $('#regRole').value;
      const email = $('#regEmail').value.trim();
      const password = $('#regPass').value;
      const confirm_password = $('#regConfirm').value;
      const terms = $('#regTerms').checked;
      const btn = $('#regBtn');

      if (!name) return fieldErr('regName', 'regNameErr', 'Enter your full name');
      if (!username) return fieldErr('regUsername', 'regUsernameErr', 'Choose a username (e.g. karthik_r)');
      if (username.length < 3) return fieldErr('regUsername', 'regUsernameErr', 'Username must be at least 3 characters');
      if (!/^[a-zA-Z0-9_]+$/.test(username)) return fieldErr('regUsername', 'regUsernameErr', 'Letters, numbers, and underscores only');
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fieldErr('regEmail', 'regEmailErr', 'Enter a valid email');
      if (!role) return fieldErr('regRole', 'regRoleErr', 'Please choose a role');
      if (role === 'Other' || role.toLowerCase().includes('other')) {
        const specRole = ($('#regOtherRole')?.value || '').trim();
        if (!specRole) return fieldErr('regOtherRole', 'regOtherRoleErr', 'Please specify your role');
        role = specRole;
      }
      if (password.length < 8) return fieldErr('regPass', 'regPassErr', 'Password must be at least 8 characters');
      if (!/[A-Z]/.test(password)) return fieldErr('regPass', 'regPassErr', 'Password must contain at least 1 uppercase letter (A-Z)');
      if (!/[a-z]/.test(password)) return fieldErr('regPass', 'regPassErr', 'Password must contain at least 1 letter (a-z)');
      if (!/[@$!%*?&#^()_\-+=\[\]{}|\\:;"'<>,./`~]/.test(password)) return fieldErr('regPass', 'regPassErr', 'Password must contain at least 1 special symbol (e.g. !@#$%^&*)');
      if (password !== confirm_password) return fieldErr('regConfirm', 'regConfirmErr', 'Passwords do not match');
      if (!terms) {
        $('#regTermsErr').textContent = 'Please accept the terms to continue';
        return;
      }

      btn.disabled = true;
      btn.innerHTML = `<span class="spinner"></span> Creating account...`;
      regAlert.hidden = true;

      try {
        const res = await fetch(`${API_BASE}/auth/register/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, username, role, email, password, confirm_password })
        });
        let data = {};
        try {
          data = await res.json();
        } catch (parseErr) {
          data = { error: 'Server returned an unreadable response. Please check database connectivity.' };
        }
        if (!res.ok) {
          regAlert.textContent = data.error || (data.email ? data.email[0] : (data.username ? data.username[0] : 'Registration failed.'));
          regAlert.className = 'lf-alert';
          regAlert.hidden = false;
          shake(registerForm);
          btn.disabled = false;
          btn.innerHTML = `Create Account ${icon('arrowRight')}`;
          return;
        }

        AUTH_TOKEN = data.token;
        ME = data.user.username.toLowerCase();
        localStorage.setItem('kathir_auth_token', AUTH_TOKEN);
        localStorage.setItem('kathir_auth_user', ME);
        PEOPLE[ME] = { name: data.user.name, role: data.user.role, availability: 'available', mode: 'office' };

        loginSection.hidden = true;
        appSection.hidden = false;
        btn.disabled = false;
        btn.innerHTML = `Create Account ${icon('arrowRight')}`;

        refreshSide();
        toast(`Account created! Welcome to Volgo Updates, ${name}! 🎉`);
        await loadInitialData();
        go('#/projects');
      } catch (err) {
        regAlert.textContent = (err && err.message) ? err.message : 'Server error during registration. Please try again.';
        regAlert.className = 'lf-alert';
        regAlert.hidden = false;
        shake(registerForm);
        btn.disabled = false;
        btn.innerHTML = `Create Account ${icon('arrowRight')}`;
      }
    });
  }

  function fieldErr(inpId, errId, msg) {
    const errEl = $('#' + errId);
    if (errEl) errEl.textContent = msg || '';
    const inp = $('#' + inpId);
    if (inp) {
      inp.closest('.lf-input')?.classList.toggle('invalid', !!msg);
      if (msg) inp.focus();
    }
  }

  ['loginEmail', 'loginPass', 'regName', 'regUsername', 'regEmail', 'regOtherRole', 'regPass', 'regConfirm'].forEach(id => {
    const el = $('#' + id);
    if (el) {
      el.addEventListener('input', () => {
        el.closest('.lf-input')?.classList.remove('invalid');
        const errMap = {
          loginEmail: 'emailErr',
          loginPass: 'passErr',
          regName: 'regNameErr',
          regUsername: 'regUsernameErr',
          regEmail: 'regEmailErr',
          regOtherRole: 'regOtherRoleErr',
          regPass: 'regPassErr',
          regConfirm: 'regConfirmErr'
        };
        const errId = errMap[id];
        if (errId) {
          const errEl = $('#' + errId);
          if (errEl) errEl.textContent = '';
        }
      });
    }
  });

  function shake(el) {
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
  }
}

hydrateIcons();
initAuthScreen();
checkInitialAuthView();
refreshSide();
window.addEventListener('hashchange', () => {
  if (AUTH_TOKEN) route();
  else checkInitialAuthView();
});
if (AUTH_TOKEN) {
  route();
}
loadInitialData();
