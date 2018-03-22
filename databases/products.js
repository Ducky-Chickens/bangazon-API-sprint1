'use stict';
const { products } = require('../data/products.json');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');

module.exports.buildProductTable = () => {
  
  db.serialize(function() {
    db.run(`DROP TABLE IF EXISTS products`);

    db.run(`CREATE TABLE IF NOT EXISTS products (
      product_id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      price TEXT NOT NULL,
      product_type_id INTEGER NOT NULL,
      customer_id INTEGER NOT NULL,
      description TEXT NOT NULL,
      FOREIGN KEY (product_type_id) REFERENCES product_types (product_type_id),
      FOREIGN KEY (customer_id) REFERENCES customers (customer_id))`
    );

    products.forEach( ({title, price, product_type_id, customer_id, description}) => {
      db.run(`INSERT INTO products (title, price, product_type_id, customer_id, description)
              VALUES ("${title}", "${price}", ${product_type_id}, ${customer_id}, "${description}")`, (err) => {
                if(err) return err;
              });
    });
  });
}

