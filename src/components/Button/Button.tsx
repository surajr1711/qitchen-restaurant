import React from "react";
import { tv } from "tailwind-variants";
import Typography from "../Typography/Typography";

export type ButtonVariant = "default" | "primary";

interface ButtonProps {
	label: string;
	variant: ButtonVariant;
}

export const buttonTV = tv({
	base: "px-3 h-8 grid place-items-center rounded-lg transition duration-300 ease-in-out xl:px-4 xl:h-10",
	variants: {
		variant: {
			default: "border border-[#333330] hover:border-[#4e4c47]",
			primary: "bg-primary text-surface hover:bg-primary-d",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const Button: React.FC<ButtonProps> = ({ label = "Button", variant = "default" }) => {
	return (
		<button className={buttonTV({ variant })}>
			<Typography tag="span" variant="label3">
				{label}
			</Typography>
		</button>
	);
};

export default Button;
