// src/App.js

import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTaskStatus = (index, newStatus) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-6 px-4">
            <div className="w-full max-w-3xl bg-card rounded-lg shadow-lg">
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6 text-text-primary">Task Management</h1>
                    <TaskForm addTask={addTask} />
                    <TaskList
                        tasks={tasks}
                        updateTaskStatus={updateTaskStatus}
                        deleteTask={deleteTask}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
