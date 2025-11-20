
import TaskItem from "./TaskItem";
const TaskSection = ({tasks, onUpdateTask, onDelete}) => {
    if(tasks.length <1){
        return <>
            <h2 className="text-red-400">No task, Please Add Task</h2>
        </>
    }
    return (
        <table className="table-auto  w-full">
          <thead>
            <tr className="">
              <th className="text-start font-semibold">Complete</th>
              <th className="text-start font-semibold">Task</th>
              <th className="text-start font-semibold">Action</th>
              <th className="text-start font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                tasks.map(task => <TaskItem 
                        key={task.id} 
                        onUpdateTask={onUpdateTask} 
                        onDelete={onDelete}
                        task={task}
                    />)
            }
          </tbody>
        </table>
    );
};

export default TaskSection;