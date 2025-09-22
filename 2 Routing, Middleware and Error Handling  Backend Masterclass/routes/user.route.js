const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController.js');
const router = express.Router();

// Crud Routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;