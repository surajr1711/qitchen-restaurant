import React from "react";
import Diamond from "@/components/Diamond/Diamond";
import HeroSection from "@/components/HeroSection/HeroSection";
import Typography from "@/components/Typography/Typography";
import { blogs, heroImage } from "@/constants/blogPageConsts";
import BlogCard from "@/components/BlogCard/BlogCard";

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
				<div className="@container/blogs grid gap-8 justify-center">
					{blogs.map((blog, i) => (
						<BlogCard key={i} {...blog} />
					))}
				</div>
			</section>
		</main>
	);
};

export default page;
