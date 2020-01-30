DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  Product VARCHAR(100) NOT NULL,
  Department VARCHAR(45) NOT NULL,
  Price INT default 0,
  Quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("French Press", "Kitchen", "89.00", 47);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Power Strip", "Electronics", "14.99", 113);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("HP Printer Cartridge", "Office", "79.99", 401);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Dog Bed", "Pets", "49.99", 23);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Manicure Kit", "Beauty", "24.99", 329);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Fireplace Tools Set", "Home", "129.99", 44);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Weber Grill", "Outdoor", "199.99", 38);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Cashmere Poncho", "Apparel", "199.99", 11);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Magnification Mirror", "Beauty", "29.99", 115);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("10lb. Kitty Litter", "Pets", "12.99", 345);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("3-hole punch", "Office", "12.99", 226);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Shower Curtain Liner", "Bath", "18.99", 72);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Ugly Christmas Sweater", "Apparel", "39.99", 141);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Patio Umbrella", "Outdoor", "129.99", 56);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("Bullet Blender", "Kitchen", "119.99", 67);

INSERT INTO products (Product, Department, Price, Quantity)
VALUES ("USB-C Adapter Hub", "Electronics", "27.99", 235);
