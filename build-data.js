"use strict";

const {generateCustomers } = require('./generators/customer-faker');
const { createWriteStream } = require('fs');

let customers = generateCustomers();
let custStream = createWriteStream('./data/customers.json');
custStream.write(JSON.stringify(customers));