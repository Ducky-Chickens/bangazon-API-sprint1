'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllCustomers = () => {
  return new Promise ((resolve, reject) => {
    db.all(`SELECT * FROM customers`, (err, customers) => {
      if (err) reject(err);
      resolve(customers);
    });
  });
};

module.exports.getCustomer = (custID) => {
  console.log(custID);
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers WHERE customer_id=${custID}`, (err, customer) => {
      if (err) reject (err);
      resolve(customer);
    });
  });

}