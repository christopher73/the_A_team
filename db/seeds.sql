-- create table users
-- (
--         id int key NOT NULL AUTO_INCREMENT,
--         first_name varchar(255) NOT NULL,
--         last_name varchar(255) NOT NULL,
--         email varchar(255) NOT NULL,
--         password_string varchar(255) NOT NULL
-- );
-- create table finacial_info
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

USE fin_App;

INSERT INTO `users`(first_name , last_name, email ,password_string) 
    VALUES ('christopher','fajardo','cffr90@gmail.com','password123'),
           ('josh','kraft','joshuaskraft@gmail.com','password123'),
          ('abir', 'hossain' , 'abir212@gmail.com' , 'password123' );

INSERT INTO `financial_info`(id , monthly_salary) 
    SELECT users.id, 1000 FROM `users` WHERE users.first_name = "christopher"