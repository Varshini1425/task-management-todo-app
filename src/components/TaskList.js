

import React from 'react';

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
    return (
        <div className="p-6 bg-card rounded-lg shadow-md max-w-4xl mx-auto mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">Task List</h2>
            <ul className="space-y-4">
                {tasks.map((task, index) => (
                    <li key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                        <h3 className="text-xl font-semibold text-text-primary">{task.title}</h3>
                        <p className="mt-2 text-text-secondary">{task.description}</p>
                        <div className="mt-4 flex items-center space-x-4">
                            <select
                                value={task.status}
                                onChange={(e) => updateTaskStatus(index, e.target.value)}
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                            <button
                                onClick={() => deleteTask(index)}
                                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
