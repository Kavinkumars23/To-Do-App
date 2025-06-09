import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todosSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={`flex items-center justify-between p-3 border rounded-xl shadow-sm bg-[#f3f1f4] transition ${
        task.completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTodo(task.id))}
          className="h-4 w-4 accent-blue-500"
        />
        <span
          className={`text-gray-800 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(task.id))}
        className="text-red-500 hover:text-red-700 transition"
        aria-label="Delete Task"
      >
        ✖
      </button>
    </li>
  );
};

export default TaskItem;
