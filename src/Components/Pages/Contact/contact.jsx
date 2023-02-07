import Header from '../../Header/header'
import RS from '../../RS/rs'
import './contact.css'
import { motion } from "framer-motion"
import React, { useRef , useState , useContext } from 'react';
import emailjs from '@emailjs/browser';
import { logDOM } from '@testing-library/react';
import { DarkModeContext } from '../../../App';

function Contact(){
  const form = useRef();
  const FirstName = useRef();
  const LastName = useRef();
  const email = useRef();
  const message = useRef();

  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  var erreurs = [];
  const sendEmail = (e) => {
    e.preventDefault();

      if(FirstName.current.value == ""){
        erreurs.push('FirstName');
        console.log(erreurs);
      }
      if(LastName.current.value == ""){
        erreurs.push('LastName');
        console.log(erreurs);
      }
      if(email.current.value == ""){
        erreurs.push('email');
      }
      if(message.current.value == ""){
        erreurs.push('message');
      }
      
      if(erreurs.length == 0){
        emailjs.sendForm('service_lgm7m6p', 'template_58bpf6r', form.current, 'FnMCT1Kk9TozDi78d')
        setModal(!modal);

      }
      else{
        setErrorModal(!errorModal);
      }
  };

  const toogleModal = () => {
    setModal(!modal);
  }

  const toogleErrorModal = () => {
    setErrorModal(!errorModal);
  }

  {modal && 
    setInterval(() => {
        setModal(!modal);
      }, 10000);
  }

  {errorModal && 
    setInterval(() => {
        setErrorModal(!errorModal);
      }, 10000);
  }

  const {darkMode} = useContext(DarkModeContext)
    return(
        <>
        <Header/>
        <main className='container-contact'>
            <motion.h1 initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Contact me</motion.h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='container-name-email'>
                <motion.input ref={FirstName} initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2}} type="text" name='FirstName' placeholder='First Name' />
                <motion.input ref={LastName} initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.4}} type="text" name='LastName' placeholder='Last Name' />
                <motion.input ref={email} initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.6}} type="email" name='email' placeholder='Email' />
                </div>
                <motion.textarea ref={message} initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 1}} type="text" name='message' placeholder='Message' className='message' />
                <motion.input initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1.5}} type="submit" value="Send" className='button-form'/>
            </form>
        </main>
        {modal && (
                <div className='modal-contact'>
                    <h4>Votre Message à été envoyé avec succès !</h4>
                    <p onClick={toogleModal}>close</p>
                </div>
            )}
          {errorModal && (
                <div className='modal-contact'>
                    <h4>Il y a {erreurs.length} erreurs</h4>
                    <p onClick={toogleErrorModal}>close</p>
                </div>
            )}
        <RS/>
        </>
    )
}
export default Contact