// eslint-disable-next-line new-cap
const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.get('/', userController.getAll);
routes.get('/:id', userController.getOne);
routes.post('/create', userController.create);
routes.delete('/delete/:id', userController.deleteOne);
routes.put('/update/:id', userController.update);

module.exports = routes;
