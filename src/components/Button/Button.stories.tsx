import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultOutlined: Story = {};

export const FilledSmallAnchor: Story = {
	args: {
		as: "a",
		variant: "filled",
		size: "small",
	},
};

export const TextSpan: Story = {
	args: {
		as: "span",
		variant: "text",
	},
};
