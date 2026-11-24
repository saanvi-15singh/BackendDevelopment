// Exercise 1: Simple User Login System (register, login, dashboard, logout)
// Users are kept in an in-memory array (lost when the server restarts).
// Optional challenge done: passwords are hashed with bcryptjs.
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

const users = []; // { username, passwordHash }

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'exercise1-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 10 * 60 * 1000 } // 10 minutes
}));

const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const page = (title, body) => `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${title}</title>
<style>
  body { font-family: Arial, sans-serif; max-width: 420px; margin: 60px auto; }
  input { display: block; width: 100%; padding: 8px; margin: 8px 0; box-sizing: border-box; }
  button { padding: 8px 16px; }
  .err { color: #b00020; }
  .ok { color: #1b7f3b; }
</style></head><body>${body}</body></html>`;

// Middleware: only logged-in users may continue
function authMiddleware(req, res, next) {
  if (req.session.user) next();
  else res.redirect('/login');
}

app.get('/', (req, res) => res.redirect(req.session.user ? '/dashboard' : '/login'));

// ---------- Register ----------
app.get('/register', (req, res) => {
  const msg = req.query.error ? `<p class="err">${esc(req.query.error)}</p>` : '';
  res.send(page('Register', `
    <h2>Register</h2>${msg}
    <form method="post" action="/register">
      <input name="username" placeholder="Username" required>
      <input name="password" type="password" placeholder="Password (min 6 chars)" required>
      <button type="submit">Register</button>
    </form>
    <p>Already registered? <a href="/login">Login</a></p>`));
});

app.post('/register', async (req, res) => {
  const username = (req.body.username || '').trim();
  const password = req.body.password || '';

  if (!username || password.length < 6) {
    return res.redirect('/register?error=' + encodeURIComponent('Username required and password must be 6+ characters'));
  }
  if (users.find(u => u.username === username)) {
    return res.redirect('/register?error=' + encodeURIComponent('Username already taken'));
  }

  const passwordHash = await bcrypt.hash(password, 10);
  users.push({ username, passwordHash });
  res.redirect('/login?registered=1');
});

// ---------- Login ----------
app.get('/login', (req, res) => {
  let msg = '';
  if (req.query.error) msg = `<p class="err">${esc(req.query.error)}</p>`;
  if (req.query.registered) msg = '<p class="ok">Registration successful. Please login.</p>';
  res.send(page('Login', `
    <h2>Login</h2>${msg}
    <form method="post" action="/login">
      <input name="username" placeholder="Username" required>
      <input name="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p>No account? <a href="/register">Register</a></p>`));
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !(await bcrypt.compare(password || '', user.passwordHash))) {
    return res.redirect('/login?error=' + encodeURIComponent('Invalid username or password'));
  }

  // Remember the user in the session
  req.session.user = { username: user.username };
  res.redirect('/dashboard');
});

// ---------- Dashboard (protected) ----------
app.get('/dashboard', authMiddleware, (req, res) => {
  res.send(page('Dashboard', `
    <h2>Dashboard</h2>
    <p>Welcome, <strong>${esc(req.session.user.username)}</strong>! You are logged in.</p>
    <form method="post" action="/logout"><button type="submit">Logout</button></form>`));
});

// ---------- Logout ----------
app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
});

app.listen(PORT, () => console.log(`Exercise 1 running at http://localhost:${PORT}`));
