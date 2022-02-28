'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_name: {type: DataTypes.STRING, allowNull: false},
    user_email: {type: DataTypes.STRING, allowNull: false},
    user_password: {type: DataTypes.STRING, allowNull: false},
    user_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: 'user_role',
      as: 'role',
    });
  };

  return User;
};

module.exports = User;
