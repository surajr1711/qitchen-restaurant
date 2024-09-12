import React from "react";
import Typography from "@/components/Typography/Typography";
import { Icon } from "@/components/Icon";
import StarSVG from "../../../public/svgs/star.svg";
import QCarousel from "@/components/QCarousel/QCarousel";
import { ratings, descImages, storyImages, heroImage } from "@/constants/aboutPageConsts";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About - Gourmet Japanese Cuisine & Sushi Artistry",
	description:
		"Discover the story behind Qitchen, where culinary craftsmanship meets modern elegance. Learn about our journey, accolades, and dedication to providing the finest gourmet Japanese cuisine. Join us for an unforgettable dining experience!",
};

const page = () => {
	return (
		<>
			{/* <main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1"> */}
			{/* Hero */}
			<HeroSection src={heroImage.src} alt={heroImage.alt} title="About" />

			{/* Content */}
			<div className="grid gap-4 w-full md:grid-rows-12">
				{/* Focus - artistry refined */}
				<section id="description" className="grid gap-4 md:row-span-5 md:grid-cols-12">
					<div className="rounded-2xl p-8 border border-neutral-light md:col-span-7 md:flex md:flex-col md:justify-between 2xl:p-12">
						<Typography tag="h2" variant="heading3">
							Sushi artistry refined
						</Typography>
						<Typography tag="p" variant="body1">
							Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to
							elevate your dining experience.
						</Typography>
					</div>
					{/* Images */}
					<div className="rounded-2xl overflow-hidden border border-neutral-light max-h-[400px] md:col-span-5">
						<QCarousel images={descImages} />
					</div>
				</section>

				{/* Ratings */}
				<section id="ratings" className="grid gap-4 md:row-span-2 md:grid-cols-3">
					{ratings.map((rating, i) => {
						return (
							<div key={i} className="rounded-2xl p-4 border border-neutral-light text-center grid content-center">
								{/* <div key={i} className="rounded-2xl p-4 border border-neutral-light grid text-center 2xl:p-8"> */}
								<div className="flex gap-1 justify-center pb-2">
									{Array.from({ length: rating.stars }).map((_, i) => (
										<Icon key={i} SVG={StarSVG} className="text-gold-base" />
									))}
								</div>
								<Typography tag="p" variant="heading6">
									{rating.name}
								</Typography>
								<Typography tag="p" variant="label2">
									{rating.comment}
								</Typography>
							</div>
						);
					})}
				</section>

				{/* Story */}
				<section id="description" className="grid gap-4 md:row-span-5 md:grid-cols-12">
					{/* Images */}
					<div className="rounded-2xl overflow-hidden border border-neutral-light max-h-[400px] md:col-span-5">
						<QCarousel images={storyImages} />
					</div>
					<div className="rounded-2xl p-8 border border-neutral-light md:col-span-7 md:flex md:flex-col md:justify-between 2xl:p-12">
						<Typography tag="h2" variant="heading3">
							Our Story
						</Typography>
						<Typography tag="p" variant="body1">
							Founded with a passion for culinary excellence, Qitchen&apos;s journey began in the heart of Prague. Over
							years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to
							redefining gastronomy.
						</Typography>
					</div>
				</section>
			</div>
			{/* </main> */}
		</>
	);
};

export default page;
