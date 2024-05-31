const express = require('express');
const { initDB } = require('./models');
const expensesRouter = require('./routes/expenses');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/expenses', expensesRouter);

// Initialize the database and start the server
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
});
