import { Link } from 'react-router'
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <h1>Hi, I'm Rene, a front-end web developer.</h1>

<div className="main-container">
      <div className="container-left">

      <div className="projects">
      <h3>Take a look at my latest projects</h3>
        <Link to='/project1'><div className="project-1">Project 1 (Real-estate Website)</div></Link> 
        <Link to='/project2'><div className="project-2">Project 2 (Personal Finance Tracker)</div></Link> 
        <Link to='/project3'><div className="project-3">Project 3 (Task Management App)</div></Link> 

        <h2>Contact me</h2>
        <a href="https://www.linkedin.com/in/rene-reede/" target='_blank'>LinkedIn</a>
        <a href="https://github.com/rreede" target='_blank'>Github</a>
      </div>
      </div>
      <div className="container-right">

      <h2>My skills</h2><p>HTML, CSS (Tailwind), JavaScript, React.js, Typescript, NodeJS.</p> 

    <p>I studied Applied Computer Science in Tallinn University. This includes studying web development, web design, graphic design and sound design. I also have experience in photography and photo editing.</p>
    <p>I have professional experience in sales and as an e-commerce manager. My responsibilities included communicating with webshop owners and customer service teams, maintaining bug registers, and recommending website improvements to enhance functionality and user experience.</p>
      </div>
      
      </div>
    </div>
  )
}

export default App
