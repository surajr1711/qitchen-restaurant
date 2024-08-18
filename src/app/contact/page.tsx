import React from "react";

const page = () => {
	return (
		<main>
			{/* Hero */}
			<section id="hero" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h1>Contact</h1>
				</header>
			</section>

			{/* Opening hours */}
			<section id="hours" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Opening hours</h2>
				</header>
			</section>

			{/* images */}
			<section id="images" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h2>Images</h2>
				</header>
			</section>

			{/* contact info */}
			<section id="contactinfo" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Get in touch</h2>
				</header>
			</section>

			{/* map */}
			<section id="map" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h2>Map</h2>
				</header>
			</section>
		</main>
	);
};

export default page;
