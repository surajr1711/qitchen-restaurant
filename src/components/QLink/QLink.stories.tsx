import { Meta, StoryObj } from "@storybook/react";
import QLink from "./QLink";

const meta: Meta<typeof QLink> = {
	component: QLink,
};

export default meta;

type Story = StoryObj<typeof QLink>;

export const Default: Story = {};

export const FooterLink: Story = {
	args: {
		textStyle: "label1",
		children: "Styleguide",
	},
};

export const FullscreenMenuLink: Story = {
	args: {
		textStyle: "heading1",
		children: "Reservation",
		className: "duration-300 ease-in-out hover:text-gold-base hover:no-underline",
	},
};
