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
			outlined: "border border-outline-light hover:border-outline-medium",
			filled: "bg-primary text-surface hover:bg-primary-d",
			text: "border border-black hover:border-outline-light",
			// outlined: "border border-[#333330] hover:border-[#4e4c47]",
			// filled: "bg-primary text-surface hover:bg-primary-d",
			// text: "border border-black hover:border-[#333330]",
		},
	},
	defaultVariants: {
		variant: "outlined",
	},
});

const Button: React.FC<ButtonProps> = ({ label = "Button", variant = "outlined" }) => {
	return (
		<button className={buttonTV({ variant })}>
			<Typography tag="span" variant="label3">
				{label}
			</Typography>
		</button>
	);
};

export default Button;
