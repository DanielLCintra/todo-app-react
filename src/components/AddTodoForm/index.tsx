import React, { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoButton, TodoFormContainer, TodoTextField } from "./styles";

const AddTodoForm: React.FC = () => {
  const [task, setTask] = useState("");
  const context = useContext(TodoContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { addTodo } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ id: Date.now().toString(), task });
    setTask("");
  };

  return (
    <TodoFormContainer onSubmit={handleSubmit}>
      <TodoTextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <TodoButton type="submit" variant="contained" color="primary">
        Add
      </TodoButton>
    </TodoFormContainer>
  );
};

export default AddTodoForm;
