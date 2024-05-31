// models/budget.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const Budget = sequelize.define('Budget', {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Add other attributes as needed
});

module.exports = Budget;


