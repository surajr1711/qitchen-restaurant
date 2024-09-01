import React from "react";
import Icon from "../Icon/Icon";
import DiamondSVG from "../../../public/svgs/diamond.svg";
import QLink from "../QLink/QLink";

interface PageFooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

const PageFooter: React.FC<PageFooterProps> = ({ ...props }) => {
	return (
		<footer className="py-1 flex gap-4 justify-center align-baseline text-gold-verlight" {...props}>
			<QLink href="#" textStyle="label1">
				© Copyright
			</QLink>

			<Icon SVG={DiamondSVG} size="medium" className="text-neutral-light" />

			<QLink href="#" textStyle="label1">
				Licensing
			</QLink>

			<Icon SVG={DiamondSVG} size="medium" className="text-neutral-light" />

			<QLink href="#" textStyle="label1">
				Styleguide
			</QLink>
		</footer>
	);
};

export default PageFooter;
