import React from "react";

const Notifications = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-100 to-blue-500 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className=" text-4xl font-extrabold text-gray-900 mb-6">
          Notifications
        </h1>

        <div className="mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">
            Notifications Preferences
          </h2>
          <div className=" space-y-4">
            <div className="">
              <label className=" block text-sm font-medium text-gray-600 ">
                Email Notification
              </label>
              <select className=" mt-1 text-gray-800 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div className="">
              <label className=" block text-sm font-medium text-gray-600 ">
                SMS Notification
              </label>
              <select className=" mt-1 text-gray-800 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div className="">
              <label className=" block text-sm font-medium text-gray-600 ">
                Push Notifications
              </label>
              <select className=" mt-1 text-gray-800 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
        </div>
        {/* Action Settings  */}
        <div className=" flex justify-end space-x-4">
          <button className=" px-6 py-2 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
            Cancel
          </button>
          <button className=" px-6 py-2 text-gray-100 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
