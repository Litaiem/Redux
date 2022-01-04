import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/Slices/TodoSlice";

const NewTodo = () => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    isDone: false,
    id: Math.random(),
  });
  const handleAdd = () => {
    dispatch(AddTodo(newItem));
  };
  return (
    <div style={{ marginTop: "4rem" }}>
      <Container>
        <h2 style={{ marginBottom: "3rem" }}>Add New Todo</h2>
        <div style={{ marginBottom: "3rem" }}>
          <Form>
            <Form.Label>Todo Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) =>
                setNewItem({ ...newItem, title: e.target.value })
              }
            ></Form.Control>
            <Form.Label>Todo description </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
            ></Form.Control>
          </Form>
          <Button
            onClick={handleAdd()}
            style={{ marginTop: "1rem" }}
            variant="success"
          >
            ADD
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default NewTodo;
