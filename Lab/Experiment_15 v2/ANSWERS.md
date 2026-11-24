# Experiment 15 – Short explanations for submission

## admin.py vs apps.py
- `admin.py` registers models with the Django Admin site and customizes how they appear (list columns, filters, search, inline editing). In this project `TaskAdmin` shows title/completed/created_at, filters by `completed`, and searches `title`.
- `apps.py` holds the app's configuration (`TodoConfig`: its Python name, human-readable `verbose_name`, default primary key type) and an optional `ready()` hook for startup tasks such as importing signals. Models are **not** registered there.

## extends vs include
- `{% extends 'todo/base.html' %}` makes a page inherit the overall layout of a parent template; the child only fills in `{% block %}` sections (title, content, extra_css, extra_js).
- `{% include 'todo/header.html' %}` inserts a reusable fragment (header, footer) at that spot; it does not use blocks.
- Rule of thumb: inheritance for page structure, includes for reusable pieces.
