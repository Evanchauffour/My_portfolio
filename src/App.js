import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from './Components/Pages/Home/home'
import Contact from './Components/Pages/Contact/contact'
import Realisation from './Components/Pages/Realisation/realisation'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/realisation' element={<Realisation/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
