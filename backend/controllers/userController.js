const userService = require('../services/userService');

module.exports = {
  getAll: (req, res) => {
    userService.getAll()
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  getOne: (req, res) => {
    userService.getOne(req.params.id)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  create: (req, res) => {
    userService.create(req.body)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  deleteOne: (req, res) => {
    userService.deleteOne(req.params.id)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },

  update: (req, res) => {
    userService.update(req.params.id, req.body)
        .then(({status, payload}) => {
          res.status(status).json(payload);
        });
  },
};
