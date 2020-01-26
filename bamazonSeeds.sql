USE bamazon_DB;

CREATE TABLE products (
  item_id INT(3) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT(4) NULL,
  stock_quantity INT(4) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microsoft Xbox", "Electronics", 399, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony Playstation", "Electronics", 499, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Northface Jacket", "Outdoor Apparel", 179, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Columbia Jacket", "Outdoor Apparel", 150, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike AirMax Sneakers", "Footwear", 100, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Timberland Work Boots", "Footwear", 130, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vans T-Shirt", "Apparel", 29, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Express Polo", "Apparel", 79, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("RayBan Sunglasses", "Outdoor Eyewear", 299, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oakley Sunglasses", "Outdoor Eyewear", 199, 8);