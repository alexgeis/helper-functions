-- DOCS
-- https://dev.mysql.com/doc/refman/8.0/en/select.html

-- select all
SELECT * FROM table_name;

-- DESCRIBE
DESCRIBE table_name;

-- aggregate functions
-- DOCS: https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html

-- SELECT field/column - department
-- SUM(record) - AGGREGATE FUNCTION - COUNT(), SUM(), MAX(), MIN(), etc.
-- AS name_of_new_sort_column - ALIAS FOR NEW DATA - 2nd column  - sum_enrolled
-- FROM table  - course_names
-- GROUP BY filter_field - 1st column - department
SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;
--or
SELECT SUM(quantity) AS total_in_section, 
    MAX(quantity) AS max_quantity, 
    MIN(quantity) AS min_quantity, 
    AVG(quantity) AS avg_quantity 
FROM favorite_books GROUP BY section

-- use SHOW to display info on columns/db
SHOW DATABASES;

SHOW COLUMNS FROM mytable FROM mydb;
SHOW COLUMNS FROM mydb.mytable; --equivalent to above