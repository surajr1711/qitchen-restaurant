import React from "react";
import Button from "../Button/Button";
// import Link from "next/link";
import Link from "../PageTransitionLink/PageTransitionLink";

interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> {}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
	return (
		<nav {...props}>
			<ul className="flex gap-2 flex-nowrap place-items-center">
				<li className="hidden">
					<Link href={"/"}>
						<Button as="span">Home</Button>
					</Link>
				</li>
				<li className="hidden 2xs:block">
					<Link href={"/menu"}>
						<Button as="span">Menu</Button>
					</Link>
				</li>
				<li className="hidden lg:block">
					<Link href="/about">
						<Button as="span">About</Button>
					</Link>
				</li>
				<li className="hidden">
					<Link href="/blog">
						<Button as="span">Blog</Button>
					</Link>
				</li>
				<li className="hidden lg:block">
					<Link href="/contact">
						<Button as="span">Contact</Button>
					</Link>
				</li>
				<li>
					<Link href="/reservation">
						<Button as="span" variant="filled">
							Book a table
						</Button>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
