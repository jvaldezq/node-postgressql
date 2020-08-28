
CREATE DATABASE demoapi

CREATE TABLE users(
    id  SERIAL PRIMARY KEY,
    name: VARCHAR(40),
    username: VARCHAR(40),
    password: VARCHAR(40),
    email: VARCHAR(80),
);

CREATE TABLE products(
    id  SERIAL PRIMARY KEY,
    name: VARCHAR(40),
    description: TEXT,
      ingredients:
      productOptions:
      extras:
      images:
      mainImage:
      indications:
      available:
      related:
);
