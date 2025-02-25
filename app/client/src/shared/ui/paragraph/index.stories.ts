import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Paragraph } from "./";

const meta = {
  title: "UI/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    size: "regular",
    color: "default",
    children: "Regular",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    color: "default",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    color: "default",
    children: "Large",
  },
};

export const LightColor: Story = {
  args: {
    size: "regular",
    color: "light",
    children: "Light Color",
  },
};

export const BackgroundColor: Story = {
  args: {
    size: "regular",
    color: "background",
    children: "Background Color",
  },
};
