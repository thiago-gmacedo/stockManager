// eslint-disable-next-line new-cap
const routes = require('express').Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

routes.get('/', authMiddleware, productController.getAll);
routes.get('/:id', authMiddleware, productController.getOne);
routes.get('/category/:id', authMiddleware, productController.getByCategory);
routes.post('/create', authMiddleware, productController.create);
routes.delete('/delete/:id', authMiddleware, productController.deleteOne);
routes.put('/update/:id', authMiddleware, productController.update);

module.exports = routes;
