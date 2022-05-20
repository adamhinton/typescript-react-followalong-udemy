import React from "react";
import TodoList from "./components/TodoList";

// Now this has to return a functional component
// would fail without a return stmt frex
const App: React.FC = () => {
  const todos = [{ id: "t1", text: "finish the course" }];

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
};

export default App;
