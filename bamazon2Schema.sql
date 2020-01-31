DROP DATABASE IF EXISTS bamazon2_db;
CREATE database bamazon2_db;

USE bamazon2_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(60) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Ninja Coffee Maker", "Kitchen", 89.99, 47),
("Power Strip", "Electronics", 14.99, 13),
("HP Printer Cartridge", "Office", 79.49, 401),
("Dog Bed", "Pets", 49.99, 23),
("Manicure Kit", "Beauty", 24.99, 329),
("Fireplace Tools Set", "Home", 129.99, 44),
("Weber Grill", "Outdoor", 199.29, 38),
("Magnification Mirror", "Beauty", 29.99, 115),
("Shower Curtain Liner", "Bath", 18.99, 72),
("Ugly Christmas Sweater", "Apparel", 39.99, 141),
("Patio Umbrella", "Outdoor", 129.99, 56),
("Bullet Blender", "Kitchen", 119.99, 67),
("HDMI Adapter Hub", "Electronics", 14.99, 15);


