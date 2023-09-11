import Header from "../../Header/header"
import RS from '../../RS/rs'
import './home.css'
import { motion } from "framer-motion"
import { useContext } from 'react';
import { DarkModeContext } from '../../../App';

function Home(){

    const {darkMode} = useContext(DarkModeContext)

    return(
        <>
        <Header/>
        <main className={darkMode ? 'container-info_perso light' : 'container-info_perso'}>
        <motion.h1 initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Evan Chauffour</motion.h1>
        <motion.h2 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>Web developer</motion.h2>
        <motion.a initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 1}} href="https://docdro.id/13mSSeQ" target="_blank">My CV</motion.a>
        </main>
        <RS/>
        </>
    )
}
export default Home
