# Experiment 14 – Relational vs Document Databases (PostgreSQL and MongoDB)

## 1. Introduction

Databases are used to store, manage, organize, and retrieve information efficiently. There are different types of databases, including relational databases and document-oriented databases.

A relational database stores data in tables consisting of rows and columns. PostgreSQL is an example of a relational database that uses SQL (Structured Query Language) to manage data.

A document database stores information in flexible, JSON-like documents. MongoDB is an example of a document-oriented database that stores data in BSON format.

In this experiment, PostgreSQL and MongoDB are used to create a student management system. The experiment demonstrates database creation, table creation, insertion, querying, updating, deleting, and comparing the working of both database systems.

## 2. Objectives

- To understand the difference between relational and document databases.
- To install and configure PostgreSQL and MongoDB.
- To create a database named `student_management` in PostgreSQL.
- To create a `students` table with appropriate columns and constraints.
- To insert student records into PostgreSQL.
- To perform SELECT, UPDATE, and DELETE operations.
- To create a `students` collection in MongoDB.
- To insert and retrieve student documents using MongoDB.
- To compare PostgreSQL and MongoDB based on their structure, queries, flexibility, and applications.

## 3. Software and Tools Required

- Operating System: Ubuntu Linux
- PostgreSQL: Relational Database Management System
- MongoDB: Document-Oriented Database
- MongoDB Shell (`mongosh`)
- Terminal
- SQL and JavaScript-style MongoDB Query Language (MQL)

## 4. PostgreSQL Implementation

### 4.1 Installation

PostgreSQL was installed using the provided installation script.

Command:

```bash
bash scripts/install_postgresql.sh
```

PostgreSQL provides a relational database environment in which data is organized into tables with predefined columns and data types.

### 4.2 Database and Table Creation

A database named `student_management` was created in PostgreSQL.

A table named `students` was created with the following attributes:

| Column | Description |
|---|---|
| id | Unique student ID |
| name | Student name |
| branch | Student's academic branch |
| email | Student's email address |
| enrollment_date | Date of enrollment |

The table uses appropriate data types and constraints to maintain data consistency.

### 4.3 Inserting Student Records

Five student records were inserted into the `students` table using the SQL INSERT command.

The email column uses a UNIQUE constraint to prevent duplicate email addresses.

### 4.4 Performing SQL Queries

The following operations were performed:

**1. Displaying all CSE students**

```sql
SELECT * FROM students
WHERE branch = 'CSE';
```

**2. Finding students enrolled after January 2024**

```sql
SELECT * FROM students
WHERE enrollment_date > '2024-01-31';
```

**3. Updating a student's branch**

The UPDATE command was used to modify the branch of a selected student.

```sql
UPDATE students
SET branch = 'IT'
WHERE id = 1;
```

**4. Deleting a student record**

The DELETE command was used to remove a selected student record.

```sql
DELETE FROM students
WHERE id = 5;
```

These operations demonstrate how PostgreSQL manages structured student information using SQL.

## 5. MongoDB Implementation

### 5.1 Installation

MongoDB was installed using the provided installation instructions.

MongoDB Shell (`mongosh`) was used to interact with the database.

### 5.2 Creating the Students Collection

A database and collection named `students` were used in MongoDB.

Unlike PostgreSQL, MongoDB does not require a predefined table structure before inserting documents. The collection can be created automatically when documents are inserted.

### 5.3 Inserting Student Documents

Three student documents were inserted into the `students` collection using the `insertMany()` method.

Example:

```javascript
db.students.insertMany([
    {
        id: 1,
        name: "Aarav",
        branch: "CSE",
        email: "aarav@example.com"
    },
    {
        id: 2,
        name: "Riya",
        branch: "IT",
        email: "riya@example.com"
    },
    {
        id: 3,
        name: "Rahul",
        branch: "CSE",
        email: "rahul@example.com"
    }
]);
```

The documents are stored in BSON format, which supports flexible and nested data structures.

### 5.4 Retrieving Student Records

The `find()` method was used to retrieve student documents.

```javascript
db.students.find();
```

To retrieve only CSE students:

```javascript
db.students.find({ branch: "CSE" });
```

This demonstrates how MongoDB retrieves records using its document-based query language.

## 6. PostgreSQL vs MongoDB Comparison

| Feature | PostgreSQL | MongoDB |
|---|---|---|
| Database Type | Relational Database | Document Database |
| Data Storage | Tables, rows and columns | JSON-like documents |
| Data Format | Structured tables | BSON documents |
| Schema | Predefined schema | Flexible schema |
| Query Language | SQL | MongoDB Query Language (MQL) |
| Data Validation | Supports constraints such as UNIQUE and NOT NULL | Supports optional schema validation |
| Relationships | Uses foreign keys and JOINs | Uses embedded documents and references |
| Transactions | Supports ACID transactions | Supports ACID transactions |
| Flexibility | Suitable for structured data | Suitable for flexible and evolving data |
| Example | Student management systems | Content management and product catalogs |

### 6.1 Inserting and Querying Data

**PostgreSQL:**

```sql
INSERT INTO students (id, name, branch, email)
VALUES (6, 'Aman', 'CSE', 'aman@example.com');
```

To retrieve CSE students:

```sql
SELECT * FROM students
WHERE branch = 'CSE';
```

**MongoDB:**

```javascript
db.students.insertOne({
    id: 6,
    name: "Aman",
    branch: "CSE",
    email: "aman@example.com"
});
```

To retrieve CSE students:

```javascript
db.students.find({ branch: "CSE" });
```

Both databases support insertion and querying, but their syntax and data storage approaches are different.

## 7. Additional PostgreSQL Features

The experiment also includes additional PostgreSQL operations through separate SQL scripts.

- **Aggregation:** Used to perform calculations and summarize records.
- **JSONB:** Used to store and process JSON-based data inside PostgreSQL tables.

The JSONB feature provides flexibility for storing document-like information while maintaining the advantages of a relational database.

## 8. Project Structure

The experiment is organized into the following directory structure:

```text
Experiment_14/
│
├── sql/
│   ├── 01_create_database_and_table.sql
│   ├── 02_insert.sql
│   ├── 03_queries_update_delete.sql
│   ├── 04_aggregation.sql
│   └── 05_jsonb.sql
│
├── mongodb/
│   └── students.mongosh.js
│
├── scripts/
│   ├── install_postgresql.sh
│   ├── install_mongodb.sh
│   └── run_all.sh
│
├── psql_cheatsheet.md
└── README.md
```

## 9. Execution Procedure

The experiment can be executed using the provided scripts.

**Step 1: Install PostgreSQL**

```bash
bash scripts/install_postgresql.sh
```

**Step 2: Install MongoDB**

Follow the instructions provided in `scripts/install_mongodb.sh`.

**Step 3: Execute all SQL scripts**

```bash
bash scripts/run_all.sh
```

Alternatively, PostgreSQL operations can be performed individually:

```bash
sudo -u postgres psql -f sql/01_create_database_and_table.sql

sudo -u postgres psql -d student_management -f sql/02_insert.sql

sudo -u postgres psql -d student_management -f sql/03_queries_update_delete.sql

sudo -u postgres psql -d student_management -f sql/04_aggregation.sql

sudo -u postgres psql -d student_management -f sql/05_jsonb.sql
```

**Step 4: Execute MongoDB script**

```bash
mongosh --file mongodb/students.mongosh.js
```

**Note:** If the insertion script is executed multiple times, PostgreSQL may reject duplicate email addresses because of the UNIQUE constraint. The database should be recreated before repeating the complete insertion process.

## 10. Learning Outcomes

After completing this experiment, I learned:

1. The fundamental difference between relational and document databases.
2. How to install and configure PostgreSQL and MongoDB.
3. How to create databases, tables, and collections.
4. How to insert, retrieve, update, and delete records.
5. How SQL queries work in PostgreSQL.
6. How MongoDB stores and retrieves documents using MQL.
7. How PostgreSQL constraints help maintain data consistency.
8. How MongoDB provides flexibility through document-based storage.
9. How PostgreSQL supports aggregation and JSONB operations.

## 11. Conclusion

Through this experiment, I understood the working principles of relational and document databases by implementing a student management system using PostgreSQL and MongoDB.

PostgreSQL uses structured tables, predefined schemas, and SQL queries to manage data. It provides features such as constraints, joins, aggregation, and JSONB support. MongoDB stores information in flexible BSON documents and allows data to be inserted without defining a fixed table structure in advance.

I learned that PostgreSQL is suitable for applications requiring structured data and strong relational consistency, whereas MongoDB is useful for applications that require flexible and evolving document structures.

Overall, this experiment helped me understand how both database systems work and how to select an appropriate database according to application requirements.