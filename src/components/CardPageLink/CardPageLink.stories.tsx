import { Meta, StoryObj } from "@storybook/react";
import CardPageLink from "./CardPageLink";
import { homepageCardLinks } from "@/constants/Links";

const meta: Meta<typeof CardPageLink> = {
	component: CardPageLink,
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof CardPageLink>;

export const Default: Story = {
	args: {
		href: homepageCardLinks[0].href,
		src: homepageCardLinks[0].src,
		alt: homepageCardLinks[0].alt,
		label: homepageCardLinks[0].label,
	},
	decorators: [
		(Story) => (
			<div
				style={{
					// width: "800px",
					height: "800px",
					padding: "1rem",
					border: "1px solid white",
					display: "grid",
					placeItems: "center",
					gridTemplateColumns: "repeat(2, 1fr)",
					gridTemplateRows: "repeat(2, 1fr)",
				}}
			>
				<Story />
			</div>
		),
	],
};
