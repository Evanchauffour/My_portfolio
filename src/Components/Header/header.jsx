import './header.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import bg from './img/bg.svg'
function Header(){
    const location = useLocation()
    return(
        <header>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>Home</Link>
                <Link to="/realisation" className={location.pathname === '/realisation' ? 'selected' : ''}>Realisation</Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'selected' : ''}>Contact</Link>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='moon'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>

            <img src={bg} alt="" className='bg'/>
        </header>
    )
}
export default Header