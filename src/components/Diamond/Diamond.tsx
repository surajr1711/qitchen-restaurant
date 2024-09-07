import React from "react";
import { tv } from "tailwind-variants";

interface DiamondProps extends React.ComponentPropsWithoutRef<"span"> {
	/** Length of line in px */
	lineLength?: "xs" | "sm" | "md" | "lg" | "none";
	/** Line location left or right */
	lineSide?: "left" | "right";
}

const diamondTV = tv({
	slots: {
		baseTV: "flex items-center",
		lineTV: "h-[1px] w-10 bg-neutral-light",
		squareTV: "w-2 h-2 rotate-45 border border-neutral-light",
	},
	variants: {
		lineSide: {
			left: { baseTV: "flex-row" },
			right: { baseTV: "flex-row-reverse" },
		},
		lineLength: {
			none: {
				lineTV: "w-0",
			},
			xs: {
				lineTV: "w-4",
			},
			sm: {
				lineTV: "w-7",
			},
			md: {
				lineTV: "w-10",
			},
			lg: {
				lineTV: "w-16",
			},
		},
	},
	defaultVariants: {
		lineSide: "left",
		lineLength: "md",
	},
});

const Diamond: React.FC<DiamondProps> = ({ lineSide = "left", lineLength, ...props }) => {
	const { baseTV, lineTV, squareTV } = diamondTV();
	return (
		<span className={baseTV({ lineSide })} {...props}>
			{/* line */}
			<span className={lineTV({ lineLength })} />
			{/* diamond */}
			<span className={squareTV()} />
		</span>
	);
};

export default Diamond;
