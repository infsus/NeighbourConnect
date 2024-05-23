import React from "react";
import Building, {BuildingProps} from "../components/Building";

interface BuildingsProps 
{
    buildings: BuildingProps[];
}

const BuildingsInspect: React.FC<BuildingsProps> = ({buildings}) => {
    return (
        <div>
            {buildings.map((building) => (
                <Building key={building.id} {...building}/>
            ))}
        </div>
    );
};
export default BuildingsInspect;