import React from "react";
import { BuildingEntraceProps } from "./BuildingEntrance";
import "../assets/css/components/BuildingDetails.css"

interface BuildingDetailsProps {
    buildingId: number;
    entrances: BuildingEntraceProps[]
}
const BuildingDetails: React.FC<BuildingDetailsProps> = ({ buildingId, entrances }) => {

    const filteredEntrances = entrances.filter(element => element.parentID === buildingId);

    const renderedEntrances = filteredEntrances.map(entrance => (
        <div key={entrance.parentID} className="detail-content">
            <p>{entrance.entranceNumber}</p>
            <p>{entrance.street}</p>
        </div>
    ));
    return (
        <div className="details-container">
            <h4>Ulazi</h4>
            <div className="title">
                <p>Broj ulaza</p>
                <p>Ulica</p>
            </div>
            {renderedEntrances}
        </div>
    );
};

export default BuildingDetails;