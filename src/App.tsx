import React from "react";
import TodoList from "./components/TodoList";

// Now this has to return a functional component
// would fail without a return stmt frex
const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
