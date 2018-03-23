const { getAllEmployees, getOneEmployee, addSingleEmployee, editEmployee } = require('../models/Employees');

module.exports.getEmployees = (req, res, next) => {
  getAllEmployees()
  .then (emp => {
    res.status(200).json(emp);
  })
  .catch (err => next(err));
};

module.exports.getEmployee = (req, res, next) => {
  getOneEmployee(req.params.employeeId)
  .then(emp => {
    if(emp){
      res.status(200).json(emp);
    } else {
      let error = new Error('Employee not found!');
      error.status = 404;
      next(error);
    }
  })
  .catch(err => next(err));
}

module.exports.postNewEmployee = (req, res, next) => {
  addSingleEmployee(req.body)
  .then(emp => {
    res.status(200).json(emp);
  })
  .catch(err => {
    next(err);
  });
}

module.exports.editEmployeeByColumn = (req, res, next) => {
  editEmployee(req.params.employeeId, req.body)
  .then(emp => {
    if(emp){
      res.status(200).json(emp);
    } else {
      let error = new Error('Failed to edit Employee');
      error.status = 500;
      next(error);
    };
  });
};