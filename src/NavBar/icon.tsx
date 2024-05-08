import { useState } from "react";
import NavItems from "./navitems";
import AnimatedHamburgerButton from "./burgerIcon";

  const NavIcon =()=>  {
    const [open, SetOpen] = useState(false)
    const handelOpen = ()=>{
      SetOpen(!open)
    }
    return (
<>
  <div className="z-50 cursor-pointer" onClick={handelOpen}>
    <AnimatedHamburgerButton/>
  </div>
  <div className={`z-40 fixed top-0 left-0 w-full h-full flex justify-end duration-500 ${open ? 'opacity-100' : 'opacity-0 translate-x-full'}`}>
    {open && (
      <div className={`menu w-full bg-opacity-40 backdrop-filter backdrop-blur-sm bg-blue-400`}>
        <NavItems />
      </div>
    )}
  </div>
</>

    );
  }

  export default NavIcon;