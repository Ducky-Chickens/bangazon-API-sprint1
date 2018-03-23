const { Router } = require('express');
const custRouter = Router();
const { getCustomers, getOneCustomer } = require('../controllers/customers-ctrl');

custRouter.get('/customers', getCustomers);
custRouter.get('/customers/:custID', getOneCustomer);

module.exports = custRouter;