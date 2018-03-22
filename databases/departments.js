const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const {readFileSync} = require('fs');
const {departments} = JSON.parse(readFileSync('./data/departments.json'));

module.exports.buildDepartmentTable = () => {

  db.serialize(function () {
  db.run(`DROP TABLE IF EXISTS departments`);
  db.run(
    `CREATE TABLE IF NOT EXISTS departments (
    department_id INTEGER PRIMARY KEY,
    dept_name TEXT,
    supervisor_id INTEGER,
    budget INTEGER 
    )`, () => {
      departments.forEach(({ dept_name, supervisor_id, budget}) => {
	db.run(`INSERT INTO departments VALUES (
	  ${null},
	  "${dept_name}",
	  "${supervisor_id}",
	  ${budget}
        )`);
      });
    })
  });
};
