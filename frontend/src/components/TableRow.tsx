import React from "react";
import { BuildingEntranceProps } from "./BuildingEntrance";
import { MasterBuildingProps, EntranceProps } from "./Master";
import "../assets/css/components/BuildingDetails.css"

interface BuildingDetailsProps {
    buildingId: number;
    entrances: BuildingEntranceProps[]
}

interface TableProps {
    t_values: MasterBuildingProps | EntranceProps;
}
const TableRow: React.FC<TableProps> = ({ t_values }) => {

    return (
        <div className="detail-content">
            {Object.keys(t_values).map(property => (
                <p>{t_values[property as keyof typeof t_values].toString()}</p>
            ))}
        </div>
    );
};

export default TableRow;