'use strict';
const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_name: {type: DataTypes.STRING, allowNull: false},
  },
  {
    timestamps: false,
  });

  Category.associate = (models) => {
    Category.hasOne(models.Product, {
      foreignKey: 'id',
      as: 'category',
    });
  };

  return Category;
};


module.exports = Category;
