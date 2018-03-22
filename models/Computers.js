const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllComps = () => {
  return new Promise ((reject, resolve) => {
    db.all(`SELECT * FROM computers`, (comps, err) => {
      if (err) reject(err);
      resolve(comps);
    });
  });
}
