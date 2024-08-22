import React from "react";
import QIconSVG from "../../../public/brand/q-icon.svg";
import { tv } from "tailwind-variants";

type Size = "small" | "medium" | "large";

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
	size?: Size;
	SVG?: React.ReactNode;
	// react-icons
}

const icon = tv({
	base: "block",
	variants: {
		size: {
			small: "w-4",
			medium: "w-6",
			large: "w-8",
		},
	},
	defaultVariants: {
		size: "small",
	},
});

const Icon: React.FC<IconProps> = ({ SVG = QIconSVG, size = "small", className, ...props }) => {
	return (
		// <span className={icon({ size, className })} {...props}>
		// 	<SVG />
		// </span>
		<SVG className={icon({ size, className })} {...props} />
	);
};

export default Icon;
