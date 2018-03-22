'use strict';

const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');

module.exports.generateDepartments = () => {
	let departments = [];

	for (let i = 0; i < 5; i++) {
		let budget = faker.finance.amount()*100;

		departments.push({
			budget
		});
	}

	return departments;
}
