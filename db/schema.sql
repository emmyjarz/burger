DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT(255) AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date DATETIME,
    PRIMARY KEY(id)




);

select*from burgers;
UPDATE burgers set devoured=false WHERE id = 2;
##INSERT INTO burgers (name, date) VALUES ("aa", now());
