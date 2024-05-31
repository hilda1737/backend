// models/expense.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const Expense = sequelize.define('Expense', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Add other attributes as needed
});

module.exports = Expense;
