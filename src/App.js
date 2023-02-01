import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from './Components/Pages/Home/home'
import Contact from './Components/Pages/Contact/contact'
import Realisation from './Components/Pages/Realisation/realisation'
import { useEffect, useState, useRef } from 'react';

function App() {

  const cursor = useRef()

  const mousePos = (e) =>{
      console.log(e.clientX);
      console.log(e.clientY);
      cursor.current.setAttribute('style', `top:${e.pageY - 10}px; left:${e.pageX - 10}px`)
  }

  return (
    <div className='app' onMouseMove={mousePos}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/realisation' element={<Realisation/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <div ref={cursor} className="cursor"></div>
    </div>
  );
}

export default App;
