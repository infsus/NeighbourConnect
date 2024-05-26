import React from "react";
import { BuildingEntranceProps } from "./BuildingEntrance";
import { MasterBuildingProps, EntranceProps } from "./Master";
import "../assets/css/components/BuildingDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

interface BuildingDetailsProps {
    buildingId: number;
    entrances: BuildingEntranceProps[];
}

interface TableProps {
    isMaster: boolean;
    t_values: MasterBuildingProps | EntranceProps;
}

const TableRow: React.FC<TableProps> = ({ isMaster, t_values }) => {
    const gridTemplateColumns = `repeat(${isMaster ? Object.keys(t_values).length : Object.keys(t_values).length + 1}, 1fr)`;
    return (
        <div className="detail-content" style={{width: '100%', display:'grid', gridTemplateColumns}}>
            {Object.keys(t_values).map((property, index) => (
                <div key={index}>
                    <p>{t_values[property as keyof typeof t_values]?.toString()}</p>
                </div>
            ))}
            {!isMaster ? (
                        <div className="buttons">
                            <FontAwesomeIcon icon={faEdit} />
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    ) : ""}
        </div>
    );
};

export default TableRow;
