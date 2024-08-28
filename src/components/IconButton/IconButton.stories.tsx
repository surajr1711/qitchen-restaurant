import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import Icon from "../Icon/Icon";
import MenuBurgerSVG from "../../../public/svgs/menu.svg";
import instagramSVG from "../../../public/svgs/instagram.svg";

const meta: Meta<typeof IconButton> = {
	component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default = {};

export const BurgerMediumSquircle: Story = {
	args: {
		children: <Icon SVG={MenuBurgerSVG} size="medium" />,
		shape: "squircle",
		size: "medium",
	},
};

export const LinkLargeCircle: Story = {
	args: {
		children: <Icon SVG={instagramSVG} size="large" />,
		shape: "circle",
		size: "large",
		as: "a",
		href: "#",
	},
};
