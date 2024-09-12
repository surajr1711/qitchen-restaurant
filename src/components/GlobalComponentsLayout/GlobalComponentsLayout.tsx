"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { tv } from "tailwind-variants";

interface GlobalCompnentLayoutProps extends React.ComponentPropsWithoutRef<"div"> {}

const layoutTV = tv({
	base: "p-4 h-full",
	variants: {
		isHome: {
			// only homepage maintains screen height on md.
			true: "md:h-screen",
			// other pages have scrollable content on md and is screen height only on xl.
			false: "xl:h-screen",
		},
	},
});

const GlobalComponentsLayout: React.FC<GlobalCompnentLayoutProps> = ({ children, className }) => {
	const isHome = usePathname() === "/";

	return <div className={layoutTV({ isHome, className })}>{children}</div>;
};

export default GlobalComponentsLayout;
