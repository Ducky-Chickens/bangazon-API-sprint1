'use strict';

const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');
const { createWriteStream } = require('fs');



let generateEmployees = () => {
  let employees = [];
	
  for (let i = 0; i < 20; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let email = faker.internet.email();
    let department_id = faker.random.number({min:1,max:5});
		
    employees.push({
      first_name,
      last_name,
      email,
      department_id
      });
    }
  return employees;
}


let employees = generateEmployees();
let employeeStream = createWriteStream('./data/employees.json');
employeeStream.write(JSON.stringify(employees));
