import { useState } from 'react'
import AboutMe from '/components/AboutMe'
import Projects from '/components/Projects'
import Skills from '/components/Skills'


function App() {
  return (
    <main>
      <div className="wrapper">
        <AboutMe/>
        <Skills/>
        <Projects/>
      </div>
    </main>
  )
}

export default App
