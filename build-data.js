
const sqlite3 = require('sqlite3').verbose();
const { createWriteStream } = require('fs');
const { generateDepartments } = require('./generators/departments-faker');

let departments = generateDepartments();
let deptStream = createWriteStream('./data/departments.json');
deptStream.write(JSON.stringify(departments));

