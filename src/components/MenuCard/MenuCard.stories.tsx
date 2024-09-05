import { Meta, StoryObj } from "@storybook/react";
import MenuCard from "./MenuCard";
import { menuItems } from "@/constants/menuPageConsts";

const meta: Meta<typeof MenuCard> = {
	component: MenuCard,
	args: {
		...menuItems.maki[0],
	},
};

export default meta;

type Story = StoryObj<typeof MenuCard>;

export const Default: Story = {};
