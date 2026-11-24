# Experiment 12: Programs to Familiarize Server-Side Scripting Using Node.js

## 1. Aim

To write Node.js programs that introduce server-side scripting, including creating web servers, routing, handling forms and JSON, working with the file system, creating modules and handling events.

## 2. Software Requirements

| Item | Details |
|---|---|
| Runtime | Node.js (v18 or later) with npm |
| Editor | Visual Studio Code |
| Browser | Google Chrome / Microsoft Edge |
| Testing Tool (Optional) | `curl` or Postman for POST, PUT and DELETE requests |
| Package | `express` (only for Program 9) |

Check the installation using the following commands:

```bash
node -v
npm -v
```

## 3. Theory

### 3.1 Server-Side Scripting

Server-side scripting refers to the execution of code on a server rather than in the user's browser. The server receives a request, processes it using application logic, files or databases, and sends a response in the form of HTML or JSON.

**Working Process:**

```text
Browser  --- request --->  Node.js Server
                            (Executes code,
                             accesses files/database)

Browser  <-- response ---  Node.js Server
```

### 3.2 Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JavaScript to execute outside the browser and is commonly used for developing server-side applications.

**Main Features of Node.js:**

| Feature | Description |
|---|---|
| Non-blocking, Asynchronous I/O | Allows the server to handle other operations while waiting for tasks such as file or database operations. |
| Event-driven | Executes functions in response to events such as incoming requests or received data. |
| Single-threaded Event Loop | Uses an event loop to manage multiple connections efficiently. |
| Modules and npm | Supports reusable modules and provides access to thousands of packages through npm. |

### 3.3 Important Built-in Modules

Node.js provides several built-in modules that help perform different operations.

| Module | Purpose |
|---|---|
| `http` | Creates web servers and handles requests and responses. |
| `fs` | Reads, writes, copies, renames and deletes files. |
| `path` | Creates and manages file paths across different operating systems. |
| `os` | Provides information about the operating system, memory and CPU. |
| `url` | Parses URLs and query strings. |
| `events` | Provides EventEmitter for event-driven programming. |
| `querystring` | Parses and formats query strings. |
| `util` | Provides utility functions for Node.js applications. |

### 3.4 Request and Response

In Node.js, HTTP communication involves two important objects: request and response.

| Component | Description |
|---|---|
| Request (`req`) | Contains information about the incoming request, including `req.method`, `req.url`, `req.headers` and the request body. |
| Response (`res`) | Used to send responses through methods such as `res.writeHead(status, headers)` and `res.end(body)`. |

**Common HTTP Status Codes:**

| Status Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 303 | See Other / Redirect |
| 400 | Bad Request |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 500 | Internal Server Error |

### 3.5 Modules in Node.js

Node.js uses modules to divide code into smaller, reusable files.

The `module.exports` statement is used to export functions or values from a file, while `require()` is used to import them into another file.

**Example:**

```javascript
// mathModule.js
module.exports = { add, subtract };

// app.js
const math = require("./mathModule");

// Built-in module
const fs = require("fs");
```

Custom modules use a relative path such as `./mathModule`, whereas built-in modules can be imported directly using their names.

## 4. Programs

All programs are stored inside the folder `Lab/Exp12`.

| No. | File Name | Description |
|---|---|---|
| 1 | `1_hello_server.js` | Creates a basic web server using `http.createServer()` and `listen()`. |
| 2 | `2_routing_server.js` | Demonstrates routing based on URL paths and HTTP methods, HTML pages, JSON responses and 404 errors. |
| 3 | `3_file_system.js` | Demonstrates file system operations such as creating folders, writing, appending, reading, copying, renaming and deleting files. |
| 4 | `4_mathModule.js`, `4_modules.js` | Demonstrates creating custom modules using `module.exports` and importing them using `require()`. |
| 5 | `5_events.js` | Demonstrates EventEmitter, event listeners, event emission, custom classes and asynchronous execution. |
| 6 | `6_form_server.js` | Demonstrates HTML forms, GET and POST requests, validation, JSON file storage, HTML escaping and redirects. |
| 7 | `7_json_api.js` | Creates a REST API using GET, POST, PUT and DELETE methods with JSON responses. |
| 8 | `8_core_modules.js` | Demonstrates built-in modules such as `path`, `os`, `URL`, `querystring`, `util` and `process`. |
| 9 | `9_express_server.js` | Demonstrates Express.js, middleware, route parameters, query strings and JSON request bodies. |

## 5. Procedure

1. Create a folder named `Exp12` and open it in Visual Studio Code.
2. Create all the JavaScript program files listed above.
3. Open the integrated terminal using `Ctrl + ~`.
4. Execute each program using the following command:

```bash
node <filename>
```

Example:

```bash
node 3_file_system.js
```

5. For server-based programs (1, 2, 6, 7 and 9), open the corresponding localhost URL in the browser.
6. Keep the terminal running while accessing the server.
7. Stop the server using `Ctrl + C`.
8. For Program 9, install Express before execution:

```bash
npm install express
```

9. Use `curl` or Postman to test POST, PUT and DELETE requests in Program 7 and form submission in Program 6.
10. Capture screenshots of the terminal output and browser results.

**Note:** Only one server can use port 3000 at a time. Stop the currently running server before starting another program that uses the same port.

## 6. Code Explanation and Output

### Program 1: Hello Server

**Aim:** To create a basic web server using the built-in HTTP module of Node.js.

**Code:**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello from Node.js server!");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
```

**Explanation:**

- `require("http")` imports the HTTP module.
- `createServer()` creates a server that handles incoming requests.
- `writeHead()` sets the HTTP status code and response headers.
- `end()` sends the response to the browser.
- `listen(3000)` starts the server on port 3000.

**Output:**

```text
Terminal:
Server running at http://localhost:3000

Browser:
Hello from Node.js server!
```

### Program 2: Routing Server

**Aim:** To demonstrate routing in Node.js using URL paths and HTTP methods.

The URL is parsed using `new URL(req.url, ...)`, and conditional statements determine which response should be returned based on the request method and URL path.

**Routes and Expected Responses:**

| Request | Response |
|---|---|
| `GET /` | 200 - Home page (HTML) |
| `GET /about` | 200 - About page |
| `GET /contact` | 200 - Contact page |
| `GET /api/time` | 200 - JSON response containing the current time |
| `GET /nothing` | 404 - Page Not Found |

**Expected JSON Output:**

```json
{
    "time": "2026-10-03T10:13:41.293Z"
}
```

The timestamp is an example and changes according to the time when the request is executed.

**Output:** (Insert screenshot of routing pages and browser results)

### Program 3: File System Operations

**Aim:** To demonstrate file handling operations using the built-in `fs` module.

The program performs the following operations:

1. Creates a folder.
2. Writes data using `writeFileSync()`.
3. Appends additional content using `appendFileSync()`.
4. Reads file contents using `readFileSync()`.
5. Counts lines, words and characters.
6. Gets file information using `statSync()`.
7. Copies files using `copyFileSync()`.
8. Renames files using `renameSync()`.
9. Lists directory contents using `readdirSync()`.
10. Reads files asynchronously using `readFile()`.
11. Handles errors when reading a missing file.
12. Deletes files and folders.

**Expected Output:**

```text
=== 4. Read the file (readFileSync) ===
Line 1: Hello Node.js
Line 2: File System module
Line 3: Server-side scripting

=== 5. Count lines and words ===
Lines: 3 | Words: 13 | Characters: 79

=== 6. File information (statSync) ===
Size in bytes : 79
Is a file     : true
Is a folder   : false

=== 7. Copy and rename ===
Files in folder: [ 'notes.txt', 'notes_renamed.txt' ]

=== 8. Asynchronous read (readFile with a callback) ===
(This line prints BEFORE the async result, because readFile does not block.)
Async read finished. First line: Line 1: Hello Node.js

=== 9. Reading a file that does not exist (error handling) ===
Error caught: ENOENT

=== 10. Delete files and folder ===
Deleted. Folder still exists? false
```

**Observation:** The message explaining asynchronous execution appears before the asynchronous result because `readFile()` does not block the execution of the remaining code.

**Output:** (Insert screenshot of terminal output)

### Program 4: Modules in Node.js

**Aim:** To demonstrate the creation and usage of custom modules in Node.js.

The program consists of two files:

- `4_mathModule.js`: Exports mathematical functions and constants.
- `4_modules.js`: Imports and uses the exported functions through `require()`.

The mathematical module contains the following functions:

- `add()`
- `subtract()`
- `multiply()`
- `divide()`
- `isPrime()`
- `factorial()`

It also exports the constant `PI`.

**Expected Output:**

```text
add(10, 5)       = 15
subtract(10, 5)  = 5
multiply(10, 5)  = 50
divide(10, 5)    = 2
factorial(6)     = 720
PI               = 3.14159

Prime numbers up to 30:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29

Error caught: Cannot divide by zero

Destructured: add(2, 3) = 5 | multiply(2, 3) = 6
Same module object both times? true
```

**Observation:** Custom modules help organize code, improve reusability and make applications easier to maintain. The `try...catch` block handles errors such as division by zero.

**Output:** (Insert screenshot of terminal output)

### Program 5: Events in Node.js

**Aim:** To demonstrate event-driven programming using the EventEmitter class.

**Code:**

```javascript
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log("Hello, " + name + "!");
});

emitter.emit("greet", "Saanvi Singh");
```

**Explanation:**

- `EventEmitter` is imported from the built-in `events` module.
- `on()` registers an event listener.
- `emit()` triggers the registered event.
- `once()` executes a listener only once.
- `removeListener()` removes a registered listener.

The program also demonstrates a custom `Shop` class that extends `EventEmitter` and generates `sold`, `outOfStock` and `error` events.

**Expected Output:**

```text
--- Basic events ---
Hello, Saanvi Singh!
(second listener) Welcome to Node.js, Saanvi Singh
once(): this runs only the first time
Listeners for 'greet': 2

--- Shop example ---
Sold 2 item(s). Stock left: 3
Error event: Only 3 items in stock
Sold 3 item(s). Stock left: 0
Alert: shop is out of stock!

--- Async order ---
1. Start
2. End of the script
2b. nextTick (runs before timers)
3. Inside setTimeout (runs later)
```

**Observation:** EventEmitter makes it possible to execute specific functions whenever an event occurs. Asynchronous operations also demonstrate how Node.js manages execution using its event loop.

**Output:** (Insert screenshot of terminal output)

### Program 6: Form Handling Server

**Aim:** To demonstrate HTML form handling using GET and POST requests in Node.js.

The program creates an HTML form and processes user-submitted information using the HTTP module.

**Routes and Operations:**

| Route | Functionality |
|---|---|
| `GET /` | Displays an HTML form containing name, email and message fields. |
| `GET /greet?name=Saanvi&city=Lucknow` | Reads query parameters using `url.searchParams`. |
| `POST /submit` | Collects request body data using `req.on("data")` and `req.on("end")`, parses the form data and validates the input. |
| `GET /submissions` | Reads the JSON file and displays all saved submissions. |

After successful validation, the submitted information is saved in `submissions.json`, and the server redirects the user using HTTP status code 303.

An `esc()` function is used to escape user input before displaying it in HTML. This prevents entered HTML tags from being interpreted as actual HTML.

**Test Results:**

```text
GET /greet?name=Saanvi Singh&city=Lucknow
-> Hello Saanvi Singh from Lucknow!

POST with empty fields
-> 400 (Validation errors displayed)

POST with valid data
-> 303 redirect to /submissions

Saved in submissions.json:
{
    "id": 1,
    "name": "Saanvi Singh",
    "email": "saanvi@example.com",
    "message": "<b>Hi</b>",
    "time": "..."
}
```

**Output:** (Insert screenshot of the HTML form, validation and submitted data)

### Program 7: JSON REST API

**Aim:** To develop a REST API using Node.js that performs CRUD operations through HTTP methods.

The application manages student records using JSON data.

**HTTP Methods and Operations:**

| Method | URL | Action | Expected Result |
|---|---|---|---|
| GET | `/students` | Displays all students | 200 and JSON array |
| GET | `/students?minMarks=80` | Filters students by minimum marks | 200 and filtered JSON array |
| GET | `/students/1` | Displays a particular student | 200 or 404 |
| POST | `/students` | Adds a new student | 201 and new student details |
| PUT | `/students/1` | Updates student information | 200 and updated student |
| DELETE | `/students/2` | Deletes a student | 200 and confirmation message |

**Testing Commands and Expected Results:**

**1. Get all students**

```bash
curl localhost:3000/students
```

Expected response:

```json
[
    {"id":1,"name":"Rahul","marks":85},
    {"id":2,"name":"Priya","marks":92},
    {"id":3,"name":"Amit","marks":74}
]
```

**2. Filter students by marks**

```bash
curl "localhost:3000/students?minMarks=80"
```

Expected response:

```json
[
    {"id":1,"name":"Rahul","marks":85},
    {"id":2,"name":"Priya","marks":92}
]
```

**3. Add a new student**

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"Ravi\",\"marks\":80}" localhost:3000/students
```

Expected response:

```json
{"id":4,"name":"Ravi","marks":80}
```

**4. Test invalid student data**

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"Bad\"}" localhost:3000/students
```

Expected response:

```json
{"error":"name and numeric marks are required"}
```

Status code: `400`

**5. Update student marks**

```bash
curl -X PUT -H "Content-Type: application/json" -d "{\"marks\":95}" localhost:3000/students/1
```

Expected response:

```json
{"id":1,"name":"Rahul","marks":95}
```

**6. Delete a student**

```bash
curl -X DELETE localhost:3000/students/2
```

Expected response:

```json
{"message":"Deleted student 2"}
```

**7. Search for a student that does not exist**

```bash
curl localhost:3000/students/99
```

Expected response:

```json
{"error":"Student not found"}
```

Status code: `404`

**Observation:** The API performs CRUD operations using HTTP methods and returns structured JSON responses. The data is stored in memory, so it resets when the server restarts. A database is introduced in Experiment 13.

**Output:** (Insert screenshot of API testing results)

### Program 8: Core Modules in Node.js

**Aim:** To understand and demonstrate the use of important built-in Node.js modules.

The program demonstrates the following modules:

| Module | Purpose |
|---|---|
| `path` | Handles file paths and extracts filenames and extensions. |
| `os` | Provides operating system information. |
| `URL` | Parses URLs into different components. |
| `querystring` | Parses and formats query strings. |
| `util` | Provides utility functions such as `format()` and `promisify()`. |
| `process` | Provides information about the current Node.js process. |

**Expected Output (Selected Lines):**

```text
basename  : index.html
dirname   : /home/saanvi/projects/app
extname   : .html
join      : folder/sub/file.txt

protocol : https:
hostname : example.com
port     : 8080
pathname : /products/list
search   : ?category=books&page=2
category : books

after append:
https://example.com:8080/products/list?category=books&page=2&sort=price#top

parse    : { name: 'Saanvi', city: 'Lucknow', age: '20' }
stringify: course=CSE&year=2
format   : Saanvi is 20 years old

Node version : v22.22.0
Arguments    : [ 'hello', '123' ]
promisify: waited 300 ms

Program finished with code 0
```

**Observation:** The output of the `os` module, such as CPU cores and memory information, depends on the computer on which the program is executed.

**Output:** (Insert screenshot of terminal output)

### Program 9: Express Server

**Aim:** To create a web server using the Express.js framework and demonstrate simplified routing and request handling.

First, install Express:

```bash
npm install express
```

Run the program:

```bash
node 9_express_server.js
```

**Routes and Expected Responses:**

| Request | Expected Response |
|---|---|
| `GET /hello/Saanvi` | `Hello, Saanvi!` (Route parameter) |
| `GET /search?q=node` | `{"searchedFor":"node"}` (Query string) |
| `POST /add` with `{"a":4,"b":6}` | `{"a":4,"b":6,"sum":10}` (JSON body) |
| `GET /zzz` | 404 - Not Found |

#### Comparison Between HTTP Module and Express

| Task | HTTP Module | Express |
|---|---|---|
| Routing | `if (url.pathname === "/about")` | `app.get("/about", ...)` |
| Route Parameters | Split the URL path manually | `req.params.name` |
| Query Strings | `new URL(...).searchParams` | `req.query.q` |
| JSON Request Body | Collect chunks and use `JSON.parse()` | `app.use(express.json())` |
| Send JSON | Use `JSON.stringify()` and set headers | `res.json(data)` |

**Observation:** Express simplifies server development by providing built-in routing methods, middleware support and convenient request and response handling.

**Output:** (Insert screenshot of Express server and browser results)

## 7. Output Screenshots

Capture screenshots of the terminal and browser outputs for the major programs.

The following Markdown syntax can be used to display screenshots stored inside the project folder:

```markdown
![Program 1 Output](screenshots/p1.png)

![Program 2 Routing](screenshots/p2.png)

![Program 3 File System](screenshots/p3.png)

![Program 6 Form Handling](screenshots/p6.png)

![Program 7 JSON API](screenshots/p7.png)

![Program 9 Express Server](screenshots/p9.png)
```

## 8. Observations

- A Node.js server continues running until the terminal is closed or `Ctrl + C` is pressed.
- The callback inside `createServer()` executes for every incoming request, including automatic browser requests such as `GET /favicon.ico`.
- Asynchronous functions such as `readFile()` and `setTimeout()` do not block the execution of other operations.
- POST request data can arrive in multiple chunks and must be collected using the `data` and `end` events before processing.
- User input must be escaped before inserting it into HTML to prevent HTML injection and cross-site scripting.
- Redirecting after a successful POST request using status code 303 prevents accidental form resubmission when the page is refreshed.
- Express requires less code than the built-in HTTP module for routing, handling parameters and processing JSON requests.
- Built-in Node.js modules provide useful functionality without requiring additional package installations.

## 9. Result

Node.js programs demonstrating web server creation, routing, file system operations, custom modules, event handling, form processing, REST API development, core modules and Express.js were implemented and executed.

The programs demonstrated the basic concepts of server-side scripting and request-response handling using Node.js.

## 10. Conclusion

This experiment introduced server-side scripting using Node.js and demonstrated how JavaScript can be used outside the browser to develop server-side applications.

The built-in modules such as `http`, `fs`, `events`, `path` and `os` helped in creating web servers, handling files, managing events and accessing system information. Different HTTP methods were used to handle form submissions and perform CRUD operations through a JSON REST API.

The experiment also demonstrated how Express.js simplifies server development through routing, middleware and convenient request-response methods.

Overall, this experiment improved my understanding of Node.js, asynchronous programming, server-side scripting and API development. These concepts provide a foundation for database integration and backend application development in the next experiment.