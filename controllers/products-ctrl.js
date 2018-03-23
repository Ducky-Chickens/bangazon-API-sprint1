'use strict';
const { getAllProducts, getSingleProduct, addSingleProduct, editProduct, deleteProduct }  = require('../models/Poduct');

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
  getSingleProduct(prodID)
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
  editProduct(req.params.prodID, req.body)
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

//Delete a product
module.exports.deleteOneProduct = (req, res, next) => {
  deleteProduct(req.body.product_id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => next(err));
};