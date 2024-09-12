"use client";

import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";

const templateTV = tv({
	base: "h-full grid gap-4",
	variants: {
		isHome: {
			// homepage has a different layout
			true: "md:grid-cols-3 md:grid-rows-[2fr_1fr] xl:grid-cols-3 xl:grid-rows-3 2xl:grid-cols-4",
			// all other pages have a typical layout
			false: "xl:grid-cols-2 xl:grid-rows-1",
		},
	},
});

const Template = ({ children }: { children: React.ReactNode }) => {
	console.log(usePathname());
	const isHome = usePathname() === "/";

	return <main className={templateTV({ isHome })}>{children}</main>;
};

export default Template;
