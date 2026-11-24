# Experiment 13 C: MongoDB Installation and Mongoose Basics

## Aim

To install and configure MongoDB, understand MongoDB Shell (mongosh), connect MongoDB with Node.js using Mongoose, and perform basic database operations such as creating, reading, updating and deleting documents.

## Tools and Technologies

- MongoDB Community Server
- MongoDB Shell (mongosh)
- MongoDB Compass (GUI)
- Node.js and npm
- Mongoose (MongoDB ODM library)
- Ubuntu 24.04
- Windows/macOS (optional platforms)
- MongoDB Atlas (cloud database)

## Prerequisites

- Basic knowledge of JavaScript and Node.js.
- Node.js and npm installed.
- Ubuntu 24.04 or another supported operating system.
- Basic knowledge of terminal commands.
- Internet connection for downloading MongoDB packages.

## Theory

### 1. What is MongoDB?

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents called BSON documents. Unlike relational databases, MongoDB does not require data to be stored in fixed rows and columns.

**Features of MongoDB:**
- Stores data in document format.
- Supports flexible schemas.
- Provides high performance for database operations.
- Supports indexing and querying.
- Can be used locally or through cloud services.

### 2. What is MongoDB Shell (mongosh)?

MongoDB Shell, also called `mongosh`, is a command-line interface used to interact with MongoDB.

It allows users to:
- Connect to a MongoDB server.
- Create and select databases.
- Create collections.
- Insert and retrieve documents.
- Update and delete records.
- Manage database users.

### 3. What is MongoDB Compass?

MongoDB Compass is a graphical user interface (GUI) for MongoDB. It allows users to view and manage databases, collections and documents without writing every command in the terminal.

### 4. What is Mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a structured way to interact with MongoDB.

**Main features:**
- Schemas to define document structure.
- Models to interact with collections.
- Validation for database fields.
- CRUD operations.
- Query methods and middleware.

### 5. MongoDB vs Mongoose

| MongoDB | Mongoose |
|---|---|
| NoSQL database | ODM library for Node.js |
| Stores data as BSON documents | Provides a structured way to work with MongoDB |
| Uses collections and documents | Uses schemas and models |
| Can be accessed through mongosh | Commonly used in Node.js applications |
| Handles database storage | Simplifies database operations and validation |

## 1. MongoDB Installation (Ubuntu 24.04)

MongoDB Community Server can be installed on Ubuntu using the provided installation script.

### Step 1: Run the installation script

Open the terminal in the project directory and execute:

```bash
bash scripts/install_mongodb_ubuntu.sh
```

The script installs MongoDB on the Ubuntu system.

### Step 2: Test MongoDB Shell

After installation, run:

```bash
mongosh
```

This opens the MongoDB Shell and allows interaction with the database.

### Step 3: Verify the connection

If MongoDB Shell connects successfully, the installation can be considered successful.

### Step 4: Exit MongoDB Shell

```javascript
exit
```

## 2. Install MongoDB Compass (Optional)

MongoDB Compass is an optional graphical tool used to view and manage MongoDB databases.

### Step 1: Download MongoDB Compass

Download the MongoDB Compass `.deb` package for Ubuntu.

### Step 2: Run the installation script

```bash
bash scripts/install_compass_ubuntu.sh
```

### Step 3: Connect to MongoDB

Open MongoDB Compass and enter the following connection string:

```text
mongodb://127.0.0.1:27017
```

Click **Connect** to access the local MongoDB server.

## 3. MongoDB Installation on Other Platforms

### Windows

1. Download the MongoDB Community Server MSI installer.
2. Run the installer.
3. Follow the installation instructions.
4. Install MongoDB Shell if required.
5. Open the terminal and execute:

```bash
mongosh
```

### macOS

MongoDB can be installed using Homebrew.

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### MongoDB Atlas (Cloud)

MongoDB Atlas provides a cloud-based database service.

Steps:

1. Create a free account on MongoDB Atlas.
2. Create a free-tier cluster.
3. Open the Connect option.
4. Select Connect your application.
5. Copy the MongoDB connection string.
6. Set the connection string as the `MONGODB_URI` environment variable.

Example:

```text
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/schoolDB
```

## 4. Install Node.js Packages

After MongoDB installation, navigate to the project directory and install the required Node.js dependencies.

```bash
npm install
```

This command installs the dependencies listed in `package.json`.

Mongoose is used to connect the Node.js application with MongoDB and perform database operations.

## 5. Project Structure

```text
Experiment_13C/
│
├── config/
│   └── db.js
│
├── models/
│   └── studentModel.js
│
├── scripts/
│   ├── install_mongodb_ubuntu.sh
│   ├── install_compass_ubuntu.sh
│   ├── mongosh_basics.js
│   └── mongosh_auth.js
│
├── connect.js
├── crud.js
├── queries.js
├── package.json
└── README.md
```

### Explanation of Files and Folders

| File/Folder | Purpose |
|---|---|
| `config/db.js` | Contains the MongoDB database connection configuration. |
| `models/studentModel.js` | Defines the student schema and Mongoose model. |
| `scripts/` | Contains MongoDB installation and Shell scripts. |
| `install_mongodb_ubuntu.sh` | Installs MongoDB on Ubuntu. |
| `install_compass_ubuntu.sh` | Installs MongoDB Compass on Ubuntu. |
| `mongosh_basics.js` | Demonstrates basic MongoDB Shell operations. |
| `mongosh_auth.js` | Demonstrates creating an administrative database user. |
| `connect.js` | Demonstrates connecting Node.js to MongoDB. |
| `crud.js` | Demonstrates CRUD operations using Mongoose. |
| `queries.js` | Demonstrates MongoDB query operators, sorting, limiting and projection. |
| `package.json` | Stores project information, dependencies and npm scripts. |
| `README.md` | Contains project documentation and instructions. |

## 6. MongoDB Shell Basics

MongoDB Shell provides commands to interact with databases and collections.

### Common MongoDB Shell Commands

| Command | Purpose |
|---|---|
| `mongosh` | Opens MongoDB Shell. |
| `show dbs` | Displays available databases. |
| `use schoolDB` | Selects the `schoolDB` database. |
| `show collections` | Displays collections in the current database. |
| `db.students.find()` | Displays student documents. |
| `db.students.insertOne({name: "John"})` | Inserts one document. |
| `db.students.updateOne({name: "John"}, {$set: {age: 21}})` | Updates one document. |
| `db.students.deleteOne({name: "John"})` | Deletes one document. |
| `exit` | Exits MongoDB Shell. |

### Run the MongoDB Basics Script

Execute:

```bash
mongosh --file scripts/mongosh_basics.js
```

This runs the script containing basic MongoDB Shell operations.

### Create an Administrative User

Execute:

```bash
mongosh --file scripts/mongosh_auth.js
```

This runs the script demonstrating the creation of an administrative database user.

## 7. Connect Node.js with MongoDB

Mongoose allows a Node.js application to establish a connection with MongoDB.

The project contains:

```text
config/db.js
connect.js
```

The `config/db.js` file manages the database connection, while `connect.js` demonstrates connecting the application to MongoDB.

### Run the Connection Program

```bash
npm run connect
```

This executes the connection script configured in `package.json`.

## 8. Mongoose Model and Schema

A Mongoose schema defines the structure and validation rules of documents.

The project contains the following model file:

```text
models/studentModel.js
```

The `studentModel.js` file defines the student schema and creates a model that can be used to perform database operations.

**Important concepts:**

- **Schema:** Defines the structure of documents.
- **Model:** Provides methods to interact with a collection.
- **Document:** Represents an individual record stored in MongoDB.
- **Collection:** Stores related documents.

## 9. CRUD Operations Using Mongoose

CRUD stands for Create, Read, Update and Delete.

These operations are used to manage documents in MongoDB.

| Operation | Purpose | Common Mongoose Method |
|---|---|---|
| Create | Insert a new document | `save()` or `create()` |
| Read | Retrieve documents | `find()` or `findOne()` |
| Update | Modify existing documents | `updateOne()` or `findByIdAndUpdate()` |
| Delete | Remove documents | `deleteOne()` or `findByIdAndDelete()` |

### Run the CRUD Program

```bash
npm run crud
```

This executes the `crud.js` program and demonstrates database operations using the Mongoose model.

## 10. MongoDB Query Operators

MongoDB provides query operators to retrieve documents based on specific conditions.

Some commonly used operators include:

| Operator | Purpose | Example |
|---|---|---|
| `$eq` | Matches equal values | `{ age: { $eq: 20 } }` |
| `$gt` | Matches values greater than a given value | `{ age: { $gt: 18 } }` |
| `$gte` | Matches values greater than or equal to a given value | `{ age: { $gte: 18 } }` |
| `$lt` | Matches values less than a given value | `{ age: { $lt: 25 } }` |
| `$lte` | Matches values less than or equal to a given value | `{ age: { $lte: 25 } }` |
| `$ne` | Matches values not equal to a given value | `{ age: { $ne: 20 } }` |
| `$in` | Matches values in an array | `{ age: { $in: [18, 20, 22] } }` |

## 11. Sorting, Limiting and Projection

MongoDB provides additional methods to control query results.

### Sorting

Sorting arranges documents in ascending or descending order.

```javascript
Student.find().sort({ age: 1 });
```

- `1` means ascending order.
- `-1` means descending order.

### Limiting

The `limit()` method restricts the number of documents returned.

```javascript
Student.find().limit(5);
```

This returns a maximum of five documents.

### Projection

Projection selects specific fields from documents.

```javascript
Student.find().select('name age');
```

This returns only the `name` and `age` fields.

### Run the Queries Program

```bash
npm run queries
```

This executes `queries.js` and demonstrates query operators, sorting, limiting and projection.

## 12. Running the Programs

The following commands execute the different programs included in the experiment.

| Command | Manual Section | Purpose |
|---|---|---|
| `npm run connect` | Section 7 | Connects Node.js to MongoDB. |
| `npm run crud` | Sections 8 and 9 | Demonstrates Mongoose models, connection handling and CRUD operations. |
| `npm run queries` | Sections 10 and 11 | Demonstrates query operators, sorting, limiting and projection. |
| `mongosh --file scripts/mongosh_basics.js` | Section 6 | Executes basic MongoDB Shell operations. |
| `mongosh --file scripts/mongosh_auth.js` | Section 6 | Executes the administrative user creation script. |

### Using a Different Database

To use a different MongoDB database, set another connection string through the `MONGODB_URI` environment variable.

Example:

```bash
MONGODB_URI=mongodb://localhost:27017/anotherDB npm run crud
```

This runs the CRUD program using the `anotherDB` database instead of the default database.

## 13. Database Verification

Mongoose automatically creates the database and collection when the first document is inserted. Manual database or collection creation is not required for this experiment.

The default database is:

```text
schoolDB
```

The collection is:

```text
students
```

### Verify Using MongoDB Shell

Open MongoDB Shell:

```bash
mongosh
```

Select the database:

```javascript
use schoolDB
```

Display the student documents:

```javascript
db.students.find()
```

### Verify Using MongoDB Compass

1. Open MongoDB Compass.
2. Connect using:

```text
mongodb://127.0.0.1:27017
```

3. Open the `schoolDB` database.
4. Select the `students` collection.
5. View the inserted student documents.

## Observations

| Test | Expected Result |
|---|---|
| MongoDB installation | MongoDB Community Server is installed successfully. |
| Run `mongosh` | MongoDB Shell opens successfully. |
| MongoDB Compass connection | Compass connects to the local MongoDB server. |
| Run `npm install` | Required Node.js packages are installed. |
| Run `npm run connect` | Node.js application connects to MongoDB. |
| Run `npm run crud` | CRUD operations execute successfully. |
| Run `npm run queries` | Query operators, sorting, limiting and projection are demonstrated. |
| Run `mongosh_basics.js` | Basic MongoDB Shell commands are executed. |
| Run `mongosh_auth.js` | Administrative user creation script is executed. |
| Inspect `schoolDB` | Database and `students` collection can be viewed. |

## Troubleshooting

| Problem | Possible Cause | Solution |
|---|---|---|
| `ECONNREFUSED 127.0.0.1:27017` | MongoDB server is not running. | Start MongoDB using `sudo systemctl start mongod`. |
| MongoDB connection failure | Incorrect connection string. | Verify the `MONGODB_URI` value. |
| `mongosh: command not found` | MongoDB Shell is not installed or not added to PATH. | Install MongoDB Shell and verify its PATH configuration. |
| Compass connection failure | MongoDB server is not running. | Start MongoDB and reconnect using the local connection string. |
| `npm run connect` fails | Dependencies or database configuration may be incorrect. | Run `npm install` and check the connection configuration. |
| Database not visible | No documents have been inserted yet. | Run the CRUD program and insert a document. |

### Check MongoDB Service Status

```bash
sudo systemctl status mongod
```

### Start MongoDB Service

```bash
sudo systemctl start mongod
```

## Important Notes

- MongoDB stores information in BSON document format.
- `mongosh` is used to interact with MongoDB through the command line.
- MongoDB Compass provides a graphical interface for database management.
- Mongoose simplifies MongoDB operations in Node.js.
- A schema defines the structure of documents.
- A model provides methods to interact with a collection.
- CRUD operations are used to manage database records.
- MongoDB automatically creates the database and collection when the first document is inserted.
- The default database used in this experiment is `schoolDB`.
- The default collection used in this experiment is `students`.

## Screenshots

Insert the following screenshots as evidence of the experiment:

1. MongoDB installation process in Ubuntu terminal.
2. Successful execution of `mongosh`.
3. MongoDB Compass connection.
4. Project structure showing all files and folders.
5. Successful execution of `npm install`.
6. Terminal output of `npm run connect`.
7. Terminal output of `npm run crud`.
8. Terminal output of `npm run queries`.
9. Execution of `mongosh_basics.js`.
10. Execution of `mongosh_auth.js`.
11. MongoDB Compass showing the `schoolDB` database.
12. `students` collection displaying inserted documents.

## Conclusion

MongoDB was installed and configured, and its connection was tested using MongoDB Shell. MongoDB Compass was used as an optional graphical interface for viewing database records. Node.js was connected to MongoDB using Mongoose, and basic database operations were performed using schemas, models and CRUD methods. MongoDB query operators, sorting, limiting and projection were also explored. The experiment demonstrated how MongoDB and Mongoose can be used together to manage data in a Node.js application.