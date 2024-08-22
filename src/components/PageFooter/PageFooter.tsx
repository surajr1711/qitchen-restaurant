import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Icon from "../Icon/Icon";
import DiamondSVG from "../../../public/svgs/diamond.svg";

interface PageFooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

const PageFooter: React.FC<PageFooterProps> = ({ ...props }) => {
	return (
		<footer
			className="py-6 border border-neutral-light rounded-xl flex gap-4 justify-center align-baseline text-gold-verlight"
			{...props}
		>
			<FooterLink>© Copyright</FooterLink>

			<Icon SVG={DiamondSVG} size="medium" className="text-neutral-light" />

			<FooterLink>Licensing</FooterLink>

			<Icon SVG={DiamondSVG} size="medium" className="text-neutral-light" />

			<FooterLink>Styleguide</FooterLink>
		</footer>
	);
};

export default PageFooter;
