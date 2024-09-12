import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import { galleryImages, heroImage, openingHours } from "@/constants/contactPageConsts";
import Typography from "@/components/Typography/Typography";
import Diamond from "@/components/Diamond/Diamond";
import { socialLinks } from "@/constants/links";
import { IconButton } from "@/components/IconButton";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import { CardPageLink } from "@/components/CardPageLink";
import googleMap from "../../../public/images/contact/google-map-bw.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact - Gourmet Japanese Cuisine in London",
	description:
		"Get in touch with Qitchen, your destination for gourmet Japanese cuisine in London. Open Mon-Sun 16:00-22:30. Visit us at 23 Greenfield Avenue! Call +42 1234 567890.",
};

const page = () => {
	return (
		<>
			{/* <main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1"> */}
			{/* Hero */}
			<HeroSection {...heroImage} title="Contact" />

			{/* Content */}
			<section className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
				{/* opening hours */}
				<section id="hours" className="rounded-2xl p-8 border border-neutral-light flex flex-col justify-between">
					<header className="pb-12 flex gap-4 justify-center">
						<Diamond />
						<Typography tag="h2" variant="heading4" className="text-center">
							Opening hours
						</Typography>
						<Diamond lineSide="right" />
					</header>

					<div className="flex flex-col gap-2">
						{openingHours.map((item, i) => (
							<div key={i} className="flex gap-2 items-baseline">
								<Typography tag="p" variant="body2" className="flex-none">
									{item.day}
								</Typography>
								<div className="h-px border border-dotted border-neutral-light flex-grow" />
								<Typography tag="p" variant="body2" className="flex-none">{`${item.open} - ${item.close}`}</Typography>
							</div>
						))}
					</div>
				</section>

				{/* images */}
				<section id="images" className="rounded-2xl grid grid-cols-2 grid-rows-2 gap-4">
					{galleryImages.map((img, i) => (
						<div key={i} className="relative min-h-40 max-h-80 h-full">
							<Image src={img.src} alt={img.alt} fill={true} className="rounded-2xl object-cover" />
						</div>
					))}
				</section>

				{/* map */}
				<div>
					<CardPageLink href="#" src={googleMap} alt="dummy location" label="Show route" />
				</div>

				{/* contact info */}
				<section id="contactinfo" className="rounded-2xl p-8 border border-neutral-light flex flex-col justify-between">
					<header className="pb-12 flex gap-4 justify-center">
						<Diamond />
						<Typography tag="h2" variant="heading4" className="text-center">
							Get in touch
						</Typography>
						<Diamond lineSide="right" />
					</header>

					<div className="flex flex-col gap-4">
						<div className="flex justify-between">
							<Typography variant="label2">Address</Typography>
							<Typography variant="body2" className="text-right">
								23 Greenfield Avenue <br /> Prague 120 00
							</Typography>
						</div>
						<div className="flex justify-between">
							<Typography variant="label2">Phone</Typography>
							<Typography variant="body2" className="text-right">
								+42 1234 567890
							</Typography>
						</div>
						<div className="flex justify-between">
							<Typography variant="label2">Email</Typography>
							<Typography variant="body2" className="text-right">
								hello@qitchen.com
							</Typography>
						</div>
						<div className="flex justify-between">
							<Typography variant="label2">Follow</Typography>
							<div className="flex gap-2 justify-end">
								{socialLinks.map((social, i) => (
									<IconButton key={i} as="a" href={social.href}>
										<Icon SVG={social.iconSVG} />
									</IconButton>
								))}
							</div>
						</div>
					</div>
				</section>
			</section>
			{/* </main> */}
		</>
	);
};

export default page;
