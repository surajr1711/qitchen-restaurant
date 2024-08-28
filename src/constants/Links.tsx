// Homepage card link images
import sushi from "../../public/images/Sushi-Rolls-Garnished-with-Salad-Presentation.webp";
import lady from "../../public/images/Woman-White-Wine-Glasses-Intimate-Dinner.webp";
import restaurant from "../../public/images/Modern-Restaurant-Interior-Japanese-Gourmet-Dining.webp";
// Social link icons
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

export const homepageCardLinks = [
	{
		src: sushi,
		alt: "Person holding a black plate with sushi rolls, leafy greens, shredded vegetable, and sauce drizzle",
		href: "/menu",
		label: "Menu",
	},
	{
		src: lady,
		alt: "Woman sitting at a round wooden table with two glasses of wine",
		href: "/reservation",
		label: "Reservation",
	},
	{
		src: restaurant,
		alt: "Interior of a modern café with a bar counter, stools, shelves with bottles, and tables with dishes",
		href: "/about",
		label: "Our restaurant",
	},
];
