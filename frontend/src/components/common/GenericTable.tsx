import React, { useState, useEffect } from "react";

interface GenericTableProps {
    theme: string,
    thNames: string[],
    tdKeys: string[],
    source: any[],
    totalCount: number,
    activePage: number,
    itemsPerPage: number,
    onActionEdit: (id: number) => void,
    onActionDelete: (id: number) => void,
    onRowChange: (id: number) => void,
    onPageChange: (newPage: number) => void
};

const GenericTable: React.FC<GenericTableProps> = (props) => {
    const [activeRow, setActiveRow] = useState(0);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => updatePageNumbers());

    const onRowChange = (row: number, id: number) => {
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
            <table className="table table-hover">
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
                                className={index == activeRow ? "table-active" : ""} 
                                onClick={() => onRowChange(index, s.id)}>
                                <th scope="row">{index + 1}</th>
                                {props.tdKeys.map(tdKey => <td key={tdKey}>{s[tdKey]}</td>)}
                                <td className="text-end">
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
                            className={props.activePage == pageNumbers.length - 1 ? "page-item disabled": "page-item"}
                            >
                            <button 
                                className="page-link" 
                                tabIndex={-1}
                                aria-disabled={props.activePage == pageNumbers.length - 1}
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
