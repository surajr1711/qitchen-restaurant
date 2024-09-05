import { Meta, StoryObj } from "@storybook/react";
import QCarousel from "./QCarousel";
import { descImages } from "@/constants/aboutPageConsts";

const meta: Meta<typeof QCarousel> = {
	component: QCarousel,
	args: {
		images: descImages,
	},
	decorators: [
		(Story) => (
			<div className="w-[600px] h-[600px] bg-slate-500">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof QCarousel>;

export const Default: Story = {};
