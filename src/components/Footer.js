import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaFreeCodeCamp} from "react-icons/fa"

function Footer() {
    return (
       <div className="app-container">
            <div className="footer">
           
           <a href="https://github.com/saintjohn1992" className="fa">
           <FaGithubSquare />
           </a>

           <a href="https://www.linkedin.com/in/shane-st-john92" className="fa">
           <FaLinkedin />
           </a>

           <a href="https://www.freecodecamp.org/the_hamster-king" className="fa">
           <FaFreeCodeCamp />
           </a>
       </div>
       </div>
    )
}

export default Footer;