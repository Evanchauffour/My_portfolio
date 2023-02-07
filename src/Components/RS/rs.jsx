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
            {!darkMode ? <a href=""><img src={insta} alt="" /></a> : <a href=""><img src={instaDark} alt="" /></a>}
            {!darkMode ? <a href=""><img src={linkedin} alt="" /></a> : <a href=""><img src={linkedinDark} alt="" /></a>}
            {!darkMode ? <a href=""><img src={github} alt="" /></a> : <a href=""><img src={githubDark} alt="" /></a>}
        </div>
    )
}
export default RS