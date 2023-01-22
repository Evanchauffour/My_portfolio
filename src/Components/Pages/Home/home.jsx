import Header from "../../Header/header"
import RS from '../../RS/rs'
import './home.css'
import { motion } from "framer-motion"
function Home(){
    return(
        <>
        <Header/>
        <main className="container-info_perso">
        <motion.h1 initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Evan Chauffour</motion.h1>
        <motion.h2 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>Frontend Developper</motion.h2>
        <motion.h2 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 1}}>Web Designer</motion.h2>
        </main>
        <RS/>
        </>
    )
}
export default Home