"use client";

import { NextLink } from "@/components/NextLink";
import { NextLinkProps } from "../NextLink/NextLink";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";

type FullscreenMenuLinkProps = NextLinkProps & {};

const FullscreenMenuLink: React.FC<FullscreenMenuLinkProps> = ({ children, ...props }) => {
	const { isOpen, setIsOpen } = useMenuStateContext();

	console.log("FullscreenMenuLink rendered");

	return (
		<NextLink variant="fullscreenMenuLink" onClick={() => setIsOpen(false)} {...props}>
			{children}
		</NextLink>
	);
};

export default FullscreenMenuLink;
