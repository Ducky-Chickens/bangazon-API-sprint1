<<<<<<< HEAD
const { buildComputerTable } = require('./databases/computers')

buildComputerTable();
=======

const { buildDepartmentTable } = require('./databases/departments');
const { buildComputerTable } = require('./databases/computers');
const { createCustomerDatabase } = require('./databases/customers');

setTimeout(buildDepartmentTable, 0);
setTimeout(createCustomerDatabase, 50);
setTimeout(buildComputerTable, 100);
>>>>>>> master
