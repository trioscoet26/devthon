import Listing from "../models/Listing.js";

// ✅ Get all listings
export const getListings = async (req, res) => {
  try {
    const { materialType, search } = req.query;
    let query = {};

    // Filter by material type
    if (materialType && materialType !== "All Materials") {
      query.materialType = materialType;
    }

    // Search by title or description
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const listings = await Listing.find(query)
      .populate("user", "username displayName profileImageUrl")
      .sort({ createdAt: -1 });

    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Get listing by ID
export const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate(
      "user",
      "username displayName profileImageUrl location"
    );

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Create a new listing
export const createListing = async (req, res) => {
  try {
    const { title, description, materialType, quantity, unit, price, location, imageUrl } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const newListing = await Listing.create({
      title,
      description,
      materialType,
      quantity,
      unit,
      price,
      location,
      imageUrl,
      user: req.user._id,
      isInDemand: ["Plastic", "Metal"].includes(materialType), // Example logic for in-demand materials
    });

    await newListing.populate("user", "username displayName profileImageUrl");

    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Update listing
export const updateListing = async (req, res) => {
  try {
    const { title, description, materialType, quantity, unit, price, location, status, imageUrl } = req.body;

    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    // Check if user owns this listing
    if (listing.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this listing" });
    }

    listing.title = title || listing.title;
    listing.description = description || listing.description;
    listing.materialType = materialType || listing.materialType;
    listing.quantity = quantity || listing.quantity;
    listing.unit = unit || listing.unit;
    listing.price = price || listing.price;
    listing.location = location || listing.location;
    listing.status = status || listing.status;
    listing.imageUrl = imageUrl || listing.imageUrl;

    const updatedListing = await listing.save();
    await updatedListing.populate("user", "username displayName profileImageUrl");

    res.status(200).json(updatedListing);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Delete listing
export const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    // Check if user owns this listing
    if (listing.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this listing" });
    }

    await listing.deleteOne();

    res.status(200).json({ message: "Listing removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Get user listings
export const getUserListings = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const listings = await Listing.find({ user: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
