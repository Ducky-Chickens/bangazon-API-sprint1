const { Router } = require('express');
const custRouter = Router();
const { getCustomers, getOneCustomer, postNewCustomer, putCustomerData, patchCustomerData } = require('../controllers/customers-ctrl');

custRouter.get('/customers', getCustomers);
custRouter.get('/customers/:custID', getOneCustomer);
custRouter.patch('/customers/:custID', patchCustomerData);
custRouter.post('/customers', postNewCustomer);
custRouter.put('/customers', putCustomerData);

module.exports = custRouter;