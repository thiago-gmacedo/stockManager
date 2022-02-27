'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface
      .bulkInsert('Categories', [
        {
          id: 1,
          category_name: 'Electronics',
        },
        {
          id: 2,
          category_name: 'Clothing',
        },
        {
          id: 3,
          category_name: 'Books',
        },
        {
          id: 4,
          category_name: 'Cables',
        },
        {
          id: 5,
          category_name: 'Games',
        },
      ]),

  down: async (queryInterface, Sequelize) => queryInterface
      .bulkDelete('Categories', null, {}),
};
