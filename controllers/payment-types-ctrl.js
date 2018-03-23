const { getAllPaymentTypes, getSinglePaymentType } = require('../models/Payment-types');

module.exports.getPaymentTypes = (req, res, next) => {
  getAllPaymentTypes()
  .then(payTypes => {
    res.status(200).json(payTypes);
  })
  .catch (err => next(err));
};

module.exports.getOnePaymentType = ({params: {payTypeId}}, res, next) => {
  getSinglePaymentType(payTypeId)
  .then( payType => {
    res.status(200).json(payType)
  })
  .catch (err => next(err));
}
