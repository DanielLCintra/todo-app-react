import React from "react";
import { Story, Meta } from "@storybook/react";
import TodoItem from "../../components/TodoItem";
import { TodoProvider } from "../../context/TodoContext";
import { Todo } from "../../types";

export default {
  title: "Components/TodoItem",
  component: TodoItem,
  decorators: [(story) => <TodoProvider>{story()}</TodoProvider>],
} as Meta;

const Template: Story<{ todo: Todo }> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: "1",
    task: "Sample Task",
  },
};
