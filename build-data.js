"use strict";
const { createWriteStream } = require('fs');
const { generateComputers } = require('./generators/computer-faker');
const {generateCustomers } = require('./generators/customer-faker');

let computers = generateComputers();
let compStream = createWriteStream(`./data/computers.json`);
compStream.write(JSON.stringify(computers));

let customers = generateCustomers();
let custStream = createWriteStream('./data/customers.json');
custStream.write(JSON.stringify(customers));
