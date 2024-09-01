import { Meta, StoryObj } from "@storybook/react";
import Section from "./Section";
import Typography from "../Typography/Typography";

const meta: Meta<typeof Section> = {
	component: Section,
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
	args: {
		children: (
			<div className="w-[160px] h-[160px]">
				<Typography variant="heading2">Sample Content</Typography>
			</div>
		),
	},
};
