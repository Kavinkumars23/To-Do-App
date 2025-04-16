import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;

    onAddTask(trimmed); // pass the task to parent
    setTask(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="flex-1 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
