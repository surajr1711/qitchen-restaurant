import Diamond from "@/components/Diamond/Diamond";
import HeroSection from "@/components/HeroSection/HeroSection";
import Typography from "@/components/Typography/Typography";
import { heroImage } from "@/constants/blogPageConsts";
import React from "react";

const page = () => {
	return (
		<main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1">
			{/* Hero */}
			<HeroSection {...heroImage} title="Blog" />

			{/* News */}
			<section id="news" className="rounded-2xl p-8 w-full border border-neutral-light xl:overflow-scroll xl:p-12">
				<header className="pb-12 flex gap-4 justify-center">
					<Diamond />
					<Typography tag="h2" variant="heading4">
						Latest news
					</Typography>
					<Diamond lineSide="right" />
				</header>

				{/* blog items */}
			</section>
		</main>
	);
};

export default page;
