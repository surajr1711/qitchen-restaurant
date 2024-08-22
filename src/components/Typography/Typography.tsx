import React from "react";
import { tv } from "tailwind-variants";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Variant =
	| "banner1"
	| "banner2"
	| "banner3"
	| "heading1"
	| "heading2"
	| "heading3"
	| "heading4"
	| "heading5"
	| "heading6"
	| "body1"
	| "body2"
	| "body3"
	| "label1"
	| "label2"
	| "label3";

interface TypographyProps extends React.ComponentPropsWithoutRef<"span"> {
	variant?: Variant;
	tag?: Tag;
	children?: string;
}

const typography = tv({
	variants: {
		variant: {
			banner1: "font-forum text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl", // 56 80 96 128
			banner2: "font-forum text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl", // 48 64 80 96
			banner3: "font-forum text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl ", // 40 64 72 80
			heading1: "font-forum uppercase text-4xl md:text-5xl xl:text-6xl", // 36 56 64
			heading2: "font-forum uppercase text-3xl md:text-4xl xl:text-5xl", // 32 40 48
			heading3: "font-forum uppercase text-2xl md:text-3xl xl:text-4xl", // 28 32
			heading4: "font-forum uppercase text-xl md:text-2xl xl:text-3xl", // 24
			heading5: "font-forum uppercase text-lg md:text-xl xl:text-2xl", // 20
			heading6: "font-forum uppercase text-base md:text-lg xl:text-xl", // 18
			body1: "font-satoshiVariable font-light text-base xl:text-lg", // 16 18
			body2: "font-satoshiVariable font-light text-sm xl:text-base", // 14 16
			body3: "font-satoshiVariable font-light text-xs xl:text-sm", // 12 14
			label1: "font-satoshiVariable font-extralight tracking-wider uppercase whitespace-nowrap text-xs xl:text-sm", // 12 14
			label2: "font-satoshiVariable font-extralight tracking-wider uppercase whitespace-nowrap text-2xs xl:text-xs", // 10 12
			label3: "font-satoshiVariable font-extralight tracking-wider uppercase whitespace-nowrap text-3xs xl:text-2xs", // 8 10
		},
	},
	defaultVariants: {
		variant: "body1",
	},
});

const Typography: React.FC<TypographyProps> = ({ children, tag = "span", variant, className, ...props }) => {
	const Component = tag;

	return (
		<Component className={typography({ variant, className })} {...props}>
			{children || "Placeholder text"}
		</Component>
	);
};

export default Typography;
