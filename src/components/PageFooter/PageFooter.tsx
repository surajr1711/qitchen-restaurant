import React from "react";
import QLink from "../QLink/QLink";
import Diamond from "../Diamond/Diamond";

interface PageFooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

const PageFooter: React.FC<PageFooterProps> = ({ ...props }) => {
	return (
		<footer className="flex gap-4 justify-center align-middle text-gold-verlight" {...props}>
			<QLink href="#" textStyle="label1">
				© Copyright
			</QLink>

			<Diamond lineLength="none" />

			<QLink href="#" textStyle="label1">
				Licensing
			</QLink>

			<Diamond lineLength="none" />

			<QLink href="#" textStyle="label1">
				Styleguide
			</QLink>
		</footer>
	);
};

export default PageFooter;
