import React from "react";

const page = () => {
	return (
		<main>
			{/* Hero */}
			<section id="hero" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h1>Blog</h1>
				</header>
			</section>

			{/* News */}
			<section id="news" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Latest news</h2>
				</header>
			</section>
		</main>
	);
};

export default page;
