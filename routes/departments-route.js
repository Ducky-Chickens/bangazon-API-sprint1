const { Router } = require('express');
const deptRouter = Router();
const { getDepartments, getDepartment, postNewDepartment } = require('../controllers/departments-ctrl');




deptRouter.post('/departments', postNewDepartment);
deptRouter.get('/departments', getDepartments);
deptRouter.get('/departments/:departmentId', getDepartment);


module.exports = deptRouter;