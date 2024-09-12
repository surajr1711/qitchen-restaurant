import Typography from "@/components/Typography/Typography";
import { socialLinks } from "@/constants/links";
import { homepageCardLinks } from "@/constants/homePageConsts";
import { RoundCornerWrapper } from "@/components/RoundCornerWrapper";
import { IconButton } from "@/components/IconButton";
import { Icon } from "@/components/Icon";
import PageTransitionLink from "@/components/PageTransitionLink/PageTransitionLink";
import HomepageCard from "@/components/HomepageCard/HomepageCard";

const Home = () => {
	return (
		<>
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

				{/* Social Icons */}
				<RoundCornerWrapper>
					<div className="flex gap-2">
						{socialLinks.map((link, i) => (
							<IconButton key={i} as="a" href={link.href} target="_blank" size="medium">
								<Icon SVG={link.iconSVG} />
							</IconButton>
						))}
					</div>
				</RoundCornerWrapper>
			</section>

			{/* CARDS - Page links */}
			{homepageCardLinks.map((card, i) => {
				const { href, src, alt, label } = card;
				return (
					<PageTransitionLink key={i} href={href}>
						<HomepageCard
							src={src}
							alt={alt}
							label={label}
							priority={true}
							sizes="100vw, (min-width: 768px) 33vw, (min-width: 1280px) 33vw, (min-width: 1536px) 25vw"
						/>
					</PageTransitionLink>
				);
			})}
		</>
	);
};

export default Home;
