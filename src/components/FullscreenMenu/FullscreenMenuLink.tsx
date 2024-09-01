"use client";

import Link, { LinkProps } from "next/link";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";
import QLink from "../QLink/QLink";

export interface FullscreenMenuLinkProps
	extends LinkProps,
		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
	children: React.ReactNode;
}
const FullscreenMenuLink: React.FC<FullscreenMenuLinkProps> = ({ children, href, ...props }) => {
	const { isOpen, setIsOpen } = useMenuStateContext();

	console.log("FullscreenMenuLink rendered");

	return (
		<Link href={href} onClick={() => setIsOpen(false)} {...props}>
			<QLink
				as="span"
				textStyle="heading1"
				className="transition duration-300 ease-in-out hover:text-gold-base hover:no-underline"
			>
				{children}
			</QLink>
		</Link>
	);
};

export default FullscreenMenuLink;
