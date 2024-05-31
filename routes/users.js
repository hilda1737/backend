// // routes/users.js
// const express = require('express');
// const router = express.Router();
// const {
//   createUser,
//   getUsers,
//   getUserById,
//   updateUser,
//   deleteUser
// } = require('../Controllers/usersController');

// router.post('/', createUser);
// router.get('/', getUsers);
// router.get('/:id', getUserById);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

// module.exports = router;
// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/users');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new user
router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT (update) a user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.username = username;
    user.email = email;
    user.password = password;
    await user.save();
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
