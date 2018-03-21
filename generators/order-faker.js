'use strict';

const faker = require('faker');
const { createWriteStream } = require('fs');

const generateOrders = () => {
  let orders = [];

  for (let i = 0; i < 20; i ++) {
    let orderDate = faker.date.past();
    orders.push({"orderDate": orderDate.toLocaleDateString(), "payment_type_id": null});
  }

  return { orders };
}

let allOrders = generateOrders();
let orderStream = createWriteStream(`./data/orders.json`);
orderStream.write(JSON.stringify(allOrders));