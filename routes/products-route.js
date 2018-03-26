'use strict';
const Router = require('express');
const prodRouter = Router();
const { getProducts, getOneProduct, postNewProduct, editProductByColumn, deleteOneProduct } = require('../controllers/products-ctrl');

prodRouter.get('/products', getProducts);
prodRouter.post('/products', postNewProduct);
prodRouter.delete('/products', deleteOneProduct);
prodRouter.get('/products/:prodId', getOneProduct);
prodRouter.put('/products/:prodId', editProductByColumn);

module.exports = prodRouter;