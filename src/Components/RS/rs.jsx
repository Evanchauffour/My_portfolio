import './rs.css'
import insta from './img/instagram.svg'
import linkedin from './img/linkedin.svg'
import github from './img/github.svg'
function RS(){
    return(
        <div className='container-social'>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={linkedin} alt="" /></a>
            <a href=""><img src={github} alt="" /></a>
        </div>
    )
}
export default RS