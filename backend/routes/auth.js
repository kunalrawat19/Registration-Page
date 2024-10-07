const express = require('express');
const router = express.Router();

// Import your handlers
const signUpHandler = require('../Controllers/singup'); // Assuming your signup handler is in a controllers folder
const signInHandler = require('../Controllers/Signin'); // Assuming your signin handler is in a controllers folder

// Define the signup route
router.post('/signup', signUpHandler);

// Define the signin route
router.post('/signin', signInHandler);

// Export the router to use in your main app
module.exports = router;
