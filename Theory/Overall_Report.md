# Backend Development – Overall Practical Report

## 1. Student Details

| Particulars | Details |
|---|---|
| Name | Saanvi Singh |
| SAP ID | 590011951 |
| Course | Backend Development |
| Department | Computer Science and Engineering |
| University | UPES |

---

## 2. Introduction

Backend Development is an important part of web application development that focuses on server-side programming, database management, API development, authentication, and application logic.

Throughout this course, I worked on different practical implementations covering backend technologies such as Python, JavaScript, Node.js, Express.js, Flask, Django, FastAPI, PostgreSQL, SQLite, and MongoDB.

The practical work was divided into different units and assignments. Each unit introduced important backend concepts and provided opportunities to understand their implementation through programming exercises and demonstrations.

This repository contains the practical work completed in Units 1, 2, 3, and 5, along with three assignments covering frontend interaction, database management, and serverless architecture.

## 3. Objectives

The main objectives of the practical work were:

- To understand the fundamentals of backend development.
- To learn server-side programming using Python and JavaScript.
- To understand client-server communication and HTTP protocols.
- To develop REST APIs using different backend frameworks.
- To understand database connectivity and CRUD operations.
- To implement authentication and authorization.
- To work with SQL and NoSQL databases.
- To understand middleware, routing, caching, and API integration.
- To explore advanced backend concepts such as messaging, serverless computing, and performance monitoring.
- To develop practical problem-solving and debugging skills.

---

# 4. Unit-Wise Practical Work

## Unit 1 – Backend Development Fundamentals

### Overview

Unit 1 introduced the fundamental concepts of backend development, client-server architecture, HTTP communication, server-side frameworks, sessions, cookies, and server-side rendering.

The practical exercises focused on understanding how frontend applications communicate with backend servers and how data is processed and displayed.

### Practical Folders

`unit-1(P-1)` to `unit-1(P-6)`

### Topics Covered

1. Introduction to Backend Development and Client-Server Architecture.
2. Setting up the backend development environment.
3. HTTP methods, requests, and responses.
4. REST API development using FastAPI.
5. Sessions, cookies, and state management.
6. LocalStorage, SessionStorage, and JSON.
7. Server-Side Rendering using templates.
8. Introduction to EJS and Jinja2.

### Technologies Used

- Python
- JavaScript
- Node.js
- Express.js
- Flask
- FastAPI
- EJS
- Jinja2
- HTML
- CSS
- JSON

### Learning Outcomes

- Understood how frontend and backend communicate.
- Learned the basic working of HTTP requests and responses.
- Understood REST API fundamentals.
- Explored different backend frameworks.
- Learned how sessions and cookies maintain user state.
- Understood the difference between client-side and server-side rendering.

---

## Unit 2 – Database Management and API Development

### Overview

Unit 2 focused on database management, data modelling, database connectivity, CRUD operations, API development, authentication, and query optimization.

The practical exercises involved working with relational and non-relational databases and understanding how backend applications store, retrieve, and manage information.

### Practical Folders

`unit-2(P-1)` to `unit-2(P-11)`

### Topics Covered

1. Introduction to databases.
2. SQL and relational database management.
3. Database normalization.
4. Schema design and data modelling.
5. CRUD operations.
6. Database connectivity using SQLAlchemy.
7. MongoDB and Mongoose.
8. REST API design and implementation.
9. Authentication and authorization.
10. JWT-based authentication.
11. Password hashing using bcrypt.
12. API testing using pytest.
13. Query optimization and indexing.

### Technologies Used

- Python
- FastAPI
- SQLite
- SQLAlchemy
- MongoDB
- Mongoose
- JWT
- bcrypt
- pytest

### Testing

The practical work included automated testing using pytest.

A total of 151 test cases were available in the project test suite.

### Learning Outcomes

- Understood relational and non-relational databases.
- Learned database schema design and normalization.
- Practised CRUD operations.
- Understood ORM concepts using SQLAlchemy.
- Explored MongoDB and Mongoose.
- Learned JWT authentication and password hashing.
- Understood API testing and validation.
- Learned the importance of indexing and query optimization.

---

## Unit 3 – Advanced Backend Development

### Overview

Unit 3 focused on advanced backend development concepts, including middleware, routing, external API integration, testing, authentication, caching, forms, and file uploads.

The practical exercises involved working with Express.js and Django to understand how backend applications handle requests, manage users, interact with external services, and process files.

### Practical Folders

`unit-3(P-1)` to `unit-3(P-8)`

### Topics Covered

1. Middleware and routing using Express.js.
2. Django middleware and URL routing.
3. Integration with third-party APIs using Python Requests.
4. Testing and debugging backend applications.
5. Authentication and authorization.
6. Caching and database query optimization.
7. Django forms and form validation.
8. File uploads using Django REST Framework and Pillow.

### Practical Implementations

**1. Middleware and Routing**

Worked with Express.js and Django to understand request handling, middleware execution, URL routing, and application flow.

**2. External API Integration**

Used the Python Requests library to communicate with external APIs. The implementation included timeout handling and error responses, including HTTP 503 handling.

**3. Testing and Debugging**

Explored backend testing techniques and debugging methods to identify and handle application errors.

**4. Authentication and Authorization**

Worked with login functionality, user groups, permissions, and CSRF protection.

**5. Caching and Query Optimization**

Explored database optimization using `select_related()` and `prefetch_related()`, pagination, caching, and cache invalidation.

**6. Django Forms**

Implemented form handling and validation to ensure that user-submitted information follows the required format.

**7. File Uploads**

Worked with Django REST Framework and Pillow for image and PDF upload handling, static and media files, and owner-based access to private downloads.

### Technologies Used

- Python
- JavaScript
- Express.js
- Django
- Django REST Framework
- Requests
- Pillow
- SQLite

### Learning Outcomes

- Understood middleware and routing mechanisms.
- Learned how to integrate external APIs.
- Improved debugging and testing knowledge.
- Understood authentication and authorization.
- Explored caching and database optimization.
- Learned form validation and file upload handling.
- Understood secure file access and media management.

---

## Unit 5 – Advanced Topics

### Overview

Unit 5 introduced advanced backend development concepts, including service discovery, message queues, serverless computing, cloud services, performance profiling, and distributed application architecture.

The practical exercises focused on understanding how modern backend systems handle communication between services, process asynchronous tasks, execute serverless functions, and monitor application performance.

### Practical Folders

`unit-5(P-1)` to `unit-5(P-4)`

### Topics Covered

**Practical 1 – Service Discovery, Messaging and Serverless Functions**

- Service discovery using Consul.
- Message queue implementation concepts using RabbitMQ.
- Durable messaging and idempotency.
- Serverless functions using Functions Framework.

**Practical 2 – AWS Serverless Architecture**

- AWS Lambda.
- Amazon SQS.
- Amazon DynamoDB.
- AWS Serverless Application Model (SAM).
- IAM permissions and least-privilege access.
- Dead Letter Queues (DLQ).

**Practical 3 – Backend Performance Profiling**

- Performance profiling using Express.js and FastAPI.
- Measuring response times.
- Understanding p50, p95, and p99 latency.
- Throughput and error-rate monitoring.
- Event-loop delay and memory usage.
- Identifying application bottlenecks.
- Load testing using Autocannon.

**Practical 4 – Architecture Presentation and Evaluation**

- Understanding advanced backend architecture.
- Preparing architecture diagrams.
- Explaining design decisions and trade-offs.
- Discussing implementation challenges.
- Preparing technical questions and answers.
- Understanding peer-review criteria.

### Technologies and Tools

- Node.js
- Express.js
- Python
- FastAPI
- Consul
- RabbitMQ
- Google Functions Framework
- AWS Lambda
- Amazon SQS
- Amazon DynamoDB
- AWS SAM
- IAM
- pytest
- Autocannon

### Learning Outcomes

- Understood service discovery in distributed applications.
- Learned the concepts of message queues and asynchronous processing.
- Explored serverless computing and AWS services.
- Understood IAM permissions and Dead Letter Queues.
- Learned backend performance measurement.
- Understood latency, throughput, and application bottlenecks.
- Gained knowledge of advanced backend architecture.

---

# 5. Assignment Work

## Assignment 1 – Notes App

### Project Overview

The first assignment involved developing a simple Notes App using HTML, CSS, and JavaScript.

The application allows users to create, view, and delete notes through a simple user interface.

LocalStorage was used to maintain notes even after refreshing or reopening the browser.

### Folder Name

`assignmet 1`

### Files Used

- `index.html` – Defines the structure of the application.
- `style.css` – Provides styling and layout.
- `script.js` – Implements the application functionality.

### Features

- Add new notes.
- Display saved notes.
- Delete existing notes.
- Store notes using LocalStorage.
- Maintain notes after page refresh.
- Display success messages and validation feedback.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage
- JSON
- VS Code
- Live Server

### Learning Outcomes

- Understood DOM manipulation.
- Learned JavaScript event handling.
- Explored browser LocalStorage.
- Understood JSON data storage.
- Learned how frontend applications manage user data.

---

## Assignment 2 – PostgreSQL as SQL + NoSQL (JSONB)

### Project Overview

The second assignment focused on understanding PostgreSQL as both a relational database and a document-oriented data storage system using JSONB.

The practical implementation involved creating a product catalogue and storing structured and semi-structured product information.

### Database Details

- Database Name: `product_catalog`
- Table Name: `products`

### Topics Covered

1. Creating a PostgreSQL database.
2. Creating tables using SQL.
3. Inserting product records.
4. Storing structured information using relational columns.
5. Storing flexible information using JSONB.
6. Querying JSONB data.
7. Updating JSONB values.
8. Creating GIN indexes.
9. Understanding query execution using EXPLAIN ANALYZE.
10. Comparing SQL and NoSQL approaches.

### JSONB Operators Used

| Operator | Purpose |
|---|---|
| `->` | Retrieves a JSON object or array element |
| `->>` | Retrieves a JSON value as text |
| `@>` | Checks JSON containment |
| `?` | Checks whether a key exists |

### Practical Implementation

The project used five product records across three categories.

Product information was stored using regular SQL columns along with JSONB fields for flexible attributes.

The same product information and equivalent queries were also explored using MongoDB.

### Technologies Used

- PostgreSQL 18
- pgAdmin
- SQL
- JSONB
- MongoDB
- mongosh
- VS Code

### Learning Outcomes

- Understood relational database management using PostgreSQL.
- Learned the difference between SQL and NoSQL data storage.
- Explored JSONB for semi-structured data.
- Practised JSONB operators and queries.
- Learned about GIN indexing.
- Understood query performance using EXPLAIN ANALYZE.
- Compared PostgreSQL JSONB and MongoDB.

---

## Assignment 3 – Serverless Architecture (FaaS)

### Project Overview

The third assignment focused on Serverless Architecture, particularly Function as a Service (FaaS).

Serverless Architecture allows developers to build and execute applications without directly managing server infrastructure.

The assignment explored how cloud providers manage infrastructure, automatic scaling, and function execution.

### Topics Covered

1. Introduction to Serverless Architecture.
2. Function as a Service (FaaS).
3. Event-driven architecture.
4. Working of serverless functions.
5. AWS Lambda.
6. Advantages of serverless computing.
7. Limitations of serverless computing.
8. Real-world applications of serverless technology.

### Key Concepts

**Function as a Service (FaaS)**

FaaS allows developers to execute individual functions in response to specific events without managing the underlying servers.

**Event-Driven Architecture**

In event-driven architecture, functions are triggered when specific events occur, such as receiving an HTTP request, uploading a file, or updating database information.

**AWS Lambda**

AWS Lambda is a cloud computing service that executes code in response to events and automatically manages the required infrastructure.

### Advantages

- No direct server management.
- Automatic scaling.
- Pay-per-use pricing.
- Faster development.
- Event-driven execution.
- Reduced infrastructure management.

### Limitations

- Cold start delays.
- Vendor lock-in.
- Execution time limitations.
- Debugging complexity.
- Limited infrastructure control.

### Technologies and Concepts Explored

- AWS Lambda
- Function as a Service
- Event-driven architecture
- Cloud computing
- HTTP requests
- JSON
- Serverless computing

### Learning Outcomes

- Understood the working of serverless architecture.
- Learned how event-driven functions execute.
- Explored AWS Lambda and FaaS.
- Understood the advantages and limitations of serverless computing.
- Learned about the role of serverless computing in modern backend applications.

---

# 6. Additional Backend Demonstrations

Apart from the unit-wise practicals and assignments, the repository also contains separate demonstrations involving backend frameworks.

## 6.1 Express Demos

**Folder Name:** `express-demo`

This folder contains demonstrations using Express.js, a Node.js web application framework.

### Concepts Explored

- Creating an Express server.
- Handling HTTP requests.
- Defining application routes.
- Sending HTTP responses.
- Understanding middleware.
- Working with backend application structure.

## 6.2 Flask Server

**Folder Name:** `flask server`

This folder contains demonstrations using Flask, a lightweight Python web framework.

### Concepts Explored

- Creating a Flask application.
- Running a local development server.
- Defining URL routes.
- Handling HTTP requests.
- Returning responses.
- Understanding the basics of Python-based backend development.

---

# 7. Technologies and Tools Used

The following technologies and tools were explored throughout the practical work.

| Category | Technologies and Tools |
|---|---|
| Programming Languages | Python, JavaScript, SQL |
| Frontend | HTML, CSS |
| Backend Frameworks | Express.js, Flask, Django, FastAPI |
| Databases | PostgreSQL, SQLite, MongoDB |
| ORM and ODM | SQLAlchemy, Mongoose |
| Authentication | JWT, bcrypt |
| API Communication | HTTP, REST API, Requests, JSON |
| Testing | pytest |
| Image Processing | Pillow |
| Cloud Computing | AWS Lambda, AWS SAM |
| Messaging | RabbitMQ, Amazon SQS |
| Service Discovery | Consul |
| Performance Testing | Autocannon |
| Development Tools | VS Code, pgAdmin, mongosh |
| Version Control | Git, GitHub |

---

# 8. Challenges Faced

During the practical implementation, I encountered different challenges while setting up environments, working with databases, developing APIs, and testing backend applications.

Some of the major challenges included:

1. **Environment Setup:** Installing and configuring different programming languages, frameworks, and database systems.

2. **Database Connectivity:** Establishing connections between backend applications and databases.

3. **API Handling:** Understanding HTTP requests, responses, status codes, and error handling.

4. **Authentication:** Implementing secure authentication using JWT and password hashing.

5. **Debugging:** Identifying and resolving errors during application development.

6. **Database Optimization:** Understanding indexing, query execution, and performance improvement.

7. **File Handling:** Managing file uploads, validation, and secure access.

8. **Advanced Backend Concepts:** Understanding distributed systems, message queues, serverless functions, and cloud architecture.

These challenges helped improve my understanding of backend development and strengthened my debugging and problem-solving skills.

---

# 9. Overall Learning Outcomes

After completing the practical work and assignments, I gained knowledge and practical understanding of the following concepts:

- Understanding backend architecture and server-side programming.
- Developing applications using Python and JavaScript.
- Working with different backend frameworks.
- Creating and testing REST APIs.
- Managing relational and non-relational databases.
- Implementing CRUD operations.
- Understanding authentication and authorization.
- Working with sessions, cookies, and browser storage.
- Integrating external APIs.
- Handling forms and file uploads.
- Understanding caching and query optimization.
- Exploring serverless computing and cloud services.
- Understanding message queues and distributed architecture.
- Measuring backend performance and identifying bottlenecks.
- Organizing practical projects using Git and GitHub.

---

# 10. Conclusion

Throughout the Backend Development course, I explored various concepts related to server-side programming, database management, API development, authentication, and advanced backend technologies.

The practical exercises in Units 1, 2, 3, and 5 helped me understand how backend applications are developed, how they communicate with databases, and how they process user requests.

The three assignments provided additional practical exposure to frontend interaction through the Notes App, relational and document-based data management using PostgreSQL JSONB, and modern cloud computing concepts through Serverless Architecture.

Working with frameworks such as Express.js, Flask, Django, and FastAPI also helped me understand different approaches to backend application development.

Overall, this course improved my technical knowledge, programming experience, debugging skills, and understanding of real-world backend development practices.

---

# 11. References

1. Backend Development – Unit 1 Lecture Notes and Practical Instructions.
2. Backend Development – Unit 2 Lecture Notes and Practical Instructions.
3. Backend Development – Unit 3 Lecture Notes and Practical Instructions.
4. Backend Development – Unit 5 Lecture Notes and Practical Instructions.
5. Backend Development – Assignment 1: Notes App.
6. Backend Development – Assignment 2: PostgreSQL as SQL + NoSQL (JSONB).
7. Backend Development – Assignment 3: Serverless Architecture (FaaS).

**Source:** Course materials, lecture notes, practical demonstrations, and assignment instructions provided during the Backend Development course.

---

**Prepared by:** Saanvi Singh  
**SAP ID:** 590011951  
**Course:** Backend Development