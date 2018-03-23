'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllCustomers = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers`, (allCustomers, err) => {
      if (err) reject (err);
      resolve(allCustomers);
    });
  });

}

module.exports.getCustomer = (custID) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers c WHERE c.customer_id = ${custID}`, (customer, err) => {
      if (err) reject (err);
      resolve(customer);
    });
  });

}