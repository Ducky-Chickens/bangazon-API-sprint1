const { Router } = require('express');
const empRouter = Router();
const { getEmployees, getEmployee, postNewEmployee, editEmployeeByColumn, editEmployeeForPut } = require('../controllers/employees-ctrl');




empRouter.post('/employees', postNewEmployee);
empRouter.get('/employees', getEmployees);
empRouter.get('/employees/:employeeId', getEmployee);
empRouter.patch('/employees/:employeeId', editEmployeeByColumn);
empRouter.put('/employees', editEmployeeForPut);




module.exports = empRouter;