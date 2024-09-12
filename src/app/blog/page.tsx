import React from "react";
import Diamond from "@/components/Diamond/Diamond";
import HeroSection from "@/components/HeroSection/HeroSection";
import Typography from "@/components/Typography/Typography";
import { blogs, heroImage } from "@/constants/blogPageConsts";
import BlogCard from "@/components/BlogCard/BlogCard";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Qitchen Blog - Culinary Insights & restaurant updates",
	description:
		"Stay updated with the latest news and insights from Qitchen. Explore articles on gourmet Japanese cuisine, culinary craftsmanship, and our unique dining experiences. Discover the art of sushi and more!",
};

const page = () => {
	return (
		<>
			{/* <main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1"> */}
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
						<Link key={i} href={`/blog/${blog.slug}`}>
							<BlogCard {...blog} />
						</Link>
					))}
				</div>
			</section>
			{/* </main> */}
		</>
	);
};

export default page;
