-- Run with:  sudo -u postgres psql -f sql/01_create_database_and_table.sql
-- Create database + table
CREATE DATABASE student_management;
\c student_management

CREATE TABLE students (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    branch VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    enrollment_date DATE DEFAULT CURRENT_DATE
);
