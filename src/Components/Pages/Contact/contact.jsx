import Header from '../../Header/header'
import RS from '../../RS/rs'
import './contact.css'
import { motion } from "framer-motion"

function Contact(){

    return(
        <>
        <Header/>
        <main className='container-contact'>
            <motion.h1 initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Contact me</motion.h1>
            <form name="contact" method="post" data-netlify="true">
            <div className='container-name-email'>
            <input type="hidden" name="form-name" value="contact" />
                <p>
                    <input type="text" name="fisrtName" placeholder='First name'/>
                </p>
                <p>
                    <input type="email" name="LastName" placeholder='Last name'/>
                </p>
                <p>
                    <input type="email" name="email" placeholder='Email'/>
                </p>
          </div>
          <p>
            <textarea name="message" placeholder='message' className='message'></textarea>
          </p>
          <p>
            <button type="submit" className='button-form'>Send</button>
          </p>
        </form>,
            {/* <form action="">
                <div className='container-name-email'>
                <motion.input initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2}} type="text" name='FirstName' placeholder='First Name' />
                <motion.input initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.4}} type="text" name='LastName' placeholder='Last Name' />
                <motion.input initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 0.6}} type="email" name='email' placeholder='Email' />
                </div>
                <motion.textarea initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, delay: 1}} type="text" name='message' placeholder='Message' className='message' />
                <motion.input initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1.5}} type="submit" value="Send" className='button-form'/>
            </form> */}
        </main>
        <RS/>
        </>
    )
}
export default Contact