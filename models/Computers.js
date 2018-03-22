const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAllComps = () => {
  return new Promise ((reject, resolve) => {
    db.all(`SELECT * FROM computers`, (comps, err) => {
      if (err) reject(err);
      resolve(comps);
    });
  });
};

module.exports.getSingleComputer = compID => {
  return new Promise ((resolve, reject) => {
    db.get(`SELECT * FROM computers
    WHERE computer_id=${compID}`, (err, computer) => {
      if (err) return reject(err);
      // computer.computer_id
      resolve(computer);
    });
  });
};

module.exports.addSingleComputer = ({purchaseDate}) => {
  return new Promise ((resolve, reject) => {
    db.run(`INSERT INTO computers
    VALUES (null, "${purchaseDate}", null)`, 
    function(err, computer) {
      if (err) return reject(err);
      resolve({ id : this.lastID });
    });
  });
};
