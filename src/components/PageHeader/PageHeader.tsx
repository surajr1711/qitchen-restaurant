import React from "react";
import Link from "next/link";
import Qitchen from "../../../public/brand/qitchen.svg";
import Navbar from "../Navbar/Navbar";
import IconButton from "../IconButton/IconButton";
import MenuSVG from "../../../public/svgs/menu.svg";
import Icon from "../Icon/Icon";

interface PageHeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<PageHeaderProps> = ({ ...props }) => {
	return (
		<header className="bg-black p-4 rounded-2xl flex gap-4 flex-nowrap place-items-center" {...props}>
			{/* Menu button */}
			<IconButton shape="squircle" size="large">
				<Icon SVG={MenuSVG} size="large" />
			</IconButton>

			{/* Brand Logo */}
			<div>
				<Link href="/" className="block pt-1 w-24 lg:w-32 ">
					<Qitchen />
				</Link>
			</div>

			{/* Navlinks */}
			<Navbar />
		</header>
	);
};

export default Header;
