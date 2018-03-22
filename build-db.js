'use strict'; 

const { buildDepartmentTable } = require('./databases/departments');
const { buildComputerTable } = require('./databases/computers');
const { buildCustomerTable } = require('./databases/customers');
const { buildProgramsTable } = require('./databases/training-programs');
const { buildEmployeeTable } = require('./databases/employees');
const { buildProductTypesTable } = require('./databases/prod-types');
const { buildProductTable } = require('./databases/products')
const { buildPaymentTypesTable } = require('./databases/payment-types');
const { buildOrderTable } = require('./databases/orders');
const { buildEmpCompTable } = require('./databases/employee_computer');

setTimeout(buildProgramsTable, 0);
setTimeout(buildDepartmentTable, 50);
setTimeout(buildCustomerTable, 100);
setTimeout(buildComputerTable, 150);
setTimeout(buildProductTypesTable, 200);
setTimeout(buildProductTable, 250);
setTimeout(buildEmployeeTable, 350);
setTimeout(buildPaymentTypesTable, 450);
setTimeout(buildOrderTable, 600);
setTimeout(buildEmpCompTable, 750);

