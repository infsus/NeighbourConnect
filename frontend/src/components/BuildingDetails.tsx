import React from "react";
import { buildingsData, entrancesData } from "../assets/buildingsData/buildingsData";
import { BuildingEntraceProps } from "./BuildingEntrance";
interface BuildingDetailsProps {
    buildingId: number;
    entrances: BuildingEntraceProps[]
}
const BuildingDetails: React.FC<BuildingDetailsProps> = ({ buildingId, entrances }) => {

    const filteredEntrances = entrancesData.filter(element => element.parentID === buildingId);

    const renderedEntrances = filteredEntrances.map(entrance => (
        <div key={entrance.parentID}>
            Ulaz broj: {entrance.entranceNumber}
            Ulica: {entrance.street}
        </div>
    ));
    return (
        <div>
            Ulazi:
            {renderedEntrances}
        </div>
    );
};

export default BuildingDetails;