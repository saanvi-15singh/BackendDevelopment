# Experiment 12 (Optional): Using Node.js to Manage Sessions and Cookies

## Aim
To demonstrate state management in a Node.js web application using sessions and cookies, and to build a login system and a session-based to-do list.

## Tools and Technologies
- Node.js and npm
- Express (web framework)
- express-session (session middleware)
- cookie-parser (reads cookies)
- bcryptjs (password hashing)
- Web browser with DevTools

## Theory

### HTTP is Stateless
Each HTTP request is independent, so the server does not automatically remember who you are between page loads. To remember users (login, shopping carts, preferences), we need state management. The two common solutions are cookies and sessions.

### Cookies
A cookie is a small piece of data stored in the user's browser and sent to the server with every HTTP request.

- Created by the server or by client-side JavaScript.
- Stored in the browser until it expires or is deleted.
- Good for non-sensitive data such as theme or language.

Key properties:

- **Name and value:** The data stored.
- **Expiration:** How long it lasts.
- **HttpOnly:** JavaScript cannot read it (protects against XSS).
- **Secure:** Sent only over HTTPS.

### Sessions
A session is a server-side storage mechanism. The server keeps the user data (such as the user ID), and the browser stores only a session ID, usually inside a cookie. This is much safer for sensitive data because the real data never leaves the server.

Typical flow:

1. User logs in.
2. Server creates a session object and a session ID.
3. The session ID is sent to the browser in a cookie.
4. The browser sends the session ID cookie with each request.
5. The server looks up the session ID and retrieves the user information.

### When to Use What

| Use Case | Recommended |
|---|---|
| Remembering a theme or language | Cookie |
| Keeping a user logged in | Session |
| Storing shopping cart items | Session |

## Setup

```bash
mkdir session-cookie-demo
cd session-cookie-demo
npm init -y
npm install express express-session cookie-parser bcryptjs
```

## Project Structure

```text
Experiment_12/
├── package.json
├── README.md
├── Source/
│   ├── session-example.js
│   ├── cookie-example.js
│   └── server.js
└── Exercises/
    ├── exercise1-login-system/
    │   └── app.js
    └── exercise2-todo-session/
        └── app.js
```

---

## Part 1: Session Management

**Use case:** Maintain a user session and destroy it on logout.

### session-example.js

```javascript
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`Welcome back! You visited ${req.session.views} times.`);
    } else {
        req.session.views = 1;
        res.send('Welcome to the session demo. Refresh to count visits.');
    }
});

app.get('/destroy', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error destroying session');
        }
        res.send('Session destroyed');
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
```

### Explanation
- The session is initialized on the first request.
- `req.session.views` counts how many times the user visited.
- The `/destroy` route removes the session data.

**Run:**

```bash
node Source/session-example.js
```

Open `http://localhost:3000`, refresh several times, and then open `/destroy`.

---

## Part 2: Cookie Management

**Use case:** Create, read and delete cookies using HTTP headers.

### cookie-example.js

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'JohnDoe', { maxAge: 900000 });
    res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
    const user = req.cookies['username'];
    res.send(`Cookie Retrieved: ${user}`);
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie deleted');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

### Explanation
- `/set-cookie` sets a cookie named `username` that lasts 15 minutes (900000 ms).
- `/get-cookie` reads the cookie sent by the browser.
- `/delete-cookie` removes the cookie.

**Run:**

```bash
node Source/cookie-example.js
```

Visit `/set-cookie`, `/get-cookie`, and `/delete-cookie` in order.

---

## Part 3: Login Demo Using Sessions and Cookies Together

### server.js

```javascript
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// Escape user text before putting it into HTML (prevents XSS).
const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c])
);

// Home route
app.get('/', (req, res) => {
    if (req.session.username) {
        res.send(`Welcome back, ${esc(req.session.username)}! <a href="/logout">Logout</a>`);
    } else {
        res.send(`
            <form action="/login" method="post">
                <input type="text" name="username" placeholder="Enter username"/>
                <button type="submit">Login</button>
            </form>
        `);
    }
});

// Login route
app.post('/login', (req, res) => {
    const { username } = req.body;

    req.session.username = username;
    res.cookie('theme', 'dark', {
        maxAge: 900000,
        httpOnly: true
    });

    res.redirect('/');
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
```

### How It Works
- First visit: No session exists, so the login form is shown.
- Login: The username is saved in the session and a sample `theme` cookie is set.
- Later requests: The `connect.sid` cookie tells the server which session belongs to the user.
- Logout: The session is destroyed and the session cookie is cleared.

**Run:**

```bash
node Source/server.js
```

---

# Lab Assignment

## Exercise 1: Simple User Login System

### Goal
A small web application where a user can register, log in (remembered through a session), and log out.

### Requirements
- Register page: Accepts username and password.
- Login page: Authenticates the user.
- Dashboard page: Accessible only when logged in.
- Logout button: Ends the session and redirects to login.

### Approach
- Users are kept in an in-memory array.
- On successful login: `req.session.user = { username }`.
- A middleware called `authMiddleware` protects `/dashboard`.
- On logout: `req.session.destroy(...)`.
- Passwords are hashed with bcrypt.

### Exercises/exercise1-login-system/app.js

```javascript
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
    cookie: { maxAge: 10 * 60 * 1000 }
}));

const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c])
);

const page = (title, body) => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
  body { font-family: Arial, sans-serif; max-width: 420px; margin: 60px auto; }
  input { display: block; width: 100%; padding: 8px; margin: 8px 0; box-sizing: border-box; }
  button { padding: 8px 16px; }
  .err { color: #b00020; }
  .ok { color: #1b7f3b; }
</style>
</head>
<body>${body}</body>
</html>`;

// Middleware: only logged-in users may continue
function authMiddleware(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.get('/', (req, res) => {
    res.redirect(req.session.user ? '/dashboard' : '/login');
});

// Register
app.get('/register', (req, res) => {
    const msg = req.query.error
        ? `<p class="err">${esc(req.query.error)}</p>`
        : '';

    res.send(page('Register', `
        <h2>Register</h2>${msg}
        <form method="post" action="/register">
            <input name="username" placeholder="Username" required>
            <input name="password" type="password" placeholder="Password (min 6 chars)" required>
            <button type="submit">Register</button>
        </form>
        <p>Already registered? <a href="/login">Login</a></p>
    `));
});

app.post('/register', async (req, res) => {
    const username = (req.body.username || '').trim();
    const password = req.body.password || '';

    if (!username || password.length < 6) {
        return res.redirect('/register?error=' +
            encodeURIComponent('Username required and password must be 6+ characters'));
    }

    if (users.find(u => u.username === username)) {
        return res.redirect('/register?error=' +
            encodeURIComponent('Username already taken'));
    }

    const passwordHash = await bcrypt.hash(password, 10);
    users.push({ username, passwordHash });

    res.redirect('/login?registered=1');
});

// Login
app.get('/login', (req, res) => {
    let msg = '';

    if (req.query.error) {
        msg = `<p class="err">${esc(req.query.error)}</p>`;
    }

    if (req.query.registered) {
        msg = '<p class="ok">Registration successful. Please login.</p>';
    }

    res.send(page('Login', `
        <h2>Login</h2>${msg}
        <form method="post" action="/login">
            <input name="username" placeholder="Username" required>
            <input name="password" type="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p>No account? <a href="/register">Register</a></p>
    `));
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !(await bcrypt.compare(password || '', user.passwordHash))) {
        return res.redirect('/login?error=' +
            encodeURIComponent('Invalid username or password'));
    }

    // Remember the user in the session
    req.session.user = { username: user.username };
    res.redirect('/dashboard');
});

// Dashboard (protected)
app.get('/dashboard', authMiddleware, (req, res) => {
    res.send(page('Dashboard', `
        <h2>Dashboard</h2>
        <p>Welcome, <strong>${esc(req.session.user.username)}</strong>! You are logged in.</p>
        <form method="post" action="/logout">
            <button type="submit">Logout</button>
        </form>
    `));
});

// Logout
app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});

app.listen(PORT, () => console.log(`Exercise 1 running at http://localhost:${PORT}`));
```

**Run:**

```bash
node Exercises/exercise1-login-system/app.js
```

Open `http://localhost:3000`.

### Test Steps
1. Open `/dashboard` without logging in. You should be redirected to `/login`.
2. Register a user and then log in. The dashboard should show the username.
3. Click Logout. You should return to the login page, and `/dashboard` should be blocked again.
4. Try an incorrect password. An error message should be displayed.

---

## Exercise 2: To-Do List Manager (Session-Based)

### Goal
A basic to-do web application where a user can add, view and delete items. The list is stored per session, so different browsers have separate lists, and the list disappears when the session expires.

### Approach
- Create the list on the first visit: `if (!req.session.todos) req.session.todos = [];`
- Add items using `req.session.todos.push(text)`.
- Delete items by filtering the array using their index.
- A `theme` cookie stores the light or dark mode preference.

### Exercises/exercise2-todo-session/app.js

```javascript
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
    cookie: { maxAge: 30 * 60 * 1000 }
}));

const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c])
);

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
        </li>
    `).join('');

    res.send(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Session To-Do</title>
<style>
  body {
      font-family: Arial, sans-serif;
      max-width: 520px;
      margin: 50px auto;
      padding: 0 12px;
      background: ${theme === 'dark' ? '#1e1e24' : '#ffffff'};
      color: ${theme === 'dark' ? '#f1f1f1' : '#222'};
  }
  input[type=text] { padding: 8px; width: 65%; }
  button { padding: 8px 12px; }
  li { margin: 8px 0; }
</style>
</head>
<body>
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
</body>
</html>`);
});

// Add item
app.post('/add', (req, res) => {
    const text = (req.body.todoItem || '').trim();

    if (text) {
        req.session.todos.push(text);
    }

    res.redirect('/');
});

// Delete item
app.post('/delete', (req, res) => {
    const id = parseInt(req.body.id, 10);

    req.session.todos = req.session.todos.filter(
        (item, index) => index !== id
    );

    res.redirect('/');
});

// Save theme in a cookie
app.post('/theme', (req, res) => {
    const theme = req.body.theme === 'dark' ? 'dark' : 'light';

    res.cookie('theme', theme, {
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.redirect('/');
});

app.listen(PORT, () => console.log(`Exercise 2 running at http://localhost:${PORT}`));
```

**Run:**

```bash
node Exercises/exercise2-todo-session/app.js
```

Open `http://localhost:3000`.

### Test Steps
1. Add two or three items and delete one.
2. Click the theme button. The page should switch between light and dark mode, and the choice should remain after refreshing.
3. Open the page in a second browser or private window. It should have its own empty list.

---

## Observations

| Test | Result |
|---|---|
| Refresh `/` in the session example | Visit counter increases each time |
| Visit `/destroy`, then `/` | Counter restarts at 1 |
| `/set-cookie` then `/get-cookie` | Shows `JohnDoe` |
| `/delete-cookie` then `/get-cookie` | Shows `undefined` |
| DevTools → Application → Cookies | `connect.sid` and `theme` are visible |
| Open `/dashboard` while logged out | Redirected to `/login` |
| Logout | Session destroyed and `connect.sid` cleared |
| To-do list in a second browser | Separate, empty list |

## Key Notes
- Do not store passwords or sensitive information in cookies.
- Session data is safer because it stays on the server.
- User text is HTML-escaped before display to prevent XSS.
- For production, use a persistent session store such as Redis or MongoDB instead of the default memory store.
- Set `secure: true` on cookies when using HTTPS.
- Keep session secrets in environment variables.

## Screenshots

Insert the following screenshots:

1. Visit counter page.
2. Cookie information in browser DevTools.
3. Login page.
4. Dashboard after successful login.
5. To-do list in light theme.
6. To-do list in dark theme.

## Conclusion
Sessions and cookies were implemented in Node.js with Express. Sessions kept login state and the to-do list on the server, while cookies held the small client-side preference for the theme. A protected route was built with middleware, and passwords were hashed with bcrypt.