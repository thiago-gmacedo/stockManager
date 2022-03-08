'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Roles', [
    {
      id: 1,
      role_name: 'admin',
    },
    {
      id: 2,
      role_name: 'seller',
    },
    {
      id: 3,
      role_name: 'customer',
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface
      .bulkDelete('Roles', null, {}),
};
