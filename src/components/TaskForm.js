

import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        addTask({ title, description, status });
        setTitle('');
        setDescription('');
        setStatus('To Do');
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-card rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">Create New Task</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-md mt-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
