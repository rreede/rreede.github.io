import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Project1 from './Projects/Project1.tsx';
import Project2 from './Projects/Project2.tsx';
import Project3 from './Projects/Project3.tsx';
import IndividualRealEstatePage from './Projects/RealEstatePage.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project1" element={<Project1/>} />
      <Route path="/project2" element={<Project2/>} />
      <Route path="/project3" element={<Project3/>} />
      <Route path='project1/real-estate/:id' element={<IndividualRealEstatePage/>} />
    </Routes>
  </BrowserRouter>,
)
