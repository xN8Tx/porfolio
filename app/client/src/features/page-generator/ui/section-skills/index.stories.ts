import type { Meta, StoryObj } from "@storybook/react";
import { SectionSkills } from "./";
import { mockStrapiSkills } from "../../mocks";

const meta = {
  title: "Page Generator/Section Skills",
  component: SectionSkills,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SectionSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: mockStrapiSkills,
};
