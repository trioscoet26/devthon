import React from 'react'

export default function report() {
  return (
     <>

     <section id="waste-reporting" className="py-20 bg-gray-50 dark:bg-neutral-900">
  <div className="container mx-auto px-4">
    <div className="mb-16 text-center">
      <span className="inline-block px-3 py-1 text-sm font-semibold bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full mb-4">
        Community Participation
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Waste Reporting Platform
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
        Empower citizens to report waste in public places and at home,
        contributing to cleaner communities while earning rewards.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row items-stretch gap-12">
      {/* Reporting Form */}
      <div className="lg:w-1/2 order-2 lg:order-1">
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden">
          <div className="bg-teal-600 dark:bg-teal-700 p-4 text-white">
            <h3 className="text-xl font-semibold">Report Waste</h3>
            <p className="text-teal-100 text-sm mt-1">
              Fill out the form to report waste and earn GreenCoins
            </p>
          </div>
          <form className="p-6 space-y-6">
            <div>
              <label
                htmlFor="waste-type"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Waste Type
              </label>
              <select
                id="waste-type"
                className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="" selected="" disabled="">
                  Select waste type
                </option>
                <option value="plastic">Plastic</option>
                <option value="paper">Paper/Cardboard</option>
                <option value="glass">Glass</option>
                <option value="metal">Metal</option>
                <option value="electronic">Electronic Waste</option>
                <option value="organic">Organic Waste</option>
                <option value="construction">Construction Debris</option>
                <option value="hazardous">Hazardous Materials</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="waste-quantity"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Estimated Quantity
                </label>
                <select
                  id="waste-quantity"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="small">Small (&lt; 5kg)</option>
                  <option value="medium">Medium (5-20kg)</option>
                  <option value="large">Large (20-100kg)</option>
                  <option value="very-large">Very Large (&gt;100kg)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="location-type"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Location Type
                </label>
                <select
                  id="location-type"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="street">Street/Sidewalk</option>
                  <option value="park">Park/Garden</option>
                  <option value="beach">Beach/Waterfront</option>
                  <option value="forest">Forest/Natural Area</option>
                  <option value="residential">Residential Area</option>
                  <option value="commercial">Commercial Area</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="location-address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Location Address/Description
              </label>
              <input
                type="text"
                id="location-address"
                placeholder="Enter address or describe the location"
                className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center justify-between bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-600 dark:text-teal-400"
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
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Use current location
                </span>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultValue=""
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-teal-600" />
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="waste-description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Description (Optional)
              </label>
              <textarea
                id="waste-description"
                rows={3}
                placeholder="Provide any additional details about the waste"
                className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                defaultValue={""}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Upload Images (Optional)
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-neutral-700 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-3 h-10 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG or JPEG (MAX. 5MB)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    multiple=""
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-md flex items-center justify-center"
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Submit Report
              </button>
            </div>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              You'll earn approximately{" "}
              <span className="font-medium text-teal-600 dark:text-teal-400">
                15-50 GreenCoins
              </span>{" "}
              based on your report details
            </div>
          </form>
        </div>
      </div>
      {/* Features and Benefits */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          How Waste Reporting Works
        </h3>
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600 dark:text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Report Identification
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Create waste reports by providing details about type, location,
                and quantity, with the option to include photos for
                verification.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600 dark:text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Verification Process
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Reports are verified through AI analysis of submitted photos and
                cross-referenced with our database to prevent duplication.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600 dark:text-teal-400"
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
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Automatic Mapping
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Verified reports are instantly added to our waste map, helping
                cleaning crews and municipal authorities prioritize their
                efforts.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600 dark:text-teal-400"
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
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Reward Distribution
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Earn GreenCoins for verified reports. The reward amount varies
                based on waste type, quantity, and the quality of your
                submission.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600 dark:text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Cleanup Tracking
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Follow the status of your reports from submission to cleanup
                completion, with notifications when action is taken.
              </p>
            </div>
          </div>
        </div>
        {/* Report Metrics */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Community Impact Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                8,543
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Reports Submitted
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                76%
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Cleanup Rate
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                32h
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Avg. Response Time
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                65K
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                GreenCoins Awarded
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center px-6">
            Join over 3,500 active citizens who are making a difference in their
            communities through waste reporting
          </div>
        </div>
      </div>
    </div>
    {/* Recent Reports */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
        Recent Community Reports
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Report 1 */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200 dark:bg-neutral-700 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600 dark:text-teal-400"
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
              <p className="text-gray-500 dark:text-gray-400">
                Image of waste report
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Beach Cleanup Needed
              </h4>
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 rounded-full text-xs">
                Pending
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Plastic waste and discarded fishing gear collected along the
              shoreline, approximately 15kg.
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
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
                Seaside Park
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
                2 hours ago
              </span>
            </div>
          </div>
        </div>
        {/* Report 2 */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200 dark:bg-neutral-700 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Image of waste report
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Illegal Dumping Site
              </h4>
              <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 rounded-full text-xs">
                Urgent
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Construction waste dumped near residential area, includes
              potentially hazardous materials.
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
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
                Riverside Area
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
                Yesterday
              </span>
            </div>
          </div>
        </div>
        {/* Report 3 */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200 dark:bg-neutral-700 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600 dark:text-teal-400"
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
              <p className="text-gray-500 dark:text-gray-400">
                Image of waste report
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Park Litter Collection
              </h4>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-xs">
                Cleaned
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Mixed waste collected from central park area, mostly food
              containers and plastic bottles.
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
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
                Central Park
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
                3 days ago
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-flex items-center px-5 py-3 border border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 font-medium rounded-lg transition duration-300"
        >
          View All Reports
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
   
  </div>
</section>

     </>
  )
}
