import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import ArrowForwardSVG from "../../../public/svgs/arrow-forward.svg";
import QitchenSVG from "../../../public/brand/qitchen.svg";

const meta: Meta<typeof Icon> = {
	component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Medium: Story = {
	args: {
		SVG: ArrowForwardSVG,
		size: "medium",
	},
};

export const Large: Story = {
	args: {
		SVG: ArrowForwardSVG,
		size: "large",
	},
};

export const CustomWidth: Story = {
	args: {
		SVG: QitchenSVG,
		className: "w-40",
	},
};
