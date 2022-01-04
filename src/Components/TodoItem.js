import React from "react";
import { Card, Button } from "react-bootstrap";
import { DeletTodo } from "../redux/Slices/TodoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(DeletTodo({ id: item.id }));
  };
  return (
    <div>
      <Card style={{ backgroundColor: "white", display: "flex" }}>
        <Card.Body>
          <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <h7 style={{ color: item.isDone ? "green" : "red" }}>
            {item.isDone ? "Done" : "Not Done"}
          </h7>
        </Card.Body>
        <Button
          style={{ width: "5rem", marginLeft: "40rem" }}
          onClick={() => handleDelete()}
          variant="danger"
        >
          Delete
        </Button>
      </Card>
    </div>
  );
};

export default TodoItem;
