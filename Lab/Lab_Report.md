# Backend Development Experiment

## Backend Development – Lab Experiments

**Submitted By:** Saanvi Singh  
**Course:** Backend Development  
**Batch:** 5 (Core)  
**SAP ID:** 590011951


---

## 1. Introduction

This lab report presents the practical work completed as part of the Backend Development course. The experiments cover the fundamentals of web development, client-side scripting, asynchronous programming, server-side development and database management.

The practical sessions provided experience in creating web pages, designing responsive layouts, writing JavaScript programs, validating forms, working with AJAX, using Node.js and connecting applications with databases.

The experiments also included working with Bootstrap, jQuery, MongoDB, PostgreSQL and Django.

---

## 2. Objectives

The main objectives of the lab experiments were:

1. To understand HTML5 elements and webpage structure.
2. To apply different types of CSS for webpage styling.
3. To develop responsive web pages using HTML, CSS and Bootstrap.
4. To understand JavaScript arrays, objects and functions.
5. To implement client-side form validation.
6. To understand modern JavaScript ES6 concepts.
7. To manipulate webpage elements using DOM and event handling.
8. To understand AJAX and asynchronous data loading.
9. To use jQuery for webpage manipulation.
10. To develop server-side applications using Node.js.
11. To perform database operations using MongoDB and PostgreSQL.
12. To develop a web application using Django.

---

## 3. List of Experiments

| Experiment | Experiment Title |
|---|---|
| 1 | Create a Web Page with All Possible Elements of HTML5 |
| 2 | Create a Web Page with All Types of Cascading Style Sheets |
| 3 | Create a Responsive Web Page with HTML and CSS |
| 4 | Create Responsive Web Page with Bootstrap |
| 5 | Programs to Demonstrate JavaScript Array, Object and Functions |
| 6 | Client-Side Scripts for Form Validation using JavaScript |
| 7 | Programs to Familiarise ES6 Concepts |
| 8 | Programs to Demonstrate DOM and Event Handling |
| 9 | Programs Using AJAX with HTML, XML and JSON Data |
| 10 | Programs to Familiarize jQuery (2 Programs) |
| 11 | Create a Website with HTML, CSS and JavaScript (Implement AJAX) |
| 12 | Programs to Familiarize Server-Side Scripting using Node JS |
| 13 | Programs Using MongoDB Database with Node JS |
| 14 | Relational and Document Database Practical |
| 15 | Django To-Do Application |

---

## 4. Experiment-wise Overview

### Experiment 1: Create a Web Page with All Possible Elements of HTML5

This experiment focused on creating a web page using different HTML5 elements. It covered semantic elements, headings, paragraphs, lists, tables, forms and multimedia elements.

### Experiment 2: Create a Web Page with All Types of Cascading Style Sheets

This experiment demonstrated different ways of applying CSS to HTML pages, including inline, internal and external stylesheets. It helped in understanding webpage styling and presentation.

### Experiment 3: Create a Responsive Web Page with HTML and CSS

This experiment focused on developing a responsive web page using HTML and CSS. It covered responsive layouts and styling techniques for different screen sizes.

### Experiment 4: Create Responsive Web Page with Bootstrap

This experiment demonstrated the use of Bootstrap to create responsive web pages. It included the Bootstrap grid system, components and utility classes.

### Experiment 5: Programs to Demonstrate JavaScript Array, Object and Functions

This experiment covered JavaScript arrays, objects and functions. Different array methods, object properties, function types, callbacks, recursion and closures were demonstrated through programs.

### Experiment 6: Client-Side Scripts for Form Validation using JavaScript

This experiment focused on client-side form validation using JavaScript. It demonstrated how to check user inputs and display validation messages before submitting a form.

### Experiment 7: Programs to Familiarise ES6 Concepts

This experiment demonstrated modern JavaScript features introduced in ES6. It covered variables, arrow functions, template literals, destructuring, spread and rest operators, classes, promises, asynchronous functions and modules.

### Experiment 8: Programs to Demonstrate DOM and Event Handling

This experiment focused on manipulating HTML elements through the Document Object Model. It demonstrated selecting elements, modifying content, handling events and updating webpage elements dynamically.

### Experiment 9: Programs Using AJAX with HTML, XML and JSON Data

This experiment demonstrated how AJAX can be used to retrieve HTML, XML and JSON data asynchronously. It showed how webpage content can be updated without reloading the complete page.

### Experiment 10: Programs to Familiarize jQuery (2 Programs)

This experiment included two programs demonstrating jQuery. It covered selectors, DOM manipulation, event handling and different jQuery methods.

### Experiment 11: Create a Website with HTML, CSS and JavaScript (Implement AJAX)

This experiment involved creating a website using HTML, CSS and JavaScript and implementing AJAX functionality to load and update data dynamically.

### Experiment 12: Programs to Familiarize Server-Side Scripting using Node JS

This experiment focused on server-side scripting using Node.js. The practical work was divided into two parts.

### Experiment 13: Programs Using MongoDB Database with Node JS

This experiment demonstrated database operations using MongoDB with Node.js. It was divided into three parts and included MongoDB installation, database operations and Mongoose basics.

### Experiment 14: Relational and Document Database Practical

This experiment involved working with relational and document databases. PostgreSQL was used for relational database operations, while MongoDB was used for document-based database operations.

### Experiment 15: Django To-Do Application

This experiment focused on developing a To-Do application using Django. It covered project setup, application creation, database models, migrations, URL routing, templates and application functionality.

---

## 5. Lab Test-1: Simple CMS Blog Application

### Aim

To develop a simple Content Management System (CMS) Blog application using Node.js, Express.js, EJS and MongoDB.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- EJS
- HTML
- CSS

### Description

The Simple CMS Blog application allows users to create and view blog posts. It uses Express.js to handle server-side routing, EJS to render dynamic web pages and MongoDB to store blog post information.

Users can add new posts by entering the title, author and content. The application displays all available posts and provides a separate page to view individual posts.

### Database Configuration

| Property | Value |
|---|---|
| MongoDB URL | `mongodb://127.0.0.1:27017` |
| Database Name | `cms_lab` |
| Collection Name | `posts` |
| Server Port | `3000` |

### Main Routes

| HTTP Method | Route | Description |
|---|---|---|
| GET | `/` | Displays all blog posts |
| GET | `/posts/new` | Opens the new post form |
| POST | `/posts` | Saves a new blog post |
| GET | `/posts/:id` | Displays an individual blog post |

### Main Application Files

```text
Lab Test-1/
|
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

### Execution

The application can be started using:

```bash
npm install
node app.js
```

After starting the server, open:

```text
http://localhost:3000
```

### Result

The Simple CMS Blog application was developed using Node.js, Express.js, EJS and MongoDB. The application supports creating, displaying and viewing blog posts.

---

## 6. Software and Tools Used

| Tool / Technology | Purpose |
|---|---|
| Visual Studio Code | Writing and editing code |
| Google Chrome | Running and testing web pages |
| HTML5 | Webpage structure |
| CSS3 | Webpage styling |
| Bootstrap | Responsive webpage development |
| JavaScript | Client-side programming |
| jQuery | JavaScript library for DOM manipulation |
| AJAX | Asynchronous data exchange |
| Node.js | Server-side JavaScript runtime |
| Express.js | Backend web framework |
| EJS | Dynamic webpage rendering |
| MongoDB | Document database |
| Mongoose | MongoDB object modelling |
| PostgreSQL | Relational database |
| Python | Programming language |
| Django | Python web framework |
| SQLite | Database used in Django project |

---

## 7. Learning Outcomes

After completing these experiments, I gained practical knowledge of:

1. Creating structured web pages using HTML5.
2. Applying CSS and Bootstrap for webpage design.
3. Developing responsive web layouts.
4. Writing JavaScript programs using arrays, objects and functions.
5. Validating user input through JavaScript.
6. Understanding modern ES6 features.
7. Manipulating webpage elements using DOM.
8. Handling browser events.
9. Loading data asynchronously using AJAX.
10. Using jQuery for webpage operations.
11. Developing server-side applications using Node.js.
12. Connecting backend applications with MongoDB.
13. Performing database operations using PostgreSQL.
14. Developing web applications using Django.
15. Understanding the interaction between frontend, backend and database components.

---

## 8. Conclusion

The Backend Development lab experiments provided practical knowledge of web development and backend programming. Starting with HTML5, CSS and JavaScript, the experiments gradually introduced responsive design, asynchronous programming, server-side scripting and database management.

Working with Node.js, Express.js, MongoDB, PostgreSQL and Django helped in understanding how web applications are developed and how different technologies work together.

The Lab Test-1 Simple CMS Blog application provided practical experience in connecting a backend server with a database and displaying dynamic content through EJS templates.

Overall, these experiments improved my understanding of frontend development, backend programming, database connectivity and full-stack web application development.

---

# Backend Development Lab Report

## Student Details

| Field | Details |
|---|---|
| Name | Saanvi Singh |
| SAP ID | 590011951 |
| Course | Backend Development |
| Program | B.Tech Computer Science and Engineering |
| Semester | 5th Semester |
| Year | 3rd Year |

---

## 1. Introduction

This lab report presents the practical work completed as part of the Backend Development course. The experiments cover the fundamentals of web development, client-side scripting, asynchronous programming, server-side development and database management.

The practical sessions provided experience in creating web pages, designing responsive layouts, writing JavaScript programs, validating forms, working with AJAX, using Node.js and connecting applications with databases.

The experiments also included working with Bootstrap, jQuery, MongoDB, PostgreSQL and Django.

---

## 2. Objectives

The main objectives of the lab experiments were:

1. To understand HTML5 elements and webpage structure.
2. To apply different types of CSS for webpage styling.
3. To develop responsive web pages using HTML, CSS and Bootstrap.
4. To understand JavaScript arrays, objects and functions.
5. To implement client-side form validation.
6. To understand modern JavaScript ES6 concepts.
7. To manipulate webpage elements using DOM and event handling.
8. To understand AJAX and asynchronous data loading.
9. To use jQuery for webpage manipulation.
10. To develop server-side applications using Node.js.
11. To perform database operations using MongoDB and PostgreSQL.
12. To develop a web application using Django.

---

## 3. List of Experiments

| Experiment | Experiment Title |
|---|---|
| 1 | Create a Web Page with All Possible Elements of HTML5 |
| 2 | Create a Web Page with All Types of Cascading Style Sheets |
| 3 | Create a Responsive Web Page with HTML and CSS |
| 4 | Create Responsive Web Page with Bootstrap |
| 5 | Programs to Demonstrate JavaScript Array, Object and Functions |
| 6 | Client-Side Scripts for Form Validation using JavaScript |
| 7 | Programs to Familiarise ES6 Concepts |
| 8 | Programs to Demonstrate DOM and Event Handling |
| 9 | Programs Using AJAX with HTML, XML and JSON Data |
| 10 | Programs to Familiarize jQuery (2 Programs) |
| 11 | Create a Website with HTML, CSS and JavaScript (Implement AJAX) |
| 12 | Programs to Familiarize Server-Side Scripting using Node JS |
| 13 | Programs Using MongoDB Database with Node JS |
| 14 | Relational and Document Database Practical |
| 15 | Django To-Do Application |

---

## 4. Experiment-wise Overview

### Experiment 1: Create a Web Page with All Possible Elements of HTML5

This experiment focused on creating a web page using different HTML5 elements. It covered semantic elements, headings, paragraphs, lists, tables, forms and multimedia elements.

### Experiment 2: Create a Web Page with All Types of Cascading Style Sheets

This experiment demonstrated different ways of applying CSS to HTML pages, including inline, internal and external stylesheets. It helped in understanding webpage styling and presentation.

### Experiment 3: Create a Responsive Web Page with HTML and CSS

This experiment focused on developing a responsive web page using HTML and CSS. It covered responsive layouts and styling techniques for different screen sizes.

### Experiment 4: Create Responsive Web Page with Bootstrap

This experiment demonstrated the use of Bootstrap to create responsive web pages. It included the Bootstrap grid system, components and utility classes.

### Experiment 5: Programs to Demonstrate JavaScript Array, Object and Functions

This experiment covered JavaScript arrays, objects and functions. Different array methods, object properties, function types, callbacks, recursion and closures were demonstrated through programs.

### Experiment 6: Client-Side Scripts for Form Validation using JavaScript

This experiment focused on client-side form validation using JavaScript. It demonstrated how to check user inputs and display validation messages before submitting a form.

### Experiment 7: Programs to Familiarise ES6 Concepts

This experiment demonstrated modern JavaScript features introduced in ES6. It covered variables, arrow functions, template literals, destructuring, spread and rest operators, classes, promises, asynchronous functions and modules.

### Experiment 8: Programs to Demonstrate DOM and Event Handling

This experiment focused on manipulating HTML elements through the Document Object Model. It demonstrated selecting elements, modifying content, handling events and updating webpage elements dynamically.

### Experiment 9: Programs Using AJAX with HTML, XML and JSON Data

This experiment demonstrated how AJAX can be used to retrieve HTML, XML and JSON data asynchronously. It showed how webpage content can be updated without reloading the complete page.

### Experiment 10: Programs to Familiarize jQuery (2 Programs)

This experiment included two programs demonstrating jQuery. It covered selectors, DOM manipulation, event handling and different jQuery methods.

### Experiment 11: Create a Website with HTML, CSS and JavaScript (Implement AJAX)

This experiment involved creating a website using HTML, CSS and JavaScript and implementing AJAX functionality to load and update data dynamically.

### Experiment 12: Programs to Familiarize Server-Side Scripting using Node JS

This experiment focused on server-side scripting using Node.js. The practical work was divided into two parts.

### Experiment 13: Programs Using MongoDB Database with Node JS

This experiment demonstrated database operations using MongoDB with Node.js. It was divided into three parts and included MongoDB installation, database operations and Mongoose basics.

### Experiment 14: Relational and Document Database Practical

This experiment involved working with relational and document databases. PostgreSQL was used for relational database operations, while MongoDB was used for document-based database operations.

### Experiment 15: Django To-Do Application

This experiment focused on developing a To-Do application using Django. It covered project setup, application creation, database models, migrations, URL routing, templates and application functionality.

---

## 5. Lab Test-1: Simple CMS Blog Application

### Aim

To develop a simple Content Management System (CMS) Blog application using Node.js, Express.js, EJS and MongoDB.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- EJS
- HTML
- CSS

### Description

The Simple CMS Blog application allows users to create and view blog posts. It uses Express.js to handle server-side routing, EJS to render dynamic web pages and MongoDB to store blog post information.

Users can add new posts by entering the title, author and content. The application displays all available posts and provides a separate page to view individual posts.

### Database Configuration

| Property | Value |
|---|---|
| MongoDB URL | `mongodb://127.0.0.1:27017` |
| Database Name | `cms_lab` |
| Collection Name | `posts` |
| Server Port | `3000` |

### Main Routes

| HTTP Method | Route | Description |
|---|---|---|
| GET | `/` | Displays all blog posts |
| GET | `/posts/new` | Opens the new post form |
| POST | `/posts` | Saves a new blog post |
| GET | `/posts/:id` | Displays an individual blog post |

### Main Application Files

```text
Lab Test-1/
|
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

### Execution

The application can be started using:

```bash
npm install
node app.js
```

After starting the server, open:

```text
http://localhost:3000
```

### Result

The Simple CMS Blog application was developed using Node.js, Express.js, EJS and MongoDB. The application supports creating, displaying and viewing blog posts.

---

## 6. Software and Tools Used

| Tool / Technology | Purpose |
|---|---|
| Visual Studio Code | Writing and editing code |
| Google Chrome | Running and testing web pages |
| HTML5 | Webpage structure |
| CSS3 | Webpage styling |
| Bootstrap | Responsive webpage development |
| JavaScript | Client-side programming |
| jQuery | JavaScript library for DOM manipulation |
| AJAX | Asynchronous data exchange |
| Node.js | Server-side JavaScript runtime |
| Express.js | Backend web framework |
| EJS | Dynamic webpage rendering |
| MongoDB | Document database |
| Mongoose | MongoDB object modelling |
| PostgreSQL | Relational database |
| Python | Programming language |
| Django | Python web framework |
| SQLite | Database used in Django project |

---

## 7. Learning Outcomes

After completing these experiments, I gained practical knowledge of:

1. Creating structured web pages using HTML5.
2. Applying CSS and Bootstrap for webpage design.
3. Developing responsive web layouts.
4. Writing JavaScript programs using arrays, objects and functions.
5. Validating user input through JavaScript.
6. Understanding modern ES6 features.
7. Manipulating webpage elements using DOM.
8. Handling browser events.
9. Loading data asynchronously using AJAX.
10. Using jQuery for webpage operations.
11. Developing server-side applications using Node.js.
12. Connecting backend applications with MongoDB.
13. Performing database operations using PostgreSQL.
14. Developing web applications using Django.
15. Understanding the interaction between frontend, backend and database components.

---

## 8. Conclusion

The Backend Development lab experiments provided practical knowledge of web development and backend programming. Starting with HTML5, CSS and JavaScript, the experiments gradually introduced responsive design, asynchronous programming, server-side scripting and database management.

Working with Node.js, Express.js, MongoDB, PostgreSQL and Django helped in understanding how web applications are developed and how different technologies work together.

The Lab Test-1 Simple CMS Blog application provided practical experience in connecting a backend server with a database and displaying dynamic content through EJS templates.

Overall, these experiments improved my understanding of frontend development, backend programming, database connectivity and full-stack web application development.

---
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