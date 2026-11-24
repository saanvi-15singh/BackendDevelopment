# Backend Development – Theory and Lab Experiments

**Submitted By:** Saanvi Singh  
**Course:** Backend Development  
**Department:** Computer Science and Engineering  
**University:** UPES  
**Batch:** 5 (Core)  
**SAP ID:** 590011951  

---

# About the Repository

This repository contains my complete Backend Development coursework, including theory units, practical lab experiments, assignments, backend demonstrations, project implementations, and reports.

The coursework covers fundamental and advanced backend development concepts using technologies such as Python, JavaScript, Node.js, Express.js, Flask, Django, FastAPI, MongoDB, PostgreSQL, SQLite, HTML5, CSS3, REST APIs, Serverless Architecture, and Docker.

The repository is divided into two major sections:

1. **Theory:** Contains unit-wise practical implementations, assignments, backend demonstrations, and the consolidated theory report.
2. **Lab:** Contains 15 practical experiments, Lab Test-1, their source code, implementations, and practical reports.

---

# Table of Contents

1. Theory Work
   - Unit 1 – Backend Development Fundamentals
   - Unit 2 – Database Management and API Development
   - Unit 3 – Advanced Backend Development
   - Unit 5 – Advanced Topics
   - Theory Assignments
   - Express Demos
   - Flask Server
2. Lab Work
   - Experiment 1 to Experiment 15
   - Lab Test-1 – Simple CMS Blog Application
3. Technologies and Tools Used
4. How to Run
5. Overall Reports
6. Important Links

---

# 1. Theory Work

**Directory:** `Theory/`

The Theory section contains practical implementations completed as part of Units 1, 2, 3, and 5, along with three assignments and additional backend demonstrations.

## Unit 1 – Backend Development Fundamentals

**Directory:** `Theory/`

### Practical Folders

- `unit-1(P-1)`
- `unit-1(P-2)`
- `unit-1(P-3)`
- `unit-1(P-4)`
- `unit-1(P-5)`
- `unit-1(P-6)`

### Topics Covered

- Introduction to Backend Development.
- Client-Server Architecture.
- Node.js and Express.js fundamentals.
- HTTP protocol, methods, requests, and responses.
- Flask and FastAPI fundamentals.
- REST API development.
- Sessions and Cookies.
- Browser Storage and JSON.
- EJS and Jinja2.
- Server-Side Rendering (SSR).

**Report:** Unit 1 section in the overall `report.md`.

---

## Unit 2 – Database Management and API Development

**Directory:** `Theory/`

### Practical Folders

- `unit-2(P-1)`
- `unit-2(P-2)`
- `unit-2(P-3)`
- `unit-2(P-4)`
- `unit-2(P-5)`
- `unit-2(P-6)`
- `unit-2(P-7)`
- `unit-2(P-8)`
- `unit-2(P-9)`
- `unit-2(P-10)`
- `unit-2(P-11)`

### Topics Covered

- Database fundamentals.
- SQL and relational databases.
- Database normalization.
- Schema design and data modelling.
- CRUD operations.
- Database connectivity using SQLAlchemy.
- MongoDB and Mongoose.
- REST API development.
- Authentication and authorization.
- JWT-based authentication.
- Password hashing using bcrypt.
- API testing using pytest.
- Query optimization and indexing.

**Testing:** The project test suite included 151 test cases.

**Report:** Unit 2 section in the overall `report.md`.

---

## Unit 3 – Advanced Backend Development

**Directory:** `Theory/`

### Practical Folders

- `unit-3(P-1)`
- `unit-3(P-2)`
- `unit-3(P-3)`
- `unit-3(P-4)`
- `unit-3(P-5)`
- `unit-3(P-6)`
- `unit-3(P-7)`
- `unit-3(P-8)`

### Topics Covered

- Middleware and routing using Express.js.
- Django middleware and URL routing.
- Third-party API integration using Python Requests.
- Testing and debugging backend applications.
- Authentication and authorization.
- Caching and database query optimization.
- Django forms and form validation.
- File uploads using Django REST Framework and Pillow.
- Static and media file management.
- Secure file access.

**Report:** Unit 3 section in the overall `report.md`.

---

## Unit 5 – Advanced Backend Development Topics

**Directory:** `Theory/`

### Practical Folders

- `unit-5(P-1)`
- `unit-5(P-2)`
- `unit-5(P-3)`
- `unit-5(P-4)`

### Topics Covered

**Practical 1 – Service Discovery, Messaging and Serverless Functions**

- Service discovery using Consul.
- Messaging concepts using RabbitMQ.
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
- Response-time measurement.
- p50, p95, and p99 latency.
- Throughput and error-rate monitoring.
- Event-loop delay and memory usage.
- Application bottlenecks.
- Load testing using Autocannon.

**Practical 4 – Architecture Presentation and Evaluation**

- Advanced backend architecture.
- Architecture diagrams.
- Design decisions and trade-offs.
- Implementation challenges.
- Technical questions and answers.
- Peer-review criteria.

**Report:** Unit 5 section in the overall `report.md`.

---

## Theory Assignments

### Assignment 1 – Notes App

**Directory:** `Theory/Assignment-1/`

**Files**

- `index.html` – Application structure.
- `style.css` – Styling and responsive layout.
- `script.js` – Application functionality.
- `Report.md` – Assignment report.

**Technologies:** HTML5, CSS3, JavaScript, LocalStorage, and JSON.

**Overview**

A client-side Notes Application that allows users to create, view, manage, and delete notes.

**Key Features**

- Add and display notes.
- Delete existing notes.
- Store notes using browser LocalStorage.
- Use JSON.stringify() and JSON.parse() for data handling.
- Form validation and user feedback.

---

### Assignment 2 – PostgreSQL as SQL + NoSQL (JSONB)

**Directory:** `Theory/Assignment-2/`

**Files**

- `Report.md` – Complete theoretical and practical assignment report.

**Technologies:** PostgreSQL 18, JSONB, GIN Indexing, MongoDB, and SQL.

**Database:** `product_catalog`  
**Table:** `products`

**Topics Covered**

- Difference between JSON and JSONB.
- SQL and NoSQL concepts.
- JSONB operators.
- GIN indexing.
- JSONB queries and updates.
- PostgreSQL and MongoDB comparison.
- Query performance using EXPLAIN ANALYZE.
- Product catalogue database implementation.

---

### Assignment 3 – Serverless Architecture (FaaS)

**Overview**

This assignment focuses on Serverless Architecture and Function as a Service (FaaS).

**Topics Covered**

- Introduction to Serverless Architecture.
- Function as a Service.
- Event-driven architecture.
- AWS Lambda.
- Serverless application execution.
- Advantages and disadvantages of serverless computing.
- Practical applications of serverless architecture.

**Report:** Serverless Assignment 3 report.

---

## Additional Backend Demonstrations

### Express Demos

**Directory:** `Theory/Express/`  
**Demo Folder:** `express-demo/`

**Main File:** `Theory/Express/Server.js`

**Technologies:** Node.js and Express.js.

**Concepts Covered**

- Creating an Express server.
- Handling HTTP requests.
- Defining routes.
- Sending HTTP responses.
- Middleware and application structure.

### Flask Server

**Directory:** `Theory/Flask Server/`

**Files**

- `main.py`
- `README.md`

**Technologies:** Python 3 and Flask.

**Concepts Covered**

- Creating a Flask application.
- Running a local development server.
- Defining URL routes.
- Handling HTTP requests.
- Returning responses.

---

# 2. Lab Work

**Directory:** `Lab/`

The Lab section contains 15 practical experiments covering HTML5, CSS3, Bootstrap, JavaScript, AJAX, jQuery, Node.js, MongoDB, PostgreSQL, Mongoose, and Django.

Each experiment contains its respective source code, implementation files, and practical documentation.

## Experiment 1 – HTML5 Elements

**Title:** Create a Web Page with All Possible Elements of HTML5.

**Topics Covered**

- HTML5 document structure.
- Common HTML elements.
- Text formatting.
- Lists and tables.
- Links and images.
- Forms and input elements.
- Semantic HTML elements.

## Experiment 2 – Cascading Style Sheets

**Title:** Create a Web Page with All Types of Cascading Style Sheets.

**Topics Covered**

- Inline CSS.
- Internal CSS.
- External CSS.
- CSS selectors.
- Colours and backgrounds.
- Fonts and text styling.
- Margins, padding, and borders.

## Experiment 3 – Responsive Web Page

**Title:** Create a Responsive Web Page with HTML and CSS.

**Topics Covered**

- Responsive web design.
- CSS layouts.
- Media queries.
- Flexible layouts.
- Responsive elements.
- Mobile-friendly design.

## Experiment 4 – Bootstrap

**Title:** Create Responsive Web Page with Bootstrap.

**Topics Covered**

- Bootstrap framework.
- Grid system.
- Containers and rows.
- Responsive columns.
- Bootstrap components.
- Responsive layouts.

## Experiment 5 – JavaScript Fundamentals

**Title:** Programs to Demonstrate JavaScript Array, Object and Functions.

**Topics Covered**

- JavaScript arrays.
- JavaScript objects.
- Functions.
- Array operations.
- Object properties.
- Function calls and return values.

## Experiment 6 – JavaScript Form Validation

**Title:** Client-Side Scripts for Form Validation using JavaScript.

**Topics Covered**

- HTML forms.
- Form input handling.
- Required-field validation.
- Input validation.
- Conditional statements.
- Error messages.
- Form submission handling.

## Experiment 7 – ES6 Concepts

**Title:** Programs to Familiarise ES6 Concepts.

**Topics Covered**

- let and const.
- Arrow functions.
- Template literals.
- Destructuring.
- Spread and rest operators.
- Default parameters.
- Other ES6 features.

## Experiment 8 – DOM and Event Handling

**Title:** Programs to Demonstrate DOM and Event Handling.

**Topics Covered**

- Document Object Model.
- DOM selection.
- Element manipulation.
- Event listeners.
- Click and input events.
- Dynamic web-page updates.

## Experiment 9 – AJAX

**Title:** Programs Using AJAX with HTML, XML and JSON Data.

**Topics Covered**

- AJAX fundamentals.
- Asynchronous requests.
- Loading HTML data.
- Loading XML data.
- Loading JSON data.
- Updating webpage content without reloading.

## Experiment 10 – jQuery

**Title:** Programs to Familiarize jQuery (2 Programs).

**Topics Covered**

- jQuery fundamentals.
- jQuery selectors.
- DOM manipulation.
- Event handling.
- Effects and animations.
- Working with webpage elements.

## Experiment 11 – AJAX Website

**Title:** Create a Website with HTML, CSS and JavaScript (Implement AJAX).

**Topics Covered**

- Website development using HTML and CSS.
- JavaScript functionality.
- AJAX implementation.
- Asynchronous data loading.
- Dynamic webpage updates.

## Experiment 12 – Node.js

**Title:** Programs to Familiarize Server-Side Scripting using Node JS.

**Parts:** 2 practical parts.

**Topics Covered**

- Node.js fundamentals.
- Server-side JavaScript.
- Creating backend applications.
- Request and response handling.
- Server execution and practical implementation.

## Experiment 13 – MongoDB and Node.js

**Title:** Programs Using MongoDB Database with Node JS.

**Parts:** 3 practical parts.

**Topics Covered**

- MongoDB fundamentals.
- MongoDB database and collection operations.
- Connecting MongoDB with Node.js.
- Database operations.
- Mongoose basics.
- MongoDB installation and configuration.

**Part C:** MongoDB Installation and Mongoose Basics.

## Experiment 14 – Relational and Document Database

**Topics Covered**

- PostgreSQL database creation.
- Table creation and data insertion.
- SQL queries.
- Update and delete operations.
- Aggregation queries.
- MongoDB database and collection operations.
- JSONB operations.
- Relational and document database concepts.

**Database:** `student_management`  
**PostgreSQL Table:** `students`  
**MongoDB Collection:** `students`

## Experiment 15 – Django To-Do Application

**Topics Covered**

- Django project setup.
- Django application creation.
- Model-View-Template (MVT) architecture.
- Models and database migrations.
- URL routing.
- Views and templates.
- CRUD operations.
- Static files and CSS.
- To-Do task management.

**Technologies:** Python 3.13, Django 6.1.2, and SQLite.

---

## Lab Test-1 – Simple CMS Blog Application

**Project:** Simple CMS Blog Application.

**Technologies Used**

- Node.js.
- Express.js.
- EJS.
- MongoDB.
- MongoDB Node.js Driver.
- HTML and CSS.

**Database:** `cms_lab`  
**Collection:** `posts`  
**MongoDB URI:** `mongodb://127.0.0.1:27017`  
**Port:** `3000`

### Main Features

- Display all blog posts.
- Create a new blog post.
- View an individual blog post.
- Store posts in MongoDB.
- Handle form submissions.
- Display dynamic content using EJS.

### Routes

| Method | Route | Function |
|---|---|---|
| GET | `/` | Display all posts |
| GET | `/posts/new` | Display new post form |
| POST | `/posts` | Create a post |
| GET | `/posts/:id` | Display an individual post |

### Project Structure

```text
Lab Test-1/
│
├── app.js
├── package.json
├── package-lock.json
├── views/
│   ├── posts.ejs
│   ├── new-post.ejs
│   └── post.ejs
├── public/
│   └── style.css
├── README.md
└── report.md
```

---

# 3. Technologies and Tools Used

| Category | Technologies and Tools |
|---|---|
| Programming Languages | Python, JavaScript, SQL |
| Frontend | HTML5, CSS3, Bootstrap, jQuery |
| Backend Frameworks | Node.js, Express.js, Flask, Django, FastAPI |
| Databases | PostgreSQL, SQLite, MongoDB |
| ORM and ODM | SQLAlchemy, Mongoose |
| Authentication | JWT, bcrypt |
| API Communication | HTTP, REST API, AJAX, Requests, JSON |
| Testing | pytest |
| Image Processing | Pillow |
| Cloud Computing | AWS Lambda, AWS SAM |
| Messaging | RabbitMQ, Amazon SQS |
| Service Discovery | Consul |
| Performance Testing | Autocannon |
| Server-Side Templates | EJS, Jinja2 |
| Development Tools | VS Code, pgAdmin, mongosh |
| Version Control | Git and GitHub |
| Containerization | Docker |

---

# 4. How to Run

## Running the Notes App

Open:

```text
Theory/Assignment-1/index.html
```

Run it using a browser or VS Code Live Server.

## Running the Express Demo

```bash
cd Theory/Express
node Server.js
```

## Running the Flask Server

```bash
cd "Theory/Flask Server"
python main.py
```

## Running the CMS Blog Application

Navigate to the Lab Test-1 project directory and install dependencies:

```bash
npm install
```

Start the application:

```bash
node app.js
```

Open:

```text
http://localhost:3000
```

Make sure MongoDB is running before starting the application.

## Running Other Practical Experiments

Refer to the individual experiment folders for their source files, dependencies, setup instructions, and execution commands.

---

# 5. Overall Reports

The repository contains consolidated documentation for both Theory and Lab coursework.

### Overall README

`README.md`

Contains the repository overview, theory units, assignments, practical experiments, technologies, and execution instructions.

### Overall Report

`report.md`

Contains the detailed documentation of:

- Theory Units 1, 2, 3, and 5.
- Theory Assignments 1, 2, and 3.
- Express and Flask demonstrations.
- Lab Experiments 1 to 15.
- Lab Test-1 – Simple CMS Blog Application.
- Objectives and learning outcomes.
- Technologies and tools.
- Challenges faced.
- Conclusion and references.

---

# 6. Important Links

1. **Backend Development GitHub Repository:** [View Repository](https://github.com/saanvi-15singh/BackendDevelopment)

2. **Backend Development I/O File:** [View I/O File](https://saanvi-15singh.github.io/BackendDevelopment)

3. **Backend Theory Experiment Report:** [View Theory Report](Report.md)

4. **Backend  Theory Experiment Readme:** [View Theory Readme](Readme.md)

5. **Backend Lab Experiment Report:** [View Lab Report](Report.md)

6. **Backend  Lab Experiment Readme:** [View Lab Readme](Readme.md)

7. **Backend  Overall Experiment Report:** [View Overall Report](Report.md)

8. **Backend  Overall Experiment Readme:** [View Overall Readme](Readme.md)

9. **Docker Experiment Repository:** [View Docker Experiment Repository](https://github.com/saanvi-15singh/Backend_Docker-Experiment)

10. **Docker Experiment I/O File:** [View Docker Experiment I/O File](https://saanvi-15singh.github.io/Backend_Docker-Experiment/)

11. **Docker Experiment Report:** [View Project Report](Report.md)

12. **Docker Experiment Readme:** [View Project Report](Readme.md)

---

<p align="center">
  Designed by <b>Saanvi Singh</b> | SAP ID: 590011951
</p>