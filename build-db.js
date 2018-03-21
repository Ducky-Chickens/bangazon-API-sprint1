
const { buildDepartmentTable } = require('./databases/departments');
const { buildComputerTable } = require('./databases/computers');
const { createCustomerDatabase } = require('./databases/customers');

buildDepartmentTable();
buildComputerTable();
createCustomerDatabase();
