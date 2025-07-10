import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-blue-100 to-blue-400 p-8">
      <div className=" max-w-6xl mx-auto bg-gray-300 rounded-2xl  shadow-lg p-8 space-y-8">
        <div className=" flex flex-col">
          <h1 className=" text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <p className=" text-lg text-gray-600 mt-3">
            Welcome back! Here you can manage your tasks, view analytics, and
            make adjustments.
          </p>
        </div>
        {/* Dashboard Grids  */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Task Cards  */}
          <Link
            href="dashboard/tasks"
            className=" bg-blue-200 hover:bg-blue-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-blue-800">Tasks</h2>
              <span className=" text-blue-500 text-2xl">📑</span>
            </div>
            <p className=" text-gray-700 mt-2">
              {" "}
              View, organize, and manage your daily tasks.
            </p>
          </Link>
          {/* Analytics Cards  */}
          <Link
            href="dashboard/analytics"
            className=" bg-green-200 hover:bg-green-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-green-800">
                Analytics
              </h2>
              <span className=" text-green-500 text-2xl">🎁</span>
            </div>
            <p className=" text-gray-700 mt-2">
              {" "}
              Gain insights into your performance and trends.
            </p>
          </Link>
          {/* Settings Cards  */}
          <Link
            href="dashboard/settings"
            className=" bg-purple-200 hover:bg-purple-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-purple-800">
                Settings
              </h2>
              <span className=" text-purple-500 text-2xl">⚙</span>
            </div>
            <p className=" text-gray-700 mt-2">
              {" "}
              Customize and tuned your dashboard settings.
            </p>
          </Link>
          {/* Users Cards  */}
          <Link
            href="dashboard/users"
            className=" bg-yellow-200 hover:bg-yellow-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-yellow-800">Users</h2>
              <span className=" text-yellow-500 text-2xl">👤</span>
            </div>
            <p className=" text-gray-700 mt-2">
              {" "}
              View, and manage your User base.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
