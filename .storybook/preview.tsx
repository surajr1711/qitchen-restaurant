import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
// import { satoshiVariable, forum } from "../src/styles/fonts";
import "../src/styles/globals.css";

const preview: Preview = {
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		backgrounds: {
			default: "dark",
			values: [
				{ name: "light", value: "#ffffff" },
				{ name: "dark", value: "#000000" },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			theme: themes.dark,
		},
	},
};

export default preview;
