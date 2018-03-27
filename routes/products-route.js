'use strict';
const Router = require('express');
const prodRouter = Router();
const { getProducts, getOneProduct, postNewProduct, patchProductData, putProductData, deleteOneProduct } = require('../controllers/products-ctrl');

prodRouter.get('/products', getProducts);
prodRouter.post('/products', postNewProduct);
prodRouter.delete('/products', deleteOneProduct);
prodRouter.put('/products', putProductData);
prodRouter.get('/products/:prodId', getOneProduct);
prodRouter.patch('/products/:prodId', patchProductData);

module.exports = prodRouter;