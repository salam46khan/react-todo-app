
import TaskItem from "./TaskItem";
const TaskSection = () => {
    return (
        <table class="table-auto  w-full">
          <thead>
            <tr className="">
              <th className="text-start font-semibold">Complete</th>
              <th className="text-start font-semibold">Task</th>
              <th className="text-start font-semibold">Action</th>
              <th className="text-start font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody>
            <TaskItem />
            <TaskItem />
          </tbody>
        </table>
    );
};

export default TaskSection;