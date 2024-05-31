// // routes/budgets.js
const express = require('express');
const router = express.Router();
const Budget = require('../models/budget');



// GET all budgets
router.get('/', async (req, res) => {
  try {
    const budgets = await Budget.findAll();
    console.log('Budgets fetched:', budgets); // Add this line to log the retrieved data
    res.json(budgets);
  } catch (error) {
    console.error('Error fetching budgets:', error);
    res.status(500).json({ message: 'Server Error' });
  }

});



module.exports = router;
