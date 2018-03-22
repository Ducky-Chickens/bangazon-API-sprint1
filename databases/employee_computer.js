const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const {readFileSync} = require('fs');
const { employee_computer } = JSON.parse(readFileSync('./data/employee_computer.json'));

module.exports.buildEmpCompTable = () => {

  db.serialize(function () {
    db.run(`DROP TABLE IF EXISTS employee_computer`);
    db.run(
      `CREATE TABLE IF NOT EXISTS employee_computer (
      employee_id INTEGER,
      computer_id INTEGER,
      assign_date TEXT,
      release_date TEXT,
      PRIMARY KEY (employee_id, computer_id),
      FOREIGN KEY (employee_id) REFERENCES employees(employee_id) ON DELETE CASCADE,
      FOREIGN KEY (computer_id) REFERENCES computers(computer_id) ON DELETE CASCADE   
      )`,
      () => {employee_computer.forEach(({assign_date, employee_id, computer_id }) => {
        db.run(`INSERT INTO employee_computer VALUES (
          ${employee_id},
          ${computer_id},
	        "${assign_date}",
	        null
	      )`);
      });
    })
  });
};