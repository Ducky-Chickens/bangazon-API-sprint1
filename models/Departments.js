const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllDepartments = () => {
  return new Promise ((reject, resolve) => {
    db.all(`SELECT * FROM departments`, (dept, err) => {
      if (err) reject (err);
      resolve(dept);
    });
  });
};

module.exports.getOneDepartment = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`
    SELECT * FROM departments WHERE department_id = ${id}`,
    (err, dept) => {
      if (err) {return reject(err)};
      resolve(dept);
    });
  });
};

module.exports.addSingleDepartment = ({dept_name, supervisor_id, budget}) => {
  return new Promise ((resolve, reject) => {
    console.log(dept_name, supervisor_id, budget);
    db.run(`INSERT INTO departments
    VALUES (null, "${dept_name}", ${supervisor_id}, ${budget})`,
  function(err, dept) {
    if (err) return reject(err);
    resolve ({ id : this.lastID });
  });
  });
};
