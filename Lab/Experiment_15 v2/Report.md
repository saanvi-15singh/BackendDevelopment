# Experiment 15 – Django To-Do Application (Task Tracker)

## Setup
```
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # for /admin/
python manage.py check
python manage.py runserver
```
Open http://127.0.0.1:8000/ (app) and http://127.0.0.1:8000/admin/ (admin).

`todo/migrations/0001_initial.py` is already included. If you change the model, run `python manage.py makemigrations todo` then `migrate`.

Run the automated tests: `python manage.py test`

## Structure
```
Experiment_15/
├── manage.py
├── requirements.txt
├── todo_project/            # settings.py, urls.py, wsgi.py, asgi.py
└── todo/
    ├── models.py            # Task model
    ├── views.py             # list, add, toggle, delete (POST + CSRF)
    ├── urls.py              # named routes
    ├── admin.py             # Task admin: list_display, filter, search
    ├── apps.py              # TodoConfig
    ├── tests.py             # CRUD tests
    ├── migrations/0001_initial.py
    ├── templates/todo/      # base, header, footer, task_list, add_task
    └── static/todo/         # css/style.css, js/app.js, images/logo.png
```

## Assignment checklist
- [x] CRUD with SQLite persistence
- [x] POST + `{% csrf_token %}` for toggle/delete/add
- [x] Admin registration with list display, filter, search
- [x] `base.html` with title block, stylesheet, header/footer includes, content block, shared JS
- [x] `header.html`, `footer.html` via `{% include %}`
- [x] `task_list.html` and `add_task.html` extend `base.html`
- [x] Page-specific blocks: `extra_css` and `extra_js` (in `add_task.html`)
- [x] Static CSS, JS and image under `todo/static/todo/`
- [x] Responsive layout (media query)
- [ ] Screenshots of home page, add-task page and admin list – take these yourself for submission
- [x] Explanation of admin.py vs apps.py and extends vs include – see `ANSWERS.md`

Replace `logo.png` with your own image if you like (same path).
