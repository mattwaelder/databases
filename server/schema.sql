DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE test (
  id integer
);

CREATE TABLE users (
  id integer primary key auto_increment,
  username varchar(24)
);

CREATE TABLE messages (
id integer primary key auto_increment,
content varchar(144),
created timestamp,
user_id integer,
foreign key (user_id) references users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

