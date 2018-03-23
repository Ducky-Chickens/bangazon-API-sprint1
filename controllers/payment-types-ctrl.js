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


// WHY THE FUCK IS THIS NOT RESOLVING IN POSTMAN
// IT POSTS THE CONTENT TO THE DB AND SHOULD WORK WTF
module.exports.postNewPaymentType = (req, res, next) => {
  console.log(req.body);
  addSinglePaymentType(req.body)
  .then( payType => {
    res.status(200).json(payType);
  })
  .catch( err => reject(err));
}
