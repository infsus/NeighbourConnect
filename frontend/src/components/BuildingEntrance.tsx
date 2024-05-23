import React from "react";
import { entrancesData } from "../assets/buildingsData/buildingsData";

export interface BuildingEntraceProps
{
    parentID: number;
    entranceNumber: number;
    street: string;
}

const BuildingEntrance: React.FC<BuildingEntraceProps> = () => {
    return (
        <div>

        </div>
    );
};

export default BuildingEntrance;