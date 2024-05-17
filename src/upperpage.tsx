import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FontAwesomeIcon 
            icon={faArrowAltCircleUp} 
            className="p-4 rounded-full bg-black text-white fixed right-5 bottom-5 z-10 cursor-pointer" 
            onClick={scrollToTop}
            size="xl"
        />
    );
}
export default UpBtn;
