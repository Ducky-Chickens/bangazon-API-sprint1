const { getAllDepartments } = require('../models/Departments');

module.exports.getDepartments = (req, res, next) => {
  getAllDepartments()
  .then (dept => {
    res.status(200).json(dept);
  })
  .catch (err => next(err));
};