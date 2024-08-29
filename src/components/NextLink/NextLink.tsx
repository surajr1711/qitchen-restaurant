import Link, { LinkProps } from "next/link";
import React from "react";
import { ButtonVariant } from "../Button/Button";
import { buttonTV } from "../Button/Button";
import Typography from "../Typography/Typography";

export interface NextLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
	children: React.ReactNode;
	variant?: ButtonVariant | "fullscreenMenuLink";
}

const NextLink: React.FC<NextLinkProps> = ({ children, variant = "text", ...props }) => {
	if (variant === "fullscreenMenuLink") {
		return (
			<Link className="group" {...props}>
				<Typography
					variant="heading1"
					tag="span"
					className="transition duration-300 ease-in-out group-hover:text-gold-base"
				>
					{children}
				</Typography>
			</Link>
		);
	}

	return (
		<Link className={buttonTV({ variant })} {...props}>
			<Typography tag="span" variant="label2" className={variant === "filled" ? "text-black" : ""}>
				{children}
			</Typography>
		</Link>
	);
};

export default NextLink;
