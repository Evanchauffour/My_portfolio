import './projet.css'
import github from '../projet/img/github-black.svg'
import internet from './img/internet.png'
import html from './img/html.svg'
import css from './img/css.svg'
import js from './img/js.svg'
import { animate, motion } from "framer-motion"
import { useEffect, useState } from 'react';

function Projet(props){
    
    return(
        <motion.div initial={{opacity:0 , y:100}} animate={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.5}} className="projet">
            <h2>{props.name}</h2>
            <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration: 0.5, delay:0.8}} className="links">
                <img src={github} alt="" />
                <a href=""><img src={internet} alt="" /></a>
            </motion.div>
            <motion.div initial={{x:100}} animate={{x:0}} transition={{duration: 0.5, delay:0.8}} className="technos">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
            </motion.div>
                <img src={props.img} alt="" className='bg-projet'/>
        </motion.div>
    )
}
export default Projet