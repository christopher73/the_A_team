DROP DATABASE IF EXISTS fin_app_db;
create database fin_app_db;

-- USE fin_app_db;

-- INSERT INTO `Users`(first_name , last_name, email ,password_string) 
--     VALUES ('christopher','fajardo','cffr90@gmail.com','password123'),
--            ('josh','kraft','joshuaskraft@gmail.com','password123'),
--           ('abir', 'hossain' , 'abir212@gmail.com' , 'password123' );

-- INSERT INTO `financial_info`(id , monthly_salary) 
--     SELECT users.id, 1000 FROM `users` WHERE users.first_name = "christopher"


-- vvv IF YOU NEED DO ADD DB MANUALLY, PLEASE UNCOMMENT BELOW vvv

-- use fin_App;
-- create table users
-- (
--         id int key NOT NULL AUTO_INCREMENT,
--         user_name varchar(255) NOT NULL,
--         first_name varchar(255) NOT NULL,
--         last_name varchar(255) NOT NULL,
--         email varchar(255) NOT NULL,
--         password_string varchar(255) NOT NULL
-- );
-- create table financial_info
-- (
--         id int key NOT NULL ,
--         monthly_salary int NOT NULL,
--         balance int,
--         housing  int,
--         utilities int,
--         food int,
--         insurance int,
--         debts int ,
--         total_expenses int,
--         savings int
-- );
-- describe users;
-- describe financial_info;


--   id int [primary key]
--   full_name varchar
--   email varchar [unique]
--   created_at varchar
--   password varchar