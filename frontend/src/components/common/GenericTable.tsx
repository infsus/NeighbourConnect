import React, { useState, useEffect } from "react";

interface GenericTableProps<T> {
    name: string,
    theme: string,
    thNames: string[],
    tdKeys: ((s: T) => string)[],
    source: any[],
    totalCount: number,
    activePage: number,
    itemsPerPage: number,
    selectable: boolean,
    onActionCreate: () => void,
    onActionEdit: (id: number) => void,
    onActionDelete: (id: number) => void,
    onRowChange: (id: number) => void,
    onPageChange: (newPage: number) => void
};

function GenericTable<T>(props: GenericTableProps<T>) {
    const [activeRow, setActiveRow] = useState(0);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => updatePageNumbers(), [pageNumbers]);

    const onRowChange = (row: number, id: number) => {
        if (!props.selectable) return;
        setActiveRow(row);
        props.onRowChange(id);
    }

    const onActionEdit = (event: Event, id: number) => {
        event.stopPropagation();
        props.onActionEdit(id);
    }

    const onActionDelete = (event: Event, id: number) => {
        event.stopPropagation();
        props.onActionDelete(id);
    }

    const updatePageNumbers = () => {
        const pageNumbers: never[] = [];
        for (let i = 0; i < Math.ceil(props.totalCount / props.itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        setPageNumbers(pageNumbers);
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{props.name}</h1>
                <button 
                    type="button"
                    className="btn btn-outline-secondary mx-0"
                    onClick={() => props.onActionCreate()}
                    >New</button>
            </div>
            <table className={props.selectable ? "table table-hover align-middle" : "table align-middle"}>
                <thead className={props.theme}>
                    <tr>
                        <th scope="col">#</th>
                        {props.thNames.map(thName => <th key={thName} scope="col">{thName}</th>)}
                        <th className="text-end" scope="col"><span className="mx-4 px-4">Actions</span></th>
                    </tr>
                </thead>
                <tbody>
                    {props.source.map((s, index) => {
                        return (
                            <tr 
                                key={index} 
                                className={props.selectable && index == activeRow ? "table-active" : ""} 
                                onClick={() => onRowChange(index, s.id)}>
                                <th scope="row" hidden={index >= props.totalCount}>{index + 1}</th>
                                {props.tdKeys.map(tdKey => <td className="m-auto" key={tdKey(s)} hidden={index >= props.totalCount}>{tdKey(s)}</td>)}
                                <td className="text-end" hidden={index >= props.totalCount}>
                                    <div className="btn-group mx-4" role="group" aria-label="Action group">
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-warning"
                                            onClick={(e) => onActionEdit(e, s.id)}
                                            >Edit</button>
                                        <button 
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={(e) => onActionDelete(e, s.id)}
                                            >Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <nav aria-label="Pagination">
                    <ul className="pagination">
                        <li 
                            className={props.activePage == 0 ? "page-item disabled": "page-item"}
                            >
                            <button 
                                className="page-link" 
                                tabIndex={-1}
                                aria-disabled={props.activePage == 0}
                                onClick={() => props.onPageChange(props.activePage - 1)}
                                >Previous</button>
                        </li>
                        {pageNumbers.map(number => {
                            return (
                                <li 
                                    key={number}
                                    className={number == props.activePage ? "page-item active" : "page-item"}
                                    >
                                    <button 
                                        className="page-link"
                                        onClick={() => props.onPageChange(number)}
                                        >{number + 1}</button>
                                </li>
                            )
                        })}
                        <li 
                            className={pageNumbers.length == 0 || props.activePage == pageNumbers.length - 1 ? "page-item disabled": "page-item"}
                            >
                            <button 
                                className="page-link" 
                                tabIndex={-1}
                                aria-disabled={pageNumbers.length == 0 || props.activePage == pageNumbers.length - 1}
                                onClick={() => props.onPageChange(props.activePage + 1)}
                                >Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default GenericTable;
