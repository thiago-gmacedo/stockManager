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

  verifyLogin: (req, res) => {
    const [, hash] = req.headers.authorization.split(' ');
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
    userService.verifyLogin(email, password)
        .then(({status, payload, token}) => {
          res.status(status).json({payload, token});
        });
  },

  register: (req, res) => {
    userService.register(req.body)
        .then(({status, payload, token}) => {
          res.status(status).json({payload, token});
        });
  },
};

