import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Typography from "../Typography/Typography";
import React from "react";

interface HeroSectionProps extends React.ComponentPropsWithoutRef<"section"> {
	/** src for the hero image */
	src: StaticImport | string;
	/** alt description for the hero image */
	alt: string;
	/** title for the hero */
	title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ src, alt, title, ...props }) => {
	return (
		<section id="hero" className="p-8 w-full relative h-[600px] xl:h-full" {...props}>
			<Image src={src} alt={alt} className="absolute top-0 left-0 -z-0 h-full w-full object-cover rounded-2xl" />
			<header className="absolute bottom-8 inset-x-0 text-center xl:text-left xl:left-12">
				<Typography tag="h1" variant="banner1" className="uppercase">
					{title}
				</Typography>
			</header>
		</section>
	);
};

export default HeroSection;
