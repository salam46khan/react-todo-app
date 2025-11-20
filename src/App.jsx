import { useState } from "react";
import AddTask from "./Components/AddTask";
import TaskSection from "./Components/TaskSection";
import { generateId, initialTasks } from "./utils";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks.length === 0 ? []: initialTasks)
  
  // handlers 
  const handleAddTask = (text) =>{
    const newTask = {
      id: generateId(tasks) | 0,
      text: text,
      done: false
    }
    setTasks([
      ...tasks,
      newTask
    ])
  }

  const handleUpdateTask = (task) =>{
    const UpdateTask = tasks.map(t => {
      if(t.id === task.id) {
        return task
      } else {
        return t
      }
    })
    setTasks(UpdateTask)
  }

  const handleDelete = (id) =>{
    const UpdateTask = tasks.filter(t => t.id !== id)
    setTasks(UpdateTask)
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