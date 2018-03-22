const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const {readFileSync} = require('fs');
const { employees } = JSON.parse(readFileSync('./data/employees.json'));

module.exports.buildEmployeeTable = () => {

  db.serialize(function () {
    db.run(`DROP TABLE IF EXISTS employees`);
    db.run(
      `CREATE TABLE IF NOT EXISTS employees (
      employee_id INTEGER PRIMARY KEY,
      first_name TEXT,
      last_name TEXT,
      email TEXT,
      department_id INTEGER,
      FOREIGN KEY (department_id) REFERENCES departments (department_id)
      )`,
      () => {employees.forEach(({first_name, last_name, email, department_id}) => {
        db.run(`INSERT INTO employees VALUES (
	  ${null},
	  "${first_name}",
	  "${last_name}",
          "${email}",
          ${department_id}
	)`);
       });
      }
    )
  });
};
