import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
	component: Typography,
	argTypes: {
		children: {
			control: "text",
			description: "Overwritten description",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Banner1: Story = {
	args: {
		variant: "banner1",
	},
};

export const Banner2: Story = {
	args: {
		variant: "banner2",
	},
};

export const Banner3: Story = {
	args: {
		variant: "banner3",
	},
};

export const Heading1: Story = {
	args: {
		variant: "heading1",
	},
};

export const Heading2: Story = {
	args: {
		variant: "heading2",
	},
};
export const Heading3: Story = {
	args: {
		variant: "heading3",
	},
};
export const Heading4: Story = {
	args: {
		variant: "heading4",
	},
};
export const Heading5: Story = {
	args: {
		variant: "heading5",
	},
};
export const Heading6: Story = {
	args: {
		variant: "heading6",
	},
};
export const Body1: Story = {
	args: {
		variant: "body1",
	},
};
export const Body2: Story = {
	args: {
		variant: "body2",
	},
};
export const Body3: Story = {
	args: {
		variant: "body3",
	},
};
export const Label1: Story = {
	args: {
		variant: "label1",
	},
};
export const Label2: Story = {
	args: {
		variant: "label2",
	},
};
export const Label3: Story = {
	args: {
		variant: "label3",
	},
};

export const CustomSize: Story = {
	args: {
		variant: "label1",
		className: "font-forum",
	},
};
