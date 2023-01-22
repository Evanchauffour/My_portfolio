import './realisation.css'
import Header from '../../Header/header'
import RS from '../../RS/rs'
import { motion } from "framer-motion"
import Projet from './projet/projet'
import infographie from './projet/img/infographie.PNG'
import esport from './projet/img/esport.PNG'
import coco from './projet/img/coco.PNG'
import productPage from './projet/img/productPage.PNG'

function Realisation(){
    return(
        <>
        <Header/>
        <main className='container-realisation'>
            <motion.h1 initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Realisations</motion.h1>
            <div className="container-projets">
                <Projet name="Infographie" img={infographie}/>
                <Projet name="Site Esport" img={esport}/>
                <Projet name="Site Coco" img={coco}/>
                <Projet name="Product page concept" img={productPage}/>
            </div>
        </main>
        <RS/>
        </>
    )
}
export default Realisation