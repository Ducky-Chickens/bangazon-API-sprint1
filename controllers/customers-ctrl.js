'use strict';

const { getAllCustomers, getCustomer } = require('../models/Customers');

module.exports.getCustomers = (req, res, next) => {
  getAllCustomers()
  .then(allCustomers => {
    res.status(200).JSON(allCustomers);
  })
  .catch(err => next(err));
}

module.exports.getOneCustomer = ({params: {custID}}, res, next) => {
  getCustomer(custID)
  .then(customer => {
    res.status(200).JSON(customer);
  })
  .catch(err => next(err));
}