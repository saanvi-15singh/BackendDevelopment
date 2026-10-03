# Backend Development

This repository contains lab experiments, practical coursework, and examination projects for the **Backend Development** curriculum.

---

## 📑 Table of Contents

- [Repository Structure](#-repository-structure)
- [Lab Experiments & Tests](#-lab-experiments--tests)
  - [1. Lab Test-1 Experiment (Simple CMS Blog)](#1-lab-test-1-simple-cms-blog-application)
  - [2. Experiment 1 (HTML5 Web Page)](#2-experiment-1-web-page-with-html5-elements)
- [Theory & Demos](#-theory--demos)
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
│   ├── Express/                          # Express.js theory code & demos
│   └── Flask Server/                     # Flask server implementation
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

## 📚 Theory & Demos

- **[Express Demos](./Theory/Express/):** Basic server setup and routing using Express.js.
- **[Flask Server](./Theory/Flask%20Server/):** Backend server implementation using Python and Flask.

---

## 🚀 How to Run

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

---

Design by - Saanvi Singh, 590011951