-- Aggregation (bonus)
SELECT branch, COUNT(*) AS total
FROM students
GROUP BY branch
ORDER BY total DESC;
