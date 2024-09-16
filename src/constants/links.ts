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
		ariaLabel: "Go to Qitchen&apos;s Instagram page",
	},
	{
		href: "#",
		label: "Facebook",
		iconSVG: facebook,
		ariaLabel: "Go to Qitchen&apos;s Facebook page",
	},
	{
		href: "#",
		label: "X Twitter",
		iconSVG: xtwitter,
		ariaLabel: "Go to Qitchen&apos;s Twitter page",
	},
];
