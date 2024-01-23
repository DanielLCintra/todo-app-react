import React from "react";
import { Story, Meta } from "@storybook/react";
import TodoList from "./index";
import { TodoProvider } from "../../context/TodoContext";

export default {
  title: "Components/TodoList",
  component: TodoList,
  decorators: [(story) => <TodoProvider>{story()}</TodoProvider>],
} as Meta;

const Template: Story = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
