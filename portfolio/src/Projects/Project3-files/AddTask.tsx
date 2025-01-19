import '../Project3.css'
import { useState } from 'react'

export default function AddTask ({onAddTask}:any) {

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')


    const handleSubmit = (e:any) => {
        e.preventDefault()

        const newTask = {
            id:Date.now(),
            name:taskName,
            description:taskDescription,
        }

        onAddTask(newTask);



        console.log('Task name:', taskName)
        console.log('Task description:', taskDescription)
        setTaskName("");
        setTaskDescription("");
    }

    return(
        <div className="add-task-view">
            <h2>📝 Add New Note</h2>

            <form onSubmit={handleSubmit} className='addNoteForm'>
                <label htmlFor="task-name-input">Note Name:</label>
                <br/>


                <input type="text" id='task-name-input' value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                <br/>
                <label htmlFor="task-description-input">Note description:</label>
                <br/>
                <textarea name="task-description" id="task-description-input" value={taskDescription} onChange={(e)=> {setTaskDescription(e.target.value)}}></textarea>
                <br/>

                <div className="nav">
                <button type="submit">Add Note</button>

                <button type='button' onClick={() => {
                    setTaskName('')
                    setTaskDescription('')
                }}>Reset</button>
                </div>
            </form>
            </div>
    )
}