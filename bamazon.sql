CREATE DATABASE bamazon;
use bamazon;
CREATE TABLE products (item_id int auto_increment,
 product_name VARCHAR(100),
 department_name VARCHAR(100) ,
 price INT,
 stock_quantity INT,
 PRIMARY KEY(item_id) );