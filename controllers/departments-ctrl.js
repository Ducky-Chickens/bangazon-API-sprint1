const { getAllDepartments, getOneDepartment } = require('../models/Departments');

module.exports.getDepartments = (req, res, next) => {
  getAllDepartments()
  .then (dept => {
    res.status(200).json(dept);
  })
  .catch (err => next(err));
};

module.exports.getDepartment = (req, res, next) => {
  getOneDepartment(req.params.departmentId)
  .then(dept => {
    if(dept){
      res.status(200).json(dept);
    } else {
      let error = new Error('Department not found!');
      error.status = 404;
      next(error);
    }
  })
  .catch(err => next(err));
}