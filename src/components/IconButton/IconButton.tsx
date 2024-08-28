import React from "react";
import { tv } from "tailwind-variants";

type Shape = "circle" | "squircle";
type Size = "small" | "medium" | "large";

type IconButtonBaseProps = {
	/** Shape: Circle, squircle */
	shape?: Shape;
	/** Size: Small, medium, large */
	size?: Size;
};

type IconButtonProps =
	| (React.ComponentPropsWithoutRef<"button"> &
			IconButtonBaseProps & {
				as?: "button";
			})
	| (React.ComponentPropsWithoutRef<"a"> &
			IconButtonBaseProps & {
				as: "a";
				href: string;
			})
	| (React.ComponentPropsWithoutRef<"span"> &
			IconButtonBaseProps & {
				as: "span";
			});

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

const IconButton: React.FC<IconButtonProps> = ({ children, shape, size, className, ...props }) => {
	if (props.as === "a") {
		return (
			<a target="_blank" className={iconButtonTV({ shape, size, className })} {...props}>
				{children}
			</a>
		);
	} else if (props.as === "span") {
		return (
			<span className={iconButtonTV({ shape, size, className })} {...props}>
				{children}
			</span>
		);
	}
	return (
		<button className={iconButtonTV({ shape, size, className })} {...props}>
			{children}
		</button>
	);
};

export default IconButton;
