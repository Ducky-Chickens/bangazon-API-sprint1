"use strict";
const { createWriteStream } = require('fs');
const { productTypes } = require('./data/prod-types');
const { generatePrograms } = require('./generators/training-program-faker');
const { generateComputers } = require('./generators/computer-faker');
const { generateCustomers } = require('./generators/customer-faker');

// Create json files
let programs = generatePrograms();
let programStream = createWriteStream(`./data/training-programs.json`);
programStream.write(JSON.stringify(programs));

let computers = generateComputers();
let compStream = createWriteStream(`./data/computers.json`);
compStream.write(JSON.stringify(computers));

let customers = generateCustomers();
let custStream = createWriteStream('./data/customers.json');
custStream.write(JSON.stringify(customers));
