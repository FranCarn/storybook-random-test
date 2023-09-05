import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "MyLabel",
  component: MyLabel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select" },
    fontColor: { control: "color" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};
export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    allCaps: true,
  },
};
export const Secondary: Story = {
  args: {
    label: "Secondary label",
    color: "text-secondary",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom color label",
    fontColor: "#34ddf9",
  },
};
export const CustomBackgroundColor: Story = {
  args: {
    size: "h1",
    label: "Custom background color",
    fontColor: "#fff",
    backgroundColor: "#000",
  },
};
