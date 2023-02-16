import Header from '../../Header/header'
import RS from '../../RS/rs'
import './contact.css'
import { motion } from "framer-motion"
import React, { useRef , useState , useContext } from 'react';
import emailjs from '@emailjs/browser';
import { DarkModeContext } from '../../../App';

function Contact() {
  const form = useRef();
  const FirstName = useRef();
  const LastName = useRef();
  const email = useRef();
  const message = useRef();

  const [errors, setErrors] = useState([]);
  const [modal, setModal] = useState(false);
const [errorModal, setErrorModal] = useState(false);
const [fieldErrors, setFieldErrors] = useState({});
  const sendEmail = (e) => {
    e.preventDefault();
  
    const errors = {}; // Objet qui stocke les messages d'erreur pour chaque champ
  
    if (FirstName.current.value === "") {
      errors.firstName = "Please enter your first name";
    }
  
    if (LastName.current.value === "") {
      errors.lastName = "Please enter your last name";
    }
  
    if (email.current.value === "") {
      errors.email = "Please enter your email address";
    }
  
    if (message.current.value === "") {
      errors.message = "Please enter your message";
    }
  
    if (Object.keys(errors).length === 0) {
      emailjs.sendForm('service_lgm7m6p', 'template_58bpf6r', form.current, 'FnMCT1Kk9TozDi78d')
        .then(() => {
          setModal(true);
        }, () => {
          setErrorModal(true);
        });
    } else {
      setFieldErrors(errors);
    }
  };
  

  const toogleModal = () => {
    setModal(!modal);
  };

  const toogleErrorModal = () => {
    setErrorModal(!errorModal);
  };

  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <Header />
      <main
        className={darkMode ? "container-contact-light" : "container-contact"}
      >
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact me
        </motion.h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="container-name-email">
            <motion.input
              ref={FirstName}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="FirstName"
              placeholder={fieldErrors.firstName || "First Name"}
              className={fieldErrors.firstName ? "red-placeholder" : ""}
            />
            <motion.input
              ref={LastName}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              type="text"
              name="LastName"
              placeholder={fieldErrors.lastName || "Last Name"}
              className={fieldErrors.firstName ? "red-placeholder" : ""}
            />
            <motion.input
              ref={email}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              type="email"
              name="email"
              placeholder={fieldErrors.email || "Email"}
              className={fieldErrors.firstName ? "red-placeholder" : ""}
            />
          </div>
          <motion.textarea
            ref={message}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
            type="text"
            name="message"
            placeholder={fieldErrors.message || "Message"}
            className={fieldErrors.firstName ? "red-placeholder message" : "message"}
          />
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            type="submit"
            value="Send"
            className="button-form"
          />
        </form>
      </main>
        {modal && (
                <div className={darkMode ? 'modal-contact-light' : 'modal-contact'}>
                    <h4>Votre Message à été envoyé avec succès !</h4>
                    <p onClick={toogleModal}>close</p>
                </div>
            )}
        {errorModal && (
  <div className="modal-error">
    <h2>Error</h2>
    <ul>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
    <button onClick={toogleErrorModal}>Close</button>
  </div>
)}
        <RS/>
        <div className={darkMode ? "tel-mail-light" : "tel-mail"}>
          <a href="tel:+33471017">06 33 47 10 17</a>
          <a href="mailto: evanchauffour@gmail.com">evanchauffour@gmail.com</a>
        </div>
        </>
    )
}
export default Contact