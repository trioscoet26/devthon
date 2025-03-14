import User from "../models/userModel.js";

export const save = async (req, res) => {
  try {
    const { type, data } = req.body; // Get event type and user data

    if (type === "user.created") {
      const { id, first_name, last_name, email_addresses } = data;

      const email = email_addresses[0]?.email_address;

      // Check if user already exists
      let user = await User.findOne({ clerkId: id });

      if (!user) {
        user = new User({
          clerkId: id,
          name: `${first_name} ${last_name}`,
          email,
          totalCoins: 0,
          reports: [],
        });

        await user.save();
      }

      return res.status(200).json({ message: "User saved successfully", user });
    }

    return res.status(400).json({ message: "Invalid event type" });
  } catch (error) {
    return res.status(500).json({ message: "Error processing webhook", error: error.message });
  }
};
