# Experiment 12 B – Sessions and Cookies with Node.js

## Setup
```
npm install
```
(installs express, express-session, cookie-parser, bcryptjs)

## Structure
```
Experiment_12/
├── package.json
├── README.md
├── Source/
│   ├── session-example.js   # Part 1 – session view counter
│   ├── cookie-example.js    # Part 2 – set/get/delete cookie
│   └── server.js            # Step-by-step login demo (session + cookie)
└── Exercises/
    ├── exercise1-login-system/app.js   # Register / Login / Dashboard / Logout
    └── exercise2-todo-session/app.js   # Session to-do list + theme cookie
```

## Run (all use port 3000 – run one at a time)
| Program | Command | URLs to try |
|---|---|---|
| Session example | `npm run session` | `/` (refresh to count), `/destroy` |
| Cookie example | `npm run cookie` | `/set-cookie`, `/get-cookie`, `/delete-cookie` |
| Login demo | `npm start` | `/` |
| Exercise 1 | `npm run ex1` | `/register`, `/login`, `/dashboard` |
| Exercise 2 | `npm run ex2` | `/` |

## Notes
- Exercise 1 keeps users in an in-memory array and hashes passwords with bcryptjs (optional challenge). `/dashboard` is protected by `authMiddleware`; logout destroys the session.
- Exercise 2 keeps the to-do list in `req.session.todos`; a `theme` cookie stores light/dark mode (optional challenge).
- User text is HTML-escaped before display to avoid XSS.
- Do not store passwords in cookies. For production use a persistent session store, `secure: true` on HTTPS, and environment variables for secrets.
