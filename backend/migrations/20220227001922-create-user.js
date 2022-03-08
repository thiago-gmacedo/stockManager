'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
