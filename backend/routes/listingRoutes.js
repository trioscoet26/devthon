import express from "express";
import { requireAuth, attachUser } from "../middleware/authMiddleware.js";
import {
  getListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing,
  getUserListings,
} from "../controllers/listingController.js";

const router = express.Router();

// Public routes
router.get("/", getListings);
router.get("/:id", getListingById);

// Protected routes
router.post("/", requireAuth, attachUser, createListing);
router.put("/:id", requireAuth, attachUser, updateListing);
router.delete("/:id", requireAuth, attachUser, deleteListing);
router.get("/user/me", requireAuth, attachUser, getUserListings);

export default router;
