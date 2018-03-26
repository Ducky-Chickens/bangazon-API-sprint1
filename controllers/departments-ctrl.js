const { getAllDepartments, getOneDepartment, addSingleDepartment, editDepartmentName, editDepartment } = require('../models/Department');

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

module.exports.postNewDepartment = (req, res, next) => {
  addSingleDepartment(req.body)
  .then(dept => {
    res.status(200).json(dept);
  })
  .catch(err => {
    next(err);
  });
}

module.exports.editDepartmentByColumn = (req, res, next) => {
  editDepartment(req.params.departmentId, req.body)
  .then(dept => {
    if(dept){
      res.status(200).json(dept);
    } else {
      let error = new Error('Failed to edit Department');
      error.status = 500;
      next(error);
    };
  });
};

module.exports.editDepartmentForPut = (req, res, next) => {
  editDepartmentName(req.body)
  .then(dept => {
    if(dept){
      res.status(200).json(dept);
    } else {
      let error = new Error('Failed to edit Department');
      error.status = 500;
      next(error);
    };
  });
};