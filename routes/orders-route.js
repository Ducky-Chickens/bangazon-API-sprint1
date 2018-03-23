const { Router } = require('express');
const orderRouter = Router();
const { getOrders, getOneOrder, deleteOneOrder } = require('../controllers/orders-ctrl');

orderRouter.get('/orders', getOrders);
// orderRouter.post('/order', postNewOrder);
orderRouter.delete('/orders', deleteOneOrder);
// orderRouter.put('/order/:orderId', editOrderByColumn);
orderRouter.get('/orders/:orderId', getOneOrder);

module.exports = orderRouter;