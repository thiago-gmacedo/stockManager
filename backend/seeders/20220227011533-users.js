'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      id: 2,
      user_name: 'John',
      user_password: '$2a$10$X',
      user_email: 'aaaaa@gmail.com',
      user_role: 1,
    },
    {
      id: 1,
      user_name: 'John',
      user_password: '$2a$10$X',
      user_email: 'aaaaa@gmail.com',
      user_role: 2,
    },
    {
      id: 3,
      user_name: 'John',
      user_password: '$2a$10$X',
      user_email: 'aaaaa@gmail.com',
      user_role: 3,
    },
    {
      id: 4,
      user_name: 'John',
      user_password: '$2a$10$X',
      user_email: 'aaaaa@gmail.com',
      user_role: 3,
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface
      .bulkDelete('Users', null, {}),
};
