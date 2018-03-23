const { Router } = require('express');
const custRouter = Router();
const { getCustomers } = require('../controllers/customers-ctrl');

custRouter.get('/customers', getCustomers);

module.exports = custRouter;