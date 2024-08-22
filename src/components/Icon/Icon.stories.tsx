import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import ArrowRightSVG from "../../../public/svgs/arrow-right.svg";
import QitchenSVG from "../../../public/brand/qitchen.svg";

const meta: Meta<typeof Icon> = {
	component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Medium: Story = {
	args: {
		SVG: ArrowRightSVG,
		size: "medium",
	},
};

export const Large: Story = {
	args: {
		SVG: ArrowRightSVG,
		size: "large",
	},
};

export const CustomWidth: Story = {
	args: {
		SVG: QitchenSVG,
		className: "w-40",
	},
};
