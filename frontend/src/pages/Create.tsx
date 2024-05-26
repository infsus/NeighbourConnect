import React, { useState } from "react";
import { masterCategories } from "../assets/buildingsData/buildingsData";
import { BuildingProps } from "../components/Building";
import { Button, Card, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { api } from "../api";
import { CreateBuildingBody, CreateBuildingEntranceBody } from "../api/types";

interface CreateProps {
    c_categories: string[];
    c_values: BuildingProps;
}

const Create: React.FC<null> = () => {
    const categories = ["buildingStartDate", "buildingEndDate", "name", "entrances"];
    const [formData, setFormData] = useState<CreateBuildingBody>({
        buildingStartDate: "",
        buildingEndDate: "",
        name: "",
        entrances: []
    });

    const [entranceFields, setEntranceFields] = useState<CreateBuildingEntranceBody[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEntranceChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newEntrances = [...entranceFields];
        newEntrances[index] = { ...newEntrances[index], [name]: value };
        setEntranceFields(newEntrances);
        setFormData({ ...formData, entrances: newEntrances });
    };

    const addEntranceField = () => {
        setEntranceFields([...entranceFields, { tenantRepresentativeId: null, streetId: 0, streetNumber: 0 }]);
    };

    const removeEntranceField = (index: number) => {
        const newEntrances = entranceFields.filter((_, i) => i !== index);
        setEntranceFields(newEntrances);
        setFormData({ ...formData, entrances: newEntrances });
    };

    const submitChanges = async () => {
        try {
            const response = await api.buildings.createBuilding(formData);
            if (response.ok) {
                console.log("Changes submitted successfully");
            } else {
                console.error("Failed to submit changes:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting changes:", error);
        }
    };

    return (
        <Card>
            <Card.Body style={{ width: "100%" }}>
                {categories.slice(0, 3).map(category => (
                    <FormGroup key={category}>
                        <FormLabel>{category}</FormLabel>
                        <FormControl
                            name={category}
                            placeholder={`Enter ${category}`}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                ))}
                {entranceFields.map((entrance, index) => (
                    <FormGroup key={index}>
                        <FormLabel>Entrance {index + 1}</FormLabel>
                        <FormControl
                            name="tenantRepresentativeId"
                            placeholder="Enter tenant representative ID"
                            value={entrance.tenantRepresentativeId ?? ''}
                            onChange={event => handleEntranceChange(index, event)}
                        />
                        <FormControl
                            name="streetId"
                            placeholder="Enter street ID"
                            //value={entrance.streetId}
                            onChange={event => handleEntranceChange(index, event)}
                        />
                        <FormControl
                            name="streetNumber"
                            placeholder="Enter street number"
                            //value={entrance.streetNumber}
                            onChange={event => handleEntranceChange(index, event)}
                        />
                        <Button className="btn-danger" onClick={() => removeEntranceField(index)}>
                            -
                        </Button>
                    </FormGroup>
                ))}
                <Button className="btn-primary" onClick={addEntranceField}>
                    Add Entrance
                </Button>
            </Card.Body>
            <Button className="btn-success" onClick={submitChanges}>Confirm</Button>
            <Button className="btn-danger">Cancel</Button>
        </Card>
    );
};

export default Create;
