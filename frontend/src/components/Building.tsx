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

}
const Building: React.FC<BuildingProps> = ({id, src, name, city, street}) => 
{
    const [showDetail, setShowDetail] = useState(true);
    const expandInfo = (buildingId: number) => {
        setShowDetail(prevShowDetail => !prevShowDetail);
        console.log(`CLICKED ON BUTTON related to building: ${buildingId}` );
    }
    //"(" ne smije ici u novu liniju
    return (
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Img key = {id} src={src} alt={name} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        Lokacija: {street}, {city}
                    </Card.Text>
                </Card.Body>
                {showDetail == true ? <BuildingDetails buildingId={id} entrances={entrancesData}/> : <></>}
                <Button onClick={() => expandInfo(id)}>
                    {showDetail==true ? "Pokaži više informacija" : "Makni informacije"}</Button>
            </Card>
        </div>
    );
};

export default Building;
