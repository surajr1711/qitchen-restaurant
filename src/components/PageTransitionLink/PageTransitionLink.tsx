"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link, { LinkProps } from "next/link";

interface PageTransitionLinkProps extends LinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

const wait = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const PageTransitionLink: React.FC<PageTransitionLinkProps> = ({ href, children, onClick, ...props }) => {
	const router = useRouter();

	const handleClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		if (onClick) onClick(e);

		// Fade-in/out animation using classes
		const body = document.querySelector("body");
		body?.classList.add("opacity-0");
		await wait(300);
		router.push(href);
		await wait(300);
		body?.classList.remove("opacity-0");
	};

	return (
		<Link onClick={handleClick} href={href} {...props}>
			{children}
		</Link>
	);
};

export default PageTransitionLink;
