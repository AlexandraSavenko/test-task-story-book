import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "../../components/input/Input";


// Meta info about your component
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;

// Define stories
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
  },

  
};

export const Clearable: Story = {
    args: {
      type: "text",
    placeholder: "Clearable input",
    clearable: true,
    }
  }