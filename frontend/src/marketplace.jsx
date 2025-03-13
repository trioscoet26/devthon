import React from 'react'

export default function marketplace() {
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
      {/* Marketplace Listings */}
      <div className="lg:w-2/3 bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
        {/* Marketplace Header */}
        <div className="bg-amber-600 dark:bg-amber-700 p-4 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Recyclable Materials Marketplace
            </h3>
            <button className="bg-white text-amber-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-amber-50 transition duration-300">
              + New Listing
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
              <select className="px-3 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>All Materials</option>
                <option>Plastic</option>
                <option>Paper</option>
                <option>Metal</option>
                <option>Glass</option>
                <option>Electronics</option>
                <option>Organic</option>
              </select>
            </div>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search materials..."
                className="pl-9 pr-4 py-2 w-full md:w-64 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
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
        {/* Marketplace Listings */}
        <div className="overflow-y-auto max-h-[750px] p-4">
          {/* Listing 1 */}
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600 dark:text-amber-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Mixed Plastic Bottles (PET)
                  </h4>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                    In Demand
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  50kg of clean PET bottles, sorted by color and compressed,
                  available for pickup from downtown area.
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
                    Downtown
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
                    Posted 2 days ago
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
                    250 GreenCoins
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
          {/* Listing 2 */}
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600 dark:text-amber-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Office Paper &amp; Cardboard
                  </h4>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                    Bulk Available
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  100kg of sorted office paper, newspapers, and cardboard boxes.
                  Perfect for recycling into new paper products.
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
                    Business District
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
                    Posted 5 hours ago
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
                    180 GreenCoins
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
          {/* Listing 3 */}
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600 dark:text-amber-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    E-Waste Collection
                  </h4>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium">
                    Specialty
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Various electronic components, old computers, smartphones with
                  batteries removed. Properly sorted for safe recycling.
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
                    Tech Park
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
                    Posted yesterday
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
                    320 GreenCoins
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
          {/* Listing 4 */}
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600 dark:text-amber-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Scrap Metal Collection
                  </h4>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 rounded-full text-xs font-medium">
                    High Value
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  75kg of mixed metal scraps including aluminum, copper, and
                  steel. Separated and ready for processing.
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
                    Industrial Zone
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
                    Posted 3 days ago
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
                    450 GreenCoins
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
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600 dark:text-amber-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Mixed Plastic Bottles (PET)
                  </h4>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                    In Demand
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  50kg of clean PET bottles, sorted by color and compressed,
                  available for pickup from downtown area.
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
                    Downtown
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
                    Posted 2 days ago
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
                    250 GreenCoins
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
          <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-600 dark:text-amber-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Mixed Plastic Bottles (PET)
                  </h4>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                    In Demand
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  50kg of clean PET bottles, sorted by color and compressed,
                  available for pickup from downtown area.
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
                    Downtown
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
                    Posted 2 days ago
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
                    250 GreenCoins
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create Your First Listing
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
