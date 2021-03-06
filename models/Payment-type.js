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

module.exports.getSinglePaymentType = payTypeID => {
  return new Promise ((resolve, reject) => {
    db.get(`SELECT * FROM payment_types
    WHERE payment_type_id=${payTypeID}`, (err, payType) => {
      if (err) return reject(err);
      resolve(payType);
    });
  });
};


module.exports.addSinglePaymentType = ({type, account_number, customer_id}) => {
  return new Promise ((resolve, reject) => {
    db.run(`INSERT INTO payment_types
    VALUES (null, "${type}", ${account_number}, ${customer_id})
    `,
    function(err, newPayType) {
      if (err) return reject(err);
      resolve({this: this.lastID});
    });
  });
};

module.exports.patchPaymentType = (id, { column, value }) => {
  return new Promise((resolve, reject) => {
    // update table set column where id = param id
      db.run(`UPDATE payment_types SET "${column}" = "${value}"
      WHERE payment_type_id = ${id}
      `, function (err) {
        if (err) { return reject(err) };
        resolve({changes: this.changes});
      });
  })
}

module.exports.editPaymentType = ({ payment_type_id, type, account_number, customer_id}) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE payment_types SET
    type="${type}",
    account_number="${account_number}",
    customer_id="${customer_id}"
    WHERE payment_type_id = ${payment_type_id}`, function(err, paymentType) {
      if (err) return reject(err);
      resolve({ "You changed the following number of payment types" : this.changes });
      }
    );
  });
};

module.exports.deletePaymentType = payTypeID => {
  return new Promise ((resolve, reject) => {
    db.run(`DELETE FROM payment_types WHERE payment_type_id=${payTypeID}`, 
    function(err, payType) {
      if (err) return reject(err);
      resolve({changes: this.changes});
    });
  });
};