"use strict";

const { buildComputerTable } = require('./databases/computers');
const { createCustomerDatabase } = require('./databases/customers');

buildComputerTable();
createCustomerDatabase();
