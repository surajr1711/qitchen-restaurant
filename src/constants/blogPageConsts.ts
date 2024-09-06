import foodPhotography from "../../public/images/blog/Food-Photography-Camera-Equipment.webp";
import slicingSalmon from "../../public/images/blog/Slicing-Salmon-Point-of-View.webp";
import phone from "../../public/images/blog/Taking-Photo-of-Sushi-with-Smartphone.webp";
import salmonCubes from "../../public/images/blog/Freshly-Sliced-Tuna-Cubes-Wooden-Cutting-Board.webp";
import sprinkleSeasoning from "../../public/images/blog/Sprinkling-Seasoning-on-Green-Snap-Peas.webp";
import servingSoup from "../../public/images/blog/Tattooed-Arm-Chef-Preparing-Soup.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const heroImage = {
	src: foodPhotography,
	alt: "Professional camera capturing exquisite Japanese cuisine on black plates, highlighting the artistry and detail of the dishes.",
};

export interface BlogT {
	src: StaticImport;
	alt: string;
	date: string;
	title: string;
	desc: string;
}

export const blogs: BlogT[] = [
	{
		src: slicingSalmon,
		alt: "Top-down close-up of hands skillfully slicing fresh salmon on a dark countertop.",
		date: "Aug 31, 2023",
		title: "How Qitchen Redefines Flavor Harmony in Every Bite",
		desc: "Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors.",
	},
	{
		src: phone,
		alt: "Person photographing sushi with a smartphone, capturing the modern trend of sharing food images on social media.",
		date: "Jun 7, 2023",
		title: "Unveiling the Mastery Behind Our Culinary Craftsmanship",
		desc: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
	},
	{
		src: salmonCubes,
		alt: "Freshly sliced tuna cubes on a wooden cutting board, showcasing vibrant red color and freshness, with a knife ready for further preparation.",
		date: "Apr 15, 2023",
		title: "Journey through Freshness Exquisite Sushi Selection",
		desc: "Embark on a seafood adventure, guided by Qitchen's fresh and exquisite sushi creations from the sea.",
	},
	{
		src: sprinkleSeasoning,
		alt: "Close-up of hand sprinkling seasoning over green snap peas in a bowl.",
		date: "Mar 19, 2023",
		title: "Palate with Qitchen's Unsurpassed Sushi Delicacies",
		desc: "Discover the heights of gastronomic delight as Qitchen's sushi transports you to a new culinary realm.",
	},
	{
		src: servingSoup,
		alt: "Tattooed chef stirring a steaming pot of soup, showcasing culinary skills and artistry in a vibrant kitchen setting.",
		date: "Dec 28, 2022",
		title: "The Qitchen Experience Beyond Sushi",
		desc: "Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience.",
	},
];
