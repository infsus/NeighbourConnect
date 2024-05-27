import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Edit: React.FC = () => {
    const { state } = useLocation();
    const [entrances, setEntrances] = useState(state.building == null ? [] : state.buidling.entrances);

    useEffect(() => {
        if (!state.edit) {
            setEntrances([{ tenantRepresentativeId: "", streetName: "", streetNumber: "" }, { tenantRepresentativeId: "", streetName: "", streetNumber: "" }])
        }
    }, []);

    return (
        <div className="container mt-5">
            <div>
                {state.edit ? <h1>{state.building.name}</h1> : <h1>Create New Building</h1>}
            </div>
            <h4 className="mt-5">Building Info</h4>
            <div className="d-flex justify-content-start">
                <div className="w-50">
                    <label htmlFor="name" className="form-label">Building Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Building Name" />
                </div>
                <div className="w-50 mx-5">
                    <label htmlFor="buildingStartDate" className="form-label">Building Start Date</label>
                    <input type="date" className="form-control" id="buildingStartDate" placeholder="Date" />
                </div>
                <div className="w-50">
                    <label htmlFor="buildingEndtDate" className="form-label">Building End Date</label>
                    <input type="date" className="form-control" id="buildingEndDate" placeholder="Date" />
                </div>
            </div>
            <hr></hr>
            <h4>Entrances</h4>
            {entrances.map((entrance, index) => {
                return (
                    <div key={index} className="d-flex justify-content-start mt-3">
                        <div className="w-50">
                            {/* <label htmlFor="tenantRepresentativeId" className="form-label">Tenant Representative</label> */}
                            <input type="text" className="form-control" id="tenantRepresentativeId" placeholder="Enter Tenant Representative Id" />
                        </div>
                        <div className="w-50 mx-5">
                            {/* <label htmlFor="streetName" className="form-label">Street Name</label> */}
                            <input type="text" className="form-control" id="streetName" placeholder="Enter Street Id" />
                        </div>
                        <div className="w-50">
                            {/* <label htmlFor="streetNumber" className="form-label">Street Number</label> */}
                            <input type="text" className="form-control" id="streetNumber" placeholder="Enter Street Number" />
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
                <button className="btn btn-secondary mx-3">Back</button>
                <input type="submit" className="btn btn-success" value="Save" />
            </div>
        </div>
    );
};

export default Edit;
