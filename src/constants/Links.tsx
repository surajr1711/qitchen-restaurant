// Homepage card link images
import sushi from "../../public/images/Sushi-Rolls-Garnished-with-Salad-Presentation.webp";
import lady from "../../public/images/Woman-White-Wine-Glasses-Intimate-Dinner.webp";
import restaurant from "../../public/images/Modern-Restaurant-Interior-Japanese-Gourmet-Dining.webp";
// Social link icons

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
		href: "#",
		label: "Instagram",
		iconSVG: "",
	},
	{
		href: "#",
		label: "Facebook",
		iconSVG: "",
	},
	{
		href: "#",
		label: "Twitter",
		iconSVG: "",
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
