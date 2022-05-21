import React, { useRef } from "react";
// we need to get what the user inputs. We can use that with state, or useRef to extract what user submitted.
// We'll use useRef.

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
