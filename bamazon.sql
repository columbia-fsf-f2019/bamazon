DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(150),
    department_name VARCHAR(150) NULL,
    price DECIMAL(10,4) NULL,
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Samsung TV", "Electronics", 1236.28, 8), (2, "Thin Lizzy T-Shirt", "Clothing", 18.65, 3), (3, "A Brief History of Time", "Books", 9.23, 47), (4, "Bamazon Lightning Stick", "Electronics", 34.99, 2), (5, "Little Black Dress", "Clothing", 800.10, 4), (6, "Oliver Twist", "Books", 4.56, 42), (7, "Swindle E-Reader", "Electronics", 129.99, 16), (8, "Black Hoodie", "Clothing", 16.75, 7), (9, "The Obelisk Gate", "Books", 8.99, 10), (10, "Les Paul Guitar", "Musical Instruments", 678.52, 1)