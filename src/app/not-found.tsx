import Button from "@/components/Button/Button";
import PageTransitionLink from "@/components/PageTransitionLink/PageTransitionLink";
import React from "react";

const NotFound = () => {
	return (
		<div className="m-auto space-y-5 text-center">
			<h1 className="text-3xl font-bold">Page not found</h1>
			<p>Looks like this page doesn&apos;t exist.</p>
			<PageTransitionLink href="/">
				<Button as="span">Return home</Button>
			</PageTransitionLink>
		</div>
	);
};

export default NotFound;
