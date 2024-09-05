import { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";
import HeroImg from "../../../public/images/home/Modern-Restaurant-Interior-Japanese-Gourmet-Dining.webp";

const meta: Meta<typeof HeroSection> = {
	component: HeroSection,
	args: {
		src: HeroImg,
		alt: "Modern Japanese restaurant with a wooden bar, high stools, elegant dish, decorative plant, espresso machine, and warm lighting.",
		title: "Home",
	},
	decorators: [
		(Story) => (
			<div className="w-[1000px] h-[1000px]">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
