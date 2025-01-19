import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Project1 from './Projects/Project1.tsx';
import Project2 from './Projects/Project2.tsx';
import Project3 from './Projects/Project3.tsx';
import IndividualRealEstatePage from './Projects/RealEstatePage.tsx';
import AddTask from './Projects/Project3-files/AddTask.tsx';
import Favorites from './Projects/Project1-files/Favorites.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project1" element={<Project1/>} />
      <Route path="/project2" element={<Project2/>} />
      <Route path="/project3" element={<Project3/>} />
      <Route path='project1/real-estate/:id' element={<IndividualRealEstatePage/>} />

      /* AddTask component is nested under Project3 */
      <Route path='/project3/new-task' element={<AddTask/>}/>


      <Route path='project1/favorites' element={<Favorites/>}/>
    </Routes>
  </BrowserRouter>,
)
