import { useState } from "react";

const AddTask = ({onAddTask}) => {
    const [task, setTask] = useState('')
    const handleAddTask = () =>{
        onAddTask(task)
        setTask('')
    }
    return (
        <div className=" flex items-center my-10">
          <input 
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          className="w-4/5" 
          type="text" />
          <button
          onClick={handleAddTask}
          className="w-1/5">Add Task</button>
        </div>
    );
};

export default AddTask;