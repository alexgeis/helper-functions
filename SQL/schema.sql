-- Drops the example_db if it exists currently --
DROP DATABASE IF EXISTS example_db;
-- Creates the example_db database --
CREATE DATABASE example_db;

-- use example_db database --
USE example_db;

-- Creates the table "produce" within example_db --
CREATE TABLE table_name (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);

INSERT INTO table_name(id,name) 
VALUES
    (1,'oranges'),
    (2,'peaches'),
    (3,'apples'),
    (4,'melons');


SELECT * FROM table_name;