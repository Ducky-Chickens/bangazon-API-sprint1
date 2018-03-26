const { getAllOrders, getSingleOrder, deleteOrder, addSingleOrder, editOrder} = require('../models/Order');
const { getProductsByOrderId } = require('../models/Order_product');

module.exports.getOrders = (req, res, next) => {
  getAllOrders()
  .then( orders => {
    res.status(200).json(orders);
  })
  .catch ( err => next(err));
};

module.exports.getOneOrder = ({params: {orderId}}, res, next) => {
  getSingleOrder(orderId)
  .then( order => 
    getProductsByOrderId(orderId)
    .then( arrayProducts => {
      let joinedOrderProducts = { order };
      joinedOrderProducts.order.products = arrayProducts
      res.status(200).json(joinedOrderProducts)
    })
  )
  .catch ( err => next(err));
};

module.exports.postNewOrder = (req, res, next) => {
  addSingleOrder(req.body)
  .then( order => {
    if (order) {
      res.status(200).json(order);
    } else {
      let error = new Error('Order not created!');
      error.status = 404;
      next(error);
    }
  })
};

module.exports.editOrderByColumn = (req, res, next) => {
  editOrder(req.params.orderId, req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit order');
      error.status = 500;
      next(error);
    }
  })
};

module.exports.deleteOneOrder = (req, res, next) => {
  let error1 = new Error('Failed to delete, order must not already be associated with payment type.')
  error1.status = 400
  let error2 = new Error('Order not found!')
  error2.status = 404
  getSingleOrder(req.body.id)
  .then(order => {
    order ? order.payment_type_id = "null" ? 
    deleteOrder(req.body.id)
      .then(data => {
        res.status(200).json(data);
      }) : next(error1) : next(error2)
  })
  .catch(err => {
    next(err);
  })
};