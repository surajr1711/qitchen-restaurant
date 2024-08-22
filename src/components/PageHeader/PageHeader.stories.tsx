import { Meta, StoryObj } from "@storybook/react";
import PageHeader from "./PageHeader";

const meta: Meta<typeof PageHeader> = {
	component: PageHeader,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};
