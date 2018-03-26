"use strict";
const { customers } = require('../data/customers.json');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');

module.exports.buildCustomerTable = () => {

  db.serialize(function() {  
    db.run(`DROP TABLE IF EXISTS customers`);
    
    db.run(`CREATE TABLE IF NOT EXISTS customers (
      customer_id INTEGER PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      join_date TEXT NOT NULL,
      active INTEGER)`
    );

    customers.forEach(({ first_name, last_name, create_date, active}) => {
      db.run(`INSERT INTO customers
              VALUES (null, "${first_name}", "${last_name}", "${create_date}", ${active})`, (err) => {
                if(err) return err;
              });
    });
  });

}