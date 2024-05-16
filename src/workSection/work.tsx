import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import work from "../assets/h31.jpg.png"
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlassLocation";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faHandshake } from "@fortawesome/free-solid-svg-icons/faHandshake";
const WorkSection = () => {
    return ( 
        <div className="px-20 py-10 bg-slate-100 max-sm:px-10">
        <div className="text-center pb-5">
            <h3 className="text-4xl">How It works? Find a perfect home</h3>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex max-md:flex-wrap gap-5 mt-10 items-center">
                <div className="flex-wrap  gap-5">
                    <div className="py-3 max-w-[90%]">
                        <FontAwesomeIcon icon={faMagnifyingGlassLocation} size="2xl"/>
                        <h3 className="text-3xl">Find Real Estate</h3>
                        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="py-3 max-w-[90%]">
                    <FontAwesomeIcon icon={faHandshake} size="2x" />
                        <h3 className="text-3xl">Meet Relator</h3>
                        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="py-3 max-w-[90%]">
                    <FontAwesomeIcon icon={faKey} size="2xl"/>
                        <h3 className="text-3xl">Take The Keys</h3>
                        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            <div>
                <img src={work} alt=""/>
            </div>
        </div>
        </div>
     );
}
 
export default WorkSection;