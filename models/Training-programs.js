'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');

module.exports.getAllPrograms = () => {
  return new Promise((resolve, reject) => {
    db.all(`
    SELECT * FROM training_programs
    `, (err, programs) => {
        if (err) { return reject(err) };
        resolve(programs);
      });
  })
}

module.exports.getOneProgram = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`
    SELECT * FROM training_programs
    WHERE program_id = ${id}
    `, (err, program) => {
        if (err) { return reject(err) };
        resolve(program);
      });
  })
}

//takes a data table entry object from req.body
module.exports.addNewProgram = ({ title, startDate, endDate, max }) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO training_programs
    VALUES (
      null, "${title}", "${startDate}", "${endDate}", ${max}
    )`, function (err) {
        if (err) { return reject(err) };
        resolve({id: this.lastID});
      });
  })
}

module.exports.editProgram = (id, { column, value }) => {
  return new Promise((resolve, reject) => {
    // update table set column where id = param id
      db.run(`UPDATE training_programs SET ${column} = "${value}"
      WHERE program_id = ${id}
      `, function (err) {
        if (err) { return reject(err) };
        resolve({changes: this.changes});
      });
  })
}

module.exports.removeProgram = (id) => {
  return new Promise((resolve, reject) => {
    //delete row by id
    db.run(`DELETE FROM training_programs
    WHERE program_id = ${id}
    `, function (err) {
      if (err) { return reject(err) };
      resolve({ status: `${this.changes} item deleted`});
    });
  })
}

