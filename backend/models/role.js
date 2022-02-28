'use strict';
const Role = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_name: {type: DataTypes.STRING, allowNull: false},
  },
  {
    timestamps: false,
  });

  Role.associate = (models) => {
    Role.hasOne(models.User, {
      foreignKey: 'id',
      as: 'role',
    });
  };

  return Role;
};

module.exports = Role;
