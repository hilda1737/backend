// 
// routes/expenses.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');
const User = require('../models/users');
const Category = require('../models/categories');

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      include: [User, Category]
    });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new expense
router.post('/', async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an expense
router.put('/:id', async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (expense) {
      await expense.update(req.body);
      res.json(expense);
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an expense
router.delete('/:id', async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (expense) {
      await expense.destroy();
      res.json({ message: 'Expense deleted' });
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
