import React, { useRef } from "react";
// we need to get what the user inputs. We can use that with state, or useRef to extract what user submitted.
// We'll use useRef.

// we would more typically use an interface here
type NewTodoProps = {
  onAddTodo: (todoText: string) => {
    void;
  };
};

const NewTodo = (props) => {
  // the null is because it's null when page loads
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // the ! tells TS that this can be null, that's what it is on load
    const enteredText = textInputRef.current!.value;
    console.log("enteredText:", enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
