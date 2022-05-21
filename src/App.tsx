import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

// Now this has to return a functional component
// would fail without a return stmt frex
const App: React.FC = () => {
  const todos = [{ id: "t1", text: "finish the course" }];

  const todoAddHandler = (text: string) => {
    console.log("text:", text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
