import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Sidebar, { type MenuItem } from "../../components/SidebarMenu/SidebarMenu";



const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

const oneLevel: MenuItem[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const twoLevel: MenuItem[] = [
  { label: "Dashboard", link: "/dashboard" },
  {
    label: "Settings",
    children: [
      { label: "Profile", link: "/settings/profile" },
      { label: "Theme", link: "/settings/theme" },
    ],
  },
];

export const OneLevel: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Sidebar</button>
        <Sidebar isOpen={open} onClose={() => setOpen(false)} items={oneLevel} />
      </>
    );
  },
};

export const TwoLevel: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Sidebar</button>
        <Sidebar isOpen={open} onClose={() => setOpen(false)} items={twoLevel} />
      </>
    );
  },
};