import { generateId } from "./utils";

export const tasksReducer = (tasks, action) =>{
    if(action.type === "adding"){
        const newTask = {
            id: generateId(tasks) | 0,
            text: action.text,
            done: false
        }
        return[
            ...tasks,
            newTask
        ]
    }else if(action.type === "updating"){
        return tasks.map(t => {
            if(t.id === action.task.id) {
                return action.task
            } else {
                return t
            }
        })
    }else if(action.type === "deleting"){
        return tasks.filter(t => t.id !== action.id)
    }else{
        throw Error('Unknown action: ' + action.type);
    }
}