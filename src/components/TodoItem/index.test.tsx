import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./index";
import { TodoProvider } from "../../context/TodoContext";

describe("TodoItem", () => {
  const mockTodo = {
    id: "1",
    task: "Learn TypeScript",
  };

  it("should display the todo task", () => {
    render(
      <TodoProvider>
        <TodoItem todo={mockTodo} />
      </TodoProvider>
    );

    expect(screen.getByText(/learn typescript/i)).toBeInTheDocument();
  });

  it("should show a delete button", () => {
    render(
      <TodoProvider>
        <TodoItem todo={mockTodo} />
      </TodoProvider>
    );

    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });
});
