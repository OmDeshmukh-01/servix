const jwt = require('jsonwebtoken');

// Middleware to check if user is authenticated
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token.'
    });
  }
};

// Middleware to check if user is a customer (role: 'user')
const isCustomer = (req, res, next) => {
  if (req.user.role !== 'user') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Customers only.'
    });
  }
  next();
};

// Middleware to check if user is a service provider (role: 'provider')
const isProvider = (req, res, next) => {
  if (req.user.role !== 'provider') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Service providers only.'
    });
  }
  next();
};

module.exports = {
  authenticate,
  isCustomer,
  isProvider
};
