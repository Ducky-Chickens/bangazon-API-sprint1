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
    `),
    function(err, newPayType) {
      if (err) return reject(err);
      resolve(newPayType);
    };
  });
};