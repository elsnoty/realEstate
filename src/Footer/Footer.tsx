import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/Link → logo-white.svg.png"
const Footer = () => {
    return ( 
        <div className="flex max-md:px-10 max-sm:flex-wrap max-sm:justify-center gap-5 justify-between items-center px-20 py-10 bg-gray-900 text-white">
            <p>Copyright © 2024. JustHome</p>
            <img src={logo} alt="" className=""/>
            <div className="flex gap-5 ">
            <FontAwesomeIcon icon={faFacebook} size="xl" className="cursor-pointer hover:scale-90"/>
            <FontAwesomeIcon icon={faLinkedin} size="xl" className="cursor-pointer hover:scale-90"/>
            <FontAwesomeIcon icon={faInstagram} size="xl" className="cursor-pointer hover:scale-90"/>
            <FontAwesomeIcon icon={faXTwitter} size="xl" className="cursor-pointer hover:scale-90"/>
            </div>
        </div>
     );
}
 
export default Footer;