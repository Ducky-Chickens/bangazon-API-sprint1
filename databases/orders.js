"use strict";

const { orders } = require('../data/orders.json');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');


module.exports.buildOrderTable = () => {

  db.serialize(function() {  
    db.run(`DROP TABLE IF EXISTS orders`);
    
    db.run(`CREATE TABLE IF NOT EXISTS orders (
      order_id INTEGER PRIMARY KEY,
      customer_id INTEGER,
      order_date TEXT NOT NULL,
      payment_type_id INTEGER,
      FOREIGN KEY (payment_type_id) REFERENCES payment_types(payment_type_id),
      FOREIGN KEY (customer_id) REFERENCES customers(customer_id))`);

    orders.forEach( ({customer_id, order_date, payment_type_id, create_date}) => {
      db.run(`INSERT INTO orders (customer_id, order_date, payment_type_id)
              VALUES ("${customer_id}","${order_date}", ${payment_type_id})`, (err) => {
                if(err) return err;
              });
    });
  });

}