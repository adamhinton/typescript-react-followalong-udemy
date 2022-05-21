import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

// Now this has to return a functional component
// would fail without a return stmt frex
const App: React.FC = () => {
  // telling TS to expect an array of these objects
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text: text }]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
