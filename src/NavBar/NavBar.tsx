import { useEffect, useState } from "react";
import logo from "../assets/logo.svg fill.svg"
import NavItems from "./navitems";
import NavIcon from "./icon";
const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return ( 
        <div className="flex justify-between">
        <img src={logo} alt="" className="cursor-pointer"/>
{
    width > 768 ?
    <NavItems />
    :
    <NavIcon />
}
        </div>
     );
}
 
export default NavBar;