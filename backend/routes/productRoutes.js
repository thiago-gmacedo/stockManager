// eslint-disable-next-line new-cap
const routes = require('express').Router();
const productController = require('../controllers/productController');

routes.get('/', productController.getAll);
routes.get('/:id', productController.getOne);
routes.get('/category/:id', productController.getByCategory);
routes.post('/create', productController.create);
routes.delete('/delete/:id', productController.deleteOne);
routes.put('/update/:id', productController.update);

module.exports = routes;
