import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import { api } from '../api';

const StreetTable = () => {
  const [streets, setStreets] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const streetsPerPage = 2;

  const fetchStreets = async (page: number) => {
    const response = await api.streets.getStreets(page, streetsPerPage);
    if (response.ok) {
        const data = await response.json();
        setStreets(data.content);

        const pageNumbers: never[] = [];
        for (let i = 0; i < Math.ceil(data.count / streetsPerPage); i++) {
            pageNumbers.push(i);
        }
        setPageNumbers(pageNumbers);
    }
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    fetchStreets(page);
  }

  useEffect(() => {
    fetchStreets(currentPage);
  }, []);

  const handleDelete = async (id: number) => {
    const response = await api.streets.deleteStreet(id);
    if (response.ok) {
        fetchStreets(currentPage);
        alert("Street deleted successfully");
    }
  };

  const handleEdit = (id: number) => {
    console.log(`Redirect to edit page for street with id: ${id}`);
  };

  const handleCreate = () => {
    alert("New");
  }

  return (
    <div>
      <Button variant="info" onClick={() => handleCreate()}>
        <i className="bi bi-info"></i>New
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Place Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {streets.map(street => (
            <tr key={street.id}>
              <td>{street.id}</td>
              <td>{street.name}</td>
              <td>{street.place}</td>
              <td>
                <Button variant="warning" className="me-2" onClick={() => handleEdit(street.id)}>
                  <i className="bi bi-pencil"></i>Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(street.id)}>
                  <i className="bi bi-trash"></i>Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {pageNumbers.map(number => (
          <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default StreetTable;
