import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Nav = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( 
        <nav className={`px-20 py-3 max-md:px-5 max-md:py-0  z-50 w-full duration-300 ${scrolling ? 'bg-white fixed' : 'relative'}`}>
            <NavBar />
        </nav>
     );
}
 
export default Nav;