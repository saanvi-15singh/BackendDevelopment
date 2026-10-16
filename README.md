# Backend Development

This repository contains lab experiments, practical coursework, and theory assignments for the **Backend Development** curriculum.

---

## 📑 Table of Contents

- [Repository Structure](#-repository-structure)
- [Lab Experiments & Tests](#-lab-experiments--tests)
  - [1. Lab Test-1 Experiment (Simple CMS Blog)](#1-lab-test-1-simple-cms-blog-application)
  - [2. Experiment 1 (HTML5 Web Page)](#2-experiment-1-web-page-with-html5-elements)
- [Theory Assignments & Demos](#-theory-assignments--demos)
  - [Assignment 1: Notes App](#assignment-1-notes-app)
  - [Assignment 2: PostgreSQL as SQL + NoSQL (Working with JSONB)](#assignment-2-postgresql-as-sql--nosql--working-with-jsonb)
  - [Express Demos & Flask Server](#express-demos--flask-server)
- [How to Run](#-how-to-run)

---

## 📁 Repository Structure

```text
BackendDevelopment/
├── Lab/
│   ├── Experiment1/                      # Experiment 1: HTML5 Elements
│   │   ├── index.html                    # Main HTML5 Webpage
│   │   └── Report.md                     # Experiment 1 Lab Report
│   └── Lab Test-1 Experiment/            # Lab Test-1: Simple CMS Blog
│       ├── app.js                        # Express server & MongoDB logic
│       ├── package.json                  # Dependencies & scripts
│       ├── views/                        # EJS template views
│       ├── public/                       # CSS stylesheets
│       ├── README.md                     # Lab Test 1 Documentation
│       └── Report.md                     # Lab Test 1 Full Report
├── Theory/
│   ├── Assignment-1/                     # Assignment 1: Notes App
│   │   ├── index.html                    # Notes App Webpage
│   │   ├── style.css                     # Notes App Stylesheet
│   │   ├── script.js                     # Notes App JavaScript Logic
│   │   └── Report.md                     # Assignment 1 Full Report
│   ├── Assignment-2/                     # Assignment 2: PostgreSQL JSONB (SQL + NoSQL)
│   │   └── Report.md                     # Assignment 2 Full Report
│   ├── Express/                          # Express.js theory code & demos
│   │   ├── Server.js                     # Express server entry point
│   │   └── express-demo/                 # Demo configuration
│   └── Flask Server/                     # Flask server implementation
│       ├── main.py                       # Flask server entry point
│       └── README.md                     # Flask server documentation
└── README.md                             # Main Repository Index
```

---

## 🧪 Lab Experiments & Tests

| # | Experiment / Test Name | Folder Link | Lab Report | Key Technologies |
|---|------------------------|-------------|------------|------------------|
| 1 | **Lab Test-1 Experiment** (Simple CMS Blog) | [📁 `Lab/Lab Test-1 Experiment`](./Lab/Lab%20Test-1%20Experiment/) | [📄 Report.md](./Lab/Lab%20Test-1%20Experiment/Report.md) | Node.js, Express, MongoDB, EJS |
| 2 | **Experiment 1** (HTML5 Web Page) | [📁 `Lab/Experiment1`](./Lab/Experiment1/) | [📄 Report.md](./Lab/Experiment1/Report.md) | HTML5, CSS3, JavaScript |

---

### 1. Lab Test-1: Simple CMS Blog Application

- **Directory:** [📁 `Lab/Lab Test-1 Experiment/`](./Lab/Lab%20Test-1%20Experiment/)
- **Documentation:** [README.md](./Lab/Lab%20Test-1%20Experiment/README.md)
- **Lab Report:** [Report.md](./Lab/Lab%20Test-1%20Experiment/Report.md)
- **Application Code:** [app.js](./Lab/Lab%20Test-1%20Experiment/app.js)
- **Tech Stack:** Node.js, Express.js, MongoDB, EJS, HTML5, CSS3

#### Overview
A full-stack Blog Content Management System (CMS) built during the Lab Test-1 Examination. It allows users to create new blog posts, browse all existing posts, and view individual articles in detail. Data is persisted in a MongoDB database with server-rendered EJS templates.

#### Key Features
- **Create Post:** Form allowing submission of title, author, and content with automatic timestamps.
- **View All Posts:** Displays cards for each blog post sorted chronologically.
- **View Single Post:** Dynamic routing (`/post/:id`) to display full blog post contents.
- **MongoDB Integration:** Connected to `mongodb://127.0.0.1:27017` with database `cms_lab` and collection `posts`.

---

### 2. Experiment 1: Web Page with HTML5 Elements

- **Directory:** [📁 `Lab/Experiment1/`](./Lab/Experiment1/)
- **Lab Report:** [Report.md](./Lab/Experiment1/Report.md)
- **Source Code:** [index.html](./Lab/Experiment1/index.html)
- **Tech Stack:** HTML5, CSS3, JavaScript

#### Overview
An exploration and demonstration of core modern HTML5 elements, structures, and semantic web standards.

#### Key Features
- **Semantic Structure:** Utilization of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Text & Media Elements:** Headings, blockquotes, code blocks, lists, audio playback, and embedded video.
- **Tables & Forms:** Data tables, interactive form controls with validation, range sliders, date pickers, and submit actions.

---

## 📚 Theory Assignments & Demos

| # | Assignment / Module | Directory | Files | Technologies |
|---|---------------------|-----------|-------|--------------|
| 1 | **Assignment 1: Notes App** | [📁 `Theory/Assignment-1`](./Theory/Assignment-1/) | [📄 Report.md](./Theory/Assignment-1/Report.md)<br>[🌐 index.html](./Theory/Assignment-1/index.html)<br>[🎨 style.css](./Theory/Assignment-1/style.css)<br>[⚡ script.js](./Theory/Assignment-1/script.js) | HTML5, CSS3, JavaScript, LocalStorage, JSON |
| 2 | **Assignment 2: PostgreSQL as SQL + NoSQL (JSONB)** | [📁 `Theory/Assignment-2`](./Theory/Assignment-2/) | [📄 Report.md](./Theory/Assignment-2/Report.md) | PostgreSQL 18, JSONB, GIN Indexing, MongoDB |
| 3 | **Express Demos** | [📁 `Theory/Express`](./Theory/Express/) | [📄 Server.js](./Theory/Express/Server.js) | Node.js, Express.js |
| 4 | **Flask Server** | [📁 `Theory/Flask Server`](./Theory/Flask%20Server/) | [📄 main.py](./Theory/Flask%20Server/main.py) | Python 3, Flask |

---

### Assignment 1: Notes App

- **Directory:** [📁 `Theory/Assignment-1/`](./Theory/Assignment-1/)
- **Files:**
  - [index.html](./Theory/Assignment-1/index.html) - Application layout with note input form, display grid, and action controls
  - [style.css](./Theory/Assignment-1/style.css) - Responsive card grid, modern styling, and responsive media queries
  - [script.js](./Theory/Assignment-1/script.js) - Note creation, deletion, LocalStorage persistence, and validation logic
  - [Report.md](./Theory/Assignment-1/Report.md) - Assignment report covering objectives, implementation, debugging, and testing
- **Tech Stack:** HTML5, CSS3, JavaScript (LocalStorage & JSON)

#### Overview
A client-side Notes Application allowing users to write, manage, and delete notes. Uses browser `localStorage` combined with JSON serialization to guarantee persistent storage across browser sessions and page reloads.

#### Key Features
- **Add & Display Notes:** Dynamic creation of note cards showing title and content.
- **Persistent Storage:** Synchronized with browser `localStorage` using `JSON.stringify` and `JSON.parse`.
- **Delete Capability:** Allows removing specific notes with instant UI and LocalStorage update.
- **Feedback & Validation:** Form validation preventing empty notes and user feedback notifications.

---

### Assignment 2: PostgreSQL as SQL + NoSQL — Working with JSONB

- **Directory:** [📁 `Theory/Assignment-2/`](./Theory/Assignment-2/)
- **Files:**
  - [Report.md](./Theory/Assignment-2/Report.md) - Comprehensive theoretical answers and practical implementation report
- **Tech Stack:** PostgreSQL 18, JSONB, GIN Indexing, MongoDB, SQL

#### Overview
An extensive study and practical implementation demonstrating PostgreSQL's hybrid relational + document capabilities using `JSONB`. Explores storing relational data alongside flexible attributes, indexing strategies with GIN, query performance benchmarking using `EXPLAIN ANALYZE`, and a detailed architectural comparison against MongoDB.

#### Key Topics & Implementations Covered
- **Conceptual Analysis (Part A):**
  - Differences between `JSON` (raw text storage) and `JSONB` (binary decomposed format).
  - Storing structured SQL columns and flexible NoSQL document attributes in the same table.
  - JSONB query operators: `->` (extract as JSON), `->>` (extract as text), `@>` (containment), and `?` (key existence).
  - GIN (Generalized Inverted Index) performance characteristics and query acceleration.
  - Architectural comparison between PostgreSQL JSONB and MongoDB (ACID transactions, joins, schema enforcement, horizontal scaling).
- **Practical Implementation (Part B):**
  - PostgreSQL `product_catalog` database and `products` table setup with typed columns and JSONB attributes.
  - Insertions and querying of product records across multiple categories.
  - Updating nested JSONB attributes using concatenation (`||`).
  - Performance profiling before and after GIN indexing using `EXPLAIN ANALYZE`.
  - MongoDB equivalent implementation and comparative evaluation.

---

### Express Demos & Flask Server

- **[Express Demos](./Theory/Express/):** Minimalist server setup and HTTP routing using Node.js and Express.js.
  - Entry file: [Server.js](./Theory/Express/Server.js)
- **[Flask Server](./Theory/Flask%20Server/):** Backend REST endpoints and dynamic data routes implemented in Python using Flask.
  - Entry file: [main.py](./Theory/Flask%20Server/main.py)

---

## 🚀 How to Run

### Running Assignment 1 (Notes App)
Open `Theory/Assignment-1/index.html` directly in any web browser, or launch using VS Code Live Server.

### Running Assignment 2 (PostgreSQL & MongoDB)
Refer to [Report.md](./Theory/Assignment-2/Report.md) for full SQL scripts and MongoDB shell commands to initialize and query the `product_catalog` database.

### Running Lab Test-1 (Simple CMS Blog)
```bash
# 1. Navigate to the project directory
cd "Lab/Lab Test-1 Experiment"

# 2. Install dependencies
npm install

# 3. Ensure MongoDB daemon is running
mongod

# 4. Start the application
node app.js
```
Open your browser and navigate to `http://localhost:3000`.

### Running Experiment 1
Open `Lab/Experiment1/index.html` directly in any web browser, or use VS Code Live Server.

### Running Express Demo
```bash
cd "Theory/Express"
node Server.js
```

### Running Flask Server
```bash
cd "Theory/Flask Server"
python main.py
```

---

Design by - Saanvi Singh, 590011951