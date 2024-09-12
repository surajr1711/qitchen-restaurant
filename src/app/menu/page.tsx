import React from "react";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { menuCategories, menuItems } from "@/constants/menuPageConsts";
import { cleanString } from "@/utils/cleanString";
import MenuCard from "@/components/MenuCard/MenuCard";
import Diamond from "@/components/Diamond/Diamond";
import HeroSection from "@/components/HeroSection/HeroSection";
import { heroImage } from "@/constants/menuPageConsts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Menu - Maki, Uramaki and Special Rolls",
	description:
		"Explore Qitchen’s exquisite Sushi menu featuring our delicious maki, uramaki, and special rolls, crafted to perfection. Maki $5, Uramaki $12, Special rolls $16.",
};

const page = () => {
	return (
		<>
			{/* <main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1"> */}
			{/* Hero */}
			<HeroSection {...heroImage} title="Menu" />

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
			{/* </main> */}
		</>
	);
};

export default page;
