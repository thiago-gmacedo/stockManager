const express = require('express');
const categoryRoutes = require('../routes/categoryRoutes');
const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');

const app = express();
app.use(express.json());

app.use('/category', categoryRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);

module.exports = app;
