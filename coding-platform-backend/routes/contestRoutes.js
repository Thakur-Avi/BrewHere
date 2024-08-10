const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../utils/auth');

// Example protected route
router.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = router;
