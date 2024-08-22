import React from "react";
import Typography from "../Typography/Typography";

interface FooterLinkProps extends React.ComponentPropsWithoutRef<"a"> {
	/** Provide a string for the link text */
	children: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children = "My link", href = "#", ...props }) => {
	return (
		<a href={href} className="group" target="_blank" {...props}>
			<Typography tag="span" variant="label2" className="group-hover:underline group-hover:text-gold-light">
				{children}
			</Typography>
		</a>
	);
};

export default FooterLink;
