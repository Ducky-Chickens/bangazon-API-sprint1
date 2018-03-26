const { getAllPaymentTypes, getSinglePaymentType, addSinglePaymentType, editPaymentType, deletePaymentType } = require('../models/Payment-type');

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

module.exports.editPaymentTypeByColumn = (req, res, next) => {
  editPaymentType(req.params.payTypeId, req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit payment type');
      error.status = 500;
      next(error);
    }
  })
}

module.exports.deleteOnePaymentType = (req, res, next) => {
  deletePaymentType(req.body.payment_type_id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    next(err);
  })
};
