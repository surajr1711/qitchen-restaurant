"use client";

// import Link, { LinkProps } from "next/link";
import PageTransitionLink from "@/components/PageTransitionLink/PageTransitionLink";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";
import QLink from "../QLink/QLink";

// export interface FullscreenMenuLinkProps
// 	extends LinkProps,
// 		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
export interface FullscreenMenuLinkProps {
	children: React.ReactNode;
	href: string;
}
const FullscreenMenuLink: React.FC<FullscreenMenuLinkProps> = ({ children, href, ...props }) => {
	const { isOpen, setIsOpen } = useMenuStateContext();

	const handleClick = (e: React.MouseEvent) => {
		// when a link is clicked
		setIsOpen(false);
	};

	return (
		<PageTransitionLink href={href} onClick={handleClick} {...props}>
			<QLink
				as="span"
				textStyle="heading1"
				className="transition duration-300 ease-in-out hover:text-gold-base hover:no-underline"
			>
				{children}
			</QLink>
		</PageTransitionLink>
	);
};

export default FullscreenMenuLink;
