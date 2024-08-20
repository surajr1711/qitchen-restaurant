import React from "react";
import QIconSVG from "../../../public/brand/q-icon.svg";
import { tv } from "tailwind-variants";

type Width = "small" | "medium" | "large";

interface IconProps extends React.ComponentPropsWithoutRef<"span"> {
	width?: Width;
	// react-icons
}

const icon = tv({
	base: "block",
	variants: {
		width: {
			small: "w-4",
			medium: "w-6",
			large: "w-8",
		},
	},
	defaultVariants: {
		width: "small",
	},
});

const Icon: React.FC<IconProps> = ({ children = <QIconSVG />, width = "small", className = "", ...props }) => {
	return (
		<span className={icon({ width, className })} {...props}>
			{children}
		</span>
	);
};

export default Icon;
