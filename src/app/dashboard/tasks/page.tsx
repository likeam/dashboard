import React from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it",
      stauts: "In Progress",
      dueDate: "2025-09-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes",
      stauts: "Pending",
      dueDate: "2025-11-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestone and progress with the team",
      stauts: "Completed",
      dueDate: "2025-07-12",
    },
  ];
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-100 to-blue-400 p-8">
      <div className=" max-w-7xl mx-auto bg-gray-300 rounded-lg shadow-sm p-8">
        <h1 className=" text-3xl font-bold text-gray-800 mb-8">Tasks</h1>
        {/* Task List Section  */}
        <section className=" space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className=" flex items-center justify-center bg-white rounded-lg shadow-md p-6 border-l-4 space-x-8 "
              style={{
                borderColor:
                  task.stauts === "Completed"
                    ? "green"
                    : task.stauts === "In Progress"
                    ? "yellow"
                    : "red",
              }}
            >
              <div className=" flex flex-col">
                <h2 className=" text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className=" text-sm text-gray-600 mt-2">
                  {task.description}
                </p>
                <p className=" text-sm text-gray-600 mt-2">
                  Due Date: {task.dueDate}
                </p>
              </div>
              <section className=" flex space-x-12">
                <span
                  className={` px-4 py-3 text-center text-sm rounded-full ${
                    task.stauts === "Completed"
                      ? "bg-green-300 text-green-600"
                      : task.stauts === "In Progress"
                      ? "bg-yellow-300 text-yellow-700"
                      : "bg-red-300 text-red-600"
                  }`}
                >
                  {task.stauts}
                </span>
                {/* Butoons  */}
                <button className=" px-4 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-300 hover:text-gray-800 transition-colors">
                  Edit
                </button>
                {task.stauts !== "Completed" && (
                  <button className=" px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                    Mark as Completed
                  </button>
                )}
                <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
                  Delete
                </button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
