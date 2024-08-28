import { Meta, StoryObj } from "@storybook/react";
import FullscreenMenu from "./FullscreenMenu";

const meta: Meta<typeof FullscreenMenu> = {
	component: FullscreenMenu,
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		(Story) => (
			<div className="">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof FullscreenMenu>;

export const Default: Story = {};
