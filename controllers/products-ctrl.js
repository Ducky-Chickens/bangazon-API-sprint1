'use strict';
const { getAllProducts, getSingleProduct, addSingleProduct, patchProductObj, putProductObj, deleteProduct }  = require('../models/Product');
const { getOrdersByProductId } = require('../models/Order_Product');

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

//Edit one attribute on a product
module.exports.patchProductData = (req, res, next) => {
  patchProductObj(req.params.prodId, req.body)
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

//Edit an entire product
module.exports.putProductData = (req, res, next) => {
  putProductObj(req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit Product');
      error.status = 500;
      next(error);
    }
  })
}

//Delete a product
module.exports.deleteOneProduct = (req, res, next) => {
  //first get product by id to check if product exists
  getSingleProduct(req.body.product_id)
  .then(product => {
    if(product) {
      //Delete only if order_product with given product id does NOT exist  
      getOrdersByProductId(req.body.product_id)
      .then(orders => {
        if(orders.length > 0) {
          let error = new Error('Failed to delete, an order has been placed for this product and cannot be deleted.');
          error.status = 405;
          next(error);
        } else {
          deleteProduct(req.body.product_id)
          .then(data => {
            res.status(200).json(data);
          });
        }
      });
    } else {
      let error = new Error('Product not found!');
      error.status = 404;
      next(error);
    }
  })
};
