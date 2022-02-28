/* eslint-disable new-cap */
const {Product, Category} = require('../models');
const errorMessage = require('../utils/errorMessage.js');
const successMessage = require('../utils/successMessage.js');

module.exports = {
  getAll: async () => {
    try {
      return {status: 200, payload: await Product.findAll({
        attributes: ['id', 'product_name', 'product_quantity'],
        include: {model: Category, as: 'category'},
      })};
    } catch (err) {
      console.log(err);
      return errorMessage.PRODUCTS_NOT_FOUND;
    }
  },

  getOne: async (id) => {
    try {
      return {status: 200, payload: await Product.findByPk(id, {
        attributes: ['id', 'product_name', 'product_quantity'],
        include: {model: Category, as: 'category'},
      })};
    } catch (err) {
      console.log(err);
      return errorMessage.PRODUCT_NOT_FOUND;
    }
  },

  getByCategory: async (id) => {
    try {
      return {status: 200, payload: await Product.findAll({
        where: {category_id: id},
        attributes: ['id', 'product_name', 'product_quantity'],
        include: {model: Category, as: 'category'},
      })};
    } catch (err) {
      console.log(err);
      return errorMessage.PRODUCTS_NOT_FOUND;
    }
  },

  create: async (product) => {
    try {
      await Product.create(product);
      return successMessage.PRODUCT_SUCCESSFULLY_CREATED(product.product_name);
    } catch (err) {
      console.log(err);
      return errorMessage.PRODUCT_NOT_CREATED;
    }
  },

  deleteOne: async (id) => {
    try {
      const product = await Product.findByPk(id);
      await Product.destroy({where: {id}});
      return successMessage.PRODUCT_SUCCESSFULLY_DELETED(product.product_name);
    } catch (err) {
      console.log(err);
      return errorMessage.PRODUCT_NOT_DELETED;
    }
  },

  update: async (id, product) => {
    try {
      const product = await Product.findByPk(id);
      const updatedProduct = {...product, ...product};
      await Product.update(updatedProduct, {where: {id}});
      return successMessage.PRODUCT_SUCCESSFULLY_EDITED(product.product_name);
    } catch (err) {
      console.log(err);
      return errorMessage.PRODUCT_NOT_UPDATED;
    }
  },

};
