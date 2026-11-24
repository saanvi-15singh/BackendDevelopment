-- Module 5: JSONB in PostgreSQL
-- Add a flexible field to the relational table
ALTER TABLE students ADD COLUMN profile JSONB;

UPDATE students
SET profile = '{"skills": ["python", "sql"], "clubs": {"robotics": true}}'
WHERE email = 'alice@example.com';

-- -> returns JSON, ->> returns text
SELECT profile -> 'skills' FROM students WHERE email = 'alice@example.com';
SELECT profile ->> 'clubs' FROM students WHERE email = 'alice@example.com';

-- @> containment check (does profile include this key/value?)
SELECT * FROM students WHERE profile @> '{"clubs": {"robotics": true}}';

-- index JSONB for fast lookups, same idea as a MongoDB index
CREATE INDEX idx_students_profile ON students USING GIN (profile);
