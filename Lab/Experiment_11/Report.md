# Backend Development Lab Report

---

# Experiment 11: Website with HTML, CSS and JavaScript (Implement AJAX)

## Aim
To create a website using HTML, CSS and JavaScript that loads data asynchronously with AJAX, without reloading the page.

## Tools and Technologies
HTML5, CSS3, JavaScript (Fetch API, XMLHttpRequest, DOM), JSON, a browser with DevTools, VS Code, and `python3 -m http.server` as a local server.

## Theory
AJAX (Asynchronous JavaScript and XML) lets a page request data from a server in the background and update only part of the page. The browser sends an HTTP request, the server returns data (usually JSON), and JavaScript updates the DOM.

JSON is lighter and easier to parse than XML. `fetch()` is the modern, promise-based API. `XMLHttpRequest` is the original AJAX object. `fetch()` does not reject on HTTP 404 or 500, so `response.ok` must be checked.

## Project Structure

```text
Experiment_11/
├── index.html
├── style.css
├── app.js
└── students.json
```

## Code

### students.json

```json
{
  "students": [
    { "id": 101, "name": "Aarav", "course": "B.Tech CSE" },
    { "id": 102, "name": "Meera", "course": "B.Tech IT" },
    { "id": 103, "name": "Kabir", "course": "B.Tech CSE" }
  ]
}
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Experiment 11 - Website with AJAX</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>Student Directory</h1>
        <button id="loadFetch">Load with Fetch API</button>
        <button id="loadXhr">Load with XMLHttpRequest</button>
        <button id="clearBtn">Clear</button>
        <p id="status" role="status">Click a button to load student data.</p>
        <table>
            <thead><tr><th>ID</th><th>Name</th><th>Course</th></tr></thead>
            <tbody id="studentTable"></tbody>
        </table>
    </main>
    <script src="app.js"></script>
</body>
</html>
```

### style.css

```css
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f3f6fa;
    color: #202a35;
}

.container {
    max-width: 800px;
    margin: 40px auto;
    padding: 24px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

button {
    margin: 4px;
    padding: 10px 16px;
    border: 0;
    border-radius: 4px;
    background: #2457c5;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #1b43a0;
}

table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border: 1px solid #ccd3dc;
    text-align: left;
}

th {
    background: #e7eef8;
}

.error {
    color: #b00020;
}

.success {
    color: #1b7f3b;
}

@media (max-width: 600px) {
    .container {
        margin: 10px;
        padding: 12px;
    }

    button {
        width: 100%;
        margin: 4px 0;
    }
}
```

### app.js

```javascript
const tableBody = document.querySelector("#studentTable");
const statusMessage = document.querySelector("#status");

function setStatus(text, type) {
    statusMessage.textContent = text;
    statusMessage.className = type || "";
}

// textContent treats values as text, not HTML (safe DOM update).
function displayStudents(students) {
    tableBody.replaceChildren();

    students.forEach(student => {
        const row = document.createElement("tr");

        [student.id, student.name, student.course].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// AJAX method 1: Fetch API
document.querySelector("#loadFetch").addEventListener("click", async () => {
    setStatus("Loading data with Fetch...");

    try {
        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        displayStudents(data.students);
        setStatus("Data loaded successfully using Fetch.", "success");

    } catch (error) {
        setStatus(`Error: ${error.message}`, "error");
    }
});

// AJAX method 2: XMLHttpRequest
document.querySelector("#loadXhr").addEventListener("click", () => {
    setStatus("Loading data with XMLHttpRequest...");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "students.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            displayStudents(JSON.parse(xhr.responseText).students);
            setStatus("Data loaded successfully using XMLHttpRequest.", "success");
        } else {
            setStatus(`Error: HTTP ${xhr.status}`, "error");
        }
    };

    xhr.onerror = () => setStatus("Error: network request failed.", "error");
    xhr.send();
});

document.querySelector("#clearBtn").addEventListener("click", () => {
    tableBody.replaceChildren();
    setStatus("Table cleared.");
});
```

## Procedure

1. Create the four files above in one folder.
2. Run `python3 -m http.server 8000` in that folder and open `http://localhost:8000`.
3. Click both load buttons and confirm the table fills without a page reload.
4. Open DevTools → Network and note the request URL, status code, size and time.
5. Rename `students.json`, click again, and observe the error message. Rename it back.

## Observation Table

| Action | Request URL | Status | Size | Time | Result |
|---|---|---|---|---|---|
| Load with Fetch | students.json | 200 | | | Table filled |
| Load with XHR | students.json | 200 | | | Table filled |
| File renamed | students.json | 404 | | | Error message shown |

## Fetch vs XMLHttpRequest

| Feature | Fetch | XMLHttpRequest |
|---|---|---|
| Style | Promises / async-await | Event callbacks |
| HTTP errors | Check `response.ok` | Check `xhr.status` |
| JSON | `response.json()` | `JSON.parse(xhr.responseText)` |

## Screenshots

Insert the following screenshots:

1. Web page before loading data.
2. Web page after loading student data.
3. Network tab showing the AJAX request.
4. Error message after renaming `students.json`.

## Conclusion

A web page was built with HTML, CSS and JavaScript that retrieves JSON data asynchronously using both Fetch and XMLHttpRequest. The retrieved data is displayed in a table without reloading the page, and error handling is implemented.

---

# Experiment 12 (Optional): Sessions and Cookies in Node.js

## Aim
To manage state in a Node.js web application using sessions and cookies.

## Tools
Node.js, Express, express-session, cookie-parser, bcryptjs and a browser.

## Theory
HTTP is stateless. A **cookie** is a small piece of data stored in the browser and sent with every request. Cookies are useful for preferences such as a theme.

A **session** keeps data on the server and gives the browser only a session ID inside a cookie. Sessions are commonly used for login state.

The session process works as follows:

1. User logs in.
2. Server creates a session.
3. Session ID is sent to the browser in a cookie.
4. Browser sends the session ID with each request.
5. Server uses the session ID to identify the user's session.

## Setup

```bash
npm init -y
npm install express express-session cookie-parser bcryptjs
```

## Part 1: Session (session-example.js)

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
        if (err) return res.send('Error destroying session');
        res.send('Session destroyed');
    });
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
```

## Part 2: Cookie (cookie-example.js)

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
    res.send(`Cookie Retrieved: ${req.cookies['username']}`);
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie deleted');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

## Part 3: Login Demo Using Both (server.js)

```javascript
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
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

app.get('/', (req, res) => {
    if (req.session.username) {
        res.send(`Welcome back, ${esc(req.session.username)}! <a href="/logout">Logout</a>`);
    } else {
        res.send(`<form action="/login" method="post">
            <input type="text" name="username" placeholder="Enter username"/>
            <button type="submit">Login</button>
        </form>`);
    }
});

app.post('/login', (req, res) => {
    req.session.username = req.body.username;
    res.cookie('theme', 'dark', { maxAge: 900000, httpOnly: true });
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
```

## Exercise 1: Simple User Login System

### Requirements

- Register page.
- Login page.
- Dashboard accessible only to logged-in users.
- Logout functionality.
- Passwords hashed with bcrypt (optional challenge).

```javascript
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();
const users = [];   // in-memory store

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'exercise1-secret',
    resave: false,
    saveUninitialized: false
}));

function authMiddleware(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password || password.length < 6 ||
        users.find(u => u.username === username)) {
        return res.redirect('/register');
    }

    users.push({
        username,
        passwordHash: await bcrypt.hash(password, 10)
    });

    res.redirect('/login');
});

app.post('/login', async (req, res) => {
    const user = users.find(u => u.username === req.body.username);

    if (!user || !(await bcrypt.compare(req.body.password, user.passwordHash))) {
        return res.redirect('/login');
    }

    req.session.user = { username: user.username };
    res.redirect('/dashboard');
});

app.get('/dashboard', authMiddleware, (req, res) => {
    res.send(`Welcome, ${req.session.user.username}!
        <form method="post" action="/logout">
            <button>Logout</button>
        </form>`);
});

app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});

// GET /register and GET /login render HTML forms (see full project).

app.listen(3000);
```

## Exercise 2: Session-Based To-Do List

```javascript
app.use((req, res, next) => {
    if (!req.session.todos) {
        req.session.todos = [];
    }
    next();
});

app.post('/add', (req, res) => {
    const text = (req.body.todoItem || '').trim();

    if (text) {
        req.session.todos.push(text);
    }

    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const id = parseInt(req.body.id, 10);

    req.session.todos = req.session.todos.filter(
        (item, index) => index !== id
    );

    res.redirect('/');
});

// Optional: theme saved in a cookie
app.post('/theme', (req, res) => {
    res.cookie(
        'theme',
        req.body.theme === 'dark' ? 'dark' : 'light',
        { maxAge: 7 * 24 * 60 * 60 * 1000 }
    );

    res.redirect('/');
});
```

## When to Use What

| Use Case | Recommended |
|---|---|
| Remember theme or language | Cookie |
| Keep user logged in | Session |
| Shopping cart | Session |

## Observations

- Refreshing `/` increments the visit counter.
- Visiting `/destroy` resets the session.
- DevTools → Application → Cookies shows `connect.sid` and `theme`.
- After logout, the session cookie is cleared and `/dashboard` redirects to login.

## Conclusion

Sessions and cookies were implemented in Node.js. Sessions store application state on the server, while cookies hold small pieces of client-side information. Protected routes were created using authentication middleware.

---

# Experiment 13 A: Express + Mongoose User Registration and Login

## Aim
To connect Node.js to MongoDB using Mongoose and build a simple registration and login system.

## Tools
Node.js, Express, Mongoose and MongoDB (local or Atlas).

## Theory
Mongoose is an ODM (Object Data Modeling) library for MongoDB. A **schema** defines the structure of documents, and a **model** provides the interface for create, read, update and delete operations.

Mongoose creates the database and the `users` collection automatically when the first document is saved. Error code `11000` means a unique field already exists.

## Setup

```bash
mkdir mongoose-demo
cd mongoose-demo
npm init -y
npm install express mongoose
```

## Code (server.js – Core Parts)

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_URL = 'mongodb://localhost:27017/userdb';

mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

// Signup
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        await new User({ username, email, password }).save();

        res.send('<h2>User registered successfully!</h2><a href="/">Home</a>');

    } catch (error) {
        if (error.code === 11000) {
            res.send('<h2>Error: Username or email already exists</h2><a href="/">Back</a>');
        } else {
            res.send(`<h2>Error: ${error.message}</h2><a href="/">Back</a>`);
        }
    }
});

// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.send('<h2>User not found</h2>');
    }

    if (user.password !== password) {
        return res.send('<h2>Incorrect password</h2>');
    }

    res.send(`<h2>Login successful!</h2><p>Welcome back, ${user.username}!</p>`);
});

// List all users
app.get('/users', async (req, res) => {
    const allUsers = await User.find();
    res.json(allUsers);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

The complete file also serves an HTML home page with sign-up, login and view-users forms.

## Procedure

1. Start MongoDB using `mongod` or the appropriate service command for your system.
2. Run `node server.js`.
3. Open `http://localhost:3000`.
4. Register a user.
5. Log in using the registered credentials.
6. View all registered users.

## Common Mongoose Methods

| Method | Purpose |
|---|---|
| `.save()` | Save a new document |
| `.find()` | Find all matching documents |
| `.findOne()` | Find one matching document |
| `.findById()` | Find a document by ID |
| `.updateOne()` | Update one document |
| `.deleteOne()` | Delete one document |

## Note
Passwords are stored as plain text in this example for learning purposes only. Experiment 13 B demonstrates password hashing using bcrypt.

## Conclusion
A Mongoose schema and model were created, and users were registered, authenticated and listed using MongoDB.

---

# Experiment 13 B (Optional): User Registration, Login (JWT) and To-Do List API

## Aim
To build a REST API with Express and MongoDB featuring password hashing, JWT authentication and protected To-Do CRUD routes.

## Tools and Technologies
Node.js, Express, MongoDB, Mongoose, bcryptjs, JSON Web Token (JWT), dotenv and Postman.

## Setup

```bash
npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv
npm install --save-dev nodemon
```

## Environment Variables (.env)

```env
MONGODB_URI=mongodb://localhost:27017/todoapp
JWT_SECRET=your_super_secret_key_change_this_in_production
PORT=3000
```

## Project Structure

```text
todo-app/
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Todo.js
├── routes/
│   ├── auth.js
│   └── todos.js
├── .env
├── server.js
└── package.json
```

## Experiment 1: Connect to MongoDB (config/db.js)

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
```

## Experiment 2: User Model and Registration (models/User.js)

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async function (candidate) {
    return await bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

## routes/auth.js (Register and Login)

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const makeToken = id =>
    jwt.sign(
        { userId: id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existing = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existing) {
            return res.status(400).json({
                message: 'User with this email or username already exists'
            });
        }

        const user = new User({ username, email, password });
        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            token: makeToken(user._id),
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Please provide email and password'
            });
        }

        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        res.json({
            message: 'Login successful',
            token: makeToken(user._id),
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
});
```

