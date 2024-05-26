import React from "react";
//import { BuildingEntranceProps } from "./BuildingEntrance";
import { EntranceProps } from "./Master";
import "../assets/css/components/BuildingDetails.css"
import TableRow from "./TableRow";

// interface BuildingDetailsProps {
//     buildingId: number;
//     entrances: BuildingEntranceProps[]
// }


interface DetailProps {
    entrances: EntranceProps[];
    d_categories: string[];
    //d_values: BuildingEntraceProps;
}
const Detail: React.FC<DetailProps> = ({ entrances, d_categories }) => {
    const allEntrances = entrances.map(entrance => (
        <div className="detail-content">
            <TableRow t_values={entrance} />
        </div>
    ))
    return (
        <div className="details-container">
            <h4>Ulazi</h4>
            <div className="title">
                {d_categories.map(category => (
                    <p>{category}</p>
                ))}
            </div>
            {allEntrances}
        </div>
    );
};

export default Detail;