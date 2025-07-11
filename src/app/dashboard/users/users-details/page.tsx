import React, { use } from "react";

const UsersDetails = () => {
  const user = {
    name: "Sulman Khan",
    email: "sulman.khan@gamil.com",
    role: "Admin",
    status: "Active",
    bio: " The man of all crisses having great concept in history and good vision of feacutre and technology",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-07-18" },
      { id: 2, description: "Changed email address", timestamp: "2025-07-18" },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "2025-07-18",
      },
    ],
  };
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-200 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className=" flex items-center mb-8">
          <img
            src={user.profilePicture}
            alt="profile"
            className=" w-20 h-20 rounded-full object-cover mr-6"
          />
          <div className="">
            <h1 className=" text-3xl text-gray-800 font-bold ">{user.name}</h1>
            <p className=" text-sm text-gray-600">{user.email}</p>
            <p className=" text-sm text-gray-600">{user.role}</p>
            <p
              className={` text-sm mt-2 ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {user.status}
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">About</h2>
          <p className=" text-gray-600">{user.bio}</p>
        </div>
        <div className="mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">
            Recent Activites
          </h2>
          <ul className=" space-y-4">
            {user.activities.map((acitivity) => (
              <li key={acitivity.id} className=" flex items-center space-x-4">
                <div className=" bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="">S</span>
                </div>
                <div className="">
                  <p className=" text-gray-700">{acitivity.description}</p>
                  <p className=" text-sm text-gray-500">
                    {acitivity.timestamp}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
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

export default UsersDetails;
