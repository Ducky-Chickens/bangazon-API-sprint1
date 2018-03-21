'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const { createCustomerDatabase } = require('./databases/customers');
const { buildComputerTable } = require('./databases/computers');
const { buildProgramsTable } = require('./databases/training-programs');

db.serialize(() => {
  createCustomerDatabase();
  buildComputerTable();
  buildProgramsTable();
});
