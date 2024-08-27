import React from "react";
import NextLink from "../NextLink/NextLink";

interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> {}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
	return (
		<nav {...props}>
			<ul className="flex gap-2 flex-nowrap place-items-center">
				<li className="hidden">
					<NextLink href="/">Home</NextLink>
				</li>
				<li className="hidden 2xs:block">
					<NextLink href="/menu">Menu</NextLink>
				</li>
				<li className="hidden lg:block">
					<NextLink href="/about">About</NextLink>
				</li>
				<li className="hidden lg:block">
					<NextLink href="/blog">Blog</NextLink>
				</li>
				<li className="hidden lg:block">
					<NextLink href="/contact">Contact</NextLink>
				</li>
				<li>
					<NextLink href="/reservation" variant="filled">
						Book a table
					</NextLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
