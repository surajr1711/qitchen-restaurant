import { Meta, StoryObj } from "@storybook/react";
import ButtonWithIcon from "./ButtonWithIcon";

const meta: Meta<typeof ButtonWithIcon> = {
	component: ButtonWithIcon,
};

export default meta;
type Story = StoryObj<typeof ButtonWithIcon>;

export const Default: Story = {};
