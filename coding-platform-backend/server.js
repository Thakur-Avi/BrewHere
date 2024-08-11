const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const rateLimiter = require('./middlewares/rateLimiter');
const codeRoutes = require('./routes/codeRoutes');
const authRoutes = require('./routes/authRoutes');
const contestRoutes = require('./routes/contestRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(logger); // Logging
app.use(rateLimiter); // Rate Limiting
app.use(express.json()); // Parse incoming JSON requests

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use routes
app.use('/api/auth', authRoutes);
// app.use('/api/contests', contestRoutes);
app.use('/api/code', codeRoutes);

// Error Handling
app.use(errorHandler);

// Define port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
