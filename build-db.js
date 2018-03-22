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
const { buildOrderProductTable } = require('./databases/order_product');


setTimeout(buildProgramsTable, 0);
setTimeout(buildDepartmentTable, 100);
setTimeout(buildCustomerTable, 200);
setTimeout(buildComputerTable, 300);
setTimeout(buildProductTypesTable, 400);
setTimeout(buildProductTable, 500);
setTimeout(buildEmployeeTable, 600);
setTimeout(buildPaymentTypesTable, 700);
setTimeout(buildOrderTable, 800);
setTimeout(buildOrderProductTable, 900);
