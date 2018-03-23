const { Router } = require('express');
const deptRouter = Router();
const { getDepartments, getDepartment, postNewDepartment, editDepartmentByColumn } = require('../controllers/departments-ctrl');




deptRouter.post('/departments', postNewDepartment);
deptRouter.get('/departments', getDepartments);
deptRouter.get('/departments/:departmentId', getDepartment);
deptRouter.put('/departments/:departmentId', editDepartmentByColumn);



module.exports = deptRouter;