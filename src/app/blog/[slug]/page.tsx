import React from "react";
import { blogs } from "@/constants/blogPageConsts";
import HeroSection from "@/components/HeroSection/HeroSection";
import Diamond from "@/components/Diamond/Diamond";
import Typography from "@/components/Typography/Typography";

const blogArticle = ({ params }: { params: { slug: string } }) => {
	// fetch the data from your db/server endpoint followed by the slug of your record
	const data = blogs.find((blog) => blog.slug === params.slug);

	if (!data) return null;

	return (
		<main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1">
			{/* Hero */}
			<HeroSection src={data.src} alt={data.alt} title="" />

			{/* Content */}
			<section id="news" className="rounded-2xl p-8 w-full border border-neutral-light xl:overflow-scroll xl:p-12">
				<header className="pb-12 flex flex-col gap-8 justify-center">
					<div className="flex justify-center gap-4">
						<Diamond />
						<Typography variant="label2">{data.date}</Typography>
						<Diamond lineSide="right" />
					</div>
					<Typography tag="h1" variant="heading1" className="text-center max-w-xl mx-auto">
						{data.title}
					</Typography>
					<span className="flex justify-center">
						<Diamond lineLength="xs" lineSide="right" />
						<Diamond lineLength="xs" />
					</span>
				</header>

				{/* blog items */}
				<div className="grid gap-8 justify-center max-w-2xl mx-auto xl:p-12 xl:pt-0">
					<div dangerouslySetInnerHTML={{ __html: data.body }} />
				</div>
			</section>
		</main>
	);
};

export default blogArticle;

export const generateStaticParams = () => {
	return blogs.map((post) => ({ slug: post.slug }));
};
