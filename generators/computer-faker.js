'use strict';

const faker = require('faker')

module.exports.generateComputers = () => {
  let computers = [];

  for (let i = 0; i < 20; i ++) {
    let purchaseDate = faker.date.past();
    computers.push({"purchaseDate": purchaseDate.toLocaleDateString()});
  }

  return { computers };
}