import React from "react";
import QLink from "../QLink/QLink";
import Diamond from "../Diamond/Diamond";

interface PageFooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

const PageFooter: React.FC<PageFooterProps> = ({ ...props }) => {
	return (
		<footer className="flex gap-4 justify-center align-middle text-gold-verlight" {...props}>
			<QLink href="https://github.com/surajr1711/qitchen-restaurant" textStyle="label1">
				Github repo
			</QLink>

			<Diamond lineLength="none" />

			<QLink href="#" textStyle="label1">
				Portfolio
			</QLink>

			<Diamond lineLength="none" />

			<QLink href="https://qitchen-template.framer.website" textStyle="label1">
				Reference design
			</QLink>
		</footer>
	);
};

export default PageFooter;
