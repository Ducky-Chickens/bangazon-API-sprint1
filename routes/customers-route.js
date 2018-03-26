const { Router } = require('express');
const custRouter = Router();
const { getCustomers, getOneCustomer, postNewCustomer, editCustomer } = require('../controllers/customers-ctrl');

custRouter.get('/customers', getCustomers);
custRouter.get('/customers/:custID', getOneCustomer);
custRouter.post('/customers/', postNewCustomer);
custRouter.put("/customers/", editCustomer);

module.exports = custRouter;