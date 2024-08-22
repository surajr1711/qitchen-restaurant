import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";

const gold = {
	// "gold-dark": "#735e26", // rgb(115, 94, 38) fill button hover
	"gold-base": "#cfbe91", // rgb(207, 190, 145) fill buttons, fullscreen menu link hover
	"gold-light": "#efe7d2", // rgb(239, 231, 210) headings, button labels, logo
	"gold-verylight": "#f5f2eab3", // rgba(245, 242, 234, .7) body, footer links
};

const neutral = {
	"neutral-base": "#4e4c47", // rgb(78,76,71) button outline hover
	"neutral-light": "#333330", // rgb(51, 51, 48) button outline, grid borders, graphics
	"neutral-dark": "#111111", // rgb(17,17,17) menu background
};

const config: Config = withTV({
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				...gold,
				...neutral,
			},
			fontFamily: {
				// forum: ["Forum", "serif"],
				// satoshiVariable: ["Satoshi Variable", "sans-serif"],
				forum: ["var(--font-forum)", "serif"],
				satoshiVariable: ["var(--font-satoshi-variable)", "sans-serif"],
			},
			fontSize: {
				"2xs": "0.625rem", // 10px
				"3xs": "0.5rem", // 8px
			},
			// screens: {
			//   'sm': '640px', // => @media (min-width: 640px) { ... }
			//   'md': '768px', // => @media (min-width: 768px) { ... }
			//   'lg': '1024px', // => @media (min-width: 1024px) { ... }
			//   'xl': '1280px', // => @media (min-width: 1280px) { ... }
			//   '2xl': '1536px', // => @media (min-width: 1536px) { ... }
			// }
		},
	},
	plugins: [],
});
export default config;
