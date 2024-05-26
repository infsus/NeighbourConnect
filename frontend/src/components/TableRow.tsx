import React from "react";
import { BuildingEntranceProps } from "./BuildingEntrance";
import { BuildingProps, EntranceProps } from "./Master";
import "../assets/css/components/BuildingDetails.css"

interface BuildingDetailsProps {
    buildingId: number;
    entrances: BuildingEntranceProps[]
}

interface TableProps {
    t_values: BuildingProps | EntranceProps;
}
const TableRow: React.FC<TableProps> = ({ t_values }) => {

    //const filteredEntrances = entrances.filter(element => element.parentID === buildingId);

    // const renderedEntrances = filteredEntrances.map(entrance => (
    //     <div key={entrance.parentID} className="detail-content">
    //         <p>{entrance.entranceNumber}</p>
    //         <p>{entrance.street}</p>
    //     </div>
    // ));
    return (
        <div className="detail-content">
            {Object.keys(t_values).map(property => (
                <p>{t_values[property as keyof typeof t_values]}</p>
            ))}
        </div>
    );
};

export default TableRow;