const categoryService = require('../services/categoryService');

module.exports = {
  getAll: (req, res) => {
    categoryService.getAll()
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  create: (req, res) => {
    categoryService.create(req.body)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  deleteOne: (req, res) => {
    categoryService.deleteOne(req.params.id)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },
};
