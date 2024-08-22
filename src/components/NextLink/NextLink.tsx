import Link, { LinkProps } from "next/link";
import React from "react";
import { ButtonVariant } from "../Button/Button";
import { buttonTV } from "../Button/Button";
import Typography from "../Typography/Typography";

interface NextLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
	children: string;
	variant?: ButtonVariant;
}

const NextLink: React.FC<NextLinkProps> = ({ children, variant = "text", ...props }) => {
	return (
		<Link className={buttonTV({ variant })} {...props}>
			<Typography tag="span" variant="label2" className={variant === "filled" ? "text-black" : ""}>
				{children}
			</Typography>
		</Link>
	);
};

export default NextLink;
