import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import TodoList from "./TodoList";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addNewTodo = (e) => {
    e.preventDefault();
    if (text.length < 1) {
      return;
    }
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <form>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='p-2 border-2 mr-2'
        />
        <button onClick={addNewTodo}>Add</button>
      </form>
      <TodoList />
    </div>
  );
};

export default TodoInput;
