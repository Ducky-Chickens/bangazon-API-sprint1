'use strict'

const { orders_products } = require('../data/orders_products.json')
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
  
module.exports.buildOrderProductTable = () => {

  db.serialize(function () {
    db.run(`DROP TABLE IF EXISTS orders_products`);

    db.run(`CREATE TABLE IF NOT EXISTS orders_products (
      order_product_id INTEGER PRIMARY KEY,
      order_id INTEGER NOT NULL,
      product_id  INTEGER NOT NULL,
      FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY(product_id)  REFERENCES product(id) ON DELETE CASCADE)`
    );

    orders_products.forEach(({ order_id, product_id }) => {
      db.run(`INSERT INTO orders_products (order_id, product_id)
              VALUES (${order_id}, ${product_id})`, (err) => {
          if (err) return err;
        });
    });
  });
}