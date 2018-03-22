'use strict';

const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');
const { createWriteStream } = require('fs');

const generateDepartments = () => {
  let departments = [];

  for (let i = 0; i < 5; i++) {
    let budget = faker.finance.amount()*100;

    departments.push({ budget });
  }

  return departments;
}

let departments = generateDepartments();
let deptStream = createWriteStream('./data/departments.json');
deptStream.write(JSON.stringify(departments));
