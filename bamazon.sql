DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(50) NULL,
    price DECIMAL(10,4) NULL,
    stock_quantity INT,

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung TV", "Electronics", 1236.28, 8), ("Thin Lizzy T-Shirt", "Clothing", 18.65, 3), ("A Brief History of Time", "Books", 9.23, 47), ("Bamazon Lightning Stick", "Electronics", 34.99, 2), ("Little Black Dress", "Clothing", 800.10, 4), ("Oliver Twist", "Books", 4.56, 42), ("Swindle E-Reader", "Electronics", 129.99, 16), ("Black Hoodie", "Clothing", 16.75, 7), ("The Obelisk Gate", "Books", 8.99, 10), ("Les Paul Guitar", "Musical Instruments", 678.52, 1)