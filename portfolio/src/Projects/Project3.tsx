import { useState } from "react";
import AddTask from "./Project3-files/AddTask"
import './Project3.css'
import AllTasks from "./Project3-files/AllTasks";

export default function Project3() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskState, setTaskState] = useState<string>('allTasks');


    interface Task {
        id: number; // or use string if that's what you prefer
        name: string;
        description: string;
      }

const addTask = (newTask:Task) =>{ 
    setTasks([...tasks, newTask]);
}

    return (
        <div className="project-1">
            <nav>
                   
            <h2>Note management app</h2>

            <div className="nav">
                <button type='button' onClick={()=>setTaskState('allTasks')}>All Notes</button>
                <button type='button' onClick={()=>setTaskState('addTask')}>Add New Note</button>
            </div>
                </nav>
            <header>
            {taskState == 'allTasks' && tasks.length > 0 && <AllTasks allAvailableTasks={tasks}/>}
            {taskState == 'allTasks' && tasks.length == 0 && <p>No notes available.
                
                <br/> Add some notes!</p>}
             {taskState == 'addTask' && <AddTask onAddTask={addTask}/>}   

            </header>
        </div>
    )
}

