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
		children: <ArrowRightSVG />,
		width: "medium",
	},
};

export const Large: Story = {
	args: {
		children: <ArrowRightSVG />,
		width: "large",
	},
};

export const CustomWidth: Story = {
	args: {
		children: <QitchenSVG />,
		className: "w-40",
	},
};
