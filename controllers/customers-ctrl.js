'use strict';

const { getCustomer, addCustomer, editCustomerObj } = require('../models/Customers');
const getCustomersByQuery = require('../models/Customers');

module.exports.getCustomers = ({query: {active}}, res, next) => {
  const filter = active ? "getCustsByActivity" : "getAllCustomers";
  getCustomersByQuery[filter](active)
  .then(allCustomers => {
    res.status(200).json(allCustomers);
  })
  .catch(err => next(err));
}


module.exports.getOneCustomer = ({params: {custID}}, res, next) => {
  getCustomer(`${custID}`)
  .then(customer => {
    res.status(200).json(customer);
  })
  .catch(err => next(err));
}

module.exports.postNewCustomer = (req, res, next) => {
  addCustomer(req.body)
  .then(customer => {
    res.status(200).json(customer)
  })
  .catch(err => {
    next(err);
  })
}


module.exports.editCustomer = (req, res, next) => {
  editCustomerObj(req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit Customer');
      error.status = 500;
      next(error);
    }
  })
}