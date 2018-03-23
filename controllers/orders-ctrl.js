const { getAllOrders, getSingleOrder } = require('../models/Orders');

module.exports.getOrders = (req, res, next) => {
  getAllOrders()
  .then( orders => {
    res.status(200).json(orders);
  })
  .catch ( err => next(err));
};

module.exports.getOneOrder = ({params: {orderId}}, res, next) => {
  getSingleOrder(orderId)
  .then( order => {
    res.status(200).json(order)
  })
  .catch ( err => next(err));
}

// module.exports.postNewOrder = (req, res, next) => {
//   addSingleOrder(req.body)
//   .then( order => {
//     if (order) {
//       res.status(200).json(order);
//     } else{
//       let error = new Error('Order not found!');
//       error.status = 404;
//       next(error);
//     }
//   })
// }

// module.exports.editOrderByColumn = (req, res, next) => {
//   editOrder(req.params.orderId, req.body)
//   .then(data => {
//     if(data){
//       res.status(200).json(data);
//     } else {
//       let error = new Error('Failed to edit order');
//       error.status = 500;
//       next(error);
//     }
//   })
// }

// module.exports.deleteOneOrder = (req, res, next) => {
//   deleteOrder(req.body.order_id)
//   .then(data => {
//     res.status(200).json(data)
//   })
//   .catch(err => {
//     next(err);
//   })
// };