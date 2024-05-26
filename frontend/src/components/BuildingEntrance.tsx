import React from "react";
import { entrancesData } from "../assets/buildingsData/buildingsData";

export interface BuildingEntranceProps
{
    parentID: number;
    entranceNumber: number;
    street: string;
}

const BuildingEntrance: React.FC<BuildingEntranceProps> = () => {
    return (
        <div>

        </div>
    );
};

export default BuildingEntrance;