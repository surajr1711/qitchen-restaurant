import Typography from "@/components/Typography/Typography";
import Image from "next/image";

const Home = () => {
	return (
		<main className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 xl:h-screen 2xl:grid-cols-4">
			{/* Hero */}
			<section
				id="hero"
				className="bg-neutral-600 min-h-80 grid place-items-center md:col-span-3 xl:col-span-2 xl:row-span-3 2xl:col-span-3"
			>
				<header>
					<Typography>Sushi sensation</Typography>
					{/* <h1>Sushi sensation</h1> */}
				</header>
			</section>

			{/* Menu card */}
			<section id="menu" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>Menu</h2>
				</header>
			</section>

			{/* Reservation card */}
			<section id="reservation" className="bg-neutral-600 min-h-80 grid place-items-center">
				<header>
					<h2>Reservation</h2>
				</header>
			</section>

			{/* About restaurant card */}
			<section id="about" className="bg-neutral-800 min-h-80 grid place-items-center">
				<header>
					<h2>About</h2>
				</header>
			</section>

			{/* <Image
				src="/qitchen.svg"
				alt="Qitchen Logo"
				// className="dark:invert"
				width={100}
				height={24}
				priority
			/> */}
		</main>
	);
};

export default Home;
