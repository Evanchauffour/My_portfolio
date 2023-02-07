import React from 'react';
import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from './Components/Pages/Home/home'
import Contact from './Components/Pages/Contact/contact'
import Realisation from './Components/Pages/Realisation/realisation'
import { useRef , useState } from 'react';
import ProjetPage from './Components/Pages/ProjectPage/ProjectPage'

export const DarkModeContext = React.createContext();

function App() {

  const projets = [
    {
      id: 1,
      name: "Infographie",
    },
    {
      id: 2,
      name: "Site Esport",
    },
    {
      id: 3,
      name: "Site Coco",
    },
    {
      id: 4,
      name: "Product page concept",
    }
  ];

  const cursor = useRef()

  const mousePos = (e) =>{
      cursor.current.setAttribute('style', `top:${e.pageY - 10}px; left:${e.pageX - 10}px`)
  }

  const [darkMode , setDarkMode] = useState(false);

  const toogleDarkMode = () =>{
      setDarkMode(!darkMode)
  }

  return (
    <DarkModeContext.Provider value={{darkMode , toogleDarkMode}}>
    <div className={darkMode ? 'app-light' : 'app'} onMouseMove={mousePos}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/realisation' element={<Realisation/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/project" component={ProjetPage} />
        <Route path="/project/:id" element={<ProjetPage value={projets.name}/>}/>
      </Routes>
      <div ref={cursor} className="cursor"></div>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
