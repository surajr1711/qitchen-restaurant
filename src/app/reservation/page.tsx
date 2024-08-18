import React from "react";

const page = () => {
	return (
		<main>
			{/* Hero */}
			<section id="hero" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h1>Book a table</h1>
				</header>
			</section>

			{/* Reservation form */}
			<section id="reservation" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Reservation</h2>
				</header>
			</section>
		</main>
	);
};

export default page;
