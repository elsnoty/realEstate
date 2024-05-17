import { useState, useEffect } from 'react';
import { faCheck, faEnvelopeOpen, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpBtn from '../upperpage';

const Attract = () => {
    const [showUpBtn, setShowUpBtn] = useState(false);

    const handleScroll = () => {
        const attractDiv = document.getElementById('attract');
        if (attractDiv) {
            const rect = attractDiv.getBoundingClientRect();
            if (rect.bottom <= window.innerHeight) {
                setShowUpBtn(true);
            } else {
                setShowUpBtn(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="attract" className="px-28 text-center py-10 max-lg:px-16 max-sm:px-10 max-md:flex-col bg-gray-100">
            <div>
                <h1 className="text-4xl font-bold pb-2">Why You Should Work With Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex justify-between py-5 gap-3 max-md:flex-col">
                <div>
                    <FontAwesomeIcon icon={faEnvelopeOpen} size="2xl" />
                    <h3 className="font-bold py-2">Wide Range of Property</h3>
                    <p>We offer expert legal help for all related property items in Dubai.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHouse} size="2xl" />
                    <h3 className="font-bold py-2">Buy or Rent Homes</h3>
                    <p>We sell your home at the best market price and very quickly as well.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCheck} size="2xl" />
                    <h3 className="font-bold py-2">Trusted By Thousands</h3>
                    <p>We offer you free consultancy to get a loan for your new home.</p>
                </div>
            </div>
            {showUpBtn && <UpBtn />}
        </div>
    );
}

export default Attract;
