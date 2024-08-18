import React from "react";
import Typography from "../Typography/Typography";

interface ButtonProps {
	label: string;
	variant: "default" | "primary";
}

const Button: React.FC<ButtonProps> = ({ label = "Button", variant = "default" }) => {
	return (
		<button className="p-2 rounded">
			<Typography tag="span" tagStyle="label2">
				{label}
			</Typography>
		</button>
	);
};

export default Button;
