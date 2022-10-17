-- DOCS
-- https://dev.mysql.com/doc/refman/8.0/en/insert.html

-- Insert row into table --
INSERT INTO table_name (col1, col2)
  VALUES (1, "apple");

-- Insert multiple rows --
INSERT INTO table_name (col1, col2)
VALUES
    ( 1, "apple"),
    ( 2, "orange"),
    ( 3, "banana");
    
-- Insert default values
--If both the column list and the VALUES list are empty, INSERT creates a row with each column set to its default value:
INSERT INTO tbl_name () VALUES();
