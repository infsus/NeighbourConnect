import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import BuildingDetails from "./BuildingDetails";
import { entrancesData, entranceCategories, entranceData } from "../assets/buildingsData/buildingsData";
import "../assets/css/components/BuildingDetails.css"
import TableRow from "./TableRow";
import Detail from "./Detail";

export interface EntranceProps {
    id: number;
    tenantRepresentative: string;
    streetName: string;
    streetNumber: string;
}

export interface MasterBuildingProps {
    id: number;
    buildingStartDate: Date;
    buildingEndDate: Date;
    name: string;
    city: string;
    [key: string]: any;
}

interface MasterProps {
    m_categories: string[];
    m_values: MasterBuildingProps;
}
const Master: React.FC<MasterProps> = ({ m_categories, m_values }) => {
    const [showDetail, setShowDetail] = useState(false);
    const expandInfo = (buildingId: number) => {
        setShowDetail(prevShowDetail => !prevShowDetail);
        console.log(`CLICKED ON BUTTON related to building: ${buildingId}`);
    }
    //"(" ne smije ici u novu liniju
    return (
        <div className="info-container">
            <Card style={{ height: showDetail ? 'auto' : '250px' }}>
                <Card.Body>
                    <TableRow isMaster={true} t_values={m_values} callbackFunc={null} />
                </Card.Body>
                {showDetail == true ? <Detail entrances={entranceData} d_categories={entranceCategories} /> : <></>}
                <div className="expand-button-container">
                    <Button className="expand-button" onClick={() => expandInfo(m_values.id)}>
                        {showDetail == false ? "Proširi" : "Sakrij"}</Button>
                </div>
            </Card>
        </div>
    );
};

export default Master;
