// models/category.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Category;
