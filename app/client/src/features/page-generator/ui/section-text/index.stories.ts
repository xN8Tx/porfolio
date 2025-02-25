import type { Meta, StoryObj } from "@storybook/react";
import { SectionText } from "./";
import { mockStrapiText } from "../../mocks";

const meta = {
  title: "Page Generator/Section Text",
  component: SectionText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SectionText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: mockStrapiText,
};
