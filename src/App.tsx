import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import { TodoContainer, TodoHeader, TodoBody } from "./styles";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoContainer>
        <TodoHeader>
          <AddTodoForm />
        </TodoHeader>

        <TodoBody>
          <TodoList />
        </TodoBody>
      </TodoContainer>
    </TodoProvider>
  );
};

export default App;
