import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const list = useSelector((state) => state.todo.todolist);
  console.log(list);

  return (
    <div>
      {list.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
};

export default TodoList;
