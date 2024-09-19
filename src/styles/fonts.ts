import { Forum } from "next/font/google";
import localFont from "next/font/local";

export const forum = Forum({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-forum",
});

export const satoshiVariable = localFont({
	src: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
	variable: "--font-satoshi-variable",
});
