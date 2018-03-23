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
};

module.exports.addCustomer = ({ first_name, last_name, join_date }) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO customers 
    VALUES(null, "${first_name}", "${last_name}", "${join_date}" )`, function(err, computer) {
      if (err) return reject(err);
      resolve({ id : this.lastID });
      }
    );
  });
};

module.exports.editCustomerName = ({ customer_id, first_name, last_name }) => {
  console.log(customer_id);
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE customers SET
    customer_id=${customer_id},
    first_name="${first_name}",
    last_name="${last_name}"
    WHERE customer_id = ${customer_id}`, function(err, computer) {
      if (err) return reject(err);
      resolve({ id : this.lastID });
      }
    );
  });
};

module.exports.editProgram = (id, { column, value }) => {
  return new Promise((resolve, reject) => {
    // update table set column where id = param id
      db.run(`UPDATE training_programs SET ${column} = "${value}"
      WHERE program_id = ${id}
      `, function (err) {
        if (err) { return reject(err) };
        resolve({changes: this.changes});
      });
  })
}