import React from "react";
import { BuildingEntranceProps } from "./BuildingEntrance";
import { MasterBuildingProps, EntranceProps } from "./Master";
import "../assets/css/components/BuildingDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

interface BuildingDetailsProps {
    buildingId: number;
    entrances: BuildingEntranceProps[];
}

interface TableProps {
    isMaster: boolean;
    t_values: MasterBuildingProps | EntranceProps;
    callbackFunc: ((id: number) => void) | null;
}

const handleEdit = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("EDIT");
    console.log("ID:", id);
}

const deleteDetail = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("DELETE");
}

const TableRow: React.FC<TableProps> = ({ isMaster, t_values }) => {
    const gridTemplateColumns = `repeat(${isMaster ? Object.keys(t_values).length : Object.keys(t_values).length + 1}, 1fr)`;
    return (
        <div className="detail-content" style={{ width: '100%', display: 'grid', gridTemplateColumns }}>
            {Object.keys(t_values).map((property, index) => (
                <div key={index}>
                    <p>{t_values[property as keyof typeof t_values]?.toString()}</p>
                </div>
            ))}
            {!isMaster ? (
                <div className="buttons">
                    <Button
                        className="btn-success"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleEdit(event, t_values["id"])}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                        className="btn-danger"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => deleteDetail(event, t_values["id"])}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>


                </div>
            ) : ""}
        </div>
    );
};

export default TableRow;
