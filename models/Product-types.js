'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');

module.exports.getAllProdTypes = () => {
  return new Promise((resolve, reject) => {
    db.all(`
    SELECT * FROM product_types
    `, (err, prodTypes) => {
      return err ? reject(err) : resolve(prodTypes);
      });
  })
}

module.exports.getOneProdType = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`
    SELECT * FROM product_types
    WHERE product_type_id = ${id}
    `, (err, prodType) => {
      return err ? reject(err) : resolve(prodType);
    });
  })
}

//takes a data table entry object from req.body
module.exports.addNewProdType = ({ name }) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO product_types
    VALUES (null, "${name}")`, 
    function (err) {
      return err ? reject(err) : resolve({ id: this.lastID });
    });
  })
}

module.exports.editProdType = (id, { name }) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE product_types SET name = "${name}"
      WHERE product_type_id = ${id}
      `, function (err) {
      return err ? reject(err) : resolve({ changes: this.changes });
      });
  })
}

module.exports.removeProdType = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM product_types
    WHERE product_type_id = ${id}
    `, function (err) {
        if (err) { return reject(err) };
        resolve({ status: `${this.changes} item deleted` });
      });
  })
}