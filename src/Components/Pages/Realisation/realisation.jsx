import './realisation.css'
import Header from '../../Header/header'
import { motion } from "framer-motion"
import Projet from './projet/projet'
import infographie1 from './projet/img/infographie1.png'
import infographie2 from './projet/img/infographie2.png'
import infographie3 from './projet/img/infographie3.png'
import esport1 from './projet/img/esport1.png'
import esport2 from './projet/img/esport2.png'
import esport3 from './projet/img/esport3.png'
import lcm1 from './projet/img/lcm1.png'
import lcm2 from './projet/img/lcm2.png'
import lcm3 from './projet/img/lcm3.png'
import product1 from './projet/img/productPage1.png'
import product2 from './projet/img/productPage2.png'
import product3 from './projet/img/productPage3.png'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../App';
import { useContext } from 'react';

function Realisation(){

    const projets = [
        {
          id: 1,
          name: "Infographie",
          img1: infographie1,
          img2: infographie2,
          img3: infographie3,
          lien : "https://mmi.univ-smb.fr/~chauffoe/infographie/",
          description : "Projet réaliser dans le cadre de mes étude. La demnde etait de réaliser une infographie, j’ai donc rélaisé la mienne sous la forme d’une app web en paralax en js vanilla."
        },
        {
          id: 2,
          name: "Site Esport",
          img1: esport1,
          img2: esport2,
          img3: esport3,
          lien: "https://mmi.univ-smb.fr/~chauffoe/mmi-e-sport/",
          description: "Site web de l'évenement esport MMI esport. Evenement autour du jeux viéo réaliser par l'agence étudiante synergie dans le cadre d'un projet scolaire. Ce site est réalisé en html, css, js et php. Le site web est lié à un base de donnée mySql pour le systeme d'inscription à l'évenement."     
        },
        {
          id: 3,
          name: "Le clos montagny",
          img1: lcm1,
          img2: lcm2,
          img3: lcm3,
          lien: "https://leclosmontagny.fr/",
          description: "Ce site web est réaliser sous wordpress pour un professionnel. Il à été développer en deux semaines qui étaient répartie en une semaine de desing et une semaine de développement. La demande de notre client était de réaliser un site web dans le quel est présenter trois gites mais également de nombreuses activités autour de chambéry. Ce site contient également un formulaire de contact pour permettre de directement contacter notre client pour réserver."
        },
        {
          id: 4,
          name: "Product page concept",
          img1: product1,
          img2: product2,
          img3: product3,
          lien: "https://evanchauffour.github.io/Concours-Product-page/",
          description: "Ce site web est un concept de page produit que j'ai réalisé dans le cadre d'un concours organisé par un youtuber. J'ai donc créé cette page en m'inspirant d'un design deja existant auqel j'ai ajouté un menu burger ainsi qu'un mode sombre. Cette page est réalisé en html, css et vanilla js."
        }
      ];

      const id = "fvjovejdvjo"

      const {darkMode} = useContext(DarkModeContext)

    return(
        <>
        <Header/>
        <main className={darkMode ? 'container-realisation light' : 'container-realisation dark'}>
            <motion.h1 initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Realisation</motion.h1>
            <div className="container-projets">
            {projets.map(projet => (
          <Link to="/projects" state={projet}>
            <>
            <Projet
              name={projet.name}
              img={projet.img1}
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