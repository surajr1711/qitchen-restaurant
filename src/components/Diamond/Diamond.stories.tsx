import { Meta, StoryObj } from "@storybook/react";
import Diamond from "./Diamond";

const meta: Meta<typeof Diamond> = {
	component: Diamond,
};

export default meta;

type Story = StoryObj<typeof Diamond>;

export const Default: Story = {};

export const RightLarge: Story = {
	args: {
		lineSide: "right",
		lineLength: "lg",
	},
};
