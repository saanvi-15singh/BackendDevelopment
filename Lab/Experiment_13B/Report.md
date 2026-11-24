# Experiment 13 B (Optional): User Registration, Login (JWT) and Todo List API with Express and MongoDB

## Aim
To build a REST API using Express, Mongoose and MongoDB that supports user registration with password hashing, login with JWT authentication, and protected CRUD operations for a todo list.

## Tools and Technologies
- Node.js and npm
- Express (web framework)
- Mongoose (MongoDB ODM)
- MongoDB (local) or MongoDB Atlas (cloud)
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)
- dotenv (environment variables)
- nodemon (automatic server restart during development)
- cURL, Postman or Thunder Client (API testing)

## Theory

### 1. Mongoose Schemas
A schema defines the structure and validation rules of documents in MongoDB. It specifies fields and their properties, such as `type`, `required`, `default` and `enum`. Methods and middleware (pre/post hooks) can also be added to provide extra functionality.

### 2. JWT Authentication
JWT stands for JSON Web Token. It is used to authenticate users in web applications.

- **Stateless authentication:** No session is stored on the server.
- **Token generation:** The token contains encoded user information and is signed with a secret key.
- **Token transmission:** The client sends the token in the `Authorization: Bearer <token>` header.
- **Token verification:** Middleware verifies the token before allowing access to protected routes.

### 3. Password Security
Passwords should never be stored as plain text.

- bcrypt hashes passwords using a salt.
- A Mongoose pre-save hook automatically hashes the password before saving it.
- During login, `bcrypt.compare()` checks the entered password against the stored hash.

### 4. RESTful API Design

| Method | Purpose |
|---|---|
| GET | Retrieve resources |
| POST | Create a resource |
| PUT | Update a resource |
| DELETE | Remove a resource |

### 5. HTTP Status Codes Used

| Status Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

## Prerequisites and Installation

### Option 1: Local MongoDB (Ubuntu)

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo systemctl start mongod
```

**For Windows:** Download the MongoDB Community Server installer. MongoDB can run as a Windows service.

**For macOS:**

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

Local MongoDB connection URL:

```text
mongodb://localhost:27017/todoapp
```

### Option 2: MongoDB Atlas (Cloud)

1. Visit MongoDB Atlas and create a free account.
2. Create a free-tier cluster.
3. Click **Connect**, then select **Connect your application**.
4. Copy the connection string and replace the username and password.

Example connection string:

```text
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/todoapp?retryWrites=true&w=majority
```

## Project Setup

### Step 1: Create the project directory

```bash
mkdir todo-app
cd todo-app
```

### Step 2: Initialise the Node.js project

```bash
npm init -y
```

### Step 3: Install dependencies

```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv
npm install --save-dev nodemon
```

### Step 4: Configure package.json scripts

Add the following scripts inside the `scripts` section of `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Step 5: Create the .env file

Create a file named `.env` in the project directory.

```env
MONGODB_URI=mongodb://localhost:27017/todoapp
# OR for Atlas: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/todoapp

JWT_SECRET=your_super_secret_key_change_this_in_production
PORT=3000
```

The `.env` file stores configuration values such as the MongoDB connection string, JWT secret and server port.

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

---

# Experiment 1: Connect to MongoDB

## Goal
To establish a connection between the Express application and MongoDB and verify that the connection works.

### config/db.js

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

**Note:** The options `useNewUrlParser` and `useUnifiedTopology` were removed because they are deprecated and ignored in current Mongoose versions.

### server.js (First Version)

```javascript
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Explanation

- `mongoose.connect()` opens the connection to MongoDB.
- `process.exit(1)` stops the application if the database connection fails.
- `dotenv` loads environment variables from the `.env` file.
- `express.json()` parses incoming JSON request bodies.
- `express.urlencoded()` parses form data.

### Test

Run the application:

```bash
npm run dev
```

Expected output:

```text
MongoDB Connected: localhost
Server running on port 3000
```

Open the following address in the browser:

```text
http://localhost:3000/
```

Expected response:

```json
{
  "message": "API is running..."
}
```

---

# Experiment 2: User Registration

## Goal
To create the user model and implement the user registration endpoint.

### models/User.js

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
}, {
  timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

### Explanation

- **Schema:** Defines the structure of user documents.
- **Validators:** Rules such as `required`, `unique`, `minlength` and `match` validate user information.
- **Pre-save hook:** Hashes the password automatically before saving it.
- **comparePassword:** Checks the entered password against the stored password hash.
- **timestamps:** Automatically adds `createdAt` and `updatedAt` fields.

### routes/auth.js (Registration)

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'User with this email or username already exists'
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password, // Will be hashed by pre-save hook
    });

    await user.save();

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
```

### Explanation

- `$or` checks whether the email or username already exists.
- The JWT contains the user's ID and is signed using the secret key.
- The password is hashed automatically by the model's pre-save hook.
- A token is returned so the user is authenticated immediately after registration.

### server.js (Updated Version)

```javascript
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Test Registration Using cURL

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"password123"}'
```

**Using Postman or Thunder Client:**

- Method: `POST`
- URL: `http://localhost:3000/api/auth/register`
- Body: Select JSON and enter:

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

Expected response:

```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john",
    "email": "john@example.com"
  }
}
```

---

# Experiment 3: User Login

## Goal
To create the login endpoint and authentication middleware using JWT.

### Login Route (Add to routes/auth.js)

Add the following code before `module.exports`:

```javascript
// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: 'Please provide email and password'
      });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});
```

### Explanation

- A generic `"Invalid credentials"` message is returned so the API does not reveal whether an email exists.
- `comparePassword()` checks the entered password against the stored hash.
- The JWT token is generated using the same secret key as registration.

### middleware/auth.js

```javascript
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        message: 'No token, authorization denied'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user id to request
    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(401).json({
      message: 'Token is not valid'
    });
  }
};

module.exports = auth;
```

### Explanation

- Extracts the JWT from the `Authorization` header.
- Verifies the token using the same secret key used to create it.
- Stores the user ID in `req.userId` for protected routes.
- `next()` passes control to the next middleware or route handler.

### Test Login Using cURL

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

Expected response:

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john",
    "email": "john@example.com"
  }
}
```

Save the generated token because it is required for the next experiment.

---

# Experiment 4: Create Todo List (CRUD)

## Goal
To implement Create, Read, Update and Delete operations for todos, protected by JWT authentication.

### models/Todo.js

```javascript
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  dueDate: {
    type: Date,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Todo', todoSchema);
```

### Explanation

- `user` links each todo to its owner.
- `ref: 'User'` establishes a reference to the User model and allows user data to be populated.
- `enum` restricts the priority field to `low`, `medium` or `high`.
- `dueDate` is an optional field.
- `timestamps` automatically adds creation and update dates.

### routes/todos.js

```javascript
const express = require('express');
const Todo = require('../models/Todo');
const auth = require('../middleware/auth');

const router = express.Router();

// All routes are protected with auth middleware

// @route   GET /api/todos
// @desc    Get all todos for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId })
      .sort({ createdAt: -1 }); // Newest first

    res.json({
      count: todos.length,
      todos,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/todos/:id
// @desc    Get single todo
router.get('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.userId, // Ensure user owns this todo
    });

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found'
      });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   POST /api/todos
// @desc    Create a new todo
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    const todo = new Todo({
      user: req.userId,
      title,
      description,
      priority,
      dueDate,
    });

    await todo.save();

    res.status(201).json({
      message: 'Todo created successfully',
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/todos/:id
// @desc    Update a todo
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, completed, priority, dueDate } = req.body;

    let todo = await Todo.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found'
      });
    }

    // Update fields
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;
    if (priority !== undefined) todo.priority = priority;
    if (dueDate !== undefined) todo.dueDate = dueDate;

    await todo.save();

    res.json({
      message: 'Todo updated successfully',
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   DELETE /api/todos/:id
// @desc    Delete a todo
router.delete('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found'
      });
    }

    res.json({
      message: 'Todo deleted successfully',
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
```

### Explanation

- Every todo route uses the `auth` middleware.
- `user: req.userId` ensures users can only view and modify their own todos.
- `sort({ createdAt: -1 })` displays the newest todos first.
- The update route checks whether a field is `undefined`, allowing partial updates.

### Final server.js

```javascript
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Test Todo Operations

Replace `YOUR_TOKEN_HERE` with the JWT received after login or registration. Replace `TODO_ID_HERE` with the ID of the todo you want to update or delete.

**1. Create a Todo**

```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title":"Buy groceries","description":"Milk, eggs, bread","priority":"high"}'
```

**2. Get All Todos**

```bash
curl -X GET http://localhost:3000/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**3. Update a Todo**

```bash
curl -X PUT http://localhost:3000/api/todos/TODO_ID_HERE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"completed":true}'
```

**4. Delete a Todo**

```bash
curl -X DELETE http://localhost:3000/api/todos/TODO_ID_HERE \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## API Endpoints Summary

| Method | URL | Authentication Required | Purpose |
|---|---|---|---|
| GET | `/` | No | Check whether the API is running |
| POST | `/api/auth/register` | No | Register a user and receive a token |
| POST | `/api/auth/login` | No | Login and receive a token |
| GET | `/api/todos` | Yes | List the logged-in user's todos |
| GET | `/api/todos/:id` | Yes | Get one todo |
| POST | `/api/todos` | Yes | Create a todo |
| PUT | `/api/todos/:id` | Yes | Update a todo |
| DELETE | `/api/todos/:id` | Yes | Delete a todo |

## Testing Checklist and Observations

| Test | Expected Result | Actual Result |
|---|---|---|
| Start server | "MongoDB Connected" and "Server running on port 3000" | |
| Register a new user | 201 response with token and user details | |
| Register the same user again | 400 response: "already exists" | |
| Login with correct credentials | 200 response with token | |
| Login with wrong password | 401 response: "Invalid credentials" | |
| Send todos request without token | 401 response: "No token, authorization denied" | |
| Send todos request with an invalid token | 401 response: "Token is not valid" | |
| Create a todo | 201 response with the created todo | |
| Get all todos | 200 response with count and todo list | |
| Update a todo (`completed: true`) | 200 response with updated todo | |
| Delete a todo | 200 response: "Todo deleted successfully" | |
| Check stored password in database | Password is hashed, not stored as plain text | |

## Common Issues and Solutions

| Issue | Solution |
|---|---|
| `MongooseServerSelectionError` | Check whether MongoDB is running or whether the Atlas connection string is correct. |
| `ValidationError` | Provide all required fields in the request body. |
| "Token is not valid" | Send the token using `Authorization: Bearer <token>`. |
| "User already exists" | The email or username is already taken. Use different credentials. |

## Possible Improvements

- Add input validation using express-validator.
- Implement pagination for todos.
- Add filtering by completion status, priority and date range.
- Add search by title or description.
- Include categories or tags.
- Implement refresh tokens.
- Develop a React or Vue frontend that communicates with the API.

## Screenshots

Insert the following screenshots as evidence of the experiment:

1. Terminal showing the server start output and MongoDB connection.
2. Successful user registration response.
3. Successful login response.
4. Create todo response.
5. Get all todos response.
6. Update todo response.
7. Delete todo response.
8. Request without a token showing the unauthorized response.
9. MongoDB Compass showing the `users` and `todos` collections.
10. User document showing the hashed password.

## Conclusion

A REST API was successfully developed using Express, Mongoose and MongoDB. User passwords were hashed using bcrypt through a Mongoose pre-save hook. JWT tokens were generated during registration and login to authenticate users. Authentication middleware protected the todo routes from unauthorized access. CRUD operations allowed users to create, read, update and delete their own todos. The experiment demonstrated password security, JWT authentication, database relationships, REST API design and the use of appropriate HTTP status codes.