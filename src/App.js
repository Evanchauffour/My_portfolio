import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from './Components/Pages/Home/home'
import Contact from './Components/Pages/Contact/contact'
import Realisation from './Components/Pages/Realisation/realisation'
import { useRef } from 'react';
import Projet from './Components/Pages/Realisation/projet/projet'
import ProjetPage from './Components/Pages/ProjectPage/ProjectPage'

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

  return (
    <div className='app' onMouseMove={mousePos}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/realisation' element={<Realisation/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/project" component={ProjetPage} />
        <Route path="/project/:id" element={<ProjetPage render={({ match }) => (
          <ProjetPage Projet={projets.find(p => p.id === match.params.id)} />
        )}/>}></Route>
      </Routes>
      <div ref={cursor} className="cursor"></div>
    </div>
  );
}

export default App;
