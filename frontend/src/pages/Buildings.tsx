import React, { useState, useEffect } from "react";
import GenericTable from "../components/common/GenericTable";
import { api } from "../api";

interface Building {
    id: number,
    buildingStartDate: string,
    buildingEndDate: string,
    name: string,
    entrances: any[]
};

const Buildings: React.FC = () => {
    const [buildings, setBuildings] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [activeRow, setActiveRow] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const itemsPerPage: number = 10;

    const fetchBuildings = async (page: number = 0) => {
        const response = await api.buildings.getBuildings(page, itemsPerPage);
        if (response.ok) {
            const data = await response.json();
            setBuildings(data.content);
            setTotalCount(data.count);
        } else {
            alert("Error while fetching buildings.");
        }
    };

    useEffect(() => {
        fetchBuildings();
    }, []);

    const onCreate = () => {
        alert("Create");
    };

    const onEdit = (id: number) => {
        alert("Edit");
    };

    const onDelete = (id: number) => {
        alert("Delete");
    };

    const onRowChange = (id: number) => {
        alert("Change " + id);
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
                onActionCreate={onCreate}
                onActionEdit={onEdit}
                onActionDelete={onDelete}
                onRowChange={onRowChange}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default Buildings;
