import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";

export interface BuildingProps 
{
    id: number;
    imageURL: string;
    name: string;
    city: string;
    street: string;

}
const Building: React.FC<BuildingProps> = ({id, imageURL, name, city, street}) => 
{
    //"(" ne smije ici u novu liniju
    return (
        <div>
            <Card>
                <Card.Img src={imageURL} alt={`${name}`} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        Lokacija: `${street}, ${city}`
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Building;
