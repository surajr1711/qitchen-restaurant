import { Meta, StoryObj } from "@storybook/react";
import PageFooter from "./PageFooter";

const meta: Meta<typeof PageFooter> = {
	component: PageFooter,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof PageFooter>;

export const Footer: Story = {};
