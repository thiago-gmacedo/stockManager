/* eslint-disable new-cap */
const {User, Role} = require('../models');
const errorMessage = require('../utils/errorMessage.js');
const successMessage = require('../utils/successMessage.js');

module.exports = {
  getAll: async () => {
    try {
      return {status: 200, payload: await User.findAll({
        attributes: ['id', 'user_name', 'user_email'],
        include: {model: Role, as: 'role'},
      })};
    } catch (err) {
      console.log(err);
      return errorMessage.USERS_NOT_FOUND;
    }
  },

  getOne: async (id) => {
    try {
      return {status: 200, payload: await User.findByPk(id, {
        attributes: ['id', 'user_name', 'user_email'],
        include: {model: Role, as: 'role'},
      })};
    } catch (err) {
      console.log(err);
      return errorMessage.USER_NOT_FOUND;
    }
  },

  create: async (user) => {
    try {
      await User.create(user);
      return successMessage.USER_SUCCESSFULLY_CREATED(user.user_name);
    } catch (err) {
      console.log(err);
      return errorMessage.USER_NOT_CREATED;
    }
  },

  deleteOne: async (id) => {
    try {
      const user = await User.findByPk(id);
      await User.destroy({where: {id}});
      return successMessage.USER_SUCCESSFULY_DELETED(user.user_name);
    } catch (err) {
      console.log(err);
      return errorMessage.USER_NOT_DELETED;
    }
  },

  update: async (id, newInfo) => {
    try {
      const user = await User.findByPk(id);
      const updatedUser = {...newInfo, ...user};
      await User.update(updatedUser, {where: {id}});
      return successMessage.USER_SUCCESSFULY_EDITED(user.user_name);
    } catch (err) {
      console.log(err);
      return errorMessage.USER_NOT_UPDATED;
    }
  },
};
