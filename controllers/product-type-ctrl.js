'use strict'; 
const { getAllProdTypes, getOneProdType, addNewProdType, 
  editProdType, removeProdType, replaceProdType } = require('../models/Product-type');

module.exports.getProductTypes = (req, res, next) => {
  getAllProdTypes()
  .then(prodTypes => {
    res.status(200).json(prodTypes);
  })
  .catch(err => next(err));
};

module.exports.getProductType = (req, res, next) => {
  getOneProdType(req.params.id)
  .then(prodType => {
    let error = new Error('Product Type not found!');
    error.status = 404;
    return prodType ? res.status(200).json(prodType) : next(error);
  })
  .catch(err => next(err));
};

module.exports.addProductType = (req, res, next) => {
  addNewProdType(req.body)
  .then(data => {
    let error = new Error('Failed to add Product Type');
    error.status = 500;
    return data ? res.status(200).json(data) : next(error);
  })
  .catch(err => next(err));
}

module.exports.editProdTypeName = (req, res, next) => {
  editProdType(req.params.id, req.body)
  .then(data => {
    let error = new Error('Failed to edit Product Type');
    error.status = 500;
    return data ? res.status(200).json(data) : next(error);    
  })
  .catch(err => next(err));
}

module.exports.replaceOldProdType = (req, res, next) => {
  replaceProdType(req.body)
  .then(data => {
    let error = new Error('Failed to edit Product Type');
    error.status = 500;
    return data ? res.status(200).json(data) : next(error);    
  })
  .catch(err => next(err));
}

module.exports.removeProdTypeById = (req, res, next) => {
  removeProdType(req.body.id)
  .then(data => {
    let error = new Error('Failed to remove Product Type');
    error.status = 404;
    return data ? res.status(200).json(data) : next(error);    
  })
  .catch(err => next(err));
}
