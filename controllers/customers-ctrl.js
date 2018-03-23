'use strict';

const { getAllCustomers } = require('../models/Customers');

module.exports.getCustomers = () => {
  getAllCustomers()
  .then(allCustomers => {
    res.status(200).JSON(allCustomers);
  })
  .catch(err => next(err));
}