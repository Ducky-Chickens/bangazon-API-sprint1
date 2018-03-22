'use strict';

const faker = require('faker');
const { createWriteStream } = require('fs');

const generateOrderProds = () => {
  let orders_products = [];
  for (let i = 0; i < 20; i++) {
    let order_id = faker.random.number({ min: 1, max: 20 });
    let product_id = faker.random.number({ min: 1, max: 50});
    orders_products.push({ 
      order_id,
      product_id
    });
  };
  return { orders_products };
}

let orders_products = generateOrderProds();
let orderProdStream = createWriteStream(`./data/orders_products.json`);
orderProdStream.write(JSON.stringify(orders_products));