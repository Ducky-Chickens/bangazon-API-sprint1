const { getAllComps, getSingleComputer, addSingleComputer, editComputer, patchComputer, deleteComputer } = require('../models/Computer');

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
  patchComputer(req.params.compId, req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit computer');
      error.status = 500;
      next(error);
    }
  })
}

module.exports.replaceComputer = (req, res, next) => {
  editComputer(req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit computer');
      error.status = 500;
      next(error);
    }
  })
};

module.exports.deleteOneComputer = (req, res, next) => {
  deleteComputer(req.body.computer_id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    next(err);
  })
};
