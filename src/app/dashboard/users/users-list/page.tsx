import React from "react";

const UsersList = () => {
  const users = [
    {
      id: 1,
      name: "Sulman Khan",
      email: "sulman.khan@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Hania Bi",
      email: "hania.bi@gmail.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 3,
      name: "Imran Zia",
      email: "imran.zia@gmail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Abdul Rehman",
      email: "abdul.rehman@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Hussain BiBi",
      email: "hussain.bi@gmail.com",
      role: "Admin",
      status: "Suspended",
    },
    {
      id: 6,
      name: "M Nazir",
      email: "m.nazir@gmail.com",
      role: "Admin",
      status: "Inactive",
    },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-100 to-blue-500 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className=" text-4xl font-extrabold text-gray-900 mb-6">
          User List
        </h1>
        <div className=" overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className=" min-w-full table-auto">
            <thead className=" bg-blue-600 text-white">
              <tr>
                <th className=" py-3 px-4 text-left">Name</th>
                <th className=" py-3 px-4 text-left">Email</th>
                <th className=" py-3 px-4 text-left">Role</th>
                <th className=" py-3 px-4 text-left">Status</th>
                <th className=" py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user) => (
                <tr
                  className=" border-t hover:bg-gray-100 text-gray-800"
                  key={user.id}
                >
                  <td className=" py-4 px-4">{user.name}</td>
                  <td className=" py-4 px-4">{user.email}</td>
                  <td className=" py-4 px-4">{user.role}</td>
                  <td className=" py-4 px-4">
                    <span
                      className={`${
                        user.status === "Active"
                          ? "text-green-600"
                          : user.status === "Inactive"
                          ? "text-yellow-500"
                          : " text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className=" py-4 px-4 text-center">
                    <button className=" px-4 py-4 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
                      Edit
                    </button>
                    <button className="px-4 py-4 text-blue-700 rounded-lg hover:bg-blue-300 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
