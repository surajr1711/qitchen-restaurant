import React from "react";
import Icon from "../Icon/Icon";
import { tv } from "tailwind-variants";

const iconButtonTV = tv({
	base: "grid place-items-center border border-neutral-light transition duration-300 ease-in-out hover:border-neutral-base",
	variants: {
		shape: {
			circle: "rounded-full",
			squircle: "rounded-lg",
		},
		size: {
			small: "w-8 h-8",
			medium: "w-10 h-10",
			large: "w-12 h-12",
		},
	},
	defaultVariants: {
		shape: "circle",
		size: "small",
	},
});

type Shape = "circle" | "squircle";
type Size = "small" | "medium" | "large";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	/** Shape: Circle, squircle */
	shape?: Shape;
	/** Size: Small, medium, large */
	size?: Size;
}

const IconButton: React.FC<IconButtonProps> = ({
	children = <Icon />,
	shape = "circle",
	size = "small",
	className,
	...props
}) => {
	return (
		<button className={iconButtonTV({ shape, size, className })} {...props}>
			{children}
		</button>
	);
};

export default IconButton;
