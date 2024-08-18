import React from "react";

const page = () => {
	return (
		<main>
			{/* Hero */}
			<section id="hero" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h1>About</h1>
				</header>
			</section>

			{/* Focus - artistry refined */}
			<section id="focus" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Focus</h2>
					<span>Artistry refined</span>
				</header>
			</section>

			{/* Ratings */}
			<section id="ratings" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h2>Ratings</h2>
				</header>
			</section>

			{/* Story */}
			<section id="story" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Story</h2>
				</header>
			</section>
		</main>
	);
};

export default page;
