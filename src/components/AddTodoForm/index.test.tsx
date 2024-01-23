import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "./index";
import { TodoProvider } from "../../context/TodoContext";

describe("AddTodoForm", () => {
  it("allows users to add a task", () => {
    render(
      <TodoProvider>
        <AddTodoForm />
      </TodoProvider>
    );

    const input = screen.getByLabelText(/new task/i) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(input.value).toBe("");
  });
});
