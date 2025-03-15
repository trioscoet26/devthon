import express from "express";
import { requireAuth, attachUser } from "../middleware/authMiddleware.js";
import { getCurrentUser, updateUserProfile, addGreenCoins } from "../controllers/userController.js";

const router = express.Router();

// ✅ Protected routes
router.get("/me", requireAuth, attachUser, getCurrentUser);
router.put("/profile", requireAuth, attachUser, updateUserProfile);
router.post("/green-coins", requireAuth, attachUser, addGreenCoins);

export default router;
