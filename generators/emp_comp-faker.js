'use strict';

const faker = require('faker');
const { createWriteStream } = require('fs');

const generateEmpComps = () => {
  let employee_computer = [];

  for (let i = 1; i < 21; i ++) {
    let assignDate = faker.date.recent();
    let computer_id = i;
    let employee_id = i;
    employee_computer.push({
      "assign_date": assignDate.toLocaleDateString(),
      "computer_id": computer_id,
      "employee_id": employee_id
    });
  }

  return { employee_computer };
}

let employee_computer = generateEmpComps();
let empCompStream = createWriteStream(`./data/employee_computer.json`);
empCompStream.write(JSON.stringify(employee_computer));