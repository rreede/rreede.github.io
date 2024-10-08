import './App.css'

function App() {

  return (
    <>

      <div className="wrapper">
        <section>
          <img className='profile' src='Profiilipilt.jpg'></img>
          <ul>
            <li><a href='https://github.com/rreede' target='_blank'>Github</a></li>
              <li> <a href='https://www.linkedin.com/in/rene-reede/'>LinkedIn</a> </li>
            </ul>
            <button className='contact-btn'>Contact Me!</button>
        </section>
        <main>
           <p>Hi!<br /></p> 
           <p> I'm Rene, a front-end web developer<br></br> based in Vilnius, Lithuania.</p>
           <p>💻 My areas of expertise are:</p>
           <p>HTML, CSS, JavaScript and React JS.</p>

           <p>I also have some experience with<br></br> PHP and MySQL.</p>
         </main>
         <aside>
           <p><strong>🧑‍💻 My Latest Projects</strong></p>

           <div className="projects">
              <div className="project">
                <div className="project--img">    <p>Project 1</p></div>
              
              </div>
              <div className="project">
                <div className="project--img">    <p>Project 2</p></div>
              
              </div>
              <div className="project">
                <div className="project--img">    <p>Project 3</p></div>
              
              </div>
           </div>
         </aside>
        
    </div>

    
    </>
  )
}

export default App
