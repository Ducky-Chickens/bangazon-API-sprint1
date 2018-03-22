const { getAllComps, getSingleComputer, addSingleComputer, editComputer } = require('../models/Computers');

module.exports.getComputers = (req, res, next) => {
  getAllComps()
  .then(comps => {
    res.status(200).json(comps);
  })
  .catch (err => next(err));
};

module.exports.getOneComputer = ({params: {compId}}, res, next) => {
  getSingleComputer(compId)
  .then(computer => {
    res.status(200).json(computer)
  })
  .catch(err => {
    next(err);
  })
};

module.exports.postNewComputer = (req, res, next) => {
  addSingleComputer(req.body)
  .then(computer => {
    res.status(200).json(computer)
  })
  .catch(err => {
    next(err);
  })
};

module.exports.editComputerByColumn = (req, res, next) => {
  editComputer(req.params.compId, req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit Computer');
      error.status = 500;
      next(error);
    }
  })
}
