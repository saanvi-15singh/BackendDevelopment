# Experiment 13 A – Express + Mongoose User Management

## Setup
```
npm install
```
Make sure MongoDB is running (`mongod`, or `sudo systemctl start mongod` on Ubuntu)
or replace `DB_URL` in `server.js` with your MongoDB Atlas connection string.

## Run
```
node server.js
```
Open http://localhost:3000 – then register a user, log in, and view all users.

## Structure
```
mongoose-demo/
├── server.js      # schema, model, routes, server
├── package.json
└── README.md
```

## Notes
- Passwords are stored as plain text here because this is a learning example. Experiment 13 B hashes them with bcrypt.
- Duplicate username/email gives Mongo error code 11000, which is handled in `/signup`.
- Mongoose creates the `userdb` database and `users` collection automatically on first save.
