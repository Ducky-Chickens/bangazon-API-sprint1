const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllOrders = () => {
  return new Promise ((reject, resolve) => {
    db.all(`SELECT * FROM orders`, 
    (order, err) => {
      if (err) reject(err);
      resolve(order);
    });
  });
};

module.exports.getSingleOrder = orderID => {
  return new Promise ((resolve, reject) => {
    db.get(`SELECT * FROM orders
    WHERE order_id=${orderID}`, (err, order) => {
      if (err) return reject(err);
      resolve(order);
    });
  });
};


// module.exports.addSinglePaymentType = ({type, account_number, customer_id}) => {
//   return new Promise ((resolve, reject) => {
//     db.run(`INSERT INTO orders
//     VALUES (null, "${type}", ${account_number}, ${customer_id})
//     `,
//     function(err, newPayType) {
//       if (err) return reject(err);
//       resolve({this: this.lastID});
//     });
//   });
// };

// module.exports.editPaymentType = (id, { column, value }) => {
//   return new Promise((resolve, reject) => {
//     // update table set column where id = param id
//       db.run(`UPDATE orders SET "${column}" = "${value}"
//       WHERE payment_type_id = ${id}
//       `, function (err) {
//         if (err) { return reject(err) };
//         resolve({changes: this.changes});
//       });
//   })
// }

module.exports.deleteOrder = orderID => {
  return new Promise ((resolve, reject) => {
    db.run(`DELETE FROM orders WHERE order_id=${orderID}`, 
    function(err, order) {
      if (err) return reject(err);
      resolve({ status: `${this.changes} order deleted`});
    });
  });
};