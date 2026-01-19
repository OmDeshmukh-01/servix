const { validationResult, body } = require('express-validator');

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  
  next();
};

// User registration validation
const validateRegister = [
  // Name validation
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  // Email validation
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  
  // Password validation
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  
  // Role validation (optional)
  body('role')
    .optional()
    .isIn(['user', 'provider'])
    .withMessage('Role must be either user or provider')
];

// User login validation
const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

// User profile update validation
const validateProfileUpdate = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  body('phone')
    .optional()
    .trim()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  
  body('location')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Location cannot exceed 100 characters'),
  
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Bio cannot exceed 500 characters')
];

// Service creation validation
const validateService = [
  body('name')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Service name must be between 3 and 100 characters'),
  
  body('category')
    .isIn(['plumbing', 'cleaning', 'electrical', 'painting', 'pest', 'hvac', 'carpentry', 'landscaping', 'roofing', 'flooring'])
    .withMessage('Please select a valid category'),
  
  body('description')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters'),
  
  body('priceRange.min')
    .isNumeric()
    .withMessage('Minimum price must be a number'),
  
  body('priceRange.max')
    .isNumeric()
    .withMessage('Maximum price must be a number'),
  
  body('location')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Location must be between 3 and 100 characters')
];

// Booking creation validation
const validateBooking = [
  body('service')
    .isMongoId()
    .withMessage('Valid service ID is required'),
  
  body('date')
    .isISO8601()
    .withMessage('Please provide a valid date'),
  
  body('time')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage('Please provide a valid time in HH:MM format'),
  
  body('duration')
    .isNumeric()
    .withMessage('Duration must be a number'),
  
  body('location')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Location must be between 3 and 100 characters')
];

// Opportunity creation validation
const validateOpportunity = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  
  body('category')
    .isIn(['carpentry', 'electrical', 'plumbing', 'painting', 'cleaning', 'hvac', 'landscaping', 'roofing', 'flooring'])
    .withMessage('Please select a valid category'),
  
  body('description')
    .trim()
    .isLength({ min: 20, max: 1000 })
    .withMessage('Description must be between 20 and 1000 characters'),
  
  body('budget.min')
    .isNumeric()
    .withMessage('Minimum budget must be a number'),
  
  body('budget.max')
    .isNumeric()
    .withMessage('Maximum budget must be a number'),
  
  body('location')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Location must be between 3 and 100 characters'),
  
  body('deadline')
    .isISO8601()
    .withMessage('Please provide a valid deadline')
];

module.exports = {
  validate,
  validateRegister,
  validateLogin,
  validateProfileUpdate,
  validateService,
  validateBooking,
  validateOpportunity
};
