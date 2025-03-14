// routes/index.js
const express = require('express');
const router = express.Router();
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const reportController = require('../controllers/reportController');
const userController = require('../controllers/userController');

// Middleware
const requireAuth = ClerkExpressRequireAuth();

// User routes
router.get('/profile', requireAuth, userController.getUserProfile);
router.get('/metrics', userController.getCommunityMetrics);

// Report routes
router.post('/reports', requireAuth, reportController.createReport);
router.get('/reports', reportController.getAllReports);
router.get('/reports/user', requireAuth, reportController.getUserReports);
router.get('/reports/near', reportController.getNearbyReports);
router.get('/reports/:id', reportController.getReportById);
router.put('/reports/:id/status', requireAuth, reportController.updateReportStatus);

module.exports = router;