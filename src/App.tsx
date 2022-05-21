import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/todo.model";

// Now this has to return a functional component
// would fail without a return stmt frex
const App: React.FC = () => {
  // telling TS to expect an array of these objects
  // Note we're telling it to expect an array of Todo model imported from todo.model.ts
  // Start with empty array then add in Todos
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // This fxnality is supported by React, passes in the current State (prevTodos)
    // This is best practice
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
