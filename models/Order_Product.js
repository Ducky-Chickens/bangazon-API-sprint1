'use strict';
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getOrdersByProductId = (prodId) => {
  return new Promise ((resolve, reject) => {
    db.all(`SELECT * FROM orders_products
    WHERE product_id = ${prodId}`, (err, orders) => {
      if (err) return reject(err);
      resolve(orders);
    });
  });
}

module.exports.getProductsByOrderId = orderID => {
  return new Promise ((resolve, reject) => {
    db.all(`SELECT  products.*
    FROM orders, products, orders_products
    WHERE orders.order_id = orders_products.order_id
    AND products.product_id = orders_products.product_id
    AND orders.order_id = ${orderID}`, (err, ordersJoined) => {
      if (err) return reject(err);
      resolve(ordersJoined);
    });
  });
};
