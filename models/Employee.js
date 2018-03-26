const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllEmployees = () => {
  return new Promise ((reject, resolve) => {
    db.all(`SELECT * FROM employees`, (emp, err) => {
      if (err) reject (err);
      resolve(emp);
    });
  });
};

module.exports.getOneEmployee = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`
    SELECT * FROM employees WHERE employee_id = ${id}`,
    (err, emp) => {
      if (err) {return reject(err)};
      resolve(emp);
    });
  });
};

module.exports.addSingleEmployee = ({first_name, last_name, email, department_id}) => {
  return new Promise ((resolve, reject) => {
    db.run(`INSERT INTO employees
    VALUES (null, "${first_name}", "${last_name}", "${email}", ${department_id})`,
  function(err, emp) {
    if (err) return reject(err);
    resolve ({ id : this.lastID });
  });
  });
};

module.exports.editEmployee = (id, { column, value }) => {
  return new Promise((resolve, reject) => {
      db.run(`UPDATE employees SET ${column} = "${value}"
      WHERE employee_id = ${id}
      `, function (err) {
        if (err) { return reject(err) };
        resolve({changes: this.changes});
      });
  });
};
