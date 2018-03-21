"use strict";

const faker = require('faker');

module.exports.generateCustomers = () => {
  let customers = [];
  for (let i = 0; i < 20; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let random_date = faker.date.past(10);
    let create_date = random_date.toISOString().slice(0,10);
    customers.push({
      first_name,
      last_name,
      create_date
    });
  }
    return { customers };
};

