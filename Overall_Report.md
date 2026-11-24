# Backend Development – Overall Practical Report

## 1. Student Details

| Particulars | Details |
|---|---|
| Name | Saanvi Singh |
| SAP ID | 590011951 |
| Course | Backend Development |
| Department | Computer Science and Engineering |
| University | UPES |
| Programme | B.Tech CSE |
| Semester | 5th Semester |
| Batch | 5 (Core) |

---

# PART A – THEORY WORK

## 2. Introduction

Backend Development is an important part of web application development that focuses on server-side programming, database management, application logic, authentication, APIs and communication between the client and server.

This course provided practical knowledge of backend technologies such as Node.js, Express.js, Flask, FastAPI, Django, PostgreSQL and MongoDB. It also covered concepts such as REST APIs, middleware, database operations, authentication, serverless architecture, performance optimization and distributed systems.

The practical work helped me understand how backend applications are designed, developed, tested and connected with databases.

## 3. Objectives

The main objectives of this course were:

1. To understand backend development concepts and server-side programming.
2. To learn Node.js, Express.js, Flask, FastAPI and Django.
3. To understand HTTP methods, routing, middleware and REST APIs.
4. To perform database operations using SQL and NoSQL databases.
5. To implement authentication, sessions, cookies and authorization.
6. To understand database optimization, indexing and query performance.
7. To explore serverless architecture and event-driven applications.
8. To develop and test backend applications through practical assignments.

## 4. Unit 1 – Introduction to Backend Development

Unit 1 introduced the fundamentals of backend development and server-side programming.

### Topics Covered

- Introduction to Node.js and Express.js.
- HTTP protocol and request-response cycle.
- Introduction to Flask and FastAPI.
- Routing and handling HTTP requests.
- Sessions and cookies.
- Browser storage and JSON.
- Server-side rendering.
- EJS and Jinja2 templating engines.

### Learning Outcome

I learned how a backend server receives client requests, processes them and returns responses. I also understood the role of routing, templates, sessions and cookies in web applications.

## 5. Unit 2 – Database Management and Backend Integration

Unit 2 focused on database management and connecting databases with backend applications.

### Topics Covered

- Introduction to relational databases.
- SQL commands and database operations.
- Database normalization and schema design.
- CRUD operations.
- SQLAlchemy and database integration.
- MongoDB and Mongoose.
- REST API development.
- Authentication and authorization.
- JWT and bcrypt.
- Pytest for application testing.
- Database indexing and query optimization.

### Learning Outcome

I learned how to create databases and tables, insert and retrieve records, update and delete data, and connect databases with backend applications. I also understood authentication, password hashing, testing and database optimization.

The practical project test suite included 151 test cases.

## 6. Unit 3 – Backend Frameworks and Advanced Development

Unit 3 focused on backend frameworks, middleware, application security and performance improvement.

### Topics Covered

- Middleware and routing in Express.js and Django.
- Making HTTP requests using Python Requests.
- External API integration.
- Handling request timeouts and HTTP errors, including 503 responses.
- Authentication, groups and permissions.
- CSRF protection.
- Query optimization using `select_related` and `prefetch_related`.
- Pagination and caching.
- Forms and form validation.
- File uploads using Django REST Framework and Pillow.
- Static and media file handling.
- Owner-based access control.

### Learning Outcome

I learned how middleware processes requests, how external APIs can be integrated and how authentication and permissions protect backend applications. I also understood how caching, pagination and query optimization improve application performance.

## 7. Unit 5 – Advanced Backend Topics

Unit 5 covered advanced backend concepts related to distributed systems, serverless architecture and performance monitoring.

### Practical 1: Service Discovery and Messaging

Topics covered:

- Consul for service discovery.
- RabbitMQ for message queuing.
- Durable messaging.
- Idempotency.
- Functions Framework.

**Learning Outcome:** Understood how services communicate in distributed applications and how message queues help manage communication between different components.

### Practical 2: AWS Serverless Services

Topics covered:

- AWS Lambda.
- Amazon SQS.
- Amazon DynamoDB.
- AWS SAM.
- IAM roles and permissions.
- Dead Letter Queues (DLQ).

**Learning Outcome:** Learned how serverless services execute functions in response to events and how cloud services can be connected to build event-driven applications.

### Practical 3: Backend Performance Profiling

Topics covered:

- Express.js and FastAPI performance profiling.
- Latency measurement.
- p50, p95 and p99 response times.
- Throughput and error rates.
- Event loop and memory monitoring.
- Autocannon for performance testing.

**Learning Outcome:** Understood how backend performance can be measured and evaluated using response time, throughput, error rates and resource usage.

### Practical 4: Backend Architecture Presentation

This practical focused on presenting and evaluating backend architecture concepts.

**Learning Outcome:** Improved my understanding of backend architecture, technical communication and the evaluation of different backend design approaches.

---

# 8. Assignments

## Assignment 1 – Notes App

**Folder:** `Theory/Assignment-1/`

### Objective

To develop a simple Notes Application using HTML, CSS and JavaScript.

### Technologies Used

- HTML
- CSS
- JavaScript
- LocalStorage
- JSON

### Features Implemented

- Add new notes.
- Display saved notes.
- Delete notes.
- Store notes using browser LocalStorage.
- Maintain data in JSON format.

### Learning Outcome

I learned how to create an interactive web application using HTML, CSS and JavaScript. I also understood how LocalStorage can store data in the browser without requiring a separate database.

## Assignment 2 – PostgreSQL as SQL + NoSQL (JSONB)

**Folder:** `Theory/Assignment-2/`

### Objective

To understand how PostgreSQL supports relational database operations as well as semi-structured data storage using JSONB.

### Technologies Used

- PostgreSQL 18
- SQL
- JSONB
- MongoDB
- GIN Indexing

### Database Details

- Database: `product_catalog`
- Table: `products`
- Records: Five product records across three categories.

### Topics Implemented

- Creating databases and tables.
- Inserting and retrieving product records.
- Updating and deleting records.
- Storing semi-structured data using JSONB.
- JSONB operators and queries.
- GIN indexing.
- Query performance analysis using `EXPLAIN ANALYZE`.
- Comparison of PostgreSQL JSONB and MongoDB.

### Learning Outcome

I learned how PostgreSQL manages structured relational data and how JSONB supports flexible document-like data. I also understood indexing and query performance analysis.

## Assignment 3 – Serverless Architecture (FaaS)

### Objective

To study Serverless Architecture and understand the Function as a Service (FaaS) model.

### Topics Covered

- Introduction to serverless architecture.
- Function as a Service (FaaS).
- Event-driven architecture.
- AWS Lambda.
- Execution of functions based on events.
- Advantages of serverless computing.
- Limitations and challenges.

### Learning Outcome

I understood how serverless applications execute functions without requiring developers to manage the underlying server infrastructure. I also learned about automatic scaling, event-driven execution and the limitations of serverless systems.

---

# 9. Additional Backend Demonstrations

## 9.1 Express.js Demonstration

**Folder:** `Theory/Express/`

### Technologies Used

- Node.js
- Express.js
- JavaScript

### Description

This demonstration focused on creating a basic backend server using Express.js. It helped in understanding server creation, routing and handling HTTP requests.

**Main File:** `Server.js`

## 9.2 Flask Server Demonstration

**Folder:** `Theory/Flask Server/`

### Technologies Used

- Python
- Flask

### Description

This demonstration focused on creating a basic web server using Flask and understanding how Flask handles incoming HTTP requests and returns responses.

**Main File:** `main.py`

---

# PART B – LAB WORK

## 10. Introduction to Lab Experiments

The Backend Development laboratory provided practical experience in frontend and backend technologies. The experiments started with HTML, CSS and JavaScript and gradually progressed towards server-side programming, database connectivity and full-stack application development.

The experiments helped me understand how different technologies work together to develop dynamic and database-driven web applications.

## 11. List of Lab Experiments

### Experiment 1 – Create a Web Page with All Possible Elements of HTML5

**Objective:** To create a web page using different HTML5 elements and understand the structure of an HTML document.

**Concepts Covered:**
- HTML5 document structure.
- Headings and paragraphs.
- Lists and tables.
- Links and images.
- Forms and input elements.
- Semantic HTML elements.

**Learning Outcome:** Learned how to structure web pages using HTML5 elements.

### Experiment 2 – Create a Web Page with All Types of Cascading Style Sheets

**Objective:** To understand and implement different types of CSS.

**Concepts Covered:**
- Inline CSS.
- Internal CSS.
- External CSS.
- Selectors and properties.
- Colours, backgrounds and fonts.
- Margins, padding and borders.

**Learning Outcome:** Learned how CSS is used to style HTML elements and improve the appearance of web pages.

### Experiment 3 – Create a Responsive Web Page with HTML and CSS

**Objective:** To develop a responsive web page using HTML and CSS.

**Concepts Covered:**
- Responsive layouts.
- CSS media queries.
- Flexbox and layout properties.
- Viewport settings.
- Responsive images and elements.

**Learning Outcome:** Understood how to design web pages that adjust to different screen sizes.

### Experiment 4 – Create a Responsive Web Page with Bootstrap

**Objective:** To develop a responsive web page using the Bootstrap framework.

**Concepts Covered:**
- Bootstrap introduction.
- Grid system.
- Containers and rows.
- Columns and responsive layouts.
- Bootstrap components.
- Navigation and buttons.

**Learning Outcome:** Learned how Bootstrap simplifies responsive web development using predefined classes and components.

### Experiment 5 – Programs to Demonstrate JavaScript Array, Object and Functions

**Objective:** To understand JavaScript arrays, objects and functions through programming examples.

**Concepts Covered:**
- Arrays and array methods.
- JavaScript objects.
- Object properties and methods.
- Function declaration.
- Function expressions.
- Function calling and return values.

**Learning Outcome:** Learned how JavaScript stores and processes data using arrays and objects and how functions help organize reusable code.

### Experiment 6 – Client-Side Scripts for Form Validation Using JavaScript

**Objective:** To implement client-side form validation using JavaScript.

**Concepts Covered:**
- Form elements.
- Input validation.
- Required fields.
- Email validation.
- Password validation.
- Error messages.
- JavaScript event handling.

**Learning Outcome:** Understood how JavaScript validates user input before submitting form data.

### Experiment 7 – Programs to Familiarise ES6 Concepts

**Objective:** To understand the important features introduced in ECMAScript 6.

**Concepts Covered:**
- `let` and `const`.
- Arrow functions.
- Template literals.
- Destructuring.
- Spread and rest operators.
- Default parameters.
- Classes and modules.

**Learning Outcome:** Learned how ES6 features make JavaScript code more readable and easier to maintain.

### Experiment 8 – Programs to Demonstrate DOM and Event Handling

**Objective:** To understand DOM manipulation and event handling using JavaScript.

**Concepts Covered:**
- Document Object Model.
- Selecting HTML elements.
- Modifying element content.
- Changing styles dynamically.
- Adding and removing elements.
- Event listeners.
- Mouse and keyboard events.

**Learning Outcome:** Learned how JavaScript interacts with HTML elements and dynamically updates web pages in response to user actions.

### Experiment 9 – Programs Using AJAX with HTML, XML and JSON Data

**Objective:** To implement AJAX programs for loading HTML, XML and JSON data without reloading the complete web page.

**Concepts Covered:**
- AJAX.
- Asynchronous requests.
- XMLHttpRequest.
- Loading HTML data.
- Parsing XML data.
- Fetching JSON data.
- Updating web page content dynamically.

**Learning Outcome:** Understood how AJAX allows web pages to communicate with servers asynchronously and update specific sections without a complete page reload.

### Experiment 10 – Programs to Familiarize jQuery

**Objective:** To understand jQuery and its use in simplifying JavaScript programming.

**Concepts Covered:**
- jQuery introduction.
- Element selection.
- DOM manipulation.
- Event handling.
- Show and hide effects.
- Basic animations.

**Learning Outcome:** Learned how jQuery simplifies DOM manipulation and event handling through its built-in methods.

### Experiment 11 – Create a Website with HTML, CSS and JavaScript (Implement AJAX)

**Objective:** To develop a website using HTML, CSS and JavaScript and implement AJAX functionality.

**Concepts Covered:**
- Website structure.
- CSS styling.
- JavaScript functionality.
- AJAX requests.
- Asynchronous data loading.
- Dynamic content updates.

**Learning Outcome:** Understood how HTML, CSS and JavaScript work together to create interactive websites and how AJAX improves user experience.

### Experiment 12 – Programs to Familiarize Server-Side Scripting Using Node.js

**Objective:** To understand server-side programming using Node.js through practical programs.

**Concepts Covered:**
- Node.js installation and setup.
- Creating a server.
- Handling HTTP requests.
- Sending HTTP responses.
- Working with modules.
- Server-side JavaScript execution.

**Learning Outcome:** Learned how Node.js executes JavaScript outside the browser and how it can be used to create backend servers.

### Experiment 13 – Programs Using MongoDB Database with Node.js

**Objective:** To understand database connectivity and perform MongoDB operations using Node.js.

**Part A and Part B:**
- Connecting Node.js applications with MongoDB.
- Creating and accessing databases and collections.
- Inserting, retrieving, updating and deleting documents.
- Performing basic database operations.

**Part C – MongoDB Installation and Mongoose Basics:**
- Installing MongoDB on Ubuntu 24.04.
- Testing MongoDB using `mongosh`.
- Installing MongoDB Compass as an optional GUI.
- Understanding Mongoose basics.
- Connecting to MongoDB using the connection URI.

**MongoDB Connection URI:**

`mongodb://127.0.0.1:27017`

**Learning Outcome:** Learned how MongoDB stores data in document format and how Node.js applications communicate with MongoDB databases.

### Experiment 14 – Relational and Document Database Practical

**Objective:** To understand and compare relational and document databases by performing operations using PostgreSQL and MongoDB.

**Technologies Used:**
- PostgreSQL.
- SQL.
- MongoDB.
- MongoDB Shell.

**PostgreSQL Implementation:**
- Database: `student_management`
- Table: `students`

**Operations Performed:**
- Creating a database and table.
- Inserting student records.
- Retrieving records using SELECT queries.
- Filtering records using conditions.
- Updating student details.
- Deleting records.
- Performing aggregation queries.
- Working with JSONB data.

**MongoDB Implementation:**
- Collection: `students`
- Creating and inserting student documents.
- Retrieving documents.
- Performing database operations.
- Using aggregation.

**Learning Outcome:** Understood the differences between relational and document databases and learned how to perform similar data operations using PostgreSQL and MongoDB.

### Experiment 15 – Django To-Do Application

**Objective:** To develop a basic To-Do application using the Django framework.

**Technologies Used:**
- Python 3.13.
- Django 6.1.2.
- SQLite.
- HTML.
- CSS.

**Concepts Covered:**
- Django project creation.
- Django application creation.
- Model development.
- Database migrations.
- URL routing.
- Views and templates.
- Static files and CSS.
- CRUD operations.

**Application Details:**
- Project: `todo_project`
- Application: `todo_task`
- Database: SQLite.

**Learning Outcome:** Learned how Django follows the Model-View-Template architecture and how to develop a basic web application with database operations.

---

# 12. Lab Test-1 – Simple CMS Blog Application

## Objective

To develop a simple Content Management System (CMS) Blog using Node.js, Express.js, EJS and MongoDB.

## Technologies Used

- Node.js.
- Express.js.
- EJS.
- MongoDB.
- MongoDB Node.js Driver.
- HTML.
- CSS.

## Database Details

| Particular | Details |
|---|---|
| Database Name | `cms_lab` |
| Collection Name | `posts` |
| Server Port | 3000 |
| MongoDB URI | `mongodb://127.0.0.1:27017` |

## Application Features

1. Display all blog posts.
2. Create a new blog post.
3. View individual blog posts.
4. Store post details in MongoDB.
5. Display post title, content and author.
6. Store the creation date using JavaScript Date.

## Post Details

Each post contains:

- Title.
- Content.
- Author.
- Created At.

## Routes Implemented

| HTTP Method | Route | Description |
|---|---|---|
| GET | `/` | Display all posts |
| GET | `/posts/new` | Display the new post form |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | Display an individual post |

## Project Structure

```text
Lab-Test-1/
│
├── app.js
├── package.json
├── package-lock.json
│
├── views/
│   ├── posts.ejs
│   ├── new-post.ejs
│   └── post.ejs
│
├── public/
│   └── style.css
│
├── README.md
└── report.md
```

## Execution Steps

Install the required dependencies:

```bash
npm install
```

Start the application:

```bash
node app.js
```

Open the application in the browser:

```text
http://localhost:3000
```

## Learning Outcome

I learned how to develop a basic CMS Blog application using Node.js and Express.js. I also understood how EJS renders dynamic content, how Express handles different routes and how MongoDB stores and retrieves blog posts.

---

# PART C – OVERALL LEARNING AND CONCLUSION

## 13. Technologies and Tools Used

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript, Bootstrap, jQuery |
| JavaScript Runtime | Node.js |
| Backend Frameworks | Express.js, Flask, FastAPI, Django |
| Template Engines | EJS, Jinja2 |
| Relational Database | PostgreSQL |
| NoSQL Database | MongoDB |
| ORM / ODM | SQLAlchemy, Mongoose |
| Cloud and Serverless | AWS Lambda, SQS, DynamoDB, AWS SAM |
| Messaging and Service Discovery | RabbitMQ, Consul |
| Testing and Performance | Pytest, Autocannon |
| Development Tools | VS Code, Terminal, MongoDB Compass, mongosh |

## 14. Challenges Faced

During the practical work, I faced different challenges while setting up development environments, writing code, connecting databases and executing backend applications.

Some of the challenges included:

1. Setting up Node.js, Python, Django, MongoDB and PostgreSQL environments.
2. Understanding the request-response cycle and server-side execution.
3. Connecting backend applications with databases.
4. Identifying and correcting syntax and runtime errors.
5. Implementing CRUD operations and database queries.
6. Understanding asynchronous JavaScript and AJAX.
7. Working with routes, middleware and templates.
8. Understanding authentication and database security.
9. Configuring and running applications using terminal commands.
10. Organizing practical files, reports and project repositories.

These challenges helped me improve my debugging skills and understand the importance of proper application structure and configuration.

## 15. Learning Outcomes

After completing the theory and laboratory work, I gained knowledge and practical experience in the following areas:

1. Understanding the fundamentals of backend development.
2. Creating web pages using HTML5, CSS and JavaScript.
3. Developing responsive web pages using Bootstrap.
4. Performing DOM manipulation and event handling.
5. Implementing AJAX and jQuery functionality.
6. Creating servers using Node.js and Express.js.
7. Working with Flask, FastAPI and Django.
8. Connecting backend applications with PostgreSQL and MongoDB.
9. Performing CRUD operations in relational and document databases.
10. Understanding REST APIs, authentication and authorization.
11. Working with serverless architecture and cloud services.
12. Understanding distributed systems and message queues.
13. Testing and monitoring backend application performance.
14. Developing a Notes App, Django To-Do application and CMS Blog.
15. Improving debugging, problem-solving and technical documentation skills.

## 16. Conclusion

The Backend Development course provided a practical understanding of how modern web applications are designed and developed. Through theory units, assignments and laboratory experiments, I learned the fundamentals of frontend technologies, server-side programming, database management, API development and application architecture.

The practical implementation of applications such as the Notes App, Django To-Do application and CMS Blog helped me understand how different technologies work together to create functional web applications.

I also gained exposure to advanced concepts such as serverless computing, event-driven architecture, distributed systems, database optimization and backend performance profiling.

Overall, this course improved my technical knowledge, programming skills, debugging abilities and confidence in developing backend applications.

## 17. References

The following resources and course materials were used during the completion of the practical work:

1. Backend Development lecture notes and practical instructions.
2. Node.js Documentation – https://nodejs.org/docs/
3. Express.js Documentation – https://expressjs.com/
4. Flask Documentation – https://flask.palletsprojects.com/
5. FastAPI Documentation – https://fastapi.tiangolo.com/
6. Django Documentation – https://docs.djangoproject.com/
7. MongoDB Documentation – https://www.mongodb.com/docs/
8. PostgreSQL Documentation – https://www.postgresql.org/docs/
9. Bootstrap Documentation – https://getbootstrap.com/docs/
10. jQuery Documentation – https://api.jquery.com/
11. AWS Documentation – https://docs.aws.amazon.com/
12. RabbitMQ Documentation – https://www.rabbitmq.com/docs
13. Consul Documentation – https://developer.hashicorp.com/consul/docs

### Important Links

1. **Backend Development GitHub Repository:** [View Repository](https://github.com/saanvi-15singh/BackendDevelopment)

2. **Backend Development I/O File:** [View I/O File](https://saanvi-15singh.github.io/BackendDevelopment)

3. **Docker Experiment Repository:** [View Docker Experiment Repository](https://github.com/saanvi-15singh/Backend_Docker-Experiment)

4. **Docker Experiment I/O File:** [View Docker Experiment I/O File](https://saanvi-15singh.github.io/Backend_Docker-Experiment/)

5. **Docker Experiment Report:** [View Project Report](Report.md)
---

<p align="center">
  Designed by <b>Saanvi Singh</b> | SAP ID: 590011951
</p>

