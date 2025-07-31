import type { Meta, StoryObj } from "@storybook/react-vite";
import Toast from "../../components/toast/Toast";


// Meta info about your component
const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};
export default meta;

// Define stories
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: "success",
    message: "Saved successfully!",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Something went wrong!",
  },
};

export const Loading: Story = {
  args: {
    type: "info",
    message: "Loading info ...",
    duration: 10000
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Warning alert!",
    onClose: () => alert("Closed"),
  },
};