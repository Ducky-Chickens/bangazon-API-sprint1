const { Router } = require('express');
const deptRouter = Router();
const { getDepartments, getDepartment } = require('../controllers/departments-ctrl');




deptRouter.get('/departments', getDepartments);
deptRouter.get('/departments/:departmentId', getDepartment);

module.exports = deptRouter;