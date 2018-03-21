'use strict';

const faker = require('faker');
const { createWriteStream } = require('fs');

const generateComputers = () => {
  let computers = [];

  for (let i = 0; i < 20; i ++) {
    let purchaseDate = faker.date.past();
    computers.push({"purchaseDate": purchaseDate.toLocaleDateString()});
  }

  return { computers };
}

let computers = generateComputers();
let compStream = createWriteStream(`./data/computers.json`);
compStream.write(JSON.stringify(computers));