// eslint-disable-next-line new-cap
const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.get('/login', userController.verifyLogin);
routes.post('/register', userController.register);

module.exports = routes;
