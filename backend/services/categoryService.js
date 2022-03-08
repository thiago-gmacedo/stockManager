/* eslint-disable new-cap */
const {Category} = require('../models');
const errorMessage = require('../utils/errorMessage.js');
const successMessage = require('../utils/successMessage.js');


module.exports = {
  getAll: async () => {
    try {
      return {status: 200, payload: await Category.findAll()};
    } catch (err) {
      console.log(err);
      return errorMessage.CATEGORIES_NOT_FOUND;
    }
  },

  create: async (category) => {
    try {
      await Category.create(category);
      return successMessage.CATEGORY_SUCCESSFULLY_CREATED(
          category.category_name);
    } catch (err) {
      console.log(err);
      return errorMessage.CATEGORY_NOT_CREATED;
    }
  },

  deleteOne: async (id) => {
    try {
      const {category_name: name} = await Category.findByPk(id);
      await Category.destroy({where: {id}});
      return successMessage.CATEGORY_SUCCESSFULLY_DELETED(name);
    } catch (err) {
      console.log(err);
      return errorMessage.CATEGORY_NOT_DELETED;
    }
  },
};
