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

module.exports.patchComputer = (id, { column, value }) => {
  return new Promise((resolve, reject) => {
    // update table set column where id = param id
      db.run(`UPDATE computers SET "${column}" = "${value}"
      WHERE computer_id = ${id}
      `, function (err) {
        if (err) { return reject(err) };
        resolve({changes: this.changes});
      }
    );
  })
}

module.exports.editComputer = ({ computer_id, purchase_date, decomission_date}) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE computers SET
    purchase_date="${purchase_date}",
    decomission_date="${decomission_date}"
    WHERE computer_id = ${computer_id}`, function(err, computer) {
      if (err) return reject(err);
      resolve({ id : this.changes });
      }
    );
  });
};

module.exports.deleteComputer = compID => {
  return new Promise ((resolve, reject) => {
    db.run(`DELETE FROM computers WHERE computer_id=${compID}`, 
    function(err, computer) {
      if (err) return reject(err);
      resolve({changes: this.changes});
    });
  });
};
