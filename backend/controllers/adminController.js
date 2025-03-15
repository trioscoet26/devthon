import Report from "../Models/Report.js";

// get all data for pie chart
export const getAllData = async (req, res) => {
  try {
    const reports = await Report.find({});

    if (!reports) {
      res.status(404).json({ message: "reports not found.!" });
    }
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
