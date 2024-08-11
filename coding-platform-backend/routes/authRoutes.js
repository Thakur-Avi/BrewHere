const express = require('express');
const router = express.Router();
const { generateToken } = require('../utils/auth');

// Route to generate a JWT token
router.get('/token', async (req, res) => {
  try {
    const token = await generateToken();
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
