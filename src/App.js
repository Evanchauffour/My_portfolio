import React from 'react';
import './App.css';
import{Routes, Route, Outlet} from "react-router-dom"
import Home from './Components/Pages/Home/home'
import Contact from './Components/Pages/Contact/contact'
import Realisation from './Components/Pages/Realisation/realisation'
import { useRef , useState } from 'react';
import ProjetPage from './Components/Pages/ProjectPage/ProjectPage'

export const DarkModeContext = React.createContext();

function App() {

  const cursor = useRef()

  const mousePos = (e) =>{
      cursor.current.setAttribute('style', `top:${e.pageY - 10}px; left:${e.pageX - 10}px`)
  }

  const [darkMode , setDarkMode] = useState(false);
  const [cursorover , setCursorover] = useState(false);

  const toogleDarkMode = () =>{
      setDarkMode(!darkMode)
  }

  const Mouseover = () =>{
    setCursorover(true)
  }

  const Mouseleave = () =>{
    setCursorover(false)
  }

  return (
    <DarkModeContext.Provider value={{darkMode , toogleDarkMode , Mouseover, Mouseleave}}>
    <div className={darkMode ? 'app-light' : 'app'} onMouseMove={mousePos}>
      <Routes>
        <Route path='/My_portfolio/' element={<Home/>}/>
        <Route path='/My_portfolio/realisation' element={<Realisation/>}/>
        <Route path='/My_portfolio/contact' element={<Contact/>}/>
        <Route path="/My_portfolio/projects" element={<ProjetPage/>} />
      </Routes>
      <div ref={cursor} className={cursorover ? 'cursor-over' : 'cursor'}></div>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
