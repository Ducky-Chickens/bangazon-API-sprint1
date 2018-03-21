'use strict';
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const { readFileSync } = require("fs");
const { productTypes } = JSON.parse(readFileSync('./data/prod-types.json'));

module.exports.buildProductTypesTable = () => {
  db.serialize(function () {
    db.run(`DROP TABLE IF EXISTS product_types`);
    db.run(
      `CREATE TABLE IF NOT EXISTS product_types (
        product_type_id INTEGER PRIMARY KEY,
        name TEXT)`
    );

    productTypes.forEach(({ name }) => {
      db.run(`INSERT INTO product_types VALUES (
            ${null},
            "${name}")`
      );
    })
  });
};
