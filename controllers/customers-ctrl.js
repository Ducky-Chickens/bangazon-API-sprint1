'use strict';

const getCustomersByQuery = require('../models/Customer');

// GET customers, if dev sends in query including active, it will send to appropriate function for filtering
module.exports.getCustomers = ({query: {active}}, res, next) => {
  const filter = active ? "getCustsByActivity" : "getAllCustomers";
  getCustomersByQuery[filter](active)
  .then(allCustomers => {
    res.status(200).json(allCustomers);
  })
  .catch(err => next(err));
}

// GET one customer by id
module.exports.getOneCustomer = ({params: {custID}}, res, next) => {
  getCustomersByQuery.getCustomer(`${custID}`)
  .then(customer => {
    res.status(200).json(customer);
  })
  .catch(err => next(err));
}

// POST new customer
module.exports.postNewCustomer = (req, res, next) => {
  getCustomersByQuery.addCustomer(req.body)
  .then(customer => {
    res.status(200).json(customer)
  })
  .catch(err => {
    next(err);
  })
}

// PUT to update first name/last name/join date 
module.exports.putCustomerData = (req, res, next) => {
  getCustomersByQuery.putCustomerObj(req.body)
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

// PATCH to udpate one column of customer by customer ID 
module.exports.patchCustomerData = (req, res, next) => {
  getCustomersByQuery.patchCustomerObj(req.params.custID, req.body)
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