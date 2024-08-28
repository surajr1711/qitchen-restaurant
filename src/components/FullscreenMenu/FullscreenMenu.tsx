"use client";
import React, { useState } from "react";
import { Icon } from "@/components/Icon";
import { IconButton, MenuButton } from "@/components/IconButton";
import CloseSVG from "../../../public/svgs/close.svg";
import { navbarLinks } from "@/constants/Links";
import { NextLink } from "@/components/NextLink";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";

type FullScreenMenuProps = React.ComponentPropsWithoutRef<"div"> & {};

const FullscreenMenu: React.FC<FullScreenMenuProps> = ({ ...props }) => {
	const { isOpen, setIsOpen } = useMenuStateContext();

	if (!isOpen) return null;

	return (
		<div className="absolute top-0 left-0 bg-black p-4 w-screen h-screen z-20" {...props}>
			<div className="relative border border-neutral-light bg-neutral-dark rounded-2xl h-full">
				{/* Close Menu button */}
				<div className="absolute mt-4 ml-4">
					<MenuButton>
						<Icon SVG={CloseSVG} size="large" />
					</MenuButton>
				</div>

				{/* links */}
				<ul className="h-full grid gap-4 place-content-center">
					{navbarLinks.map((link, i) => (
						<li key={i} className="text-center">
							<NextLink href={link.href} variant="fullscreenMenuLink" onClick={() => setIsOpen(false)}>
								{link.label}
							</NextLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FullscreenMenu;
