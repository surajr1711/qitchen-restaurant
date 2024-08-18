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
		tagStyle: "banner1",
	},
};

export const Banner2: Story = {
	args: {
		tagStyle: "banner2",
	},
};

export const Banner3: Story = {
	args: {
		tagStyle: "banner3",
	},
};

export const Heading1: Story = {
	args: {
		tagStyle: "heading1",
	},
};

export const Heading2: Story = {
	args: {
		tagStyle: "heading2",
	},
};
export const Heading3: Story = {
	args: {
		tagStyle: "heading3",
	},
};
export const Heading4: Story = {
	args: {
		tagStyle: "heading4",
	},
};
export const Heading5: Story = {
	args: {
		tagStyle: "heading5",
	},
};
export const Heading6: Story = {
	args: {
		tagStyle: "heading6",
	},
};
export const Body1: Story = {
	args: {
		tagStyle: "body1",
	},
};
export const Body2: Story = {
	args: {
		tagStyle: "body2",
	},
};
export const Body3: Story = {
	args: {
		tagStyle: "body3",
	},
};
export const Label1: Story = {
	args: {
		tagStyle: "label1",
	},
};
export const Label2: Story = {
	args: {
		tagStyle: "label2",
	},
};
export const Label3: Story = {
	args: {
		tagStyle: "label3",
	},
};
