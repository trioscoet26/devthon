import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const API_URL = import.meta.env.VITE_API_URL;

const Charts = () => {
    const [wasteTypeData, setWasteTypeData] = useState(null);
    const [wasteFrequencyData, setWasteFrequencyData] = useState(null);
    const [wasteQuantityData, setWasteQuantityData] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [locationPieData, setLocationPieData] = useState(null);
    const [heatmapData, setHeatmapData] = useState(null);
    const [cityMarkers, setCityMarkers] = useState([]); // Stores city locations
    useEffect(() => {
        fetch(`${API_URL}/charts`)
            .then((response) => response.json())
            .then((data) => {
                const wasteCounts = {};
                const cityCounts = {};
                const wasteTypeCounts = {};
                const locationCounts = {};
                const heatmapCounts = {};
                const cityMap = {}; // Store unique cities with their lat/lng

                data.forEach((report) => {
                    wasteTypeCounts[report.waste_type] = (wasteTypeCounts[report.waste_type] || 0) + 1;
                    wasteCounts[report.waste_type] = (wasteCounts[report.waste_type] || 0) + 1;

                    cityCounts[report.location] = (cityCounts[report.location] || 0) + 1;

                    const quantityKey = `${report.waste_type}-${report.estimated_quantity}`;
                    wasteCounts[quantityKey] = (wasteCounts[quantityKey] || 0) + 1;

                    const locationKey = `${report.location_type}-${report.waste_type}`;
                    locationCounts[locationKey] = (locationCounts[locationKey] || 0) + 1;

                    const heatKey = `${report.location_type}-${report.waste_type}`;
                    heatmapCounts[heatKey] = (heatmapCounts[heatKey] || 0) + 1;

                    // Store unique cities with lat/lng
                    if (report.latitude && report.longitude) {
                      if (!cityMap[report.location]) {
                          cityMap[report.location] = {
                              lat: report.latitude,
                              lng: report.longitude,
                              reports: 1,
                              types: new Set([report.waste_type]), // Unique waste types in city
                          };
                      } else {
                          cityMap[report.location].reports += 1;
                          cityMap[report.location].types.add(report.waste_type);
                      }
                  }
                });

                setWasteTypeData({
                    labels: Object.keys(wasteTypeCounts),
                    datasets: [
                        {
                            label: "Waste Type Distribution",
                            data: Object.values(wasteTypeCounts),
                            backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0", "#9966ff"],
                        },
                    ],
                });

                setLocationPieData({
                    labels: Object.keys(cityCounts),
                    datasets: [
                        {
                            label: "Waste Report Location Distribution",
                            data: Object.values(cityCounts),
                            backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0", "#9966ff"],
                        },
                    ],
                });

                setWasteFrequencyData({
                    labels: Object.keys(wasteCounts),
                    datasets: [
                        {
                            label: "Waste Frequency",
                            data: Object.values(wasteCounts),
                            backgroundColor: "#36a2eb",
                        },
                    ],
                });

                setWasteQuantityData({
                    labels: [...new Set(data.map((report) => report.waste_type))],
                    datasets: [
                        {
                            label: "Small",
                            data: data.map((report) => (report.estimated_quantity === "small" ? 1 : 0)),
                            backgroundColor: "#ff6384",
                        },
                        {
                            label: "Medium",
                            data: data.map((report) => (report.estimated_quantity === "medium" ? 1 : 0)),
                            backgroundColor: "#36a2eb",
                        },
                        {
                            label: "Large",
                            data: data.map((report) => (report.estimated_quantity === "large" ? 1 : 0)),
                            backgroundColor: "#ffcd56",
                        },
                        {
                            label: "Very Large",
                            data: data.map((report) => (report.estimated_quantity === "very large" ? 1 : 0)),
                            backgroundColor: "#4bc0c0",
                        },
                    ],
                });

                setLocationData({
                    labels: [...new Set(data.map((report) => report.location_type))],
                    datasets: [...new Set(data.map((report) => report.waste_type))].map((wasteType) => ({
                        label: wasteType,
                        data: data.map((report) => (report.waste_type === wasteType ? 1 : 0)),
                        backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
                    })),
                });

                setHeatmapData({
                    labels: [...new Set(data.map((report) => report.location_type))],
                    datasets: [
                        {
                            label: "Heatmap",
                            data: Object.values(heatmapCounts),
                            backgroundColor: "#ff5733",
                        },
                    ],
                });

                //  Convert cityMap to an array of markers
                setCityMarkers(Object.values(cityMap));
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 text-white">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center mb-4">Waste Type Distribution</h2>
                {wasteTypeData ? <Pie data={wasteTypeData} /> : <p className="text-center">Loading...</p>}
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center mb-4">Location Type Distribution</h2>
                {locationPieData ? <Pie data={locationPieData} /> : <p className="text-center">Loading...</p>}
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center mb-4">Waste Type Frequency</h2>
                {wasteFrequencyData ? <Bar data={wasteFrequencyData} options={{ scales: { y: { beginAtZero: true, ticks: { stepSize: 10 } } } }} /> : <p className="text-center">Loading...</p>}
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center mb-4">Waste Quantity Distribution</h2>
                {wasteQuantityData ? <Bar data={wasteQuantityData} options={{ scales: { y: { beginAtZero: true, ticks: { stepSize: 10 } } } }} /> : <p className="text-center">Loading...</p>}
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center mb-4">Location Type vs Waste Reports</h2>
                {locationData ? <Bar data={locationData} options={{ scales: { y: { beginAtZero: true, ticks: { stepSize: 10 } } } }} /> : <p className="text-center">Loading...</p>}
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center mb-4">Waste Type vs Location Type (Heatmap)</h2>
                {heatmapData ? <Bar data={heatmapData} options={{ scales: { y: { beginAtZero: true, ticks: { stepSize: 10 } } } }} /> : <p className="text-center">Loading...</p>}
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-center mb-4">Reported Waste Locations (Map)</h2>
                <MapContainer center={[20, 78]} zoom={5} className="h-96 w-full rounded-lg">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {cityMarkers.map((city, index) => (
                        <Marker key={index} position={[city.lat, city.lng]}>
                            <Popup>
                                <strong>City:</strong> {city.name} <br />
                                <strong>Total Reports:</strong> {city.reports} <br />
                                <strong>Waste Types:</strong> {Array.from(city.types).join(", ")}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Charts;
