import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // Clerk Auth ID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  totalCoins: { type: Number, default: 0 }, // Total coins earned
  reports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }] // Reports by the user
});

const User = mongoose.model("User", UserSchema);

export default User;
