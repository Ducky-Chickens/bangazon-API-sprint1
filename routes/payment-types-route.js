const { Router } = require('express');
const paymentRouter = Router();
const { getPaymentTypes } = require('../controllers/payment-types-ctrl');

paymentRouter.get('/payment-types', getPaymentTypes);
// paymentRouter.post('/payment-types', postNewPaymentType);
// paymentRouter.get('/payment-types/:compId', getOnePaymentType);
// paymentRouter.put('/payment-types/:compId', editPaymentTypeByColumn);
// paymentRouter.delete('/payment-types', deleteOnePaymentType);

module.exports = paymentRouter;
