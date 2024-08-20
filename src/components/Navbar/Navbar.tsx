import Link from "next/link";
import React from "react";
import Qitchen from "../../../public/brand/qitchen.svg";
import NextLink from "../NextLink/NextLink";

interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> {}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
	return (
		<nav className="bg-black p-4 rounded-2xl" {...props}>
			<ul className="flex gap-4 flex-nowrap place-items-center">
				<li>
					<Link href="/" className="block w-36">
						<Qitchen />
					</Link>
				</li>
				<li>
					<NextLink href="/">Menu</NextLink>
				</li>
				<li>
					<NextLink href="/about">About</NextLink>
				</li>
				<li>
					<NextLink href="/reservation" variant="primary">
						Book a table
					</NextLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
