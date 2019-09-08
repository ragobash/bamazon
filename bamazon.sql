DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT NOT NULL DEFAULT 0,
    stock_quantity INT NOT NULL DEFAULT 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 1", "Department 1", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 2", "Department 1", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 3", "Department 2", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 4", "Department 2", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 5", "Department 3", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 6", "Department 3", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 7", "Department 4", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 8", "Department 4", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 9", "Department 5", 100, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item 10", "Department 5", 100, 100);