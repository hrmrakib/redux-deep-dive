import { createSlice, nanoid } from "@reduxjs/toolkit";

const initTodo = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initTodo,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    editTodo: (state, action) => {},
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
