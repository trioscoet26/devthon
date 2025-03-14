const express = require("express");
const router = express.Router();
const { createReport, getUserReports, getReportById, updateReportStatus } = require("../controllers/reportController");
const { requireAuth } = require("@clerk/express"); // Middleware to protect routes

// ✅ Create a new report (Logged-in user)
router.post("/", requireAuth(), createReport);

// ✅ Get all reports of logged-in user
router.get("/get", requireAuth(), getUserReports);

// ✅ Get a single report by ID
router.get("/:id", requireAuth(), getReportById);

// ✅ Update report status (Admin)
router.put("/:id/status", requireAuth(), updateReportStatus);

module.exports = router;
