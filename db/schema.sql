DROP DATABASE IF EXISTS fin_App;
create database fin_App;
use fin_App;
create table users
(
        id int key NOT NULL AUTO_INCREMENT,
        first_name varchar(255) NOT NULL,
        last_name varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        password_string varchar(255) NOT NULL
);
create table financial_info
(
        id int key NOT NULL ,
        monthly_salary int NOT NULL,
        balance int,
        housing  int,
        utilities int,
        food int,
        insurance int,
        debts int ,
        total_expenses int,
        savings int
);
describe users;
describe financial_info;





--   id int [primary key]
--   full_name varchar
--   email varchar [unique]
--   created_at varchar
--   password varchar