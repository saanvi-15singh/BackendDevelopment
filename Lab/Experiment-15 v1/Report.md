# Experiment 15 – Django To-Do Application

## 1. Objective

To install, set up, and build a simple To-Do application using the Django web framework and SQLite database.

By completing this experiment, I understood Django's project structure, the role of generated files, the purpose of important `manage.py` commands, and how to implement basic CRUD (Create, Read, Update, Delete) functionality.

## 2. Introduction

Django is a high-level Python web framework used to develop secure and maintainable web applications. It follows the Model-View-Template (MVT) architectural pattern, which helps organize application logic, database operations, and user interfaces.

In this experiment, a simple To-Do application was developed using Django and SQLite. The application allows users to manage their daily tasks by creating, viewing, updating, and deleting task records.

SQLite was used as the database because it is lightweight and comes with Django's default configuration.

## 3. Objectives

- To install and configure Django.
- To understand the basic structure of a Django project.
- To create a Django project and application.
- To understand the purpose of `manage.py` and its important commands.
- To configure SQLite as the database.
- To create models for storing To-Do tasks.
- To perform database migrations.
- To implement CRUD operations.
- To create HTML templates for displaying tasks.
- To understand the MVT architecture.
- To run and test the Django application locally.

## 4. Software and Tools Required

- Operating System: Windows
- Programming Language: Python 3.13
- Web Framework: Django 6.1.2
- Database: SQLite
- Code Editor: Visual Studio Code
- Web Browser: Google Chrome or any modern browser
- Terminal: PowerShell

## 5. Installation and Setup

### 5.1 Checking Python Installation

Python was installed and its version was checked using the following command:

```bash
python --version
```

### 5.2 Installing Django

Django was installed using pip.

```bash
pip install django
```

The installed Django version was checked using:

```bash
python -m django --version
```

The installed version was Django 6.1.2.

### 5.3 Creating a Django Project

A Django project was created using the following command:

```bash
django-admin startproject todo_project
```

The project contains the main configuration files required to run the application.

### 5.4 Creating the To-Do Application

Inside the Django project, an application named `todo_task` was created.

```bash
python manage.py startapp todo_task
```

The application was added to the `INSTALLED_APPS` section of the project's `settings.py` file.

## 6. Understanding Django Project Structure

Django automatically generates different files and folders when a project and application are created.

### 6.1 Important Project Files

| File | Purpose |
|---|---|
| `manage.py` | Command-line utility for managing the Django project |
| `settings.py` | Contains project configuration and installed applications |
| `urls.py` | Defines URL patterns for the project |
| `asgi.py` | Entry point for ASGI-compatible web servers |
| `wsgi.py` | Entry point for WSGI-compatible web servers |
| `models.py` | Defines database models |
| `views.py` | Contains application logic |
| `admin.py` | Used to register models with the Django admin panel |
| `apps.py` | Contains application configuration |
| `tests.py` | Used to write application tests |

### 6.2 MVT Architecture

Django follows the Model-View-Template (MVT) architecture.

**1. Model**

The Model represents the database structure. It defines how task information is stored in the SQLite database.

**2. View**

The View contains the application logic. It processes user requests, interacts with the database, and returns responses.

**3. Template**

The Template handles the presentation layer. It uses HTML to display the To-Do application interface to users.

The MVT architecture separates database operations, application logic, and user interface development.

## 7. Database Configuration and Models

### 7.1 SQLite Database

Django uses SQLite as its default database.

The database configuration is available in the `DATABASES` section of `settings.py`.

SQLite stores application data in a local database file and does not require a separate database server.

### 7.2 Creating Models

Models were defined inside the `models.py` file of the `todo_task` application.

A Django model represents a database table and its fields. The To-Do application uses a model to manage task information.

Models allow Django to interact with the database using its Object Relational Mapper (ORM).

### 7.3 Database Migrations

Migrations were performed to apply model changes to the database.

The following commands were used:

```bash
python manage.py makemigrations
```

This command generates migration files based on changes made to the models.

```bash
python manage.py migrate
```

This command applies the migrations and creates the required database tables.

## 8. CRUD Operations

CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used to manage data in an application.

The To-Do application implements these operations to manage tasks.

### 8.1 Create

The Create operation allows users to add new tasks to the application.

When a user submits task information through the form, the application saves the new record in the SQLite database.

### 8.2 Read

The Read operation displays the tasks stored in the database.

The application retrieves task records and displays them on the web page.

### 8.3 Update

The Update operation allows users to modify an existing task.

Users can make changes to task information and save the updated record.

### 8.4 Delete

The Delete operation allows users to remove tasks that are no longer required.

The selected task is deleted from the database.

These operations demonstrate how Django manages application data through its ORM.

## 9. URL Routing and Templates

### 9.1 URL Routing

Django uses URL patterns to connect browser requests with the appropriate views.

The `urls.py` file defines the routes used to access different application functionalities.

URL routing helps users navigate between different operations of the To-Do application.

### 9.2 HTML Templates

HTML templates were used to create the user interface of the application.

The templates display task information and provide forms and buttons for performing CRUD operations.

Django Template Language (DTL) was used to display dynamic data.

### 9.3 Static Files and CSS

CSS was used to improve the appearance of the To-Do application.

The stylesheet was stored inside:

```text
todo_task/static/todo/style.css
```

The static file configuration was handled using Django's static file functionality.

The following setting was used:

```python
STATIC_URL = 'static/'
```

The HTML templates used Django's static template tag to load the stylesheet.

## 10. Important Django Management Commands

Django provides several commands through `manage.py` to manage the project.

| Command | Purpose |
|---|---|
| `python manage.py runserver` | Starts the development server |
| `python manage.py startapp todo_task` | Creates a new Django application |
| `python manage.py makemigrations` | Creates migration files |
| `python manage.py migrate` | Applies database migrations |
| `python manage.py createsuperuser` | Creates an administrator account |
| `python manage.py showmigrations` | Displays migration status |
| `python manage.py check` | Checks the project for common problems |
| `python manage.py shell` | Opens the Django interactive shell |

These commands help developers create, configure, test, and maintain Django applications.

## 11. Running the Application

The Django development server was started using:

```bash
python manage.py runserver
```

After starting the server, the application could be accessed through the local development address:

```text
http://127.0.0.1:8000/
```

The application was tested in a web browser to check its functionality.

The Create, Read, Update, and Delete operations were used to verify task management functionality.

## 12. Project Structure

The Django To-Do application follows the standard Django project structure.

```text
Experiment-15/
│
├── manage.py
│
├── todo_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── todo_task/
│   ├── migrations/
│   ├── static/
│   │   └── todo/
│   │       └── style.css
│   ├── templates/
│   │   └── todo_task/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── views.py
│   └── urls.py
│
└── db.sqlite3
```

Note: The directory structure represents the standard organization of the Django project. Template filenames and other files may vary according to the actual implementation.

## 13. Learning Outcomes

After completing this experiment, I learned:

1. How to install Python packages and configure Django.
2. How to create a Django project and application.
3. How to understand the purpose of different Django files.
4. How the Model-View-Template architecture works.
5. How to configure SQLite as a database.
6. How to create models and perform database migrations.
7. How to implement Create, Read, Update, and Delete operations.
8. How URL routing connects requests with application views.
9. How HTML templates display dynamic information.
10. How CSS and static files improve the appearance of a web application.
11. How to use important Django management commands.
12. How to run and test a Django application locally.

## 14. Conclusion

Through this experiment, I learned how to develop a basic To-Do application using the Django web framework and SQLite database.

I understood Django's project structure, the purpose of important generated files, and how the MVT architecture organizes application development. I also learned how to create models, perform database migrations, configure URL routing, and use HTML templates and CSS.

The implementation of CRUD operations helped me understand how applications create, retrieve, update, and delete records from a database.

Overall, this experiment provided practical knowledge of Django development and helped me understand how a basic Python-based web application is created and managed.