DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT(255) AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date DATETIME NOT NULL,
    PRIMARY KEY(id)

);

SELECT * FROM burgers;


