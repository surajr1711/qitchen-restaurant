import { Meta, StoryObj } from "@storybook/react";
import Home from "./page";
import RootLayout from "./layout";

const meta: Meta<typeof RootLayout> = {
	component: RootLayout,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		children: <Home />,
	},
};

export default meta;

type Story = StoryObj<typeof RootLayout>;

export const Default: Story = {};
