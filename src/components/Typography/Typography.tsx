import React from "react";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TagStyle =
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

interface TypographyProps {
	tagStyle?: TagStyle;
	tag?: Tag;
	children?: string;
}

const Typography: React.FC<TypographyProps> = ({ children, tag = "span", tagStyle = "body1" }) => {
	const classes: Record<TagStyle, string> = {
		banner1: "font-forum text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl", // 56 80 96 128
		banner2: "font-forum text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl", // 48 64 80 96
		banner3: "font-forum text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl ", // 40 64 72 80
		heading1: "font-forum uppercase text-4xl md:text-5xl xl:text-6xl", // 36 56 64
		heading2: "font-forum uppercase text-3xl md:text-4xl xl:text-5xl", // 32 40 48
		heading3: "font-forum uppercase text-2xl md:text-3xl xl:text-4xl", // 28 32
		heading4: "font-forum uppercase text-xl md:text-2xl xl:text-3xl", // 24
		heading5: "font-forum uppercase text-lg md:text-xl xl:text-2xl", // 20
		heading6: "font-forum uppercase text-base md:text-lg xl:text-xl", // 18
		body1: "font-satoshiVariable font-light text-base xl:text-lg", // 16
		body2: "font-satoshiVariable font-light text-sm xl:text-base", // 14
		body3: "font-satoshiVariable font-light text-xs xl:text-sm", // 12
		label1: "font-satoshiVariable font-extralight tracking-wider uppercase text-sm xl:text-base", // 16
		label2: "font-satoshiVariable font-extralight tracking-wider uppercase text-xs xl:text-sm", // 14
		label3: "font-satoshiVariable font-extralight tracking-wider uppercase text-2xs xl:text-xs", // 12
	};

	const placeholder: Record<TagStyle, string> = {
		banner1: "Banner 1",
		banner2: "Banner 2",
		banner3: "Banner 3",
		heading1: "Heading 1",
		heading2: "Heading 2",
		heading3: "Heading 3",
		heading4: "Heading 4",
		heading5: "Heading 5",
		heading6: "Heading 6",
		body1: "Body 1",
		body2: "Body 2",
		body3: "Body 3",
		label1: "Label 1",
		label2: "Label 2",
		label3: "Label 3",
	};

	const Component = tag;

	return <Component className={classes[tagStyle]}>{children || placeholder[tagStyle]}</Component>;
};

export default Typography;
