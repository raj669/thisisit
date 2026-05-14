// NepalHomes — Firebase Authentication & User Data System

// ── State cache ────────────────────────────────────────────────
let _currentUser    = null;   // merged Firebase + Firestore user object
let _authReady      = false;  // true after first onAuthStateChanged fires
let _pendingCbs     = [];     // callbacks waiting for auth state
let _savedCache     = null;   // property id array
let _toursCache     = null;   // tour objects array
let _alertsCache    = null;   // alert objects array

// ── Core auth state listener ───────────────────────────────────
auth.onAuthStateChanged(async firebaseUser => {
  if (firebaseUser) {
    try {
      const snap = await db.collection('users').doc(firebaseUser.uid).get();
      if (snap.exists) {
        const d = snap.data();
        _currentUser = {
          uid:       firebaseUser.uid,
          userId:    firebaseUser.uid,
          name:      ((d.firstName || '') + ' ' + (d.lastName || '')).trim(),
          firstName: d.firstName || '',
          lastName:  d.lastName  || '',
          email:     d.email     || firebaseUser.email,
          phone:     d.phone     || '',
          role:      d.role      || 'buyer',
          loggedIn:  true,
        };
        _savedCache  = Array.isArray(d.saved)  ? d.saved  : [];
        _toursCache  = Array.isArray(d.tours)  ? d.tours  : [];
        _alertsCache = Array.isArray(d.alerts) ? d.alerts : [];
      } else {
        // Auth user exists but no Firestore doc — create a minimal profile
        _currentUser = {
          uid: firebaseUser.uid, userId: firebaseUser.uid,
          name: firebaseUser.email, firstName: '', lastName: '',
          email: firebaseUser.email, phone: '', role: 'buyer', loggedIn: true,
        };
        _savedCache = []; _toursCache = []; _alertsCache = [];
        await db.collection('users').doc(firebaseUser.uid).set({
          firstName: '', lastName: '', email: firebaseUser.email,
          phone: '', role: 'buyer', saved: [], tours: [], alerts: [],
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    } catch (e) {
      console.error('[NepalHomes] Error loading user profile:', e);
      _currentUser = null;
      _savedCache = _toursCache = _alertsCache = null;
    }
  } else {
    _currentUser = null;
    _savedCache = _toursCache = _alertsCache = null;
  }

  _authReady = true;
  const cbs = _pendingCbs.splice(0);
  cbs.forEach(cb => cb(_currentUser));
});

// ── Auth-ready helper ──────────────────────────────────────────
function onAuthReady(callback) {
  if (_authReady) callback(_currentUser);
  else _pendingCbs.push(callback);
}

// ── Sync accessors (use cached state) ─────────────────────────
function isLoggedIn()    { return !!(_currentUser && _currentUser.loggedIn); }
function getCurrentUser(){ return _currentUser; }
function getSession()    { return _currentUser; }   // backwards-compat alias

// ── requireAuth ───────────────────────────────────────────────
// Call on protected pages.  Passes the user to callback; redirects if not logged in.
function requireAuth(callback) {
  onAuthReady(user => {
    if (!user) {
      const r = encodeURIComponent(location.pathname + location.search);
      location.href = 'login.html?redirect=' + r;
    } else {
      if (typeof callback === 'function') callback(user);
    }
  });
}

// ── Firebase error messages ───────────────────────────────────
function _fbErr(code) {
  return ({
    'auth/email-already-in-use':    'This email is already registered.',
    'auth/invalid-email':           'Please enter a valid email address.',
    'auth/weak-password':           'Password must be at least 6 characters.',
    'auth/user-not-found':          'No account found with this email.',
    'auth/wrong-password':          'Incorrect password. Please try again.',
    'auth/invalid-credential':      'Invalid email or password.',
    'auth/too-many-requests':       'Too many failed attempts. Try again later.',
    'auth/network-request-failed':  'Network error. Check your internet connection.',
    'auth/operation-not-allowed':   'Email/password sign-in is not enabled. Enable it in Firebase Console → Authentication → Sign-in method.',
    'auth/configuration-not-found': 'Firebase Authentication is not set up for this project. Enable it in Firebase Console → Authentication.',
  })[code] || `Something went wrong (${code}). Please try again.`;
}

// ── Register ──────────────────────────────────────────────────
async function register({ firstName, lastName, email, phone, password, role }) {
  try {
    const cred = await auth.createUserWithEmailAndPassword(email.trim(), password);
    const uid  = cred.user.uid;
    const userData = {
      firstName: (firstName || '').trim(),
      lastName:  (lastName  || '').trim(),
      email:     email.trim(),
      phone:     (phone     || '').trim(),
      role:      role || 'buyer',
      saved: [], tours: [], alerts: [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await db.collection('users').doc(uid).set(userData);
    return { success: true, role: userData.role };
  } catch (e) {
    return { error: _fbErr(e.code) };
  }
}

// ── Login ─────────────────────────────────────────────────────
async function login(email, password) {
  try {
    const cred = await auth.signInWithEmailAndPassword(email.trim(), password);
    // Read role from Firestore for the redirect decision
    const snap = await db.collection('users').doc(cred.user.uid).get();
    const role = snap.exists ? (snap.data().role || 'buyer') : 'buyer';
    return { success: true, role };
  } catch (e) {
    return { error: _fbErr(e.code) };
  }
}

// ── Logout ────────────────────────────────────────────────────
async function logout() {
  try { await auth.signOut(); } catch (_) {}
  location.href = 'index.html';
}

// ── Saved Properties ──────────────────────────────────────────
function isSaved(id) {
  return Array.isArray(_savedCache) && _savedCache.includes(id);
}

async function getSaved() {
  if (!isLoggedIn()) return [];
  if (_savedCache !== null) return _savedCache;
  try {
    const snap = await db.collection('users').doc(_currentUser.uid).get();
    _savedCache = snap.exists ? (snap.data().saved || []) : [];
  } catch (_) { _savedCache = []; }
  return _savedCache;
}

async function toggleSaved(id, btn) {
  if (!isLoggedIn()) {
    location.href = 'login.html?redirect=' + encodeURIComponent(location.href);
    return;
  }
  if (_savedCache === null) await getSaved();
  const idx = _savedCache.indexOf(id);
  if (idx === -1) _savedCache.push(id); else _savedCache.splice(idx, 1);
  try {
    await db.collection('users').doc(_currentUser.uid).update({ saved: _savedCache });
  } catch (e) {
    if (e.code === 'not-found') {
      await db.collection('users').doc(_currentUser.uid).set({ saved: _savedCache }, { merge: true });
    }
  }
  const nowSaved = _savedCache.includes(id);
  if (btn) {
    btn.classList.toggle('saved', nowSaved);
    btn.title = nowSaved ? 'Remove from saved' : 'Save property';
  }
  // Update any other save buttons for same property on this page
  document.querySelectorAll(`.property-card[data-id="${id}"] .save-btn`).forEach(b => {
    if (b !== btn) b.classList.toggle('saved', nowSaved);
  });
  return _savedCache;
}

// ── Tours ─────────────────────────────────────────────────────
async function getTours() {
  if (!isLoggedIn()) return [];
  if (_toursCache !== null) return _toursCache;
  try {
    const snap = await db.collection('users').doc(_currentUser.uid).get();
    _toursCache = snap.exists ? (snap.data().tours || []) : [];
  } catch (_) { _toursCache = []; }
  return _toursCache;
}

async function addTour(propertyId, date, time) {
  if (!isLoggedIn()) return false;
  if (_toursCache === null) await getTours();
  if (_toursCache.find(t => t.propertyId === propertyId && t.date === date && t.time === time)) return false;
  _toursCache.push({ id: Date.now(), propertyId, date, time, status: 'pending' });
  try {
    await db.collection('users').doc(_currentUser.uid).update({ tours: _toursCache });
  } catch (_) {}
  return true;
}

async function cancelTour(id) {
  if (!isLoggedIn() || !_toursCache) return;
  _toursCache = _toursCache.filter(t => t.id !== id);
  try {
    await db.collection('users').doc(_currentUser.uid).update({ tours: _toursCache });
  } catch (_) {}
}

// ── Search Alerts ─────────────────────────────────────────────
async function getAlerts() {
  if (!isLoggedIn()) return [];
  if (_alertsCache !== null) return _alertsCache;
  try {
    const snap = await db.collection('users').doc(_currentUser.uid).get();
    _alertsCache = snap.exists ? (snap.data().alerts || []) : [];
  } catch (_) { _alertsCache = []; }
  return _alertsCache;
}

async function addAlert(name, query, frequency) {
  if (!isLoggedIn()) return false;
  if (_alertsCache === null) await getAlerts();
  _alertsCache.push({
    id: Date.now(), name: name.trim(), query: query.trim(),
    frequency: frequency || 'Daily', createdAt: new Date().toISOString(),
  });
  try {
    await db.collection('users').doc(_currentUser.uid).update({ alerts: _alertsCache });
  } catch (_) {}
  return true;
}

async function deleteAlert(id) {
  if (!isLoggedIn() || !_alertsCache) return;
  _alertsCache = _alertsCache.filter(a => a.id !== id);
  try {
    await db.collection('users').doc(_currentUser.uid).update({ alerts: _alertsCache });
  } catch (_) {}
}
