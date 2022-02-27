'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface
      .bulkInsert('Products', [
        {
          id: 1,
          product_name: 'teste1',
          category_id: 2,
          product_quantity: 40,
        },
        {
          id: 2,
          product_name: 'teste2',
          category_id: 1,
          product_quantity: 0,
        },
        {
          id: 3,
          product_name: 'teste3',
          category_id: 1,
          product_quantity: 30,
        },
        {
          id: 4,
          product_name: 'teste4',
          category_id: 3,
          product_quantity: 640,
        },
      ]),

  down: async (queryInterface, Sequelize) => queryInterface
      .bulkDelete('Products', null, {}),
};
