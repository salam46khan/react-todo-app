import { MdDelete, MdEditSquare } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";

const TaskItem = () => {
    return (
        <tr>
            <td className=""><input type="checkbox"  className="flex"/></td>
            <td>
            <input type="text" className="w-full"/>
            task name here
            </td>
            <td>
            <button>
                <MdEditSquare className="text-2xl" />
                <RiSaveFill className="text-2xl" />
            </button>
            </td>
            <td>
            <button className="bg-red-500!">
                <MdDelete className="text-xl"/>
            </button>
            </td>
        </tr>
    );
};

export default TaskItem;