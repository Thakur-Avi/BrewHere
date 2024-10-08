const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Adjust the path as needed

// Function to generate a JWT token
const generateToken = async () => {
  try {
    // Create or find a user
    let user = await User.findOne({});
    if (!user) {
      user = new User();
      await user.save();
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user.userId },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Return the generated token to the client
    return token;
  } catch (error) {
    throw new Error('Failed to generate token');
  }
};

// Middleware to verify JWT token
const authenticateJWT = (req, res, next) => {
  console.log(req.body);
  const token = req.cookies['auth-token'] || req.headers['authorization']?.split(' ')[1];

  if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }
          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};
module.exports = { generateToken, authenticateJWT };
