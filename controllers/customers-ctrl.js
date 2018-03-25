'use strict';

const { getAllCustomers, getCustomer, addCustomer, editCustomerName } = require('../models/Customers');

module.exports.getCustomers = (req, res, next) => {
  console.log(req.query.active);
  getAllCustomers()
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

module.exports.getCustByActivity = (req, res, next) => {
  console.log(req.query.active);
  // addCustomer(req.query.active)
  // .then(customer => {
  //   res.status(200).json(customer)
  // })
  // .catch(err => {
  //   next(err);
  // })
}

module.exports.editCustomer = (req, res, next) => {
  editCustomerName(req.body)
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