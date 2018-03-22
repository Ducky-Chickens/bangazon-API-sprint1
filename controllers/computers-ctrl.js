const { getAllComps } = require('../models/Computers');

module.exports.getComputers = (req, res, next) => {
  getAllComps()
  .then(comps => {
    res.status(200).json(comps);
  })
  .catch (err => next(err));
};
