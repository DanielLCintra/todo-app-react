import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./index";
import { TodoProvider } from "../../context/TodoContext";

describe("TodoList", () => {
  it("should render without crashing", () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );
  });
});
