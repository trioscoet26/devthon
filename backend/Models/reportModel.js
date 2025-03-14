import mongoose from "mongoose";

const reportDataSchema = new mongoose.Schema({
  waste_type: {
    type: String,
    enum: [
      "plastic",
      "paper",
      "glass",
      "metal",
      "electronic",
      "organic",
      "construction",
      "hazardous",
      "other",
    ],
    required: true,
  },
  estimated_quantity: {
    type: String,
    enum: [
      "small", // < 5kg
      "medium", // 5-20kg
      "large", // 20-100kg
      "very-large", // > 100kg
    ],
    required: true,
  },
  location_type: {
    type: String,
    enum: [
      "street", // Street/Sidewalk
      "park", // Park/Garden
      "beach", // Beach/Waterfront
      "forest", // Forest/Natural Area
      "residential", // Residential Area
      "commercial", // Commercial Area
      "other", // Other
    ],
    required: true,
  },
  location_address: { type: String, required: true },
  use_current_location: { type: Boolean, required: true },
  description: { type: String, required: true },
});

const reportDataModel =
  mongoose.models.wasteData || mongoose.model("wasteData", reportDataSchema);

export default reportDataModel;
