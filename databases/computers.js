const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const { readFileSync } = require('fs');
const { computers } = JSON.parse(readFileSync("./data/computers.json"));

module.exports.buildComputerTable = () => {
  db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS computers`);
    db.run(
      `CREATE TABLE IF NOT EXISTS computers (
        computer_id INTEGER PRIMARY KEY,
        purchase_date TEXT,
        decomission_date TEXT
      )`,
      () => {
        computers.forEach(({ purchaseDate }) => {
          db.run(`INSERT INTO computers VALUES (${null}, "${purchaseDate}", ${null})`);
      });
    })
  });
}