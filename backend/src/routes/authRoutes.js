const express = require('express');
const router = express.Router();
const { register, login, refreshToken, logout, getMe } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/validation');
const { validate } = require('../middleware/validation');
const { authenticate } = require('../middleware/roleAuth');

// Register user
router.post('/register', validateRegister, register);

// Login user
router.post('/login', validateLogin, login);

// Refresh token
router.post('/refresh', refreshToken);

// Logout user
router.post('/logout', logout);

// Get current user
router.get('/me', authenticate, getMe);

module.exports = router;
