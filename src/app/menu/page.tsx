import React from "react";
import Section from "@/components/Section/Section";
import Image from "next/image";
import HeroImg from "../../../public/images/Gourmet-Poke-Bowl-Salmon-Rice-Vegetables.webp";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { menuCategories } from "@/constants/menuPage";
import { cleanString } from "@/utils/cleanString";

const page = () => {
	return (
		<main className="grid gap-4 xl:grid-cols-2 xl:grid-rows-1">
			{/* Hero */}
			<Section id="hero" className="relative h-[600px] xl:h-full">
				<Image
					src={HeroImg}
					alt="Top-down view of a gourmet poke bowl with grilled salmon, rice, greens, and radish. Hands using chopsticks."
					className="absolute -z-0 h-full w-full object-cover"
				/>
				<header className="absolute bottom-8 inset-x-0 text-center xl:text-left xl:left-12">
					<Typography tag="h1" variant="banner1" className="uppercase">
						Menu
					</Typography>
				</header>
			</Section>

			{/* Maki */}
			<Section id="menu" className="overflow-scroll">
				<div className="flex gap-1">
					{menuCategories.map((item, i) => (
						<Link key={i} href={`/menu#${cleanString(item)}`}>
							<Button as="span" variant="outlined" size="small">
								{item.toUpperCase()}
							</Button>
						</Link>
					))}
				</div>
				<Section id="maki">
					<header>
						<h2>Maki</h2>
					</header>
				</Section>

				{/* Uramaki */}
				<Section id="uramaki">
					<header>
						<h2>Uramaki</h2>
					</header>
				</Section>

				{/* Special rolls */}
				<Section id="rolls">
					<header>
						<h2>Special Rolls</h2>
					</header>
				</Section>
			</Section>
		</main>
	);
};

export default page;
