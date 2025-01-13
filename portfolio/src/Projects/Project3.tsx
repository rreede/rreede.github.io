import { Link } from "react-router"

export default function Project3() {
    return (
        <div className="project-1">
            <nav>
                   
                <p>📝 Tasks List</p>
                </nav>
            <header>
            <Link to='project3/new-task'><button>New Task</button></Link>
            <h3>Task Management App</h3>

                
            </header>



        </div>
    )
}

