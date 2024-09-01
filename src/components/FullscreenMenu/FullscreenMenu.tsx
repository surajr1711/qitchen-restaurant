import React from "react";
import { Icon } from "@/components/Icon";
import { MenuButton } from "@/components/IconButton";
import CloseSVG from "../../../public/svgs/close.svg";
import { navbarLinks } from "@/constants/links";
import FullscreenMenuLink from "./FullscreenMenuLink";

type FullScreenMenuProps = React.ComponentPropsWithoutRef<"div"> & {};

const FullscreenMenu: React.FC<FullScreenMenuProps> = ({ ...props }) => {
	console.log("FullscreenMenu rendered");

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
							<FullscreenMenuLink href={link.href}>{link.label}</FullscreenMenuLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FullscreenMenu;
