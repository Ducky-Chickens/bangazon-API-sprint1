const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const { readFileSync } = require('fs');
const { paymentTypes } = JSON.parse(readFileSync("./data/payment-types.json"));

module.exports.buildPaymentTypesTable = () => {
  db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS payment_types`);
    db.run(
      `CREATE TABLE IF NOT EXISTS payment_types (
        payment_type_id INTEGER PRIMARY KEY,
        type TEXT,
        account_number INTEGER,
        customer_id INTEGER,
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
      )`,
      () => {
        paymentTypes.forEach(({ type, accountNumber, customerId }) => {
          db.run(`INSERT INTO payment_types VALUES (${null}, "${type}", ${accountNumber}, ${customerId})`);
      });}
    )
  });
}
