const { Router } = require('express');
const paymentRouter = Router();
const { getPaymentTypes, getOnePaymentType, postNewPaymentType, editPaymentTypeByColumn, deleteOnePaymentType } = require('../controllers/payment-types-ctrl');

paymentRouter.get('/payment-types', getPaymentTypes);
paymentRouter.post('/payment-types', postNewPaymentType);
paymentRouter.get('/payment-types/:payTypeId', getOnePaymentType);
paymentRouter.delete('/payment-types', deleteOnePaymentType);
paymentRouter.put('/payment-types/:payTypeId', editPaymentTypeByColumn);

module.exports = paymentRouter;
