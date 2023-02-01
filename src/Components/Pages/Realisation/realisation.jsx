import './realisation.css'
import Header from '../../Header/header'
import { motion } from "framer-motion"
import Projet from './projet/projet'
import infographie from './projet/img/infographie.PNG'
import esport from './projet/img/esport.PNG'
import coco from './projet/img/coco.PNG'
import productPage from './projet/img/productPage.PNG'
import { Link } from 'react-router-dom';

function Realisation(){

    const projets = [
        {
          id: 1,
          name: "Infographie",
          img: infographie
        },
        {
          id: 2,
          name: "Site Esport",
          img: esport
        },
        {
          id: 3,
          name: "Site Coco",
          img: coco
        },
        {
          id: 4,
          name: "Product page concept",
          img: productPage
        }
      ];

    return(
        <>
        <Header/>
        <main className='container-realisation'>
            <motion.h1 initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Realisation</motion.h1>
            <div className="container-projets">
            {projets.map(projet => (
          <Link to={`/project/${projet.id}`} key={projet.id}>
            <>
            <Projet
              name={projet.name}
              img={projet.img}
            />
            </>
          </Link>
        ))}
            </div>
        </main>

        </>
    )
}
export default Realisation