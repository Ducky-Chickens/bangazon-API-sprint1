
const sqlite3 = require('sqlite3').verbose();
const { createWriteStream } = require('fs');
const { productTypes } = require('./data/prod-types');
const { generatePrograms } = require('./generators/training-program-faker');
const { generateDepartments } = require('./generators/departments-faker');
const { generateComputers } = require('./generators/computer-faker');
const { generateCustomers } = require('./generators/customer-faker');

let programs = generatePrograms();
let programStream = createWriteStream(`./data/training-programs.json`);
programStream.write(JSON.stringify(programs));

let departments = generateDepartments();
let deptStream = createWriteStream('./data/departments.json');
deptStream.write(JSON.stringify(departments));


let computers = generateComputers();
let compStream = createWriteStream(`./data/computers.json`);
compStream.write(JSON.stringify(computers));

let customers = generateCustomers();
let custStream = createWriteStream('./data/customers.json');
custStream.write(JSON.stringify(customers));
