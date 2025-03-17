import React, { useState } from "react";
import Charts from "./charts";
import ApproveReport from "./ApproveReport";
import CreateListing from "./CreateListing";
import { BarChart2, FileText, ShoppingBag, Map } from "lucide-react";

function Sidebar({ setActiveComponent }) {
  const menuItems = [
    { icon: BarChart2, text: "Charts", component: "Charts" },
    { icon: FileText, text: "Reports", component: "ApproveReport" },
    { icon: ShoppingBag, text: "Marketplace", component: "Marketplace" },
    { icon: Map, text: "Maps", component: "Maps" },
  ];

  return (
    <div className="w-64   bg-black border-r border-gray-700 shadow-lg">
      <div className="p-4">
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.text}>
                <button
                  onClick={() => setActiveComponent(item.component)}
                  className="flex items-center space-x-4 p-3 w-full text-left rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-gray-400 hover:text-white" />
                  <span className="text-lg">{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Charts");

  return (
    <div className="bg-black  flex ">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 flex flex-col  bg-black">
        <main className="flex-1  bg-black text-white px-8">
          {activeComponent === "Charts" && <Charts />}
          {activeComponent === "ApproveReport" && <ApproveReport />}
          {activeComponent === "Marketplace" &&  <CreateListing />}
          {activeComponent === "Maps" && <div>Maps Component</div>}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
