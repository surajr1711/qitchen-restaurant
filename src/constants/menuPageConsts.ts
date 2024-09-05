import { StaticImport } from "next/dist/shared/lib/get-img-props";
import PokeBowl from "../../public/images/menu/Gourmet-Poke-Bowl-Salmon-Rice-Vegetables.webp";
import spicyTunaMaki from "../../public/images/menu/spicy-tuna-maki.webp";
import mangoMaki from "../../public/images/menu/mango-maki.webp";
import salmonMaki from "../../public/images/menu/salmon-maki.webp";
import tunaMaki from "../../public/images/menu/tuna-maki.webp";
import volcanoDelightUramaki from "../../public/images/menu/volcano-delight-uramaki.webp";
import raindbowFusionUramaki from "../../public/images/menu/rainbow-fusion-uramaki.webp";
import dragonEleganceUramaki from "../../public/images/menu/dragon-elegance-uramaki.webp";
import sunsetSerenityUramaki from "../../public/images/menu/sunset-serenity-uramaki.webp";
import mysticGardenUramaki from "../../public/images/menu/mystic-garden-uramaki.webp";
import oceanBreezeUramaki from "../../public/images/menu/ocean-breeze-uramaki.webp";
import tokyoBlossomUramaki from "../../public/images/menu/tokyo-blossom-uramaki.webp";
import sunriseBlissSpecialRoll from "../../public/images/menu/sunrise-bliss-special-roll.webp";
import mangoTangoSpecialRoll from "../../public/images/menu/mango-tango-special-roll.webp";
import truffleIndulgenceSpecialRoll from "../../public/images/menu/truffle-indulgence-special-roll.webp";
import pacificFirecrackerSpecialRoll from "../../public/images/menu/pacific-firecracker-special-roll.webp";
import eternalEelSpecialRoll from "../../public/images/menu/eternal-eel-special-roll.webp";

export const heroImage = {
	src: PokeBowl,
	alt: "Top-down view of a gourmet poke bowl with grilled salmon, rice, greens, and radish. Hands using chopsticks.",
};

export const menuCategories = ["maki", "uramaki", "special rolls"] as const;

type MenuCategories = (typeof menuCategories)[number];
export type MenuItem = {
	imageSrc: StaticImport;
	imageAlt: string;
	title: string;
	leaf: boolean;
	price: number;
	description: string;
};
type MenuItems = Record<MenuCategories, MenuItem[]>;

export const menuItems: MenuItems = {
	maki: [
		{
			imageSrc: spicyTunaMaki,
			imageAlt: "Six pieces of spicy tuna maki on a white textured rectangular plate",
			title: "Spicy Tuna Maki",
			leaf: false,
			price: 5,
			description:
				"A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
		},
		{
			imageSrc: mangoMaki,
			imageAlt: "Six pieces of mango maki on a white textured rectangular plate",
			title: "Mango Maki",
			leaf: true,
			price: 5,
			description:
				"Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
		},
		{
			imageSrc: salmonMaki,
			imageAlt: "Six pieces of salmon maki on a white textured rectangular plate",
			title: "Salmon Maki",
			leaf: false,
			price: 5,
			description:
				"Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
		},
		{
			imageSrc: tunaMaki,
			imageAlt: "Six pieces of tuna maki on a white textured rectangular plate",
			title: "Tuna Maki",
			leaf: false,
			price: 5,
			description:
				"A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
		},
	],
	uramaki: [
		{
			imageSrc: volcanoDelightUramaki,
			imageAlt: "Four pieces of Uramaki with salmon, avocado and cucumber on a white textured rectangular plate.",
			title: "Volcano Delight",
			leaf: false,
			price: 12,
			description:
				"Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
		},
		{
			imageSrc: raindbowFusionUramaki,
			imageAlt: "Four pieces of Uramaki topped with dark and creamy sauces on a white textured rectangular plate.",
			title: "Rainbow Fusion",
			leaf: false,
			price: 12,
			description:
				"A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
		},
		{
			imageSrc: dragonEleganceUramaki,
			imageAlt:
				"Four pieces of Grilled eel Uramaki with avocado within the roll, covered with slices of ripe avocado resembling dragon scales on a white textured rectangular plate.",
			title: "Dragon Elegance",
			leaf: false,
			price: 12,
			description:
				"Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
		},
		{
			imageSrc: sunsetSerenityUramaki,
			imageAlt:
				"Four pieces of Uramaki filled with tempura shrimp, cucumber, and spicy mayo in a roll of soy paper, topped with slices of mango on a white textured rectangular plate.",
			title: "Sunset Serenity",
			leaf: false,
			price: 12,
			description:
				"Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
		},
		{
			imageSrc: mysticGardenUramaki,
			imageAlt:
				"Four pieces of Uramaki filled with Shiitake mushrooms, asparagus, and cucumber with crispy tempura bits, topped with sesame seeds on a white textured rectangular plate.",
			title: "Mystic Garden",
			leaf: false,
			price: 12,
			description:
				"Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
		},
		{
			imageSrc: oceanBreezeUramaki,
			imageAlt:
				"Four pieces of Uramaki filled with fresh shrimp, crab stick, and avocado, and tobiko on a white textured rectangular plate.",
			title: "Ocean Breeze",
			leaf: false,
			price: 12,
			description:
				"A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
		},
		{
			imageSrc: tokyoBlossomUramaki,
			imageAlt:
				"Four pieces of Uramaki filled with pink soy paper, tuna, crab stick, and cucumber, edible flower petals on a white textured rectangular plate.",
			title: "Tokyo Blossom",
			leaf: false,
			price: 12,
			description:
				"Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
		},
	],
	"special rolls": [
		{
			imageSrc: sunriseBlissSpecialRoll,
			imageAlt:
				"Four pieces of special roll filled with fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko on a white circular plate.",
			title: "Sunrise Bliss",
			leaf: true,
			price: 16,
			description:
				"A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
		},
		{
			imageSrc: mangoTangoSpecialRoll,
			imageAlt:
				"Four pieces of special roll filled with Tempura shrimp, cucumber, and avocado alongside mango slices, drizzled with a mango sauce on a white circular plate.",
			title: "Sunrise Bliss",
			leaf: false,
			price: 16,
			description:
				"Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
		},
		{
			imageSrc: truffleIndulgenceSpecialRoll,
			imageAlt:
				"Four pieces of special roll filled with slices of black truffle wrap a roll of wagyu beef, cucumber, and microgreens, on a white circular plate.",
			title: "Sunrise Bliss",
			leaf: true,
			price: 16,
			description:
				"Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
		},
		{
			imageSrc: pacificFirecrackerSpecialRoll,
			imageAlt:
				"Four pieces of special roll filled with crab salad, tempura shrimp, and jalapeño peppers drizzled with a chili-infused aioli on a white circular plate.",
			title: "Pacific Firecracker",
			leaf: true,
			price: 16,
			description:
				"Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
		},
		{
			imageSrc: eternalEelSpecialRoll,
			imageAlt:
				"Four pieces of special roll filled with eel tempura, foie gras, and cucumber, topped with truffle oil and gold leaf on a white circular plate.",
			title: "Eternal Eel",
			leaf: false,
			price: 16,
			description:
				"An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
		},
	],
};
