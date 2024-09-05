import { Meta, StoryObj } from "@storybook/react";
import QForm from "./QForm";
import Typography from "../Typography/Typography";

const meta: Meta<typeof QForm> = {
	component: QForm,
	parameters: {
		layout: "padded",
	},
	decorators: [
		(Story) => (
			<div className="w-full min-w-72 max-w-lg rounded-2xl p-8 border border-neutral-light 2xl:p-12">
				<Typography tag="h2" variant="heading4" className="pb-8">
					Reservation
				</Typography>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof QForm>;

export const Default: Story = {};
