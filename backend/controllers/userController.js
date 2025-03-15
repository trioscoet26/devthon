import User from "../models/User.js";

// ✅ Get current user profile
export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const { username, email, displayName, location, profileImageUrl } = req.body;

    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (username) req.user.username = username;
    if (email) req.user.email = email;
    if (displayName) req.user.displayName = displayName;
    if (location) req.user.location = location;
    if (profileImageUrl) req.user.profileImageUrl = profileImageUrl;

    await req.user.save();

    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Add green coins to user
export const addGreenCoins = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user.greenCoins += parseInt(amount);
    await req.user.save();

    res.status(200).json({ greenCoins: req.user.greenCoins });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
