import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pages from "..";

const Edit: React.FC = () => {
    const { state } = useLocation();
    const [building, setBuilding] = useState({ name: "", buildingStartDate: Date.now(), buildingEndDate: Date.now() })
    const [entrances, setEntrances] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.edit) {
            setEntrances([{ tenantRepresentative: "", streetName: "", streetNumber: "" }]);
        } else {
            setBuilding(state.building);
            setEntrances(state.building.entrances);
            console.log(JSON.stringify(state.building));
        }
    }, []);

    const handleEntranceChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newEntrances = [...entrances];
        newEntrances[index] = { ...newEntrances[index], [name]: value };
        setEntrances(newEntrances);
        console.log("NEW ENTRANCES: ", newEntrances);
    };

    const onSubmit = (event: Event) => {
        event.preventDefault();
        // console.log(JSON.stringify(event.target));
        console.log(JSON.stringify(building));
        console.log(JSON.stringify(entrances));
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} className="container mt-5">
            <div>
                {state.edit ? <h1>Edit {state.building.name}</h1> : <h1>Create New Building</h1>}
            </div>
            <h4 className="mt-5">Building Info</h4>
            <div className="d-flex justify-content-start">
                <div className="w-50">
                    <label htmlFor="name" className="form-label">Building Name</label>
                    <input 
                        type="text" className="form-control" id="name" placeholder="Enter Building Name" 
                        value={building.name} onChange={(e) => setBuilding({...building, name: e.target.value })} required />
                </div>
                <div className="w-50 mx-5">
                    <label htmlFor="buildingStartDate" className="form-label">Building Start Date</label>
                    <input 
                        type="date" className="form-control" id="buildingStartDate" placeholder="Date" 
                        value={building.buildingStartDate} onChange={(e) => setBuilding({...building, buildingStartDate: e.target.value })} required />
                </div>
                <div className="w-50">
                    <label htmlFor="buildingEndtDate" className="form-label">Building End Date</label>
                    <input 
                        type="date" className="form-control" id="buildingEndDate" placeholder="Date" 
                        value={building.buildingEndDate} onChange={(e) => setBuilding({...building, buildingEndDate: e.target.value })} required />
                </div>
            </div>
            <hr></hr>
            <h4>Entrances</h4>
            {entrances.map((entrance, index) => {
                return (
                    <div key={index} className="d-flex justify-content-start mt-3">
                        <div className="w-50">
                            {/* <label htmlFor="tenantRepresentative" className="form-label">Tenant Representative</label> */}
                            <input 
                                type="text" className="form-control" id="tenantRepresentative" placeholder="Enter Tenant Representative" 
                                value={entrance.tenantRepresentative} onChange={e => handleEntranceChange(index, e)} />
                        </div>
                        <div className="w-50 mx-5">
                            {/* <label htmlFor="streetName" className="form-label">Street Name</label> */}
                            <input 
                                type="text" className="form-control" id="streetName" placeholder="Enter Street"
                                value={entrance.streetName} onChange={e => handleEntranceChange(index, e)} required />
                        </div>
                        <div className="w-50">
                            {/* <label htmlFor="streetNumber" className="form-label">Street Number</label> */}
                            <input 
                                type="text" className="form-control" id="streetNumber" placeholder="Enter Street Number" 
                                value={entrance.streetNumber} onChange={e => handleEntranceChange(index, e)} required/>
                        </div>
                        {index == entrances.length - 1 ? (
                            <div className="d-flex justify-content-end align-items-end w-25">
                                <button className="btn btn-secondary">Add</button>
                            </div>
                        ) : (
                            <div className="w-25" ></div>
                        )}
                    </div>
                );
            })}
            <hr></hr>
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary mx-3" onClick={() => navigate(pages.buildings.url)}>Back</button>
                <input type="submit" className="btn btn-success" value="Save" />
            </div>
        </form>
    );
};

export default Edit;
