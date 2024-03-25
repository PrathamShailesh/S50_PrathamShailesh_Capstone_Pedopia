const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401); // No token provided
  
  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.sendStatus(403); // Token verification failed
    req.user = user; // Attach user information to the request object
    next();
  });
};

module.exports = authenticateToken;
