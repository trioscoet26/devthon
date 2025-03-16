import { useEffect, useState } from "react";

const ApproveReport = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch users and reports data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const [usersResponse, reportsResponse] = await Promise.all([
          fetch(`${API_URL}/allusers`),
          fetch(`${API_URL}/charts`),
        ]);

        if (!usersResponse.ok || !reportsResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const [usersData, reportsData] = await Promise.all([
          usersResponse.json(),
          reportsResponse.json(),
        ]);

        setUsers(Array.isArray(usersData) ? usersData : []);
        setReports(Array.isArray(reportsData) ? reportsData : []);
      } catch (err) {
        console.error("Error fetching data", err);
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  // Handle status change for a report
  const handleStatusChange = async (reportId, currentStatus) => {
    const newStatus = currentStatus === "pending" ? "accepted" : "pending";
    try {
      const response = await fetch(`${API_URL}/reports/${reportId}/${newStatus}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      // Update the reports state with the new status
      setReports((prevReports) =>
        prevReports.map((report) =>
          report._id === reportId ? { ...report, status: newStatus } : report
        )
      );
    } catch (err) {
      console.error("Error updating status", err);
      setError("Failed to update status. Please try again.");
    }
  };

  // Render loading state
  if (loading) {
    return <p className="text-center text-lg text-white">Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  // Render the main table
  return (
    <div className="p-4 overflow-x-auto bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Approve Reports</h2>
      <div className="rounded-lg shadow-2xl overflow-hidden border border-gray-900">
        <table className="min-w-full bg-gray-800 text-md m-2">
          <thead>
            <tr className="bg-gray-750 shadow-lg">
              <th className="border border-gray-700 p-3 text-left">User ID</th>
              <th className="border border-gray-700 p-3 text-left">Location</th>
              <th className="border border-gray-700 p-3 text-left">Green Coins</th>
              <th className="border border-gray-700 p-3 text-left">Waste Type</th>
              <th className="border border-gray-700 p-3 text-left">Estimated Qty</th>
              <th className="border border-gray-700 p-3 text-left">Location Type</th>
              <th className="border border-gray-700 p-3 text-left">Location</th>
              <th className="border border-gray-700 p-3 text-left">Coins Earned</th>
              <th className="border border-gray-700 p-3 text-left">Status</th>
              <th className="border border-gray-700 p-3 text-left">Accept</th>
            </tr>
          </thead>
          <tbody>
            {reports.length > 0 ? (
              reports.map((report) => {
                const user = users.find((u) => u.clerkId === report.user) || {};
                return (
                  <tr
                    key={report._id}
                    className="hover:bg-gray-750 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-sm"
                  >
                    <td className="border border-gray-700 p-3">{user.clerkId || "N/A"}</td>
                    <td className="border border-gray-700 p-3">{user.location || "N/A"}</td>
                    <td className="border border-gray-700 p-3">{user.greenCoins || "N/A"}</td>
                    <td className="border border-gray-700 p-3">{report.waste_type}</td>
                    <td className="border border-gray-700 p-3">{report.estimated_quantity}</td>
                    <td className="border border-gray-700 p-3">{report.location_type}</td>
                    <td className="border border-gray-700 p-3">{report.location}</td>
                    <td className="border border-gray-700 p-3">{report.coinsEarned}</td>
                    <td className="border border-gray-700 p-3 font-semibold">
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </td>
                    <td className="border border-gray-700 p-3">
                      <input
                        type="checkbox"
                        checked={report.status === "accepted"}
                        onChange={() => handleStatusChange(report._id, report.status)}
                        className="cursor-pointer w-5 h-5 rounded-md border-gray-600 bg-gray-700 focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={10} className="border border-gray-700 p-4 text-center text-gray-400">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveReport;