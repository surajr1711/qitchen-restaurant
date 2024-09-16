import type { MetadataRoute } from "next";
import { blogs } from "@/constants/blogPageConsts";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = process.env.BASE_URL;
	const blogEntries = blogs.map((blog) => ({
		url: `${base}/blog/${blog.slug}`,
		// lastModified: new Date(),
		// changeFrequency: "yearly",
		// priority: 1,
	}));
	return [
		{
			url: `${base}`,
			// lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${base}/menu`,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${base}/reservation`,
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: `${base}/contact`,
			changeFrequency: "yearly",
			priority: 0.7,
		},
		{
			url: `${base}/about`,
			changeFrequency: "yearly",
			priority: 0.6,
		},
		{
			url: `${base}/blog`,
			// lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		...blogEntries,
	];
}
