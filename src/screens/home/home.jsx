import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosStart, deleteTodoSuccess } from '../../reducer/todosSlice';
import axios from 'axios';
import { config } from '../../config';
import { Button, Modal, Table, Spinner } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    dispatch(fetchTodosStart());
  }, [dispatch]);

  useEffect(() => {
    setLoading(todos.length === 0);
  }, [todos]);

  const handleDelete = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      if (currentIndex !== null) {
        await axios.delete(`${config.api_endpoint_baseURL}/${todos[currentIndex].id}`);
        const updatedTodos = todos.filter((_, index) => index !== currentIndex);
        dispatch(deleteTodoSuccess(updatedTodos));
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEdit = (index) => {
    const todoToEdit = todos[index];
    navigate(`/additems`, { state: { editing: true, todoToEdit, index } });
  };

  const handleAddTodo = () => {
    navigate('/additems');
  };

  const handleLogout = () => {
    navigate('/');

  };

  return (
    <div className="container">
      <header>
        <h1 className="text-center mt-3 mb-4">Student Information</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button variant="success" onClick={handleAddTodo}>
            Add Student
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <div className="table-responsive">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p className="m-0 ms-2">Loading...</p>
          </div>
        ) : (
          todos.length === 0 ? (
            <p className="text-center">No items yet</p>
          ) : (
            <Table striped bordered hover>
              <thead className="table-dark">
                <tr>
                  <th>Student Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Qualification</th>
                  <th>Phone Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, index) => (
                  <tr key={index}>
                    <td>{todo.studentName}</td>
                    <td>{todo.age}</td>
                    <td>{todo.email}</td>
                    <td>{todo.qualification}</td>
                    <td>{todo.phoneNumber}</td>
                    <td>
                      <Button variant="info" className="me-2" onClick={() => handleEdit(index)}>
                        <FaEdit /> Edit
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(index)}>
                        <FaTrash /> Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
