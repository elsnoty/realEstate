import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Adjust as needed
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    return (
        <div ref={divRef} className="bg-black text-center text-white py-10">
            <div className={`icon-container ${isVisible ? 'animate-icon' : ''}`}>
                <FontAwesomeIcon icon={faPaperPlane} size="2xl" className="hover-icon cursor-pointer"/>
            </div>
            <h1>Stay Up To Date</h1>
            <p>Subscribe to our newsletter to receive our weekly feed.</p>
            <div className="relative inline-block mt-5 w-[30%] max-md:w-[70%]">
                <input
                    type="text"
                    placeholder=" Your E-mail"
                    className="rounded-full p-2 w-full outline-none text-black bg-gray-700 pr-12"
                />
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-r-full px-4 py-2 bg-gray-700 text-white"
                >
                    Send <FontAwesomeIcon icon={faArrowRightLong} color="white"/>
                </button>
            </div>
        </div>
    );
};

export default Contact;
