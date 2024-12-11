import React, { useEffect, useState } from "react";
import { masterCategories } from "../assets/buildingsData/buildingsData";
import { BuildingProps } from "../components/Building";
import { Button, Card, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { api } from "../api";
import { CreateBuildingBody, CreateBuildingEntranceBody } from "../api/types";
import { useNavigate } from "react-router-dom";
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

    useEffect(() => {
        //console.log("Used Categories Prop Updated:", usedCategories);
    }, [formData]);

    const navigate = useNavigate();

    const [entranceFields, setEntranceFields] = useState<CreateBuildingEntranceBody[]>([]);

    useEffect(() => {
        //console.log("Used Categories Prop Updated:", usedCategories);
    }, [entranceFields]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log("FORM DATA: ", formData);
    };

    const formDataNotComplete = (data: CreateBuildingBody) => {
        return (
            data.buildingStartDate === "" ||
            data.buildingEndDate === "" ||
            data.name === "" ||
            data.entrances.length === 0
        );
    };

    const entranceDataComplete = (data: CreateBuildingBody) => {
        let complete = true;
        data.entrances.forEach(entrance => {
            if (
                entrance.streetId == 0 || 
                entrance.streetNumber == 0 ||
                entrance.tenantRepresentativeId == 0
        ) {
            complete = false;
        }
        })
        return complete;
    }

    const handleEntranceChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newEntrances = [...entranceFields];
        newEntrances[index] = { ...newEntrances[index], [name]: value };
        setEntranceFields(newEntrances);
        console.log("NEW ENTRANCES: ", newEntrances);
        setFormData({ ...formData, entrances: newEntrances });
        console.log("FORM: ", formData);
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
            const response = await api.buildings.createBuilding(JSON.stringify(formData));
            if (response.ok) {
                alert("Changes submitted successfully.");
                navigate('/buildings');
            } else {
                alert(`Failed to submit changes.`);
            }
        } catch (error) {
            console.error("Error submitting changes:", error);
        }
    };

    const abortCreate = () => {
        navigate('/buildings');
    }

    return (
        <div className="container mt-5">
            <h1>Create New Building</h1>
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
                <Button className="btn-success" onClick={submitChanges}
                disabled = {
                    formDataNotComplete(formData) || !entranceDataComplete(formData)
                }>Confirm</Button>
                <Button className="btn-danger" onClick={abortCreate}>Cancel</Button>
            </Card>
        </div>
    );
};

export default Create;
