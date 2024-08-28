import { Meta, StoryObj } from "@storybook/react";
import NextLink from "./NextLink";

const meta: Meta<typeof NextLink> = {
	component: NextLink,
};

export default meta;

type Story = StoryObj<typeof NextLink>;

export const Default: Story = {
	args: {
		href: "#",
	},
};

export const FullscreenMenuLink: Story = {
	args: {
		variant: "fullscreenMenuLink",
		children: "Menu",
		href: "#",
	},
};
