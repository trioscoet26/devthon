/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';







// const NewListingModal = ({ isOpen, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     materialType: 'Plastic',
//     quantity: 0,
//     unit: 'kg',
//     price: 0,
//     location: '',
//     isInDemand: false,
//   });
//   const [submitting, setSubmitting] = useState(false);
//     const { getToken } = useAuth();
//     const [token, setToken] = useState(null);
  
//       // Fetch user reports
//       // Fetch token first and then trigger the API call
//     useEffect(() => {
//       const fetchToken = async () => {
//         const fetchedToken = await getToken();
//         if (fetchedToken) setToken(fetchedToken);
//       };
  
//       fetchToken();
//     }, [getToken]); 
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
    
//     try {
//       const authToken = await getToken();
//       const response = await axios.post('http://localhost:5000/api/listings', formData);
//       formData,
//       {
//         headers: {
//           'Authorization': `Bearer ${authToken}`        }
//       }
//       onSave(response.data);
//       onClose();
//     } catch (error) {
//       console.error('Error creating listing:', error);
//       alert('Failed to create listing. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };
  
//   if (!isOpen) return null;
  
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
//         <div className="bg-amber-600 dark:bg-amber-700 p-4 text-white">
//           <h3 className="text-xl font-semibold">New Recyclable Material Listing</h3>
//         </div>
        
//         <form onSubmit={handleSubmit} className="p-6">
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
//               required
//             />
//           </div>
          
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
//               rows="3"
//               required
//             ></textarea>
//           </div>
          
//           <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Material Type
//               </label>
//               <select
//                 name="materialType"
//                 value={formData.materialType}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 required
//               >
//                 <option>Plastic</option>
//                 <option>Paper</option>
//                 <option>Metal</option>
//                 <option>Glass</option>
//                 <option>Electronics</option>
//                 <option>Organic</option>
//                 <option>Other</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Quantity
//               </label>
//               <input
//                 type="number"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 min="0"
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Unit
//               </label>
//               <select
//                 name="unit"
//                 value={formData.unit}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 required
//               >
//                 <option>kg</option>
//                 <option>g</option>
//                 <option>ton</option>
//                 <option>lb</option>
//                 <option>oz</option>
//                 <option>units</option>
//                 <option>pcs</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Price (GreenCoins)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 min="0"
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="mb-6">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="isInDemand"
//                 checked={formData.isInDemand}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-amber-600 focus:ring-amber-500"
//               />
//               <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">
//                 Mark as "In Demand" (for high demand materials)
//               </span>
//             </label>
//           </div>
          
//           <div className="flex justify-end space-x-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 dark:bg-neutral-600 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium transition duration-300"
//               disabled={submitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className={`px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-sm font-medium transition duration-300 ${
//                 submitting ? 'opacity-75 cursor-not-allowed' : ''
//               }`}
//               disabled={submitting}
//             >
//               {submitting ? 'Saving...' : 'Create Listing'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

export default function Marketplace() {
  const [listings, setListings] = useState([]);
  const [materialType, setMaterialType] = useState("All Materials");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch listings based on filters
  const fetchListings = async () => {
    try {
      setLoading(true);
      const params = {};
      
      if (materialType !== "All Materials") {
        params.materialType = materialType;
      }
      
      if (search) {
        params.search = search;
      }
      
      const response = await axios.get('http://localhost:5000/api/listings', { params });
      setListings(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch listings. Please try again.");
      console.error("Error fetching listings:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch and when filters change
  useEffect(() => {
    fetchListings();
  }, [materialType, search]);

  // Handle search input with debounce
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Format date to "X days ago"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return `${diffDays} days ago`;
    }
  };

  // Get appropriate icon based on material type
  const getMaterialIcon = (materialType) => {
    switch(materialType) {
      case "Plastic":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case "Paper":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "Metal":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case "Glass":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case "Electronics":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case "Organic":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const handleSaveNewListing = () => {
    // Trigger a refresh of listings
    setRefreshTrigger(prev => prev + 1);
  };
  return (
    <div>
<section
  id="recycling-marketplace"
  className="py-20 bg-white dark:bg-neutral-900"
>
  <div className="container mx-auto px-4">
    <div className="mb-16 text-center">
      <span className="inline-block px-3 py-1 text-sm font-semibold bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full mb-4">
        Connect &amp; Recycle
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Recycling Marketplace
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
        Connect with buyers and sellers of recyclable waste materials through
        our community marketplace, turning waste into valuable resources.
      </p>
    </div>
    {/* Marketplace Interface */}
    <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-16">






















    <div className="lg:w-2/3 bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
      {/* Marketplace Header */}
            {/* Marketplace Header */}
            <div className="bg-amber-600 dark:bg-amber-700 p-4 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Recyclable Materials Marketplace
            </h3>
            <button 
              className="bg-white text-amber-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-amber-50 transition duration-300"
              onClick={() => setShowModal(true)}
            >
              Shop it
            </button>
          </div>
        </div>
      
      {/* Marketplace Filter Bar */}
      <div className="bg-white dark:bg-neutral-700 p-4 border-b border-gray-200 dark:border-neutral-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              Filter by:
            </span>
            <select 
              className="px-3 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
            >
              <option>All Materials</option>
              <option>Plastic</option>
              <option>Paper</option>
              <option>Metal</option>
              <option>Glass</option>
              <option>Electronics</option>
              <option>Organic</option>
              <option>Other</option>
            </select>
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search materials..."
              className="pl-9 pr-4 py-2 w-full md:w-64 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={search}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      

      {/* <NewListingModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        onSave={handleSaveNewListing}
      /> */}
      {/* Marketplace Listings */}
      <div className="overflow-y-auto max-h-[750px] p-4">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 p-4 rounded-md">
            {error}
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            No listings found. Try changing your filters.
          </div>
        ) : (
          listings.map((listing) => (
            <div key={listing._id} className="bg-white dark:bg-neutral-700 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-md">
                  {getMaterialIcon(listing.materialType)}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {listing.title}
                    </h4>
                    {listing.isInDemand && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                        In Demand
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {listing.description}
                  </p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-3">
                    <span className="flex items-center">
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
                      {listing.location}
                    </span>
                    <span className="flex items-center">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted {formatDate(listing.createdAt)}
                    </span>
                    <span className="flex items-center">
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {listing.price} GreenCoins
                    </span>
                    <span className="flex items-center">
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
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                      {listing.quantity} {listing.unit}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-sm font-medium transition duration-300">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

























      {/* Marketplace Features */}
      <div className="lg:w-1/3">
        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            How It Works
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                  List Your Recyclables
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Add details about the type, quantity, condition, and location
                  of your recyclable materials.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Connect with Buyers
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Interested buyers will contact you through our secure
                  messaging system to arrange pickup.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Complete the Transaction
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Exchange materials for GreenCoins or direct payment and
                  confirm the completed transaction.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Rate Your Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Leave feedback to build trust in the community and improve
                  future transactions.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition duration-300 flex items-center justify-center">
            <Link
    to="/reward"
    className="hover:text-[#F39C12] transition-colors duration-300"
  >
    Check Balance
  </Link>
            </button>
          </div>
        </div>
        {/* Stats Card */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Marketplace Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                850+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Active Listings
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                1,200
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Registered Users
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                15
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Material Types
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                2.5k
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Monthly Trades
              </div>
            </div>
          </div>
          <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <div className="flex items-center text-amber-800 dark:text-amber-300">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Most Active Areas</span>
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Downtown (32%), Industrial Zone (28%), University Area (18%), Tech
              Park (14%), Residential Areas (8%)
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonials & Success Stories */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
        Success Stories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-600 dark:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Sarah K.
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Local Business Owner
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            "The recycling marketplace has helped our coffee shop reduce waste
            costs by 30%. We now sell our used coffee grounds to local gardeners
            and connect with buyers for our cardboard waste."
          </p>
          <div className="flex text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-600 dark:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Miguel R.
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Recycling Entrepreneur
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            "I started collecting e-waste from my neighborhood and selling it
            through the marketplace. What began as a side hustle has grown into
            a full-time business connecting tech companies with recycled
            materials."
          </p>
          <div className="flex text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-600 dark:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Priya T.
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Community Organizer
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            "Our neighborhood association uses the marketplace to coordinate
            community recycling drives. We've collected over 5 tons of
            recyclables and used the GreenCoins to fund local park
            improvements."
          </p>
          <div className="flex text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    {/* CTA */}
    <div className="mt-16 text-center">
      <a
        href="#waste-reporting"
        className="inline-flex items-center px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
      >
        Start Recycling Today
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  </div>
</section>
</div>
  )
}





// const MarketplaceContainer = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [refreshTrigger, setRefreshTrigger] = useState(0);
  
//   const handleSaveNewListing = () => {
//     // Trigger a refresh of listings
//     setRefreshTrigger(prev => prev + 1);
//   };
  
//   return (
//     <>
//       <div >
  
        
//         <Marketplace key={refreshTrigger} />
//       </div>
      
     
//     </>
//   );
// };

// export default MarketplaceContainer;