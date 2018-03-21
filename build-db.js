'use strict'; 

const { buildDepartmentTable } = require('./databases/departments');
const { buildComputerTable } = require('./databases/computers');
const { createCustomerDatabase } = require('./databases/customers');
const { buildProgramsTable } = require('./databases/training-programs');
const { buildProductTypesTable } = require('./databases/prod-types');
const { buildPaymentTypesTable } = require('./databases/payment-types');


setTimeout(buildProgramsTable, 0);
setTimeout(buildDepartmentTable, 50);
setTimeout(createCustomerDatabase, 100);
setTimeout(buildComputerTable, 150);
setTimeout(buildProductTypesTable, 200);
setTimeout(buildPaymentTypesTable, 350);

