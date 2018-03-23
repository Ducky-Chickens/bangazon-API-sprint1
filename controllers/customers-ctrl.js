'use strict';

const { getAllCustomers, getCustomer, addCustomer } = require('../models/Customers');

module.exports.getCustomers = (req, res, next) => {
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