import React from "react";

interface PageFooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

const PageFooter: React.FC<PageFooterProps> = ({ ...props }) => {
	return (
		<footer className="py-6 border border-outline-light rounded-xl" {...props}>
			PageFooter
		</footer>
	);
};

export default PageFooter;
