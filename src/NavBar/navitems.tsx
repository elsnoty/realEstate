import "./nav.css"
import Page from "./pagedropMenu";

const NavItems = () => {

    return ( 
        <ul className="flex gap-5 max-md:flex-col items-center font-bold">
        <li className="Nav-hover"><a href="/">Home</a></li>
        <li className="Nav-hover"><a href="/">About</a></li>
        <Page/>
        <li className="Nav-hover"><a href="/">Contact</a></li>
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Add Property</button>
        </ul>
     );
}
export default NavItems;