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

module.exports.getActiveCusts = (status) => {
  console.log("what is the status", status);
  const statusQuery = (status === "true") ? 1 : 0;
  console.log(statusQuery, "what is sent to sql?");  
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers WHERE active="${statusQuery}"`, (err, customer) => {
      if (err) reject (err);
      console.log(customer);
      resolve(customer);
    });
  });
};

module.exports.getCustomer = (custID) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers WHERE customer_id=${custID}`, (err, customer) => {
      if (err) reject (err);
      resolve(customer);
    });
  });
};

module.exports.addCustomer = ({ first_name, last_name, join_date }) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO customers 
    VALUES(null, "${first_name}", "${last_name}", "${join_date}", 1 )`, function(err, computer) {
      if (err) return reject(err);
      resolve({ id : this.lastID });
      }
    );
  });
};

module.exports.editCustomerName = ({ customer_id, first_name, last_name }) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE customers SET
    first_name="${first_name}",
    last_name="${last_name}"
    WHERE customer_id = ${customer_id}`, function(err, computer) {
      if (err) return reject(err);
      resolve({ id : this.changes });
      }
    );
  });
};