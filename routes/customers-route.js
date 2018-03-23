const { Router } = require('express');
const custRouter = Router();
const { getCustomers, getOneCustomer, postNewCustomer } = require('../controllers/customers-ctrl');

custRouter.get('/customers', getCustomers);
custRouter.get('/customers/:custID', getOneCustomer);
custRouter.post('/customers/', postNewCustomer);

module.exports = custRouter;