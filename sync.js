// sync.js
const sequelize = require('./Config/database');
const User = require('./models/users');
const Category = require('./models/categories');
const Expense = require('./models/expense');
const Budget = require('./models/budget');

(async () => {
  await sequelize.sync({ force: true });
  console.log("Database synced!");
})();
