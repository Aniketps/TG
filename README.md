Sql Database queries

// Create Database
mysql : create database TGC;

// Create table

mysql : create table users (
    id int not null auto_increment primary key,
    firstName varchar(200),
    lastName varchar(200),
    birth date,
    address varchar(200),
    education varchar(200),
    hobbies varchar(200),
    email varchar(200) not null unique,
    phone varchar(13)
);
