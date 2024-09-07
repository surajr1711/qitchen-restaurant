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
	slug: string;
	desc: string;
	body: string;
}

export const blogs: BlogT[] = [
	{
		src: slicingSalmon,
		alt: "Top-down close-up of hands skillfully slicing fresh salmon on a dark countertop.",
		date: "Aug 31, 2023",
		title: "How Qitchen Redefines Flavor Harmony in Every Bite",
		slug: "How-Qitchen-Redefines-Flavor-Harmony-in-Every-Bite",
		desc: "Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors.",
		body: `
		<h2 class="h4">Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
		<p>In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
		<h2 class="h4">Crafting a Feast for the Senses</h2>
		<p>The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.</p>
		<p>The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>
		<h2 class="h4">Beyond Sushi: Nurturing Connections</h2>
		<p>While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.</p>
		<p>The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.</p>
		`,
	},
	{
		src: phone,
		alt: "Person photographing sushi with a smartphone, capturing the modern trend of sharing food images on social media.",
		date: "Jun 7, 2023",
		title: "Unveiling the Mastery Behind Our Culinary Craftsmanship",
		slug: "Unveiling-the-Mastery-Behind-Our-Culinary-Craftsmanship",
		desc: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
		body: `
		<h2 class="h4">Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
		<p>In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
		<h2 class="h4">Crafting a Feast for the Senses</h2>
		<p>The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.</p>
		<p>The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>
		<h2 class="h4">Beyond Sushi: Nurturing Connections</h2>
		<p>While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.</p>
		<p>The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.</p>
		`,
	},
	{
		src: salmonCubes,
		alt: "Freshly sliced tuna cubes on a wooden cutting board, showcasing vibrant red color and freshness, with a knife ready for further preparation.",
		date: "Apr 15, 2023",
		title: "Journey through Freshness Exquisite Sushi Selection",
		slug: "Journey-through-Freshness-Exquisite-Sushi-Selection",
		desc: "Embark on a seafood adventure, guided by Qitchen's fresh and exquisite sushi creations from the sea.",
		body: `
		<h2 class="h4">Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
		<p>In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
		<h2 class="h4">Crafting a Feast for the Senses</h2>
		<p>The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.</p>
		<p>The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>
		<h2 class="h4">Beyond Sushi: Nurturing Connections</h2>
		<p>While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.</p>
		<p>The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.</p>
		`,
	},
	{
		src: sprinkleSeasoning,
		alt: "Close-up of hand sprinkling seasoning over green snap peas in a bowl.",
		date: "Mar 19, 2023",
		title: "Palate with Qitchen's Unsurpassed Sushi Delicacies",
		slug: "Palate-with-Qitchen's-Unsurpassed-Sushi-Delicacies",
		desc: "Discover the heights of gastronomic delight as Qitchen's sushi transports you to a new culinary realm.",
		body: `
		<h2 class="h4">Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
		<p>In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
		<h2 class="h4">Crafting a Feast for the Senses</h2>
		<p>The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.</p>
		<p>The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>
		<h2 class="h4">Beyond Sushi: Nurturing Connections</h2>
		<p>While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.</p>
		<p>The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.</p>
		`,
	},
	{
		src: servingSoup,
		alt: "Tattooed chef stirring a steaming pot of soup, showcasing culinary skills and artistry in a vibrant kitchen setting.",
		date: "Dec 28, 2022",
		title: "The Qitchen Experience Beyond Sushi",
		slug: "The-Qitchen-Experience-Beyond-Sushi",
		desc: "Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience.",
		body: `
		<h2 class="h4">Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
		<p>In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
		<h2 class="h4">Crafting a Feast for the Senses</h2>
		<p>The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.</p>
		<p>The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>
		<h2 class="h4">Beyond Sushi: Nurturing Connections</h2>
		<p>While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.</p>
		<p>The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.</p>
		`,
	},
];
