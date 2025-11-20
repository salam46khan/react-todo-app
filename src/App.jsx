import { useReducer } from "react";
import AddTask from "./Components/AddTask";
import TaskSection from "./Components/TaskSection";
import { initialTasks } from "./utils";
import { tasksReducer } from "./tasksReducer";

const App = () => {
  // const [tasks, setTasks] = useState(initialTasks)
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  // handlers 
  const handleAddTask = (text) =>{
    dispatch({
      type: "adding",
      text,
    })
  }

  const handleUpdateTask = (task) =>{
    dispatch({
      type: "updating",
      task
    })
  }

  const handleDelete = (id) =>{
    dispatch({
      type: "deleting",
      id
    })
  }

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <section className="p-10 backdrop-blur-sm bg-[#ffffff10] rounded-2xl shadow-inner shadow-[#ffffffa1] w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center">React To-Do App</h1>
        <AddTask onAddTask={handleAddTask}/>
        <TaskSection 
          tasks={tasks} 
          onDelete={handleDelete}
          onUpdateTask={handleUpdateTask}/>
      </section>
    </div>
  );
};

export default App;