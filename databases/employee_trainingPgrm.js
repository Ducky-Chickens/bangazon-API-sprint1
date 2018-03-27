'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const {readFileSync} = require('fs');
const { emp_training } = require("../data/emp_training.json");

module.exports.buildEmployee_TrainingPgrmTable = () => {
  db.serialize(function() {
  db.run(`DROP TABLE IF EXISTS employee_trainingPgrm`);
  
  db.run(
    `CREATE TABLE IF NOT EXISTS employee_trainingPgrm(
      program_id INTEGER NOT NULL,
      employee_id INTEGER NOT NULL,
      FOREIGN KEY(employee_id) 
      REFERENCES employees(employee_id) ON DELETE CASCADE,
      FOREIGN KEY(program_id) 
      REFERENCES training_programs(program_id) ON DELETE CASCADE
  )`);

  emp_training.forEach(({ program_id, employee_id }) => {
    db.run(
      `INSERT INTO employee_trainingPgrm
      VALUES(${program_id}, ${employee_id})`
    );
    });
  })
}

