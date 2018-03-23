const { Router } = require('express');
const paymentRouter = Router();
const { getPaymentTypes, getOnePaymentType, postNewPaymentType } = require('../controllers/payment-types-ctrl');

paymentRouter.get('/payment-types', getPaymentTypes);
paymentRouter.post('/payment-types', postNewPaymentType);
paymentRouter.get('/payment-types/:payTypeId', getOnePaymentType);
// paymentRouter.put('/payment-types/:compId', editPaymentTypeByColumn);
// paymentRouter.delete('/payment-types', deleteOnePaymentType);

module.exports = paymentRouter;
