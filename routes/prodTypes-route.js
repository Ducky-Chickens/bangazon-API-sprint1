const { Router } = require('express');
const prodTypeRouter = Router();
const { getProductTypes, getProductType, addProductType, 
  editProdTypeName, removeProdTypeById } = require('../controllers/product-type-ctrl');

prodTypeRouter.get('/product-types', getProductTypes);
prodTypeRouter.post('/product-types', addProductType);
prodTypeRouter.delete('/product-types', removeProdTypeById);
prodTypeRouter.get('/product-types/:id', getProductType);
prodTypeRouter.put('/product-types/:id', editProdTypeName);

module.exports = prodTypeRouter;