'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

//Get all products
module.exports.getAllProducts = () => {
  return new Promise ((reject, resolve) => {
    db.all(`SELECT * FROM products`, (prods, err) => {
      if (err) reject(err);
      resolve(prods);
    });
  });
};

//Get single product
module.exports.getSingleProduct = (prodID) => {
  return new Promise ((resolve, reject) => {
    db.get(`SELECT * FROM products
    WHERE product_id = ${prodID}`, (err, product) => {
      if (err) return reject(err);
      resolve(product);
    });
  });
};

//Add a product
module.exports.addSingleProduct = ({ title, price, product_type_id, customer_id, description }) => {
  return new Promise ((resolve, reject) => {
    db.run(`INSERT INTO products
    VALUES (null, "${title}", "${price}", ${product_type_id}, ${customer_id}, "${description}")`,
    function(err, product) {
      if (err) return reject(err);
      resolve({id: this.lastID});
    });
  });
};

//Edit one attribute on a product
module.exports.patchProductObj = (id, { column, value }) => {
  return new Promise((resolve, reject) => {
      db.run(`UPDATE products SET "${column}" = "${value}"
      WHERE product_id = ${id}
      `, function (err) {
        if (err) { return reject(err) };
        resolve({changes: this.changes});
      });
  });
};

//Edit an entire product
module.exports.putProductObj = ({ product_id, title, price, product_type_id, customer_id, description }) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE products SET
    title="${title}",
    price="${price}",
    product_type_id=${product_type_id},
    customer_id=${customer_id},
    description="${description}"
    WHERE product_id = ${product_id}`, function(err, product) {
      if (err) return reject(err);
      resolve({ numberOfChanges : this.changes });
      }
    );
  });
};

//Delete a product
module.exports.deleteProduct = (prodId) => {
  return new Promise ((resolve, reject) => {
    db.run(`DELETE FROM products WHERE product_id=${prodId}`, 
    function(err, product) {
      if (err) return reject(err);
      resolve({ status: `${this.changes} item deleted`});
    });
  });
};