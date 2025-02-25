import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    size: "regular",
    color: "default",
    uppercase: false,
    children: "Regular",
    subtitle: "Subtitle",
    isExternal: false,
    href: "#",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    color: "default",
    uppercase: false,
    children: "Small",
    subtitle: "Subtitle",
    isExternal: false,
    href: "#",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    color: "default",
    uppercase: false,
    children: "Large",
    subtitle: "Subtitle",
    isExternal: false,
    href: "#",
  },
};

export const LightColor: Story = {
  args: {
    size: "regular",
    color: "light",
    uppercase: false,
    children: "Light Color",
    subtitle: "Subtitle",
    isExternal: false,
    href: "#",
  },
};

export const BackgroundColor: Story = {
  args: {
    size: "regular",
    color: "background",
    uppercase: false,
    children: "Background Color",
    subtitle: "Subtitle",
    isExternal: false,
    href: "#",
  },
};
