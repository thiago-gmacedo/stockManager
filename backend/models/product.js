'use strict';
const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: {type: DataTypes.STRING, allowNull: false},
    product_quantity: {type: DataTypes.INTEGER, allowNull: false},
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  };

  return Product;
};

module.exports = Product;
