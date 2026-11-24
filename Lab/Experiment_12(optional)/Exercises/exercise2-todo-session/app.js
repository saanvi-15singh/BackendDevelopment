// Exercise 2: To-Do List Manager (session based)
// Each browser/session gets its own list; it disappears when the session ends.
// Optional challenge done: a cookie stores the preferred theme (light/dark).
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'exercise2-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 60 * 1000 } // 30 minutes
}));

const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Make sure every session has a todo array
app.use((req, res, next) => {
  if (!req.session.todos) {
    req.session.todos = [];
  }
  next();
});

// Theme comes from a cookie (default: light)
function themeOf(req) {
  return req.cookies.theme === 'dark' ? 'dark' : 'light';
}

app.get('/', (req, res) => {
  const theme = themeOf(req);
  const items = req.session.todos.map((item, index) => `
      <li>
        ${esc(item)}
        <form method="post" action="/delete" style="display:inline">
          <input type="hidden" name="id" value="${index}">
          <button type="submit">Delete</button>
        </form>
      </li>`).join('');

  res.send(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Session To-Do</title>
<style>
  body { font-family: Arial, sans-serif; max-width: 520px; margin: 50px auto; padding: 0 12px;
         background: ${theme === 'dark' ? '#1e1e24' : '#ffffff'};
         color: ${theme === 'dark' ? '#f1f1f1' : '#222'}; }
  input[type=text] { padding: 8px; width: 65%; }
  button { padding: 8px 12px; }
  li { margin: 8px 0; }
</style></head><body>
  <h1>My To-Do List</h1>
  <form method="post" action="/theme" style="float:right">
    <input type="hidden" name="theme" value="${theme === 'dark' ? 'light' : 'dark'}">
    <button type="submit">Switch to ${theme === 'dark' ? 'light' : 'dark'} theme</button>
  </form>

  <form method="post" action="/add">
    <input type="text" name="todoItem" placeholder="New to-do" required>
    <button type="submit">Add</button>
  </form>

  <ul>${items || '<li>No items yet.</li>'}</ul>
  <p><small>Your list is stored in the session and disappears when it expires.</small></p>
</body></html>`);
});

// Add item
app.post('/add', (req, res) => {
  const text = (req.body.todoItem || '').trim();
  if (text) {
    req.session.todos.push(text);
  }
  res.redirect('/');
});

// Delete item (filter the array)
app.post('/delete', (req, res) => {
  const id = parseInt(req.body.id, 10);
  req.session.todos = req.session.todos.filter((item, index) => index !== id);
  res.redirect('/');
});

// Save theme in a cookie
app.post('/theme', (req, res) => {
  const theme = req.body.theme === 'dark' ? 'dark' : 'light';
  res.cookie('theme', theme, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Exercise 2 running at http://localhost:${PORT}`));
