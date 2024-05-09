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
        <nav className={`px-20 py-3 max-md:px-5 fixed z-50 w-full duration-300 ${scrolling ? 'bg-white' : ''}`}>
            <NavBar />
        </nav>
     );
}
 
export default Nav;