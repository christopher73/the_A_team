# the_A_team

Team Project

## Team Members :

- Christopher Fajardo
- Abir Hossain
- Josh Kraft
- DeeDee Medina

## DB TABLES :

+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| user_name  | varchar(255) | NO   |     | NULL    |                |
| first_name | varchar(255) | YES  |     | NULL    |                |
| last_name  | varchar(255) | YES  |     | NULL    |                |
| email      | varchar(255) | YES  |     | NULL    |                |
| password   | varchar(255) | YES  |     | NULL    |                |
| createdAt  | datetime     | NO   |     | NULL    |                |
| updatedAt  | datetime     | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+

+----------------+----------+------+-----+---------+----------------+
| Field          | Type     | Null | Key | Default | Extra          |
+----------------+----------+------+-----+---------+----------------+
| id             | int(11)  | NO   | PRI | NULL    | auto_increment |
| monthly_salary | int(11)  | NO   |     | NULL    |                |
| balance        | int(11)  | YES  |     | NULL    |                |
| housing        | int(11)  | YES  |     | NULL    |                |
| utilities      | int(11)  | YES  |     | NULL    |                |
| food           | int(11)  | YES  |     | NULL    |                |
| insurance      | int(11)  | YES  |     | NULL    |                |
| debts          | int(11)  | YES  |     | NULL    |                |
| total_expenses | int(11)  | YES  |     | NULL    |                |
| savings        | int(11)  | YES  |     | NULL    |                |
| createdAt      | datetime | NO   |     | NULL    |                |
| updatedAt      | datetime | NO   |     | NULL    |                |
+----------------+----------+------+-----+---------+----------------+
