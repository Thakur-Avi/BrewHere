const express = require('express');
const router = express.Router();
const codeController = require('../controllers/codeController');
const { authenticateJWT } = require('../utils/auth');
const sanitizeCode = require('../middlewares/sanitizeCode');

router.post('/submit', authenticateJWT, sanitizeCode, codeController.submitCode);
router.get('/submissions', authenticateJWT, codeController.getCodeSubmissions);

module.exports = router;