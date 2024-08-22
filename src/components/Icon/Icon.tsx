import React from "react";
import QIconSVG from "../../../public/brand/q-icon.svg";
import { tv } from "tailwind-variants";

type Size = "small" | "medium" | "large";

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
	/** small: 16px, medium: 24px, large: 32px */
	size?: Size;
	/** Pass the imported SVG */
	SVG?: React.ReactNode;
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
	return <SVG className={icon({ size, className })} {...props} />;
};

export default Icon;
