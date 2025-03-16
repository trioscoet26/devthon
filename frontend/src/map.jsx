import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import sampleImage from "./sample.png"// Adjust the path as needed
import { useState } from "react";
import OpenCameraButton from "./OpenCameraButton";
import OpenImageVideo from "./OpenImageVideo";
// Custom Red Marker Icon
const redIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1673/1673221.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});



// Garbage dump locations in Amravati
const garbageLocations = [
  { id: 1, lat: 20.9374, lng: 77.7796, description: "Overflowing bins near Rajapeth" },
  { id: 2, lat: 20.9245, lng: 77.7550, description: "Illegal dumping at Badnera Road" },
  { id: 3, lat: 20.9270, lng: 77.7778, description: "Waste pileup near Maltekdi" },
  { id: 4, lat: 20.9321, lng: 77.7633, description: "Garbage accumulation near Gadge Nagar" },
  { id: 5, lat: 20.9423, lng: 77.7725, description: "Unattended waste near Rathi Nagar" },
];

const OpenAllPopups = () => {
  const map = useMap();

  useEffect(() => {
    garbageLocations.forEach((garbage) => {
      const marker = L.marker([garbage.lat, garbage.lng], { icon: redIcon }).addTo(map);
      const popup = L.popup({ autoClose: false, closeOnClick: false })
        .setLatLng([garbage.lat, garbage.lng])
        .setContent(`<span style="font-weight: bold;">🗑️ ${garbage.description}</span>`);
      marker.bindPopup(popup).openPopup();
    });
  }, [map]);

  return null;
};
export default function Map() {


  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  return (
    <div>
      <section id="map-interface" className="py-16 bg-white dark:bg-neutral-800">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
        Interactive Map Interface
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        View and manage detected garbage locations with our intuitive mapping
        system.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Map Demo Container */}
      <div className="lg:w-2/3 w-full bg-gray-100 dark:bg-neutral-700 rounded-xl shadow-lg overflow-hidden">
        {/* Map Header */}
        <div className="bg-gray-200 dark:bg-neutral-600 p-4 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800 dark:text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Live Map View
          </h3>
          <div className="flex items-center">
            <button
              id="map-refresh-btn"
              className="p-2 hover:bg-gray-300 dark:hover:bg-neutral-500 rounded-full transition"
              title="Refresh map"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
            <button
              id="map-fullscreen-btn"
              className="p-2 hover:bg-gray-300 dark:hover:bg-neutral-500 rounded-full transition ml-2"
              title="Toggle fullscreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Map Container */}
        <div
          id="map"
          className="h-96 w-full bg-gray-50 dark:bg-neutral-900 relative overflow-hidden"
        >
          {/* Loading State */}
          <MapContainer center={[20.9374, 77.7796]} zoom={3} style={{ height: "90vh", width: "90vw" }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <OpenAllPopups />
//       </MapContainer>
          {/* Map Controls (Shown when map loads) */}
          <div
            className="absolute bottom-4 right-4 flex-col space-y-2 hidden"
            id="map-controls"
          >
            <button className="bg-white dark:bg-neutral-700 shadow-md hover:bg-gray-100 dark:hover:bg-neutral-600 p-2 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <button className="bg-white dark:bg-neutral-700 shadow-md hover:bg-gray-100 dark:hover:bg-neutral-600 p-2 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 12H6"
                />
              </svg>
            </button>
            <button className="bg-white dark:bg-neutral-700 shadow-md hover:bg-gray-100 dark:hover:bg-neutral-600 p-2 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Map Info Panel */}
        <div className="p-4 bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Location status:{" "}
                <span id="location-status">Waiting for detection</span>
              </span>
            </div>
            <button
              id="recenter-map"
              className="text-sm text-green-500 hover:text-green-600 dark:hover:text-green-400 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Re-center Map
            </button>
          </div>
          {/* Coordinates Display */}
          <div
            id="coordinates-display"
            className="mt-3 p-3 bg-gray-50 dark:bg-neutral-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 hidden"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Current Coordinates</span>
              <button
                id="copy-coords"
                className="text-xs text-green-500 hover:text-green-600 dark:hover:text-green-400"
              >
                Copy
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-gray-500 dark:text-gray-400">
                  Latitude:
                </span>
                <span id="lat-display">--</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">
                  Longitude:
                </span>
                <span id="lng-display">--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Camera Interface */}
      <div className="lg:w-1/3 w-full">
        <div className="bg-white dark:bg-neutral-700 rounded-xl shadow-lg overflow-hidden h-full">
          <div className="bg-gray-200 dark:bg-neutral-600 p-4">
            <h3 className="font-semibold text-gray-800 dark:text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Camera Control
            </h3>
          </div>
          {/* Camera Preview */}
          <div className="p-6 flex flex-col items-center">
          <div
      id="camera-placeholder"
      className="bg-gray-100 dark:bg-neutral-600 h-48 w-full rounded-lg flex items-center justify-center mb-6"
    >
      <img src={sampleImage} alt="Uploaded" className="h-full w-full object-cover rounded-lg" />
    </div>
            {/* Hidden video element for camera feed */}
            <video
              id="camera-feed"
              className="hidden h-48 w-full rounded-lg object-cover mb-6"
              autoPlay=""
            />
            {/* Captured image will be shown here */}
            <canvas
              id="capture-canvas"
              className="hidden h-48 w-full rounded-lg object-cover mb-6"
            />
            {/* Camera Controls */}
            <div className="grid grid-cols-1 gap-4 w-full">
            {/* <button
        id="open-camera-btn"
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Open Camera
      </button> */}
      <OpenCameraButton />
      
      <OpenImageVideo />
      {/* Capture Photo Button */}
      <button
        id="capture-btn"
        className="hidden bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
          />
        </svg>
        Take Photo
      </button>


      {/* Upload File Button */}
      {/* <label className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-105">
        <input
          type="file"
          accept=".png,.jpeg,.jpg,.mp4"
          onChange={handleFileChange}
          className="hidden"
        />
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 mr-2"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M5 10l7-7m0 0l7 7m-7-7v14"
  />
</svg>

        Upload Image or Video (*.png/.jpeg/.jpg/.mp4)
      </label>

      {file && (
        <p className="text-white text-sm mt-2">
          Selected file: <strong>{file.name}</strong>
        </p>
      )} */}
              {/* <button
                id="detect-garbage-btn"
                className=" bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Detect &amp; Map
              </button> */}
              
            </div>
            {/* Status Messages */}
            <div
              id="camera-status"
              className="mt-4 w-full text-center text-sm text-gray-600 dark:text-gray-300"
            >
              Click "Open Camera" to begin the detection process
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Instructions */}
    <div className="mt-12 bg-gray-50 dark:bg-neutral-700 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        How to Use This Interface
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500">
              <span className="text-lg font-bold">1</span>
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white">
              Open Camera
            </h4>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Click the "Open Camera" button to activate your device's camera.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500">
              <span className="text-lg font-bold">2</span>
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white">
              Capture Photo
            </h4>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Take a photo of the garbage site with the "Take Photo" button.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500">
              <span className="text-lg font-bold">3</span>
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white">
              Detect &amp; Map
            </h4>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              The system will automatically fetch your location and add it to
              the map.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

























// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Custom Red Marker Icon
// const redIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/1673/1673221.png",
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -35],
// });

// // Garbage dump locations in Amravati
// const garbageLocations = [
//   { id: 1, lat: 20.9374, lng: 77.7796, description: "Overflowing bins near Rajapeth" },
//   { id: 2, lat: 20.9245, lng: 77.7550, description: "Illegal dumping at Badnera Road" },
//   { id: 3, lat: 20.9270, lng: 77.7778, description: "Waste pileup near Maltekdi" },
//   { id: 4, lat: 20.9321, lng: 77.7633, description: "Garbage accumulation near Gadge Nagar" },
//   { id: 5, lat: 20.9423, lng: 77.7725, description: "Unattended waste near Rathi Nagar" },
// ];

// const OpenAllPopups = () => {
//   const map = useMap();

//   useEffect(() => {
//     garbageLocations.forEach((garbage) => {
//       const marker = L.marker([garbage.lat, garbage.lng], { icon: redIcon }).addTo(map);
//       const popup = L.popup({ autoClose: false, closeOnClick: false })
//         .setLatLng([garbage.lat, garbage.lng])
//         .setContent(`<span style="font-weight: bold;">🗑️ ${garbage.description}</span>`);
//       marker.bindPopup(popup).openPopup();
//     });
//   }, [map]);

//   return null;
// };

// export default function MapComponent() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <MapContainer center={[20.9374, 77.7796]} zoom={13} style={{ height: "90vh", width: "90vw" }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <OpenAllPopups />
//       </MapContainer>
//     </div>
//   );
// }
