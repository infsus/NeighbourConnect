import React from "react";
import Building, { BuildingProps } from "../components/Building";
import "../assets/css/pages/BuildingsInspect.css"
import Filter from "../components/Filter";
import { categoryTypes, categories } from "../assets/buildingsData/buildingsData";
interface BuildingsProps {
    buildings: BuildingProps[];
}

const BuildingsInspect: React.FC<BuildingsProps> = ({ buildings }) => {
    return (
        <div>
            <Filter categoryTypes = {categoryTypes} categories={categories} ></Filter>
            <div className="buildings-container">
                {buildings.map((building) => (
                    <Building key={building.id} {...building} />
                ))}
            </div>
        </div>
    );
};
export default BuildingsInspect;