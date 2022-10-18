DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  --TABLE CONSTRAINT
  PRIMARY KEY (id) -- set col_name as a primary key
  -- can also be placed on the same line: id INT PRIMARY KEY
);

--FOREIGN KEY POINTS TO PRIMARY KEY
CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id) -- create foreign key
  REFERENCES instructors(id) -- connect foreign key to primary: table_name(primary_key_name)
  ON DELETE SET NULL
);
