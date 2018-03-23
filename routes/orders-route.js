const { Router } = require('express');
const orderRouter = Router();
const { getOrders, getOneOrder } = require('../controllers/orders-ctrl');

orderRouter.get('/orders', getOrders);
// orderRouter.post('/order', postNewOrder);
// orderRouter.delete('/order', deleteOneOrder);
// orderRouter.put('/order/:orderId', editOrderByColumn);
orderRouter.get('/orders/:orderId', getOneOrder);

module.exports = orderRouter;