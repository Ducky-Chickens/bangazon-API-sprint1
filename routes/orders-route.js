const { Router } = require('express');
const orderRouter = Router();
const { getOrders, getOneOrder, deleteOneOrder, postNewOrder, editOrderByColumn } = require('../controllers/orders-ctrl');

orderRouter.get('/orders', getOrders);
orderRouter.post('/orders', postNewOrder);
orderRouter.delete('/orders', deleteOneOrder);
orderRouter.put('/orders/:orderId', editOrderByColumn);
orderRouter.get('/orders/:orderId', getOneOrder);

module.exports = orderRouter;