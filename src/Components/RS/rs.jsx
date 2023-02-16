import './rs.css'
import insta from './img/instagram.svg'
import instaDark from './img/instagramDark.svg'
import linkedin from './img/linkedin.svg'
import linkedinDark from './img/linkedinDark.svg'
import github from './img/github.svg'
import githubDark from './img/githubDark.svg'
import { useContext } from 'react';
import { DarkModeContext } from '../../App';

function RS(){

    const {darkMode} = useContext(DarkModeContext)

    return(
        <div className='container-social'>
            {!darkMode ? <a href="https://www.instagram.com/evan_chr/?hl=bg" target="_blank"><img src={insta} alt="" /></a> : <a href="https://www.instagram.com/evan_chr/?hl=bg" target="_blank"><img src={instaDark} alt="" /></a>}
            {!darkMode ? <a href="https://www.linkedin.com/in/evan-chauffour/" target="_blank"><img src={linkedin} alt="" /></a> : <a href="https://www.linkedin.com/in/evan-chauffour/" target="_blank"><img src={linkedinDark} alt="" /></a>}
            {!darkMode ? <a href="https://github.com/Evanchauffour" target="_blank"><img src={github} alt="" /></a> : <a href="https://github.com/Evanchauffour" target="_blank"><img src={githubDark} alt="" /></a>}
        </div>
    )
}
export default RS