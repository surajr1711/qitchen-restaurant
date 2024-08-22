import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultOutlined: Story = {};

export const Filled: Story = {
	args: {
		variant: "filled",
	},
};

export const Text: Story = {
	args: {
		variant: "text",
	},
};
