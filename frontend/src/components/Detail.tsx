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
    
    const fetchAllEntrances = (parentID: number) => {
        console.log("FETCHING ALL ENTRANCES");
    }
    const fetchEntrance = (id: number) => {
        console.log("FETCHING ENTRANCE");
    }
    const allEntrances = entrances.map(entrance => (
        <div className="detail-content">
            <TableRow isMaster={false} t_values={entrance} callbackFunc={fetchEntrance}/>
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