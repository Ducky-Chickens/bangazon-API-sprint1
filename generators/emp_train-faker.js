'use strict';

const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');
const { createWriteStream } = require('fs');

const generateEmp_training = () => {
  let emp_training = [];

  for (let i = 0; i < 25; i++) {
    let program_id = faker.random.number({min: 1, max: 8});;
    let employee_id = faker.random.number({min: 1, max: 20});;

    emp_training.push({ program_id, employee_id });
  }

  return { emp_training };
}

let emp_training = generateEmp_training();
let emp_trStream = createWriteStream('./data/emp_training.json');
emp_trStream.write(JSON.stringify(emp_training));
