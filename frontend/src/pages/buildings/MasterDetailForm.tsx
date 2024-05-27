import React, { useState, useEffect } from "react";
import GenericTable from "../../components/common/GenericTable";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import pages from "..";

const MasterDetailForm: React.FC = () => {
    const [buildings, setBuildings] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [entrances, setEntrances] = useState([]);
    const [entrancesTotalCount, setEntrancesTotalCount] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const itemsPerPage: number = 10;
    const navigate = useNavigate();

    const fetchBuildings = async (page: number = 0) => {
        const response = await api.buildings.getBuildings(page, itemsPerPage);
        if (response.ok) {
            const data = await response.json();
            setBuildings(data.content);
            setTotalCount(data.count);
            setEntrances(data.content[0].entrances);
            setEntrancesTotalCount(data.content[0].entrances.length);
        } else {
            alert("Error while fetching buildings.");
        }
    };

    useEffect(() => {
        fetchBuildings();
    }, []);

    const onCreate = () => {
        navigate(
            pages.buildingCreate.url, 
            { 
                state: { 
                    edit: false, 
                    building: null 
                }
            }
        );
    };

    const onEdit = async (id: number) => {
        // const response = await api.buildings.getBuilding(id);
        // if (response.ok) {
            // const data = await response.json();
        const data = buildings.filter(b => b.id == id)[0];
        navigate(
            pages.buildingEdit.url, 
            { 
                state: { 
                    edit: true, 
                    building: data
                }
            }
        );
        // }
    };

    const onDelete = (id: number) => {
        alert("Are you sure?");
    };

    const onRowChange = (id: number) => {
        const building = buildings.filter(b => b.id == id)[0];
        setEntrances(building.entrances);
        setEntrancesTotalCount(building.entrances.length);
    };

    const onPageChange = (newPage: number) => {
        setActivePage(newPage);
        fetchBuildings(newPage);
    }

    return (
        <div className="container mt-5">
            <GenericTable<Building>
                name="Buildings"
                theme="table-dark" 
                thNames={["ID", "Building Name", "Building Start Date", "Building End Date", "Number Of Entrances"]}
                tdKeys={[s => s.id.toString(), s => s.name, s => s.buildingStartDate, s => s.buildingEndDate, s => s.entrances.length]}
                source={buildings}
                totalCount={totalCount}
                activePage={activePage}
                itemsPerPage={itemsPerPage}
                selectable={true}
                onActionCreate={onCreate}
                onActionEdit={onEdit}
                onActionDelete={onDelete}
                onRowChange={onRowChange}
                onPageChange={onPageChange}
            />
            <hr></hr>
            <GenericTable<BuildingEntrance>
                name="Entrances"
                theme="table-light" 
                thNames={["ID", "Tenant Representative", "Street Name", "Street Number"]}
                tdKeys={[s => s.id.toString(), s => s.tenantRepresentative, s => s.streetName, s => s.streetNumber]}
                source={entrances}
                totalCount={entrancesTotalCount}
                activePage={activePage}
                itemsPerPage={itemsPerPage}
                selectable={false}
                onActionCreate={onCreate}
                onActionEdit={onEdit}
                onActionDelete={onDelete}
                onRowChange={onRowChange}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default MasterDetailForm;
