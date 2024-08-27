import sushi from "../../public/images/Sushi-Rolls-Garnished-with-Salad-Presentation.webp";
import lady from "../../public/images/Woman-White-Wine-Glasses-Intimate-Dinner.webp";
import restaurant from "../../public/images/Modern-Restaurant-Interior-Japanese-Gourmet-Dining.webp";

export const navbarLinks = [
	{
		route: "/",
		label: "Home",
	},
	{
		route: "/menu",
		label: "Menu",
	},
	{
		route: "/about",
		label: "About",
	},
	{
		route: "/reservation",
		label: "Reservation",
	},
	{
		route: "/blog",
		label: "Blog",
	},
	{
		route: "/contact",
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
		route: "#",
		label: "Instagram",
	},
	{
		route: "#",
		label: "Facebook",
	},
	{
		route: "#",
		label: "Twitter",
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
