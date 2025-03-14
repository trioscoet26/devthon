const Report = require("../models/report");

// ✅ Create a new waste report
exports.createReport = async (req, res) => {
  try {
    const userId = req.user.id; // Getting logged-in user from Clerk authentication middleware
    const { wasteType, wasteQuantity, locationType, locationAddress, useCurrentLocation, description } = req.body;

    // Assign GreenCoins based on waste type & quantity
    const greenCoinsMapping = {
      small: 15,
      medium: 25,
      large: 35,
      "very-large": 50,
    };
    const greenCoinsEarned = greenCoinsMapping[wasteQuantity] || 15;

    const newReport = new Report({
      user: userId,
      wasteType,
      wasteQuantity,
      locationType,
      locationAddress,
      useCurrentLocation,
      description,
      greenCoinsEarned,
    });

    await newReport.save();
    res.status(201).json({ message: "Report submitted successfully", report: newReport });
  } catch (error) {
    res.status(500).json({ error: "Server error while submitting report" });
  }
};

// ✅ Get all reports for the logged-in user
exports.getUserReports = async (req, res) => {
  try {
    const userId = req.user.id;
    const reports = await Report.find({ user: userId }).sort({ createdAt: -1 });

    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reports" });
  }
};

// ✅ Get a single report by ID
exports.getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id).populate("user", "name email");
    if (!report) return res.status(404).json({ error: "Report not found" });

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: "Error fetching report" });
  }
};

// ✅ Update report status (Admin action)
exports.updateReportStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const report = await Report.findByIdAndUpdate(req.params.id, { status }, { new: true });

    if (!report) return res.status(404).json({ error: "Report not found" });

    res.status(200).json({ message: "Report status updated", report });
  } catch (error) {
    res.status(500).json({ error: "Error updating report status" });
  }
};
