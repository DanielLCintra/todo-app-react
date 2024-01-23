import React, { useContext } from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoContext } from "../../context/TodoContext";
import { Todo } from "../../types";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const context = useContext(TodoContext);

  if (!context) {
    return null;
  }

  const { removeTodo } = context;

  return (
    <ListItem>
      <ListItemText primary={todo.task} />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => removeTodo(todo.id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
