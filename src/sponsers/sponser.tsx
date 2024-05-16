import { faAmazon } from "@fortawesome/free-brands-svg-icons/faAmazon";
import { faBehance } from "@fortawesome/free-brands-svg-icons/faBehance";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { faSquarespace } from "@fortawesome/free-brands-svg-icons/faSquarespace";
import { faStripe } from "@fortawesome/free-brands-svg-icons/faStripe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sponsers = () => {
    return ( 
        <div className="px-12 py-10 bg-blue-100">
            <h3 className="text-center">Thousands of world’s leading companies trust Space</h3>
        <div className="flex flex-wrap justify-evenly gap-7 pt-5">
            <FontAwesomeIcon icon={faAmazon}  size="2xl" className="cursor-pointer"/>
            <FontAwesomeIcon icon={faStripe}  size="2xl" className="cursor-pointer"/>
            <FontAwesomeIcon icon={faBehance}  size="2xl" className="cursor-pointer"/>
            <FontAwesomeIcon icon={faSpotify}  size="2xl" className="cursor-pointer"/>
            <FontAwesomeIcon icon={faSquarespace}  size="2xl" className="cursor-pointer"/>
        </div>
        </div>
     );
}
 
export default Sponsers;