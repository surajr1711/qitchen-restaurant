import { Meta, StoryObj } from "@storybook/react";
import FooterLink from "./FooterLink";

const meta: Meta<typeof FooterLink> = {
	component: FooterLink,
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof FooterLink>;

export const Default: Story = {};
