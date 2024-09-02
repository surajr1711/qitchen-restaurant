import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/images/Gourmet-Poke-Bowl-Salmon-Rice-Vegetables.webp";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { menuCategories, menuItems } from "@/constants/menuPage";
import { cleanString } from "@/utils/cleanString";
import MenuCard from "@/components/MenuCard/MenuCard";
import Diamond from "@/components/Diamond/Diamond";

const page = () => {
	return (
		<main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1">
			{/* Hero */}
			<section id="hero" className="p-8 w-full relative h-[600px] xl:h-full">
				<Image
					src={HeroImg}
					alt="Top-down view of a gourmet poke bowl with grilled salmon, rice, greens, and radish. Hands using chopsticks."
					className="absolute top-0 left-0 -z-0 h-full w-full object-cover rounded-2xl"
				/>
				<header className="absolute bottom-8 inset-x-0 text-center xl:text-left xl:left-12">
					<Typography tag="h1" variant="banner1" className="uppercase">
						Menu
					</Typography>
				</header>
			</section>

			{/* Menu */}
			<section id="menu" className="rounded-2xl p-8 w-full border border-neutral-light xl:overflow-scroll">
				{/* links */}
				<div className="flex gap-1 justify-center pb-8">
					{menuCategories.map((item, i) => (
						<Link key={i} href={`/menu#${cleanString(item)}`}>
							<Button as="span" variant="outlined" size="small">
								{item.toUpperCase()}
							</Button>
						</Link>
					))}
				</div>

				{menuCategories.map((cat, i) => {
					return (
						<section key={i} id={cleanString(cat)} className="pb-16 last:pb-0">
							<header className="pb-12 flex gap-4 justify-center">
								<Diamond />
								<Typography tag="h2" variant="heading4">
									{cat.toUpperCase()}
								</Typography>
								<Diamond lineSide="right" />
							</header>
							<div className="flex flex-col gap-4 items-center">
								{menuItems[cat].map((item, i) => (
									<MenuCard key={i} {...item} />
								))}
							</div>
						</section>
					);
				})}
			</section>
		</main>
	);
};

export default page;
