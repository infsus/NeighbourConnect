import React, { useState, useEffect } from "react";
import GenericTable from "../components/common/GenericTable";
import { api } from "../api";

interface Street {
    id: number,
    name: string,
    place: string
}

const Streets: React.FC = () => {
    const [streets, setStreets] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [activeRow, setActiveRow] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const itemsPerPage: number = 10;

    const fetchStreets = async (page: number = 0) => {
        const response = await api.streets.getStreets(page, itemsPerPage);
        if (response.ok) {
            const data = await response.json();
            setStreets(data.content);
            setTotalCount(data.count);
        } else {
            alert("Error while fetching streets.");
        }
    };

    useEffect(() => {
        fetchStreets();
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
        fetchStreets(newPage);
    }

    return (
        <div className="container mt-5">
            <GenericTable<Street>
                name="Streets"
                theme="table-dark" 
                thNames={["ID", "Name", "Place"]}
                tdKeys={[s => s.id.toString(), s => s.name, s => s.place]}
                source={streets}
                totalCount={totalCount}
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

export default Streets;
