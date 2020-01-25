USE bamazon_DB;

CREATE TABLE products (
  ID INT NOT NULL AUTO_INCREMENT,
  item_id INT(4) NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT(4) NULL,
  stock_quantity INT(4) NULL,
  PRIMARY KEY (ID)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Microsoft Xbox", "Electronics", 399, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Sony Playstation", "Electronics", 499, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Northface Jacket", "Outdoor Apparel", 179, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Columbia Jacket", "Outdoor Apparel", 150, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Nike AirMax Sneakers", "Footwear", 100, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Timberland Work Boots", "Footwear", 130, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Vans T-Shirt", "Apparel", 29, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Express Polo", "Apparel", 79, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "RayBan Sunglasses", "Outdoor Eyewear", 299, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Oakley Sunglasses", "Outdoor Eyewear", 199, 8);