const express = require('express');
const router = express.Router();
const { generateToken } = require('../utils/auth');

// Route to log in and generate a JWT token
router.get('/login', async (req, res) => {
  try {
    const token = await generateToken();
    res.cookie('auth-token', token, { httpOnly: true, secure: true }); // Set the token in a cookie
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
