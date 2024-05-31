// // app.js
// const express = require('express');
// const app = express();
// const sequelize = require('./Config/database');
// const usersRoutes = require('./routes/users');
// const expensesRoutes = require('./routes/expense');
// const budgetRoutes = require('./routes/budgets');

// const Budget = require('./models/budget');

// // Middleware
// app.use(express.json()); // for parsing application/json

// // Routes
// app.use('/api/users', usersRoutes);
// app.use('/api/expenses', expensesRoutes);
// app.use('/api/budgets', budgetRoutes);

// // Function to insert sample data
// const insertSampleData = async () => {
//     try {
//       await Budget.create({ category: 'Food', amount: 500 });
//       await Budget.create({ category: 'Entertainment', amount: 300 });
//       console.log('Sample data inserted');
//     } catch (error) {
//       console.error('Error inserting sample data:', error);
//     }
//   };






// // Start the server
// const PORT = process.env.PORT || 3000;
// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });


// app.js
const express = require('express');
const sequelize = require('./Config/database');
const budgetRoutes = require('./routes/budgets');
const usersRoutes = require('./routes/users');
const expenseRoutes = require('./routes/expense');
const Budget = require('./models/budget');
const Expense = require('./models/expense');
const User = require('./models/users');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/budgets', budgetRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/users', usersRoutes);
// Function to insert sample data
const insertSampleData = async () => {
  try {
    await Budget.create({ category: 'Food', amount: 500 });
    await Budget.create({ category: 'Entertainment', amount: 300 });
    await Expense.create({ description: 'Groceries', amount: 150, date: new Date(), category: 'Food' });
    await Expense.create({ description: 'Movie', amount: 50, date: new Date(), category: 'Entertainment' });
    console.log('Sample data inserted');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
};

// Start server and sync database
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: true }).then(async () => {
  await insertSampleData();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

