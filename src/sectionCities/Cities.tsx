import miami from "../assets/florida.jpg";
import chicago from "../assets/Chicago.jpg";
import new_york from "../assets/new work.jpg";
import florida from "../assets/floridaaa.jpg";
import { useState } from "react";

const Cities = () => {
    const cityList = [

        {
            image: chicago,
            title: "Chicago"
        },
        {
            image: new_york,
            title: "New York"
        },
        {
            image: miami,
            title: "Miami"
        },
        {
            image: florida,
            title: "Florida"
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(-1);

    return (
        <div className="py-10 bg-gradient-to-r from-blue-400 to-slate-600">
        <div className="text-center py-5">
            <h1 className="text-3xl">Find Properties in These Cities</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
            {cityList.map((city, index) => (
                <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                >
                    <img
                        src={city.image}
                        alt=""
                        className={`w-[400px] h-[500px] rounded-xl transition-transform duration-300 transform ${
                            hoveredIndex === index ? "scale-95 opacity-70" : ""
                        }`}
                    />
                    {hoveredIndex === index && (
                        <h3 className="absolute left-5 top-5 z-[1] text-white">{city.title}</h3>
                    )}
                </div>
            ))}
        </div>
        </div>
    );
};

export default Cities;
