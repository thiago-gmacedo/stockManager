// eslint-disable-next-line new-cap
const routes = require('express').Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

routes.get('/', authMiddleware, categoryController.getAll);
routes.post('/create', authMiddleware, categoryController.create);
routes.delete('/delete/:id', authMiddleware, categoryController.deleteOne);

module.exports = routes;
