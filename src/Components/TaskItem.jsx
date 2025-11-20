import { useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";

const TaskItem = ({task, onUpdateTask, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false)
    // const [updateText, setUpdateText] = (task.text)

    return (
        <tr>
            <td className="">
                <input 
                    checked={task.done}
                    onChange={(e)=>{
                        onUpdateTask({
                            ...task,
                            done: e.target.checked
                        })
                    }}
                    type="checkbox"  
                    className="flex"
                />
            </td>
            <td>
                {
                    isEdit ? 
                    <input 
                    value={task.text}
                    onChange={(e)=>{
                        onUpdateTask({
                            ...task,
                            text: e.target.value
                        })
                    }}
                    type="text" 
                    className="w-full"/> 
                    : 
                    task.text
                }
            
            
            </td>
            <td>
            <button>
                {
                    isEdit ? 
                    <RiSaveFill 
                    onClick={()=>{
                        setIsEdit(false)
                    }}
                    className="text-2xl" />
                    : 
                    <MdEditSquare
                    onClick={()=>setIsEdit(true)}
                    className="text-2xl" />
                }
                
                
            </button>
            </td>
            <td>
            <button onClick={()=>onDelete(task.id)} className="bg-red-500!">
                <MdDelete className="text-xl"/>
            </button>
            </td>
        </tr>
    );
};

export default TaskItem;