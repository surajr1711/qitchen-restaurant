import React from "react";
import { tv } from "tailwind-variants";
import Typography from "../Typography/Typography";

export type ButtonVariant = "outlined" | "filled" | "text";

interface ButtonProps {
	label: string;
	variant: ButtonVariant;
}

export const buttonTV = tv({
	base: "px-3 h-8 grid place-items-center rounded-lg transition duration-300 ease-in-out xl:px-4 xl:h-10",
	variants: {
		variant: {
			outlined: "border border-neutral-light hover:border-neutral-base",
			filled: "bg-gold-light hover:bg-gold-base",
			text: "border border-black hover:border-neutral-light",
		},
	},
	defaultVariants: {
		variant: "outlined",
	},
});

const Button: React.FC<ButtonProps> = ({ label = "Button", variant = "outlined" }) => {
	return (
		<button className={buttonTV({ variant })}>
			<Typography tag="span" variant="label3" className={variant === "filled" ? "text-black font-light" : ""}>
				{label}
			</Typography>
		</button>
	);
};

export default Button;
