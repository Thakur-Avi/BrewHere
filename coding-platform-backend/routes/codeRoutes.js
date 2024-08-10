const express = require('express');
const router = express.Router();
const codeController = require('../controllers/codeController');
const authenticateJWT = require('../utils/auth'); // Update the path if necessary

// Route to submit code for execution
router.post('/submit', authenticateJWT, codeController.submitCode);

module.exports = router;