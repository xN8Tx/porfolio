import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./";
import { mockStrapiHero } from "../../mocks";

const meta = {
  title: "Page Generator/Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: mockStrapiHero,
};
