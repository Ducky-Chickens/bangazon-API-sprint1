'use strict'; 

const { buildDepartmentTable } = require('./databases/departments');
const { buildComputerTable } = require('./databases/computers');
const { createCustomerDatabase } = require('./databases/customers');
const { buildProgramsTable } = require('./databases/training-programs');
const { buildEmployeeTable } = require('./databases/employees');
const { buildProductTypesTable } = require('./databases/prod-types');
const { buildPaymentTypesTable } = require('./databases/payment-types');


setTimeout(buildProgramsTable, 0);
setTimeout(buildDepartmentTable, 50);
setTimeout(createCustomerDatabase, 100);
setTimeout(buildComputerTable, 150);
setTimeout(buildEmployeeTable, 200);
setTimeout(buildProductTypesTable, 250);
setTimeout(buildPaymentTypesTable, 300);

