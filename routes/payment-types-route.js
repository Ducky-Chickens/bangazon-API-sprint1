const { Router } = require('express');
const paymentRouter = Router();
const { getPaymentTypes, getOnePaymentType, postNewPaymentType, editPaymentTypeByColumn, deleteOnePaymentType, replacePaymentType } = require('../controllers/payment-types-ctrl');

paymentRouter.get('/payment-types', getPaymentTypes);
paymentRouter.post('/payment-types', postNewPaymentType);
paymentRouter.delete('/payment-types', deleteOnePaymentType);
paymentRouter.put('/payment-types', replacePaymentType);
paymentRouter.get('/payment-types/:payTypeId', getOnePaymentType);
paymentRouter.patch('/payment-types/:payTypeId', editPaymentTypeByColumn);

module.exports = paymentRouter;
