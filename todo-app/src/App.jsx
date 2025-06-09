import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { clearAllTodos } from "./features/todos/todosSlice";

function App() {
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const pendingTask = tasks.filter((task) => !task.completed).length;

  return (  
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#48adff] via-blue-300 to-blue-500 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">My Todo List</h1>

        <TaskInput />
        <TaskList />

        {tasks.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <p className="text-gray-700">
              You have {pendingTask} pending task{pendingTask !== 1 ? "s" : ""}
            </p>
            <button
              onClick={() => dispatch(clearAllTodos())}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
