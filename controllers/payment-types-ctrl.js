const { getAllPaymentTypes } = require('../models/Payment-types');

module.exports.getPaymentTypes = (req, res, next) => {
  getAllPaymentTypes()
  .then(payTypes => {
    res.status(200).json(payTypes);
  })
  .catch (err => next(err));
};
