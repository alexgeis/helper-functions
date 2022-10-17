-- Drops the example_db if it exists currently --
DROP DATABASE IF EXISTS example_db;
-- Creates the example_db database --
CREATE DATABASE example_db;

-- use example_db database --
USE example_db;

-- DATA TYPES
-- https://dev.mysql.com/doc/refman/8.0/en/data-types.html

-- Creates the table "produce" within example_db --
CREATE TABLE table_name (
  -- INT = Creates a numeric column called "id"
  id INT NOT NULL,
  id_2 DECIMAL NOT NULL, -- also FIXED or DEC
  -- VARCHAR(X) = string up to X characters, creates a column called "name"
  -- TEXT = open-ended text area
  full_name VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  -- BOOLEAN = true/false value, creates a column called "boolCol"
  boolCol BOOLEAN NOT NULL,
  -- DATETIME = value, DEFAULT function creates a default value
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- example seeding / selection
INSERT INTO table_name(id,name) 
VALUES
    (1,'oranges'),
    (2,'peaches'),
    (3,'apples'),
    (4,'melons');


SELECT * FROM table_name;