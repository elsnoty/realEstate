import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import "./Prperty.css";
import DropItems from "./dropMenuItems";

export interface Filter {
    location?: string | null;
    propertyType?: string | null;
    priceRange?: string | null;
}

export interface FilterProductProps {
    onFilter: (filters: Filter) => void;
}

const FilterProduct: React.FC<FilterProductProps> = ({ onFilter }) => {
    const [locationDropDownOpen, setLocationDropDownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

    const [propertyTypeDropDownOpen, setPropertyTypeDropDownOpen] = useState(false);
    const [selectedPropertyType, setSelectedPropertyType] = useState<string | null>(null);

    const [priceRangeDropDownOpen, setPriceRangeDropDownOpen] = useState(false);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

    const handleDropDown = (dropdown: string) => {
        switch (dropdown) {
            case "location":
                setLocationDropDownOpen(!locationDropDownOpen);
                break;
            case "propertyType":
                setPropertyTypeDropDownOpen(!propertyTypeDropDownOpen);
                break;
            case "priceRange":
                setPriceRangeDropDownOpen(!priceRangeDropDownOpen);
                break;
            default:
                break;
        }
    };

    const handleSelect = (type: string, value: Filter) => {
        if (type === "location") {
            setSelectedLocation(value.location ?? null);
            setLocationDropDownOpen(false);
        } else if (type === "propertyType") {
            setSelectedPropertyType(value.propertyType ?? null);
            setPropertyTypeDropDownOpen(false);
        } else if (type === "priceRange") {
            setSelectedPriceRange(value.priceRange ?? null);
            setPriceRangeDropDownOpen(false);
        }
    };

    const handleFilterClick = () => {
        onFilter({
            location: selectedLocation,
            propertyType: selectedPropertyType,
            priceRange: selectedPriceRange
        });
    };

    return (
        <>
        <div className="py-10 text-center">
            <h1 className="text-4xl">Why You Should Work With Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="px-24 flex flex-wrap justify-between font-semibold max-md:px-7">
            <div className="max-sm:w-full max-md:w-full">
                <div className={`flex items-center justify-between gap-3 cursor-pointer shadow-2xl rounded-xl p-4`} onClick={() => handleDropDown("location")}>
                    <FontAwesomeIcon icon={faLocationDot} size="xl" />
                    <div>
                        <h3>{selectedLocation ? selectedLocation : "Location (Any)"}</h3>
                        <span>Select Your Place</span>
                    </div>
                    <FontAwesomeIcon icon={locationDropDownOpen ? faChevronUp : faChevronDown} size="lg" />
                </div>
                <ul className={`bg-white p-5 rounded-xl shadow-2xl transition-all ease-linear duration-[400ms] 
                    ${locationDropDownOpen ? ' translate-y-5' : 'scale-0 h-0'}`}>
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("location", { location: "Location (Any)" })}
                        content="Location (Any)" />
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("location", { location: "USA" })}
                        content="USA" />
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("location", { location: "Canada" })}
                        content="Canada" />
                </ul>
            </div>
            <div className="max-sm:w-full max-md:w-full">
                <div className={`flex items-center justify-between gap-3 cursor-pointer shadow-2xl rounded-xl p-4`} onClick={() => handleDropDown("propertyType")}>
                    <FontAwesomeIcon icon={faHouse} size="xl" />
                    <div>
                        <h3>{selectedPropertyType ? selectedPropertyType : "Property Type (Any)"}</h3>
                        <span>Choose Property Type</span>
                    </div>
                    <FontAwesomeIcon icon={propertyTypeDropDownOpen ? faChevronUp : faChevronDown} size="lg" />
                </div>
                <ul className={`bg-white p-5 rounded-xl shadow-2xl transition-all ease-linear duration-[400ms] 
                    ${propertyTypeDropDownOpen ? ' translate-y-5' : 'scale-0 h-0'}`}>
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("propertyType", { propertyType: "Property Type (Any)" })}
                        content="Property Type (Any)" />
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("propertyType", { propertyType: "House" })}
                        content="House" />
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("propertyType", { propertyType: "Apartment" })}
                        content="Apartment" />
                </ul>
            </div>
            <div className="max-sm:w-full max-md:w-full">
                <div className={`flex items-center gap-3 justify-between cursor-pointer shadow-2xl rounded-xl p-4`} onClick={() => handleDropDown("priceRange")}>
                    <FontAwesomeIcon icon={faWallet} size="xl" />
                    <div>
                        <h3>{selectedPriceRange ? selectedPriceRange : "Price Range (Any)"}</h3>
                        <span>Choose Price Range</span>
                    </div>
                    <FontAwesomeIcon icon={priceRangeDropDownOpen ? faChevronUp : faChevronDown} size="lg" />
                </div>
                <ul className={`bg-white p-5 rounded-xl shadow-2xl transition-all ease-linear duration-[400ms] 
                    ${priceRangeDropDownOpen ? ' translate-y-5' : 'scale-0 h-0'}`}>
                    <DropItems className={`dropdown-item`}
                        onClick={() => handleSelect("priceRange", { priceRange: "Price Range (Any)" })}
                        content="Price Range (Any)" />
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("priceRange", { priceRange: "100000-300000" })}
                        content="100000-300000" />
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("priceRange", { priceRange: "400000-600000" })}
                        content="400000-600000" />
                    <DropItems
                        className="dropdown-item"
                        onClick={() => handleSelect("priceRange", { priceRange: "700000-800000" })}
                        content="700000-800000" />
                </ul>
            </div>
            <button className="bg-purple-700 p-2 min-w-[10rem] max-h-16 rounded-xl max-sm:w-full max-md:w-full"
                onClick={handleFilterClick}><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" /></button>
        </div></>
    );
};

export default FilterProduct;
