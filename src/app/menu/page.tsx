import React from "react";

const page = () => {
	return (
		<main>
			{/* Hero */}
			<section id="hero" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h1>Menu</h1>
				</header>
			</section>

			{/* Maki */}
			<section id="maki" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Maki</h2>
				</header>
			</section>

			{/* Uramaki */}
			<section id="uramaki" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h2>Uramaki</h2>
				</header>
			</section>

			{/* Special rolls */}
			<section id="rolls" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Special Rolls</h2>
				</header>
			</section>
		</main>
	);
};

export default page;
