import './realisation.css'
import Header from '../../Header/header'
import { motion } from "framer-motion"
import Projet from './projet/projet'
import infographie from './projet/img/infographie.PNG'
import esport from './projet/img/esport.PNG'
import coco from './projet/img/coco.PNG'
import productPage from './projet/img/productPage.PNG'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../App';
import { useContext } from 'react';
import Iframe from 'react-iframe'

function Realisation(){

    const projets = [
        {
          id: 1,
          name: "Infographie",
          img: infographie,
          lien : "https://mmi.univ-smb.fr/~chauffoe/infographie/"
        },
        {
          id: 2,
          name: "Site Esport",
          img: esport,
          lien: "https://mmi.univ-smb.fr/~chauffoe/mmi-e-sport/"
        },
        {
          id: 3,
          name: "Le clos montagny",
          img: coco,
          lien: "https://leclosmontagny.fr/"
        },
        {
          id: 4,
          name: "Product page concept",
          img: productPage,
          lien: "https://evanchauffour.github.io/Concours-Product-page/"
        }
      ];

      const {darkMode} = useContext(DarkModeContext)

    return(
        <>
        <Header/>
        <main className={darkMode ? 'container-realisation light' : 'container-realisation dark'}>
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