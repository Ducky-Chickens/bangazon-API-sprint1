const { Router } = require('express');
const prodTypeRouter = Router();
const { getProductTypes, getProductType, addProductType, 
  editProdTypeName, removeProdTypeById, replaceProdType } = require('../controllers/product-type-ctrl');

prodTypeRouter.get('/product-types', getProductTypes);
prodTypeRouter.post('/product-types', addProductType);
prodTypeRouter.delete('/product-types', removeProdTypeById);
prodTypeRouter.put('/product-types', replaceProdType);
prodTypeRouter.get('/product-types/:id', getProductType);
prodTypeRouter.patch('/product-types/:id', editProdTypeName);

module.exports = prodTypeRouter;