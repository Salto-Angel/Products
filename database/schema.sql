CREATE DATABASE Products;

USE Products;

CREATE TABLE product (
  id int NOT NULL,
  name VARCHAR(50)
  slogan VARCHAR(50),
  description VARCHAR(1000),
  category VARCHAR(50),
  default_price VARCHAR(5),
  related_id int
  PRIMARY KEY(id)
);

CREATE TABLE  features (
  id int NOT NULL AUTO_INCREMENT,
  feature VARCHAR(30),
  value VARCHAR(30),
  product_id int NOT NULL
);

CREATE TABLE styles (
  style_id int NOT NULL,
  product_id int NOT NULL,
  name VARCHAR(50),
  original_price VARCHAR(5),
  sale_price VARCHAR(5),
  isDefault int,
  photo_id int,
)

CREATE TABLE photos (
  photo_id int NOT NULL,
  style_id int NOT NULL,
  product_id int NOT NULL,
  thumbnail_url VARCHAR(200),
  url VARCHAR(200)
)

CREATE TABLE skus (
  product_id int NOT NULL,
  style_id int NOT NULL,
  XS int,
  S int,
  M int,
  L int,
  XL int,
  XXL int
)

CREATE TABLE related (
  product_id int NOT NULL,
  related_product_id int
)