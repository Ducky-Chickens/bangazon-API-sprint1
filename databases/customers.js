"use strict";
const { customers } = require('../data/customers.json');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');

module.exports.createCustomerDatabase = () => {

  db.serialize(function() {  
    db.run(`DROP TABLE IF EXISTS customers`);
    
    db.run(`CREATE TABLE IF NOT EXISTS customers (
      customer_id INTEGER PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      join_date TEXT NOT NULL)`
    );

    customers.forEach( ({first_name, last_name, create_date}) => {
      db.run(`INSERT INTO customers (first_name, last_name, join_date)
              VALUES ("${first_name}", "${last_name}", "${create_date}")`, (err) => {
                if(err) return err;
              });
    });
  });

}