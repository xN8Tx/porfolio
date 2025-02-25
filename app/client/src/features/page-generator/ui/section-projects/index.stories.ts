import type { Meta, StoryObj } from "@storybook/react";
import { SectionProjects } from "./";
import { mockStrapiProjects } from "../../mocks";

const meta = {
  title: "Page Generator/Section Projects",
  component: SectionProjects,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SectionProjects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // @ts-expect-error Mock doesnt contain formats in projects.preview
  args: mockStrapiProjects,
};
