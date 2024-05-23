import React from "react";
import Building, {BuildingProps} from "../components/Building";
import "../assets/css/pages/BuildingsInspect.css" 
interface BuildingsProps 
{
    buildings: BuildingProps[];
}

const BuildingsInspect: React.FC<BuildingsProps> = ({buildings}) => {
    return (
        <div className="buildings-container">
            {buildings.map((building) => (
                <Building key={building.id} {...building}/>
            ))}
        </div>
    );
};
export default BuildingsInspect;