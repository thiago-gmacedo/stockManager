const productService = require('../services/productService');

module.exports = {
  getAll: (req, res) => {
    productService.getAll()
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  getOne: (req, res) => {
    console.log('batata');
    productService.getOne(req.params.id)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  getByCategory: (req, res) => {
    productService.getByCategory(req.params.id)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  create: (req, res) => {
    productService.create(req.body)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  deleteOne: (req, res) => {
    productService.deleteOne(req.params.id)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  update: (req, res) => {
    productService.update(req.params.id, req.body)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },
};
