'use strict';
const { getAllProducts, getSingleProduct, addSingleProduct, editProduct, deleteProduct }  = require('../models/Product');

//Get all products
module.exports.getProducts = (req, res, next) => {
  getAllProducts()
  .then(products => {
    res.status(200).json(products);
  })
  .catch(err => next(err));
};

//Get single product
module.exports.getOneProduct = ({params: {prodId}}, res, next) => {
  getSingleProduct(prodId)
  .then(product => {
    res.status(200).json(product)
  })
  .catch(err => next(err));
};

//Add a product
module.exports.postNewProduct = (req, res, next) => {
  addSingleProduct(req.body)
  .then(product => {
    res.status(200).json(product)
  })
  .catch(err => next(err));
};

//Edit a product
module.exports.editProductByColumn = (req, res, next) => {
  editProduct(req.params.prodId, req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit product');
      error.status = 500;
      next(error);
    }
  })
};

//TODO: Decide as a team how and when to delete a product
//Delete a product
module.exports.deleteOneProduct = (req, res, next) => {
  console.log('deleteOneProduct called. deleteProduct function:', deleteProduct);
};