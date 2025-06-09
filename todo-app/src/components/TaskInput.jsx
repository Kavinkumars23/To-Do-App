import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setTask("");
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
