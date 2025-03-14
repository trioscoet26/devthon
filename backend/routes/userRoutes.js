const express = require('express');
const { getUserProfile } = require('../controllers/userController');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const router = express.Router();

// Protect all routes with Clerk authentication
router.use(ClerkExpressRequireAuth());

// User routes
router.get('/profile', getUserProfile);

module.exports = router;