import { Meta, StoryObj } from "@storybook/react";
import BlogCard from "./BlogCard";
import { blogs } from "@/constants/blogPageConsts";

const meta: Meta<typeof BlogCard> = {
	component: BlogCard,
	parameters: {
		layout: "padded",
	},
	args: {
		...blogs[0],
	},
	decorators: [
		(Story) => (
			<div className="@container/blogs">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {};
