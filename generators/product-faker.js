"use strict"

const faker = require('faker');

module.exports.generateProducts = () => {
  let products = []
  for (let i = 0; i < 50; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let product_type_id = faker.random.number({min: 1, max: 11});
    let customer_id = faker.random.number({min: 1, max: 20});
    let description = faker.lorem.sentence();
    products.push({
      title,
      price,
      product_type_id,
      customer_id,
      description
    });
  }
  return { products };
}