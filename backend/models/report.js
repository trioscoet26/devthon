const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    wasteType: { type: String, required: true },
    wasteQuantity: { type: String, required: true },
    locationType: { type: String, required: true },
    locationAddress: { type: String, required: true },
    useCurrentLocation: { type: Boolean, default: false },
    description: { type: String },
    status: { type: String, enum: ["Pending", "Reviewed", "Resolved"], default: "Pending" },
    greenCoinsEarned: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);
