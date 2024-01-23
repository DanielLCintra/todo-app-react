import React, { useContext } from "react";
import { List } from "@mui/material";
import TodoItem from "../TodoItem";
import { TodoContext } from "../../context/TodoContext";

const TodoList: React.FC = () => {
  const context = useContext(TodoContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { todos } = context;

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
