import './App.css'

function App() {

  return (
    <>


      <div className="wrapper">
        <section>
          <img className='profile' src='Profiilipilt.jpg'></img>
          <p>Img, github, linkedid</p>
        </section>
        <main>
           <p>Hi, I am Rene, a front-end web developer<br></br> based in Vilnius, Lithuania.</p> 
           <p></p>
           <p>My areas of expertise are:</p>
           <p><span class='html--style'>HTML</span>, CSS, JavaScript and React JS.</p>
         </main>
         <aside>
           <p><strong>🧑‍💻 My latest projects</strong></p>

           <div className="projects">
              <div className="project">
                <div className="project--img">    <p>Item name</p></div>
              
              </div>
           </div>
         </aside>
        
    </div>

    
    </>
  )
}

export default App
