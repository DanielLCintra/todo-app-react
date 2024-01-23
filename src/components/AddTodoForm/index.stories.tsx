import React from "react";
import { Story, Meta } from "@storybook/react";
import AddTodoForm from "./index";
import { TodoProvider } from "../../context/TodoContext";

export default {
  title: "AddTodoForm",
  component: AddTodoForm,
} as Meta;

const Template: Story = (args) => (
  <TodoProvider>
    <AddTodoForm {...args} />
  </TodoProvider>
);

export const Default = Template.bind({});
