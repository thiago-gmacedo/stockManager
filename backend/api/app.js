const express = require('express');
const cors = require('cors');
const categoryRoutes = require('../routes/categoryRoutes');
const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');
const authRoutes = require('../routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/category', categoryRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/auth', authRoutes);

module.exports = app;
