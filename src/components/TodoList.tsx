import React from "react";

const TodoList: React.FC<{}> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
