import React from "react";
import { blogs } from "@/constants/blogPageConsts";
import HeroSection from "@/components/HeroSection/HeroSection";
import Diamond from "@/components/Diamond/Diamond";
import Typography from "@/components/Typography/Typography";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
	params: {
		slug: string;
	};
};

/* // TO manually prevent a duplicate fetch of the same data in the blog and metadata use react cache. Do this only if using an ORM like prisma or axios instead of fetch. But this is not required if using fetch cuz nextjs will handle it. Nextjs prevents duplication during build even if page is dynamically generated. Nextjs will handle it only if using fetch api, nothing else.
const getPost = (postId: string) => {
	const post = await prisma.post.findUnique(postId);
	return post;
}; */

// can be async
export const generateMetadata = ({ params }: PageProps): Metadata => {
	/*
	// fetch data from db/server
	const response = await fetch(`https://dummyjson.com/posts/${postId}`)
	// or if using an ORM
	const response = await getPost()

	const data = await response.json()
 */

	// using local mockdata
	const data = blogs.find((blog) => blog.slug === params.slug);

	return {
		title: `Blog | ${data?.title}`,
		description: data?.desc,
		/* openGraph: {
			images: [
				{
					// typically the thumbnail of the blog
					url: data.theOGimageurl
				}
			]
		} */
	};
};

const blogArticle = ({ params }: PageProps) => {
	// fetch the data from your db/server endpoint followed by the slug of your record
	// can be a server function // "use server"
	const data = blogs.find((blog) => blog.slug === params.slug);

	if (!data) notFound();
	// if (response.status === 404) notFound()

	return (
		<>
			{/* <main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1"> */}
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
			{/* </main> */}
		</>
	);
};

export default blogArticle;

// can be async
export const generateStaticParams = () => {
	return blogs.map((post) => ({ slug: post.slug }));
};
