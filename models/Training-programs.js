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
    // * db.get for individual selection
    db.get(`
    SELECT * FROM training_programs
    WHERE program_id = ${id}
    `, (err, program) => {
        if (err) { return reject(err) };
        resolve(program);
      });
  })
}

//                           takes an entry object from req.body
module.exports.addNewProgram = ({ title, startDate, endDate, max }) => {
  return new Promise((resolve, reject) => {
    //insert all attributes of new entry  * use null for PK *
    db.run(`INSERT INTO training_programs
    VALUES (
      null, "${title}", "${startDate}", "${endDate}", ${max}
    )`, function (err) {
        if (err) { return reject(err) };
        // sql gives access to last entry added id
        resolve({id: this.lastID});
      });
  })
}

// **WORK IN PROGRESS       takes param id and req.body object
module.exports.editProgram = (id, { startDate, endDate }) => {
  return new Promise((resolve, reject) => {
    // update table set attribute where id = param id
    db.run(`UPDATE training_programs SET start_date = "${startDate}"
    WHERE program_id = ${id}
    `, function (err) {
      if (err) { return reject(err) };
      // sql gives access to last changes
      resolve({changes: this.changes});
    });
  })
}


