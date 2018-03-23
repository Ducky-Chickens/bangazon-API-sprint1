const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllPaymentTypes = () => {
  return new Promise ((reject, resolve) => {
    db.all(`SELECT * FROM payment_types`, 
    (payTypes, err) => {
      if (err) reject(err);
      resolve(payTypes);
    });
  });
};