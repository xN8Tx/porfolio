import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Link } from "./";

const meta = {
  title: "UI/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    href: "#",
    size: "regular",
    color: "default",
    isExternal: false,
    children: "Regular",
  },
};

export const Small: Story = {
  args: {
    href: "#",
    size: "small",
    color: "default",
    isExternal: false,
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    href: "#",
    size: "large",
    color: "default",
    isExternal: false,
    children: "Large",
  },
};

export const LightColor: Story = {
  args: {
    href: "#",
    color: "light",
    size: "regular",
    isExternal: false,
    children: "Light Color",
  },
};

export const BackgroundColor: Story = {
  args: {
    href: "#",
    size: "regular",
    isExternal: false,
    color: "background",
    children: "Background Color",
  },
};

export const WithIcon: Story = {
  args: {
    href: "#",
    icon: { id: 1, documentId: "1", title: "git", slug: "git" },
    size: "regular",
    color: "default",
    isExternal: false,
    children: "Regular",
  },
};
