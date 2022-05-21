import React, { useRef } from "react";

const NewTodo = () => {
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
