const { Router } = require('express');
const deptRouter = Router();
const { getDepartments, getDepartment, postNewDepartment, editDepartmentByColumn, editDepartmentForPut } = require('../controllers/departments-ctrl');




deptRouter.post('/departments', postNewDepartment);
deptRouter.get('/departments', getDepartments);
deptRouter.get('/departments/:departmentId', getDepartment);
deptRouter.patch('/departments/:departmentId', editDepartmentByColumn);
deptRouter.put('/departments', editDepartmentForPut);



module.exports = deptRouter;