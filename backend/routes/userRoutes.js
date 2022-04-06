// eslint-disable-next-line new-cap
const routes = require('express').Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

routes.get('/', authMiddleware, userController.getAll);
routes.get('/:id', authMiddleware, userController.getOne);
routes.post('/create', authMiddleware, userController.create);
routes.delete('/delete/:id', authMiddleware, userController.deleteOne);
routes.put('/update/:id', authMiddleware, userController.update);

module.exports = routes;
