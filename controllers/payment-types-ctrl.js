const { getAllPaymentTypes, getSinglePaymentType, addSinglePaymentType } = require('../models/Payment-types');

module.exports.getPaymentTypes = (req, res, next) => {
  getAllPaymentTypes()
  .then( payTypes => {
    res.status(200).json(payTypes);
  })
  .catch ( err => next(err));
};

module.exports.getOnePaymentType = ({params: {payTypeId}}, res, next) => {
  getSinglePaymentType(payTypeId)
  .then( payType => {
    res.status(200).json(payType)
  })
  .catch ( err => next(err));
}

module.exports.postNewPaymentType = (req, res, next) => {
  addSinglePaymentType(req.body)
  .then( payType => {
    if (payType) {
      res.status(200).json(payType);
    } else{
      let error = new Error('Payment Type not found!');
      error.status = 404;
      next(error);
    }
  })
}
