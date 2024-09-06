import { Meta, StoryObj } from "@storybook/react";
import BlogCard from "./BlogCard";
import { blogs } from "@/constants/blogPageConsts";

const meta: Meta<typeof BlogCard> = {
	component: BlogCard,
	args: {
		...blogs[0],
	},
};

export default meta;

type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {};
