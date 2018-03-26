const { Router } = require('express');
const prodTypeRouter = Router();
const { getProductTypes, getProductType, addProductType, 
  editProdTypeName, removeProdTypeById, replaceOldProdType } = require('../controllers/product-type-ctrl');

prodTypeRouter.get('/product-types', getProductTypes);
prodTypeRouter.post('/product-types', addProductType);
prodTypeRouter.delete('/product-types', removeProdTypeById);
prodTypeRouter.put('/product-types', replaceOldProdType);
prodTypeRouter.patch('/product-types/:id', editProdTypeName);
prodTypeRouter.get('/product-types/:id', getProductType);

module.exports = prodTypeRouter;