-- Read (Retrieve)
-- all students in CSE
SELECT * FROM students WHERE branch = 'CSE';

-- students enrolled after Jan 2024
SELECT * FROM students WHERE enrollment_date > '2024-01-31';

-- case-insensitive name search
SELECT * FROM students WHERE name ILIKE 'a%';

-- Update: change a branch
UPDATE students
SET branch = 'AI/ML'
WHERE email = 'bilal@example.com';

SELECT * FROM students WHERE email = 'bilal@example.com';

-- Delete: always check what you're about to delete first
SELECT * FROM students WHERE email = 'divya@example.com';

DELETE FROM students
WHERE email = 'divya@example.com';

SELECT * FROM students;
