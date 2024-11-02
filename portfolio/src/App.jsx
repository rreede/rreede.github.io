import './App.css'
import { Link } from 'react-router-dom'

function App() {
  

  return (

    
    <>
   <div className="main">
    <div className="contact-container">
      <img className="portfolio-img" src="profiilipilt.jpg" alt="profile-image"/><p>You can find me on<br/> <a className="github-btn" target="_blank" href="https://github.com/rreede"><span className="material-symbols-outlined">link</span>Github</a><a className="linkedin-btn" target="_blank" href="https://www.linkedin.com/in/rene-reede/"><span className="material-symbols-outlined">link</span>LinkedIn</a></p></div><div className="about-me-container">
        
        <h1>Hi, I'm Rene, a front-end web developer located in Vilnius, Lithuania. </h1><br/><p>My main skills are<strong> HTML</strong>, <strong>CSS</strong>,<strong> JavaScript,</strong> and <strong>ReactJS</strong>.</p><br/><p>I also have some previous experience with <strong>PHP</strong> and <strong>MySQL</strong>.</p><br/><p>My work experience includes working in sales and as an e-commerce manager, which includes doing website bug registers, localization, and working with back-end applications.</p><br/><p>My education experience includes attaining an applied computer science degree at Tallinn University. This included studying web development, graphic design, and sound design.<br/><br/> Also, I have done a lot of independent studying.</p>
        
        
        
        <Link to='/phone-shop' style={{display: 'contents'}}><button className='project-1-btn'>See my latest ReactJS e-shop project!</button></Link>  
        </div>
        
        
        
        
        
        
        </div>

     
    </>
  )
}

export default App
