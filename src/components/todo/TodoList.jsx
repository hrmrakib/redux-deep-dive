import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../features/todo/todoSlice";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {" "}
          {todo.text}{" "}
          <button onClick={() => dispatch(deleteTodo(todo.id))} className="">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
