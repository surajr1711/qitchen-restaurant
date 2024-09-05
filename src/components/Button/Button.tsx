import React from "react";
import { tv } from "tailwind-variants";
import Typography from "../Typography/Typography";

export type ButtonVariant = "outlined" | "filled" | "text";
export type ButtonSize = "large" | "medium" | "small";

type ButtonBaseProps = {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children?: React.ReactNode;
};

type PolyButtonProps =
	| (ButtonBaseProps &
			React.ComponentPropsWithoutRef<"button"> & {
				as?: "button";
			})
	| (ButtonBaseProps &
			React.ComponentPropsWithoutRef<"a"> & {
				as: "a";
				href: string;
			})
	| (ButtonBaseProps &
			React.ComponentPropsWithoutRef<"span"> & {
				as: "span";
			});

export const buttonTV = tv({
	base: "grid place-items-center rounded-lg transition duration-300 ease-in-out",
	variants: {
		variant: {
			outlined: "border border-neutral-light hover:border-neutral-base",
			filled: "bg-gold-light hover:bg-gold-base",
			text: "border border-black hover:border-neutral-light",
		},
		size: {
			large: "px-4 py-3 xl:px-5 xl:py-4",
			medium: "px-3 py-2 xl:px-4 xl:py-3",
			small: "px-2 py-1",
		},
	},
	defaultVariants: {
		variant: "outlined",
		size: "medium",
	},
});

const Button: React.FC<PolyButtonProps> = ({
	children,
	className,
	variant = "outlined",
	size = "medium",
	...props
}) => {
	const content = (
		<Typography
			tag="span"
			variant="label2"
			className={variant === "filled" ? "text-black font-light" : "text-gold-light"}
		>
			{children}
		</Typography>
	);

	// External links </a>
	if (props.as === "a") {
		return (
			<a target="_blank" className={buttonTV({ variant, size, className })} {...props}>
				{content}
			</a>
		);
	}

	// Non-interactive </span>
	if (props.as === "span") {
		return (
			<span className={buttonTV({ variant, size, className })} {...props}>
				{content}
			</span>
		);
	}

	// Button </button>
	return (
		<button className={buttonTV({ variant, size, className })} {...props}>
			{content}
		</button>
	);
};

export default Button;
