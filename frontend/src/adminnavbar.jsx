import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // ✅ Remove admin state from storage
    setIsAdmin(false); // ✅ Reset admin state
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <div>
        <Link to="/admin-dashboard" className="mr-4">Dashboard</Link>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
