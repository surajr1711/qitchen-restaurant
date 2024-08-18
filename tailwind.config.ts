import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#efe7d2", // light gold
				"primary-d": "#cfbe91", // gold
				surface: "#0a0b0a", // black
				outline: "#0e0e0e", // outlines
			},
			fontFamily: {
				// forum: ["Forum", "serif"],
				// satoshiVariable: ["Satoshi Variable", "sans-serif"],
				forum: ["var(--font-forum)", "serif"],
				satoshiVariable: ["var(--font-satoshi-variable)", "sans-serif"],
			},
			fontSize: {
				"2xs": "0.625rem", // 10px
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
};
export default config;
