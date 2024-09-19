import sushi from "../../public/images/home/Sushi-Rolls-Garnished-with-Salad-Presentation.webp";
import lady from "../../public/images/home/Woman-White-Wine-Glasses-Intimate-Dinner.webp";
import restaurant from "../../public/images/home/Modern-Restaurant-Interior-Japanese-Gourmet-Dining.webp";
import pokeBowl from "../../public/images/menu/Gourmet-Poke-Bowl-Salmon-Rice-Vegetables.webp";

export const heroImage = {
	src: pokeBowl,
	alt: "Top-down view of a gourmet poke bowl with grilled salmon, rice, greens, and radish. Hands using chopsticks.",
};

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
