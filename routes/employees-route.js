const { Router } = require('express');
const empRouter = Router();
const { getEmployees, getEmployee, postNewEmployee, editEmployeeByColumn } = require('../controllers/employees-ctrl');




empRouter.post('/employees', postNewEmployee);
empRouter.get('/employees', getEmployees);
empRouter.get('/employees/:employeeId', getEmployee);
empRouter.put('/employees/:employeeId', editEmployeeByColumn);



module.exports = empRouter;