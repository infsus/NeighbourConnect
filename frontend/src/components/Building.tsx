import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Card} from "react-bootstrap";
import BuildingDetails from "./BuildingDetails";
import { entrancesData } from "../assets/buildingsData/buildingsData";
export interface BuildingProps 
{
    id: number;
    src: string;
    name: string;
    city: string;
    street: string;
    streetNumber: number;
    [key: string]: any;

}
const Building: React.FC<BuildingProps> = ({id, src, name, city, street, streetNumber}) => 
{
    const [showDetail, setShowDetail] = useState(false);
    const expandInfo = (buildingId: number) => {
        setShowDetail(prevShowDetail => !prevShowDetail);
        console.log(`CLICKED ON BUTTON related to building: ${buildingId}` );
    }
    //"(" ne smije ici u novu liniju
    return (
        <div>
            <Card style={{width: '18rem', height: showDetail ? 'auto' : '400px'}}>
                <div className="building-image-container" style={{width: '200px', height: '200px'}}>
                    <Card.Img style={{width: '100%', height: '100%'}}key = {id} src={src} alt={name} />
                </div>
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        Lokacija: {street} {streetNumber}, {city}
                    </Card.Text>
                </Card.Body>
                {showDetail == true ? <BuildingDetails buildingId={id} entrances={entrancesData}/> : <></>}
                <Button onClick={() => expandInfo(id)}>
                    {showDetail==false ? "Pokaži više informacija" : "Makni informacije"}</Button>
            </Card>
        </div>
    );
};

export default Building;
