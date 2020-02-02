DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

DROP TABLE IF EXISTS products;

CREATE TABLE products
(
    item_id integer(2) not null,
    product_name varchar(100) not null,
    department_name varchar (50),
    price float(2) not null,
    stock_quantity integer(2) not null
);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    ("101", "Baby Yoda Funko Pop!", "Entertainment", "19.99", "5"),
    ("102", "Playstation 5", "Entertainment", "600.99", "2"),
    ("103", "Rumba Vacuum Cleaner", "Electronics", "250.50", "5"),
    ("104", "Hydro Flask Water Bottle", "Home & Kitchen", "75.25", "5"),
    ("105", "Michael Jackson Red Leather", "Appareal", "1200.99", "1"),
    ("106", "LEGO: Star Wars", "Entertainment", "149.99", "7"),
    ("107", "Gordon Ramsey Cookbook", "Home & Kitchen", "29.99", "10"),
    ("108", "Aveeno Daily Face Wash", "Beauty and Wellness", "9.99", "15"),
    ("109", "Yankee Candle Large - Bahama Breeze", "Home & Kitchen", "19.99", "7"),
    ("110", "Orbit Gum - Spearmint (Pack of 5)", "Food", "9.99", "10");
