// eslint-disable-next-line new-cap
const routes = require('express').Router();
const categoryController = require('../controllers/categoryController');

routes.get('/', categoryController.getAll);
routes.post('/create', categoryController.create);
routes.delete('/delete/:id', categoryController.deleteOne);

module.exports = routes;
