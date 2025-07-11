import React from "react";

const ProfileSettings = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-200 to-blue-600 p-8">
      <div className=" max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className=" text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>
        <section className="mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>
          <div className=" flex items-center space-x-4">
            <div className=" w-24 h-24 rounded-full bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="profile"
                className=" w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="">
            <button className=" px-6 py-2 mt-5 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Change Picture
            </button>
          </div>
        </section>
        <section className=" mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>
          <div className=" space-y-4">
            <div className="">
              <label className=" block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Sulaman Khan"
                className=" mt-1 block w-full px-4 py-2 border text-gray-400 border-gray-400 rounded-lg shadow-sm focus:oultline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className=" block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                defaultValue="sulman_khan "
                className=" mt-1 block w-full text-gray-400  px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:oultline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className=" block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="text"
                defaultValue="sulaman.khan@example.com "
                className=" mt-1 block w-full text-gray-400 px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:oultline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>
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

export default ProfileSettings;
