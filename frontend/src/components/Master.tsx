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
        //console.log(`CLICKED ON BUTTON related to building: ${buildingId}`);
    }

    //console.log("M VALUES: ", m_values);
    const [fetchedEntrances, setFetchedEntrances] = useState<EntranceProps[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await api.buildings.getBuildings(0, 10); // Call the API function to fetch buildings
    //         console.log("RESPONSE: ", response);
    //         if (response.ok) {
    //           const data = await response.json(); // Extract JSON data from the response
    //           console.log("DATA: ", data);
    //           setFetchedEntrances(data.content); // Update the state with the fetched data
    //         } else {
    //           console.error('Failed to fetch buildings:', response.statusText);
    //         }
    //       } catch (error) {
    //         console.error('Error fetching buildings:', error);
    //       }
    //     };
    
    //     fetchData(); // Call the fetchData function when the component mounts
    //   }, []); 
    //"(" ne smije ici u novu liniju
    return (
        <div className="info-container">
            <Card style={{ height: showDetail ? 'auto' : '150px', width: '550px' }}>
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
