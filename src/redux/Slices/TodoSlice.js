import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [
    {
      id: Math.random(),
      title: "todo item 1",
      description: "todo description 1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 2",
      description: "todo description 2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 3",
      description: "todo description 3",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 4",
      description: "todo description 4",
      isDone: false,
    },
  ],
};
export const TodoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
    DeletTodo: (state, action) => {
      state.todolist = state.todolist.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo, DeletTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
