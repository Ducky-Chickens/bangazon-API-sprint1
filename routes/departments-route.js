const { Router } = require('express');
const deptRouter = Router();
const { getDepartments } = require('../controllers/departments-ctrl');




deptRouter.get('/departments', getDepartments);

module.exports = deptRouter;