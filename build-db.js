'use strict'; 
const { createCustomerDatabase } = require('./databases/customers');
const { buildComputerTable } = require('./databases/computers');
const { buildProgramsTable } = require('./databases/training-programs');

setTimeout(buildProgramsTable, 0);
setTimeout(createCustomerDatabase, 50);
setTimeout(buildComputerTable, 100);