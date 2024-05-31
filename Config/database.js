// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
