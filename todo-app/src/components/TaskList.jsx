import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.todos);

  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center italic mt-8 animate-pulse">
        🎈 Nothing here yet. Add your first task!
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
          >
            <TaskItem task={task} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
