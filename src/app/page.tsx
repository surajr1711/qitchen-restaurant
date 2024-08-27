import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import { homepageCardLinks } from "@/constants/Links";
import ButtonWithIcon from "@/components/ButtonWithIcon/ButtonWithIcon";
import { CardPageLink } from "@/components/CardPageLink";

const Home = () => {
	return (
		<main className="grid gap-4 md:grid-cols-3 md:grid-rows-[2fr_1fr] xl:grid-cols-3 xl:grid-rows-3 2xl:grid-cols-4">
			{/* HERO */}
			<section
				id="hero"
				className="relative overflow-hidden bg-neutral-600 rounded-2xl h-[600px] md:col-span-3 md:h-full xl:col-span-2 xl:row-span-3 2xl:col-span-3"
			>
				<video autoPlay loop muted className="absolute -z-0 h-full w-full object-cover">
					<source src="/videos/Gourmet-Poke-Bowl-Salmon-Rice-Vegetables.webm" type="video/webm" />
					Your browser does not support the video tag.
				</video>

				<header className="absolute bottom-8 inset-x-0 text-center xl:text-left xl:left-12">
					<Typography tag="h1" variant="banner1" className="uppercase">
						<span className="block">Sushi</span>
						<span className="block">Sensation</span>
					</Typography>
				</header>
			</section>

			{/* CARDS */}
			{homepageCardLinks.map((card, i) => (
				<CardPageLink key={i} href={card.href} src={card.src} alt={card.alt} label={card.label} />
			))}
		</main>
	);
};

export default Home;
