import { Meta, StoryObj } from "@storybook/react";
import RoundCornerWrapper from "./RoundCornerWrapper";
import { IconButton } from "@/components/IconButton";

const meta: Meta<typeof RoundCornerWrapper> = {
	component: RoundCornerWrapper,
	decorators: [
		(Story) => (
			<div className="w-60 h-60 bg-slate-200 relative">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof RoundCornerWrapper>;

export const Default: Story = {};

export const ChildrenAndStyles: Story = {
	args: {
		children: <IconButton />,
		className: "w-20 bg-red-500",
		curveColor: "text-red-500",
	},
};
