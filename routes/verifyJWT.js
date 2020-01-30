const jwt = require('jsonwebtoken');

// Middleware function to verify JWT
function verifyJWT(req, res, next) {
  const token = req.header('jwt-auth-token');
  if (!token) return res.status(401).send('Access Denied!');

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(400).send('Invalid JWT!');
  }
}

module.exports = verifyJWT;
