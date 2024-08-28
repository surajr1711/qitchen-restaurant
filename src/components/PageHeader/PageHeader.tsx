import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import { MenuButton } from "@/components/IconButton";
import Icon from "../Icon/Icon";
import Qitchen from "../../../public/brand/qitchen.svg";
import MenuSVG from "../../../public/svgs/menu.svg";

interface PageHeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

const PageHeader: React.FC<PageHeaderProps> = ({ ...props }) => {
	return (
		<header
			className="bg-black p-2 rounded-xl inline-flex gap-4 flex-nowrap place-items-center absolute z-10 top-8 left-1/2 transform -translate-x-1/2 lg:top-10 xl:transform-none xl:left-14 xl:top-12"
			{...props}
		>
			{/* Open Menu button */}
			<div className="relative z-30">
				<MenuButton>
					<Icon SVG={MenuSVG} size="large" />
				</MenuButton>
			</div>

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

export default PageHeader;
