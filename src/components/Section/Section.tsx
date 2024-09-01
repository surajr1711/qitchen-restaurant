import React from "react";
import { tv } from "tailwind-variants";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
	/** With border or not */
	border?: "border" | "none";
};

const sectionTV = tv({
	base: "rounded-2xl overflow-hidden p-8 grid place-items-center w-full",
	variants: {
		border: {
			border: "border border-neutral-light",
			none: "border-none",
		},
	},
	defaultVariants: {
		border: "border",
	},
});

const Section: React.FC<SectionProps> = ({ children, className, border = "border", ...props }) => {
	return (
		<section className={sectionTV({ border, className })} {...props}>
			{children}
		</section>
	);
};

export default Section;
