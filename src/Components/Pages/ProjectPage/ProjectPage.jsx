import './ProjectPage.css'
import Header from '../../Header/header'
import { useLocation } from 'react-router-dom';
import { DarkModeContext } from '../../../App';
import { useContext , useEffect } from 'react';
import ScrollText from './ScrollText/scrollText';
import { motion, useScroll } from "framer-motion"


function ProjetPage() {

  const { scrollYProgress } = useScroll();

  const location = useLocation();

  const state = location.state;

  const {darkMode} = useContext(DarkModeContext)

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      const title = document.querySelector('.title-projet');
      const buttonScroll = document.querySelector('.button-scroll');
      if(value > 10){
        title.classList.add('close')
      }else{
        title.classList.remove('close')
      }
      if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
        buttonScroll.style.transform = "translateX(-50%) rotate(180deg)"
        buttonScroll.addEventListener('click' , () =>{
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        })
      }else{
        buttonScroll.style.transform = "translateX(-50%) rotate(0)"
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  
    return (
      <>
        <Header />
        <main className={darkMode ? 'container-project light' : 'container-project'}>
            <h1 className='title-projet'>{state.name}</h1>
            <div className="description"><ScrollText text={state.description}/></div>
            <div className="button-scroll">
              {darkMode ?               <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1E1E1E" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg> :               <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1f1f1" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>}
            </div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{amount: 1 }} transition={{ duration: 1 }} src={state.img1} alt="" className= 'img1 img' />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{amount: 0.5 }} transition={{ duration: 1 }} src={state.img2} alt="" className= 'img2 img' />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{amount: 0.5 }} transition={{ duration: 1 }} src={state.img3} alt="" className= 'img3 img' />
            <a className='visite' target="_blank" href={state.lien}>Visit website</a>
        </main>
      </>
    );
  }
  
export default ProjetPage