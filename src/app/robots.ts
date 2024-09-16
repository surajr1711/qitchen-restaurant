import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const base = process.env.BASE_URL;
	return {
		rules: {
			// allow all search engines to crawl
			userAgent: "*",
			// allow all pages to be indexed
			allow: "/",
			// dont allow these pages to be indexed
			// disallow: ['/private/', '/privacy', '/admin'],
		},
		// the sitemap location if you havent already uploaded it to google search console.
		sitemap: `${base}/sitemap.xml`,
	};
}
