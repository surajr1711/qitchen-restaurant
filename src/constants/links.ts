import instagram from "../../public/svgs/instagram.svg";
import facebook from "../../public/svgs/facebook.svg";
import xtwitter from "../../public/svgs/xtwitter.svg";

export const navbarLinks = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/menu",
		label: "Menu",
	},
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/reservation",
		label: "Reservation",
	},
	{
		href: "/blog",
		label: "Blog",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

export const footerLinks = [
	{
		route: "#",
		label: "© Copyright",
	},
	{
		route: "#",
		label: "Licensing",
	},
	{
		route: "#",
		label: "Styleguide",
	},
];

export const socialLinks = [
	{
		href: "#",
		label: "Instagram",
		iconSVG: instagram,
	},
	{
		href: "#",
		label: "Facebook",
		iconSVG: facebook,
	},
	{
		href: "#",
		label: "X Twitter",
		iconSVG: xtwitter,
	},
];
