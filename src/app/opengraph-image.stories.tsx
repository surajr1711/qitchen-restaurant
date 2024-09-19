import type { Meta, StoryObj } from "@storybook/react";
import { OpengraphImage } from "./opengraph-image";

const meta: Meta<typeof OpengraphImage> = {
	component: OpengraphImage,
	parameters: {
		layout: "padded",
	},
	decorators: [
		(Story) => (
			<div className="w-[1200px] h-[630px]">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof OpengraphImage>;

export const Default: Story = {};
