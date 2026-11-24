# Experiment 13 A: Express + Mongoose User Management (Registration and Login)

## Aim
To connect a Node.js and Express application to MongoDB using Mongoose, and build a simple user registration and login system.

## Tools and Technologies
- Node.js and npm
- Express (web framework)
- Mongoose (MongoDB ODM library)
- MongoDB (local installation or MongoDB Atlas)
- Web browser

## Prerequisites
- Node.js installed
- MongoDB installed locally, or a MongoDB Atlas account
- Basic knowledge of JavaScript

## Theory

### 1. What is Mongoose?
Mongoose is a library that helps developers work with MongoDB in Node.js. It provides:

- **Schemas:** Define the structure of data.
- **Models:** Provide an interface to interact with the database.
- **Validation:** Ensures data meets specified requirements.
- **Queries:** Provides methods to find, save, update and delete data.

### 2. What is a Schema?
A schema is a blueprint that defines which fields a document should contain.

```javascript
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
```

### 3. What is a Model?
A model is a class used to create, read, update and delete documents in MongoDB.

```javascript
const User = mongoose.model('User', userSchema);
```

MongoDB automatically creates a collection named `users` (lowercase and plural) when the model is used to store documents.

## Project Setup

### Step 1: Create the project directory

```bash
mkdir mongoose-demo
cd mongoose-demo
```

### Step 2: Initialise the Node.js project

```bash
npm init -y
```

### Step 3: Install dependencies

```bash
npm install express mongoose
```

### Step 4: Create `server.js`

Create a file named `server.js` and add the complete code given below.

## Project Structure

```text
mongoose-demo/
├── node_modules/
├── server.js
├── package.json
└── package-lock.json
```

## Complete Code (server.js)

```javascript
// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================
// STEP 1: CONNECT TO MONGODB
// ============================================

// Option A: Local MongoDB (must have MongoDB installed)
const DB_URL = 'mongodb://localhost:27017/userdb';

// Option B: MongoDB Atlas (replace with your connection string)
// const DB_URL = 'mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/userdb?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// ============================================
// STEP 2: DEFINE THE USER SCHEMA
// ============================================

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

// ============================================
// STEP 3: CREATE THE MODEL
// ============================================

const User = mongoose.model('User', userSchema);

// ============================================
// STEP 4: CREATE ROUTES
// ============================================

// HOME ROUTE
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>User Management System</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        .container { background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px; }
        h2 { color: #333; }
        input { width: 100%; padding: 10px; margin: 5px 0; box-sizing: border-box; }
        button { background: #007bff; color: white; padding: 10px 20px; border: none; cursor: pointer; margin: 5px; }
        button:hover { background: #0056b3; }
        .success { color: green; }
        .error { color: red; }
      </style>
    </head>
    <body>
      <h1>User Management System</h1>

      <div class="container">
        <h2>Register New User</h2>
        <form action="/signup" method="POST">
          <input type="text" name="username" placeholder="Username" required>
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="password" placeholder="Password" required>
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div class="container">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <input type="text" name="username" placeholder="Username" required>
          <input type="password" name="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
      </div>

      <div class="container">
        <h2>View All Users</h2>
        <form action="/users" method="GET">
          <button type="submit">Show All Registered Users</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// SIGNUP ROUTE - Register a new user
app.post('/signup', async (req, res) => {
  try {
    // Get data from the form submission
    const { username, email, password } = req.body;

    // Create a new user document
    const newUser = new User({
      username: username,
      email: email,
      password: password
    });

    // Save the document to MongoDB
    await newUser.save();

    res.send(`
      <h2 class="success">User registered successfully!</h2>
      <p>Username: ${username}</p>
      <p>Email: ${email}</p>
      <a href="/">Go back to home</a>
    `);

  } catch (error) {
    // Handle errors (like duplicate username or email)
    if (error.code === 11000) {
      res.send(`
        <h2 class="error">Error: Username or email already exists</h2>
        <a href="/">Go back and try again</a>
      `);
    } else {
      res.send(`
        <h2 class="error">Error: ${error.message}</h2>
        <a href="/">Go back and try again</a>
      `);
    }
  }
});

// LOGIN ROUTE - Check user credentials
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in database
    const user = await User.findOne({ username: username });

    // Check if user exists
    if (!user) {
      return res.send(`
        <h2 class="error">User not found</h2>
        <a href="/">Go back and try again</a>
      `);
    }

    // Check if password matches
    if (user.password !== password) {
      return res.send(`
        <h2 class="error">Incorrect password</h2>
        <a href="/">Go back and try again</a>
      `);
    }

    // Login successful
    res.send(`
      <h2 class="success">Login successful!</h2>
      <p>Welcome back, ${user.username}!</p>
      <p>Email: ${user.email}</p>
      <p>Account created: ${user.createdAt.toDateString()}</p>
      <a href="/">Go back to home</a>
    `);

  } catch (error) {
    res.send(`
      <h2 class="error">Error: ${error.message}</h2>
      <a href="/">Go back and try again</a>
    `);
  }
});

// GET ALL USERS ROUTE - Display all registered users
app.get('/users', async (req, res) => {
  try {
    // Find all users in the database
    const allUsers = await User.find();

    // Check if there are any users
    if (allUsers.length === 0) {
      return res.send(`
        <h2>No users registered yet</h2>
        <a href="/">Go back to home</a>
      `);
    }

    // Create HTML to display users
    let userList = '<h2>Registered Users</h2><ul>';

    allUsers.forEach(user => {
      userList += `
        <li>
          <strong>Username:</strong> ${user.username} |
          <strong>Email:</strong> ${user.email} |
          <strong>Joined:</strong> ${user.createdAt.toDateString()}
        </li>
      `;
    });

    userList += '</ul><a href="/">Go back to home</a>';
    res.send(userList);

  } catch (error) {
    res.send(`
      <h2 class="error">Error: ${error.message}</h2>
      <a href="/">Go back and try again</a>
    `);
  }
});

// ============================================
// START THE SERVER
// ============================================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## Code Explanation

| Part | What it does |
|---|---|
| `mongoose.connect(DB_URL)` | Opens the connection between the application and the `userdb` database. |
| `userSchema` | Defines the fields `username`, `email`, `password` and `createdAt` with validation rules. |
| `User` model | Provides access to methods such as `save()`, `find()` and `findOne()`. |
| `GET /` | Displays the home page with sign-up, login and view-users forms. |
| `POST /signup` | Creates a new user and saves it. Error code 11000 indicates a duplicate username or email. |
| `POST /login` | Finds a user using `findOne()` and compares the password. |
| `GET /users` | Displays all registered users using `find()`. |
| `async/await` | Handles asynchronous database operations. |

## Procedure / Testing the Application

### Step 1: Start MongoDB
- **Local MongoDB:** Run `mongod` or `sudo systemctl start mongod` on Ubuntu.
- **MongoDB Atlas:** Create a cluster, copy the connection string and replace `DB_URL` in the code.

### Step 2: Run the server

```bash
node server.js
```

Expected output:

```text
Server running on http://localhost:3000
Connected to MongoDB successfully
```

### Step 3: Open the browser

Open the following address:

```text
http://localhost:3000
```

### Step 4: Test the features

1. **Register a user:** Enter a username, email and password, then click Sign Up.
2. **Login:** Enter the same username and password.
3. **View all users:** Click "Show All Registered Users".
4. **Test duplicate registration:** Try registering with an existing username or email.
5. **Test incorrect login:** Try entering a wrong password or an unknown username.

## Key Mongoose Concepts

### 1. Connecting to MongoDB

```javascript
mongoose.connect(DB_URL)
  .then(() => console.log('Connected'))
  .catch(err => console.error('Error:', err));
```

### 2. Schema Definition

```javascript
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }
});
```

### 3. Creating a Model

```javascript
const User = mongoose.model('User', userSchema);
```

### 4. Creating and Saving Documents

```javascript
const newUser = new User({
  username: 'john',
  email: 'john@email.com'
});

await newUser.save();
```

### 5. Finding Documents

```javascript
const user = await User.findOne({ username: 'john' });  // One document

const allUsers = await User.find();                     // All documents

const admins = await User.find({ role: 'admin' });      // With a condition
```

### 6. Error Handling

```javascript
try {
  await newUser.save();
} catch (error) {
  if (error.code === 11000) {
    console.log('Duplicate key error');
  }
}
```

Error code `11000` indicates that a value for a unique field already exists in the database.

## Common Mongoose Methods

| Method | Purpose | Example |
|---|---|---|
| `.save()` | Saves a new document. | `await user.save()` |
| `.find()` | Finds all matching documents. | `await User.find()` |
| `.findOne()` | Finds one matching document. | `await User.findOne({ username: 'john' })` |
| `.findById()` | Finds a document by its ID. | `await User.findById(id)` |
| `.updateOne()` | Updates one matching document. | `await User.updateOne({ username: 'john' }, { email: 'new@email.com' })` |
| `.deleteOne()` | Deletes one matching document. | `await User.deleteOne({ username: 'john' })` |

## Observations

| Test | Expected Result |
|---|---|
| Server start | "Connected to MongoDB successfully" is printed. |
| Register a new user | "User registered successfully!" page appears. |
| Register the same username or email again | "Username or email already exists" message appears. |
| Login with correct credentials | "Login successful!" appears with the email and account creation date. |
| Login with wrong password | "Incorrect password" message appears. |
| Login with unknown username | "User not found" message appears. |
| View all users | A list of registered users is displayed. |
| Check MongoDB Compass or mongosh | Database `userdb` and collection `users` are available after the first record is saved. |

### Verify Data Using MongoDB Shell

```bash
mongosh
use userdb
db.users.find()
```

## Important Notes

- **Password storage:** Passwords are stored as plain text in this learning example. Real applications must hash passwords using a library such as bcrypt.
- **Error handling:** Basic `try/catch` handling is included.
- **Database name:** The `userdb` database is created when the first record is saved.
- **Collection name:** The `User` model automatically creates a collection named `users`.
- **Async/await:** Database operations are asynchronous.
- **User input:** User input is inserted directly into HTML responses. Real applications should escape user-provided content to prevent cross-site scripting (XSS).

## Troubleshooting

| Problem | Solution |
|---|---|
| Local MongoDB connection error | Make sure MongoDB is running using `mongod`. |
| Atlas connection error | Check the connection string, username, password and IP access settings. |
| Port already in use | Change `const PORT = 3000;` to another port, such as `3001`. |
| Duplicate key error | Use a different username or email. The code already handles this error. |

## Possible Improvements (Optional)

- Add password hashing using bcrypt.
- Use sessions to manage logged-in users.
- Add more schema fields, such as age and address.
- Add update and delete routes.
- Include input validation.
- Move the database URL to an environment variable.
- Separate routes into different files.

## Screenshots

Insert the following screenshots as evidence of the experiment:

1. Terminal showing "Connected to MongoDB successfully".
2. User Management System home page.
3. Successful user registration page.
4. Successful login page.
5. Registered users list.
6. `users` collection in MongoDB Compass or MongoDB Shell.

## Conclusion

A Node.js and Express application was successfully connected to MongoDB using Mongoose. A schema and model were defined to manage user information. Users were registered using `save()`, authenticated using `findOne()` and displayed using `find()`. Duplicate entries were handled using the unique index error code `11000`. The experiment demonstrated how Mongoose simplifies database operations and highlighted the importance of hashing passwords in real-world applications.