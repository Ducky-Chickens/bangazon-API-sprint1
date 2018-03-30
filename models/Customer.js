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

module.exports.getCustsByActivity = (status) => {
  const condition = (status === "true") ? " > 0" : " = 0"; 
  return new Promise( (resolve, reject) => {
    db.all(
    `SELECT customers.*, COUNT(orders.customer_id) AS TotalOrders
    FROM customers
    LEFT JOIN orders ON orders.customer_id = customers.customer_id
    GROUP BY customers.customer_id
    HAVING TotalOrders ${condition}`, (err, customer) => {
      if (err) reject (err);
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
    VALUES(null, "${first_name}", "${last_name}", "${join_date}" )`, function(err, computer) {
      if (err) return reject(err);
      resolve({ id : this.lastID });
      }
    );
  });
};

module.exports.putCustomerObj = ({ customer_id, first_name, last_name, join_date }) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE customers SET
    first_name="${first_name}",
    last_name="${last_name}",
    join_date="${join_date}"
    WHERE customer_id = ${customer_id}`, function(err) {
      if (err) return reject(err);
      resolve({ id : this.changes });
      }
    );
  });
};

module.exports.patchCustomerObj = (custID, { column, value }) => {
  return new Promise((resolve, reject) => {
    // update table set column where id = param id
      db.run(`UPDATE customers SET ${column} = "${value}"
      WHERE customer_id = ${custID}
      `, function (err) {
        if (err) { return reject(err) };
        resolve({changes: this.changes});
      });
  })
}
