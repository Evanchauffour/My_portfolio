import './projet.css'
import html from './img/html.svg'
import css from './img/css.svg'
import js from './img/js.svg'
import { motion } from "framer-motion"
import { useEffect, useState, useRef, useContext } from 'react';
import { DarkModeContext } from '../../../../App';
import Iframe from 'react-iframe'


function Projet(props){

    const {Mouseover} = useContext(DarkModeContext)
    const {Mouseleave} = useContext(DarkModeContext)

    const iframe = useRef()

    return(
        <>
        <motion.div initial={{opacity:0 , y:100}} animate={{opacity:1 , y:0}} transition={{duration: 0.5, delay:0.5}} className="projet" onMouseEnter={Mouseover} onMouseLeave={Mouseleave}>
            <h2 className='title-projet'>{props.name}</h2>
            <motion.div initial={{x:100}} animate={{x:0}} transition={{duration: 0.5, delay:0.8}} className="technos">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
            </motion.div>
            <img src={props.img} alt="" className='bg-projet'/>
        </motion.div>
        </>
    )
}
export default Projet